import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { frontendLike } from './JobAction'
import { bindActionCreators } from 'redux';


class LikeBar extends React.PureComponent {

    axiosCall = async () => {

        const data = await axios.post(`/jobs/like/${this.props.userData.authData._id || this.props.userData.authData.user._id}/${this.props.upvote_count._id}`)

        this.props.frontendLike(this.props.upvote_count._id, this.props.userData.authData._id || this.props.userData.authData.user._id)
    }

    checkForId = () => {

        for (let i = 0; i < this.props.upvote_count.upvote_count.length; i++) {
            if (this.props.upvote_count.upvote_count[i] === this.props.userData.authData._id || this.props.userData.authData.user._id) {
                return true
            }
        }
    }
    render() {
        if (this.checkForId()) {
            return (
                <div style={{ width: "50px", margin: "0 auto", marginTop: "-26px", display: "flex" }}>
                    <div style={{ color: "red" }}>
                        <p>&#9829;</p>
                    </div>
                    <div style={{ marginLeft: "10px", color: "white" }}>
                        <strong>{this.props.upvote_count.upvote_count.length}</strong>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div style={{ width: "50px", margin: "0 auto", marginTop: "-26px", display: "flex" }}>
                    <div style={{ color: "white", display: "flex" }}>
                        <button style={{ background: "none", border: "none", color: "white", outline: "none" }} onClick={this.axiosCall}><p>&#9829;</p></button>
                        <p style={{ marginLeft: "7px" }}>{this.props.upvote_count.upvote_count.length}</p>
                    </div>
                </div>
            )
        }
    }

}

const mapStateToProps = state => ({
    userData: state.Auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
    frontendLike
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LikeBar);