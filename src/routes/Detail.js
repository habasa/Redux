import React from 'react';
import { connect } from 'react-redux';

const Detail = ({toDos}) => {
    return (
        <div>
        <h1>Detail</h1>
        <h1>{toDos?.text}</h1>
        <h5>create at: {toDos?.id}</h5>
        </div>
    );
};

function mapStateToProps(state, ownProps) {
    const {match:{params:{id}}} = ownProps 
    return {toDos:state.find(toDo => toDo.id === parseInt(id))}
}

export default connect(mapStateToProps)(Detail);



// const Detail = () => {
//     const id = useParams()
//     return (
//         <h1>Detail</h1>
//     );
// };

// function mapStateToProps(state) {
//     return {toDos:state}
// }

// export default Detail;

// //home쪽
// const ToDo = ({ text, onBtnClick, id }) => {
//     return (
//         <li>
//             <Link to={`/${id}`}>
//                 {text} <button onClick={onBtnClick}>DEL</button>
//             </Link>
//         </li>
//     );
// };
// 이런식으로 가능