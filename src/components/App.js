import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operation) {
    const stateResult = Calculate(this.state, operation);
    this.setState(stateResult);
  }

  render() {
    const { total, next, operation } = this.state;
    let display = '0';
    if (next) {
      display = `${total}${operation}${next}`;
      console.log(display);
    } else if ((operation && operation !== '=') && total) {
      display = `${total}${operation}`;
    } else {
      display = total || '0';
    }

    return (
      <>
        <div>
          <h1>Calculadora: Milestone 5 - Stateful</h1>
          <Display result={display} />
          <ButtonPanel onClick={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
