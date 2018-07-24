import React from 'react';
import './HomeView.less';
import TopNavBar from './TopNavBar';

export default class HomeView extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return [
      <TopNavBar key={'TopNavBar'} />,
    ];
  }
};
