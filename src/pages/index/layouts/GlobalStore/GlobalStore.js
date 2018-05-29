import React from 'react';
import PropTypes from 'prop-types';

export default class GlobalStore extends React.PureComponent {
  static propTypes = {
    globalStore: PropTypes.object,
    children: PropTypes.element.isRequired
  }

  render() {
    return this.props.children;
  }
}
