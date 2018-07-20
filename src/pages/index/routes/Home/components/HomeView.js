import React from 'react';
import './HomeView.less';
import TopNavBar from './TopNavBar';
import { Button } from 'antd-mobile';

export default class HomeView extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      a: { a: '22', b: { c: '242' } },
      b: 'fsdf',
      c: 'ffsfxx'
    }
  }

  handleBtn1Click = () => {
    this.setState({
      a: { a: '22', b: { c: { d: 'fxx' } } }
    })
  }

  handleBtn2Click = () => {
    this.setState({
      b: 'xxxx'
    })
  }

  handleBtn3Click = () => {
    this.setState({
      c: 'vvvv'
    })
  }

  render() {
    return [
      <TopNavBar key={'TopNavBar'} a={this.state.a} b={this.state.b} />,
      <Button key={'btn-1'} type='primary' onClick={this.handleBtn1Click}>change a</Button>,
      <Button key={'btn-2'} type='primary' onClick={this.handleBtn2Click}>change b</Button>,
      <Button key={'btn-3'} onClick={this.handleBtn3Click}>change c</Button>
    ];
  }
};
