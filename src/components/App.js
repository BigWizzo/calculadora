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
    const calcResult = Calculate(this.state, operation);
    this.setState(calcResult);
  }

  render() {
    const { total, next, operation } = this.state;
    let result = '0';
    if (next) {
      result = `${total}${operation}${next}`;
    } else if ((operation && operation !== '=') && total) {
      result = `${total}${operation}`;
    } else {
      result = total || '0';
    }

    return (
      <>
        <div>
          <Display result={result} />
          <ButtonPanel onClick={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
