import React from 'react';
import { shouldComponentUpdate } from 'lib/decorators';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './TopNavBar.less';

const Fragment = React.Fragment;

@shouldComponentUpdate
export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  static propTypes = {
  };

  static defaultProps = {

  };

  onOpenChange = () => {
   this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  renderSideBar = () => {
    return (<List style={{ marginBottom: '1rem' }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
        if (index === 0) {
          return (<List.Item
            key={index} thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png" multipleLine
          >Category</List.Item>);
        }
        return (<List.Item
          key={index} thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);
  }

  render() {
    return (
      <Fragment>
        <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange} className='top-navbar'>
          <img
            src={'//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp'}
            alt={'天猫Tmall'} style={{ height: '0.4rem' }}
          />
        </NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          // enableDragHandle
          sidebar={this.renderSideBar()}
          open={this.state.drawerOpen}
          onOpenChange={this.onOpenChange}
        >{''}
        </Drawer>
      </Fragment>
    );
  }
}
