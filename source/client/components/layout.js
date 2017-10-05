import React, { Component } from 'react';
import './layout.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
            this.increment.bind(this),
            1000,
        );
  }

  increment() {
    this.setState(({ counter }) => ({ counter: counter - 5 }));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>Webpack is doing its thing with React and ES2015</div>
        <div>{counter}</div>
      </header>
    );
  }
}
