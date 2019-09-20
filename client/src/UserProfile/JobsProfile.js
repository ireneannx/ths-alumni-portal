import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router,NavLink, Route, Switch } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Posts from "../Feeds/components/feed-area";
import '../App.css'

class JobsProfile extends React.PureComponent{
    
    render(){
        console.log("posts profile",this.props)
        return(
            <div>
                <h1>Jobs Coming Up Soon</h1>
            </div>
        )
    }
}

export default JobsProfile;