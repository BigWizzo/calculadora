import React from 'react';
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
    this.setState((prevState) => calculate(prevState, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    console.log(`${total} total`);
    console.log(`${next} next`);
    console.log(`${operation} operation`);

    let result = '0';

    if (next) {
      result = `${total}${operation}${next}`;
    } else if ((operation && operation !== '=') && total) {
      result = `${total}${operation}`;
    } else if ((total && !next) || (operation === '=')) {
      result = total || '0';
    }

    return (
      <div id="app" className="app">
        <Display result={result} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
