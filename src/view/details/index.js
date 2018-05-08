import React, {Component} from "react";
import {connect} from "react-redux";
//import data from "./data";
import TxtDetails from "./txtDetails";
import ReplyList from "./replyList";
import axios from "axios";
class Details extends Component {
  constructor(arg) {
    super(arg);
    let id = this.props.match.params.id;
    console.log(this.props.match)
    this.getData(id);
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(nextProps)
  //   if(this.props.tab !== nextProps.tab){
  //     this.getData(nextProps.tab)
  //     return false;
  //   }
  //   return true;
  // }
  getData(id) {
    this.props.dispatch((dispatch)=>{
      dispatch({
        type:"DETAILS_UPDATA"
      })
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
        .then((res) => {
          dispatch({
            type:"DETAILS_UPDATA_SUCC",
            data: res.data
          })
        })
        .catch((err)=>{
          dispatch({
            type:"DETAILS_UPDATA_ERROR"
          })
        })
    })
  }
  render(){
    let {loading,data} = this.props;
    return (<div className="wrap">
      <TxtDetails
        loading = {loading}
        data = {data}
      />
      <ReplyList
        loading = {false}
        replies={data.replies}
        replyCount={data.reply_count}
      />
    </div>)
  }
}

export default connect(state=>state.details)(Details);