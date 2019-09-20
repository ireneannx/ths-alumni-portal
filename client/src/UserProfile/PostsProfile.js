import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router,NavLink, Route, Switch } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Posts from "../Feeds/components/feed-area";
import '../App.css'

class PostsProfile extends React.PureComponent{
    render(){
        console.log("posts profile",this.props)
        console.log(this.props.userId)
        return(
            <div>
                <h1>Posts Coming Up Soon</h1>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      data: state.Feed.feeds,
      authdata: state.Auth. authData
    };
  };
  
  export default connect(
    mapStateToProps,
    null
  )(PostsProfile);
  