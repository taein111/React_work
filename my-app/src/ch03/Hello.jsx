import React from "react";
class Hello extends React.Component{
  //props의 필드 thWhat을 index.js의 

  /*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat="World"/>); 에서 지정한다.*/ 
  render(){
    return React.createElement('div', null, `Hello${this.props.toWhat}`);
  }
}

// //jsx
// const element = (
//   <h1 className = "greeting">
//     Hello,world!
//   </h1>
// )

// //javascript
// const element1 = React.createElement(
//   'h1',
//   {className:'greeting'},
//   'Hello, world'
// )

// //props

// const element2 ={
//   type : 'h1',
//   props :{
//     className : 'greeting',
//     children : 'Hello, world!'
//   }
// }


export default Hello
