import React from 'react';
import './HomeView.less';
import TopNavBar from './TopNavBar';

const HomeView = () => {
  return [
    <TopNavBar key={'TopNavBar'}></TopNavBar>,
    <span key={'test-span'}></span>
  ];
};

export default HomeView;
