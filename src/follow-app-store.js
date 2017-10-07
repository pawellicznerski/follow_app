import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions/action-creators';
import FollowApp from './components/follow-app/follow-app';

function mapStateToProps(state){
  return{
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const FollowAppStore = connect(mapStateToProps,mapDispatchToProps)(FollowApp);

export default FollowAppStore;
