import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import logo from '../../../../media/logo.svg';
import { Button } from 'antd-mobile';
import './PageLayout.less'

export const PageLayout = ({ children }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <Button type="primary">Button</Button>
    <a href={'https://www.tmall.com'}>天猫</a>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    <div>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
