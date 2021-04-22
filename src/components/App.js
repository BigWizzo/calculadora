import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
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
    return (
      <div className="App">
        <h1>Milestone 5: Stateful</h1>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
