import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = (buttonName) => {
      const result = calculate(this.state, buttonName);
      this.setState(result);
    };
  }

  render() {
    const { next } = this.state;
    return (
      <div className="App">
        <h1>Milestone 5: Stateful</h1>
        <Display displayValue={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
