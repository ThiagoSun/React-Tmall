import React, { Component } from 'react';
import logo from '../../media/logo.svg';
import { Button } from 'antd-mobile';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button type="primary">Button</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href={'www.baidu.com'}>百度搜索</a>
      </div>
    );
  }
}

export default App;
