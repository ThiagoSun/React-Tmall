import React from 'react';
import PropTypes from 'prop-types';
import './PageLayout.less';
import GlobalStore from '../GlobalStore';

export const PageLayout = ({ children }) => (
  <div className='App'>
    <GlobalStore>
      {children}
    </GlobalStore>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
