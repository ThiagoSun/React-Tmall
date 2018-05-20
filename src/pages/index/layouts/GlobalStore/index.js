import { connect } from 'react-redux'

import GlobalStore from './GlobalStore'

const mapDispatchToProps = {
}

const mapStateToProps = state => ({
  globalStore: state.globalStore
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalStore)
