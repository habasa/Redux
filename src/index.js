import { createStore } from "redux"

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

number.innerText = 0

const reducer = (state = 0, action) => {
    console.log(state, action);
    if(action.type === 'add') {
        return state + 1;
    } else if(action.type === 'minus') {
        return state - 1;
    } else {
        return state;
    }
}
const store = createStore(reducer)

const onChange = () => {
    number.innerText = store.getState()
}

store.subscribe(onChange)

add.addEventListener('click', () => store.dispatch({type: 'add'}))
minus.addEventListener('click', () => store.dispatch({type: 'minus'}))
