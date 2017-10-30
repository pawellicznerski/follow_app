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
  renderAddingTime(timeNo){
    if (timeNo < 60000) {
      return `${Math.round(timeNo/1000)}sec`
    } else if(timeNo < 3600000) {
      return `${Math.round(timeNo/60000)}min`
    } else if(timeNo < 86400000) {
      return `${Math.round(timeNo/3600000)}h`
    } else {
      return `${Math.round(timeNo/86400000)}d`
    }
  }
  render() {
    const timeNo = this.props.timeValue - this.props.date;
    return (
      <article
        className="single-comment" onMouseOver={this.showBtn.bind(this)} onMouseOut={this.hideBtn.bind(this)}>
        <div className="single-comment__icon"></div>
        <div className="single-comment__content">
          <h2 className="single-comment__content__name">{this.props.user}</h2>
          <span className="single-comment__content__date">{this.renderAddingTime(timeNo)}</span>
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
