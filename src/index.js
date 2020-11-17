import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Components/Game';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);



// class Square extends React.Component {

//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => {
//                     this.props.onClick()
//                 }}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// const Square = (props) => {
//     let a = 'hello';
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }

//sols notes:
// someFunction(initialValue){
//     let value = initialValue;
//     return [value, function(newValue){
//         value = newValue;
//     }];
// }

// const [value, updateValue] = someFunction(1);

// updateValue(2);

// const [squares, updateSquares] = useState(Array(9).fill(null));

// handleClick = ({target}) => {
//     const squares = [...squares];
//     squares[target.value] = 'x';
//     updateSquares(squares);
// }
