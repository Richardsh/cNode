function user(state={
  data:{
    avatar_url:"",
    create_at:"",
    loginname:"",
    score:"",
    recent_topics:[],
    recent_replies:[]
  },
  loading: true
},action){
  switch (action.type) {
    case "USER_UPDATA":
      return {
        loading: true,
        data: state.data
      }
    case "USER_UPDATA_SUCC":
      return {
        loading: false,
        data: action.data.data
      }
    case "USER_UPDATA_ERROR":
      return {
        data:{
          avatar_url:"",
          create_at:"",
          loginname:"",
          score:"",
          recent_topics:[],
          recent_replies:[]
        },
        loading: false
      }
    default:
      return state;
  }
}
export default user;