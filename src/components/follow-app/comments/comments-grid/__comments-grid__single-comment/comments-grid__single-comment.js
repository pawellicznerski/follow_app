import React, { Component } from 'react';

class SingleComment extends Component {
  constructor(){
    super();
    this.state={
      addingTimeValue:'',
      addingTimeUnits:'',
      isVisibleList:false
    }
  }
  showList(e){
    // e.stopImmediatePropagation();
    this.setState({
      isVisibleList:true,
    })
  }
  hideList(e){
    // e.stopImmediatePropagation();
    this.setState({
      isVisibleList:false,
    })
  }
  removing(e){
    e.stopPropagation();
    e.preventDefault();
    this.props.removeComment('BAcJeJrQca9',this.props.commentId);
  }
  preventDefault(e){
    // e.stopPropagation();
    // e.preventDefault();
  }
  renderAddingTime(timeNo){
    if (timeNo < 59000) {
      return `${Math.round(timeNo/1000)}sec`
    } else if(timeNo < 3540000) {
      return `${Math.round(timeNo/60000)}min`
    } else if(timeNo < 82800000) {
      return `${Math.round(timeNo/3600000)}h`
    } else{
      return `${Math.round(timeNo/86400000)}d`
    }
  }
  render() {
    const timeNo = this.props.timeValue - this.props.date;
    return (
      <article
        className="single-comment">
        <div className="single-comment__icon"></div>
        <div className="single-comment__content">
          <h2 className="single-comment__content__name">{this.props.user}</h2>
          <span className="single-comment__content__date">{this.renderAddingTime(timeNo)}</span>
          <p className={`single-comment__content__text ${this.props.commentsLength-1===this.props.commentId?"single-comment__content__text_last":""}`}>
            {this.props.text}
          </p>
          <div
            className="single-comment__content__menu"
            >
            <div
              className="single-comment__content__menu__wrapper"
              onMouseOver={this.showList.bind(this)}
              onMouseLeave={this.hideList.bind(this)}
              >

              <ul className={this.state.isVisibleList?"single-comment__content__menu__wrapper__list_visible":"single-comment__content__menu__wrapper__list"}>

                <li
                  className={this.state.isVisibleList?"single-comment__content__menu__wrapper__list_visible__el":"single-comment__content__menu__wrapper__list_visible__el_hidden"}>edit
                </li>
                <li
                  className={this.state.isVisibleList?"single-comment__content__menu__wrapper__list_visible__el":"single-comment__content__menu__wrapper__list_visible__el_hidden"}
                  onClick={this.removing.bind(this)} >remove
                </li>

              </ul>

            </div>
          </div>

        </div>
      </article>
    );
  }
}
export default SingleComment;
