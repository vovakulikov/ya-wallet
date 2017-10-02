
import React from 'react';
import Layout from './components/layout';
import User from './components/user';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello World react people</h1>
        <Layout />
        <User name="Vova" />
      </div>
    );
  }

}
