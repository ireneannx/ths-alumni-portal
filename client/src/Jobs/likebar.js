import React from 'react';
import axios from 'axios';

const LikeBar = (props) => {
    axiosCall = (e) => {
        e.preventDefault();
        axios.post(`jobs/like/${props.upvote_count.user_id}/${props._id}`)
    }
    if (props.upvote_count.includes(props.upvote_count.user_id)) {
        return (
            <div style={{ width: "50px", margin: "0 auto", marginTop: "-26px", display: "flex" }}>
                <div style={{ color: "red" }}>
                    <p>&#9829;</p>
                </div>
                <div style={{ marginLeft: "10px", color: "white" }}>
                    <strong>{props.upvote_count.count}</strong>
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={{ width: "50px", margin: "0 auto", marginTop: "-26px", display: "flex" }}>
                <div style={{ color: "white" }}>
                  <button onClick={()=>axiosCall}><p>&#9829;</p></button>
                </div>
                <div style={{ marginLeft: "10px", color: "white" }}>
                    <strong>{props.upvote_count.count}</strong>
                </div>
            </div>
        )
    }


}

export default LikeBar;