import React, {Component} from "react";
import {Avatar,Row,Col} from "antd";
//import data from "./data";
import {connect} from "react-redux";
import UserList from "./userList";
import axios from "axios";
class User extends Component {
  constructor(arg) {
    super(arg);
    let id = this.props.match.params.id;
    this.getData(id)
  }
  shouldComponentUpdate(nextProps){
    let id = this.props.match.params.id;
    let nextId = nextProps.match.params.id
    if(id !== nextId) {
      this.getData(nextId)
      return false;
    }
    return true;
  }
  getData(id) {
    this.props.dispatch((dispatch)=>{
      dispatch({
        type:"USER_UPDATA"
      })
      axios.get(`https://cnodejs.org/api/v1/user/${id}`)
        .then((res) => {
          dispatch({
            type:"USER_UPDATA_SUCC",
            data: res.data
          })
        })
        .catch((err)=>{
          dispatch({
            type:"USER_UPDATA_ERROR"
          })
        })
    })
  }
  render(){
    let {loading,data} = this.props;
    return (<div className="wrap">
      <Avatar src={data.avatar_url} className="userAvatar" />
      <Row>
        <Col md={8} className="userInfo">
          用户名：<a>{data.loginname}</a>
        </Col>
        <Col md={8} className="userInfo">
          积分：<a>{data.score}</a>
        </Col>
        <Col md={8} className="userInfo">
          注册时间：<a>{data.create_at}</a>
        </Col>
      </Row>
      <UserList 
        loading = {loading}
        title = "最近创建的话题"
        data = {data.recent_topics}
      />
      <UserList 
        loading = {loading}
        title = "最近回复的话题"
        data = {data.recent_replies}
      />
    </div>)
  }
}

export default connect(state=>(state.user))(User);