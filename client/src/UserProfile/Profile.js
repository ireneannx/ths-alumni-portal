import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Profile extends React.Component {
  state = {
    user: []
  };
  async componentDidMount() {
    await this.getUsers();
  }
  getUsers = async () => {
    const res = await axios.get(`/users/${this.props.match.params.id}`);
    await this.setState({
      user: res.data
    });
    
    // console.log("******* user profile dara",this.state.user)
  };
  render() {
    console.log('coming from redux store', this.props);
    // const data = this.state.users;
    //  const feeduser = this.props.feeds.filter()
    // const user = data.filter(data => data._id == this.props.feeds);
    console.log("user", this.state.user);
    // const display = user[0];
    //display = JSON.parse(display)
    // if (this.state.users.length == 0) {
    //   return null;
    // }
    // console.log("display", display._id);

    return (
      <div>
        <h1>This is the  user profile</h1>
        <h2>{this.state.user.current_company}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data : state.Feed.feeds
  }
}

export default connect(mapStateToProps, null)(Profile) ;
