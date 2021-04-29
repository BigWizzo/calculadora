import React from 'react';
import Navbar from './Navbar';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calcResult = calculate(this.state, buttonName);
    this.setState(calcResult);
  }

  render() {
    const { total, next, operation } = this.state;
    let result = '0';
    if (next) {
      result = `${total}${operation}${next}`;
    } else if ((operation && operation !== '=') && total) {
      result = `${total}${operation}`;
    } else if ((total && !next) || (operation === '=')) {
      result = total;
    }

    return (
      <>
        <Navbar />
        <div className="content flex">
          <div className="some-math">Let us Do Some Math</div>
          <div className="app">
            <Display result={result} />
            <ButtonPanel onClick={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
