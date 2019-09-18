import React from 'react';
import axios from 'axios';

class LikeBar extends React.PureComponent {

    axiosCall = (e) => {
        e.preventDefault();
        axios.post(`jobs/like/${this.props.upvote_count.user_id}/${this.props._id}`)
    }

    render() {
        if (this.props.upvote_count.includes(this.props.upvote_count.user_id)) {
            return (
                <div style={{ width: "50px", margin: "0 auto", marginTop: "-26px", display: "flex" }}>
                    <div style={{ color: "red" }}>
                        <p>&#9829;</p>
                    </div>
                    <div style={{ marginLeft: "10px", color: "white" }}>
                        <strong>{this.props.upvote_count.count}</strong>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div style={{ width: "50px", margin: "0 auto", marginTop: "-26px", display: "flex" }}>
                    <div style={{ color: "white" }}>
                        <button onClick={() => this.axiosCall()}><p>&#9829;</p></button>
                    </div>
                    <div style={{ marginLeft: "10px", color: "white" }}>
                        <strong>{this.props.upvote_count.count}</strong>
                    </div>
                </div>
            )
        }
    }

}

export default LikeBar;