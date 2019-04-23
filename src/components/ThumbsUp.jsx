import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // change code below this line

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  // change code above this line
  render() {
    var voting = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '30vw'
    };
    return (

      <div style={voting}>
        <button onClick={(e) => this.increment(e)}>Like!</button>
        <button onClick={(e) => this.decrement(e)}>Dislike!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default Counter;









// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//
// class Up extends Component {
//   render() {
//     return (
//       <div>
//         <Counter />
//       </div>
//     );
//   }
// }
//
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       thumbsUp: 0
//     };
//
//   }
//   handleClick() {
//     this.setState((prevState, { count }) => ({
//       count: prevState.count + 1
//     }));
//   };
//   render() {
//     return <button onClick={this.handleClick}>{this.state.count}</button>;
//   }
// }
//
// Counter.propTypes = {
//   thumbsUp: PropTypes.number
// }
//
// export default Up;
