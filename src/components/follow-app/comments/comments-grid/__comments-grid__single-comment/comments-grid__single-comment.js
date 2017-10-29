import React, { Component } from 'react';

class SingleComment extends Component {
  constructor(){
    super();
    this.state={
      showbtn:false,
      addingTimeValue:'',
      addingTimeUnits:''
    }
  }
  showBtn(){
    this.setState({
      showbtn:true,
    })
  }
  hideBtn(){
    this.setState({
      showbtn:false,
    })
  }
  removing(){
    this.props.removeComment('BAcJeJrQca9',this.props.commentId);
  }

  renderAddingTime(){
    const timeValue = this.props.date - this.props.timeValue;
    if (timeValue < 60000) {
      const timeValueSec = Math.round(timeValue/1000);
      this.setState({
        addingTimeValue:'timeValueSec',
        addingTimeUnits:'s'
      })
    } else if(timeValue < 3600000) {
      const timeValueMin = Math.round(timeValue/60000);
      this.setState({
        addingTimeValue:'timeValueMin',
        addingTimeUnits:'min'
      })
    } else if(timeValue < 86400000) {
      const timeValueH = Math.round(timeValue/3600000);
      this.setState({
        addingTimeValue:'timeValueH',
        addingTimeUnits:'h'
      })
    } else {
      const timeValueDay = Math.round(timeValue/86400000);
      this.setState({
        addingTimeValue:'timeValueDay',
        addingTimeUnits:'h'
      })
    }
    const finalString = `${this.state.timeValueDay+this.state.addingTimeUnits}`;
    console.log(finalString);
    return {finalString};

  }

  render() {
    return (
      <article
        className="single-comment" onMouseOver={this.showBtn.bind(this)} onMouseOut={this.hideBtn.bind(this)}>
        <div className="single-comment__icon"></div>
        <div className="single-comment__content">
          <h2 className="single-comment__content__name">{this.props.user}</h2>
          <span className="single-comment__content__date">{this.renderAddingTime}</span>
          <p className={`single-comment__content__text ${this.props.commentsLength-1===this.props.commentId?"single-comment__content__text_last":""}`}>
            {this.props.text}
            <button className={this.state.showbtn?"single-comment__content__btn":"single-comment__content__btn_hidden"} onClick={this.removing.bind(this)}>&times;</button>
          </p>
        </div>
      </article>
    );
  }
}
export default SingleComment;
