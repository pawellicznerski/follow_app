import React, { Component } from 'react';
import MainProfile from './main-profile/main-profile.js';
import Comments from './comments/comments.js';

class FollowApp extends Component {
  render() {
    return (
      <div className="primary-container">
        <div className="follow-app">
          <MainProfile {...this.props}/>
          <Comments {...this.props}/>
        </div>
        <TestComponent ></TestComponent>
      </div>
    );
  }
}

export default FollowApp;

class TestComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      text2:'',
    };
  }
  changeText(value){
    this.setState({
      text:value.target.value,
    })
  }

  render() {
    // console.log("TestComponent-loaded");
    const counter = this.state.text.length>0?<Counter count={this.state.text.length}/>:null;

    return (
      <div>
        <textArea
          value={this.props.text}
          onChange={this.changeText.bind(this)}
          >
        </textArea>
        {counter}
      </div>
    );
  }
}
class Counter extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
    };
  }
  propTypes:{
    count: React.PropTypes.number.isRequired,
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate',arguments);
    console.log(this.props.count);
    console.log(nextProps.count);
    // console.log(nextProps);
    // console.log(nextState);
    // if(nextState.text=="1")console.log("dupa");
  };
  shouldComponentUpdate(nextProps,nextState_ignore){
    console.log('shouldComponentUpdate',arguments);
    // console.log(this.props.count);
    // console.log(nextProps.count);
    if(this.props.count===nextProps.count){
      console.log("falseeeeeeeeeeee");
      return false;
    }
    return true;
    // return this.props.count!==nextProps.count;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate',arguments);
    // console.log(prevProps);
    // console.log(prevState);
    // if(prevState.text=="1")console.log("dupa");
  };
  componentWillMount(){
    console.log('componentDidUpdate',arguments);
  };
  componentDidMount() {
    console.log('componentDidMount',arguments);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount',arguments);
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps',arguments,nextProps);
    this.setState({
      text2:"dupa"+nextProps.count
    })
  }

  render() {
    // console.log("Counter-loaded");
    return (
      <div>
      <h1>{this.props.count}</h1>
      <h1>{this.state.text2}</h1>
      </div>
    );
  }
}
