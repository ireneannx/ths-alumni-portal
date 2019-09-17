import React from 'react';

const LikeBar = (props) => {
    if (props.upvote_count.includes(props.upvote_count.user_id)) {
        return (
            <div style={{ width: "50px", margin: "0 auto", marginTop: "-26px", display: "flex" }}>
                <div style={{ color: "red" }}>
                    <p>&#9829;</p>
                </div>
                <div style={{ marginLeft: "10px", color: "white" }}>
                    <strong>{Math.round(Math.random() * 10)}</strong>
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={{ width: "50px", margin: "0 auto", marginTop: "-26px", display: "flex" }}>
                <div style={{ color: "red" }}>
                    <p>&#9829;</p>
                </div>
                <div style={{ marginLeft: "10px", color: "white" }}>
                    <strong>{Math.round(Math.random() * 10)}</strong>
                </div>
            </div>
        )
    }


}

export default LikeBar;