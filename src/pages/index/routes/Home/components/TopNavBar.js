import React from 'react';
import { shouldComponentUpdate } from '../../../../../lib/decorators';
import PropTypes from 'prop-types';

@shouldComponentUpdate
export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    a: PropTypes.object,
    b: PropTypes.string
  };

  static defaultProps = {

  };

  render() {
    console.log('NavBar rendering..');
    return <div></div>;
  }
}
