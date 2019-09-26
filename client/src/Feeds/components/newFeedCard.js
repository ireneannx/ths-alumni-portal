import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFeedPosts } from "../action";
import { withRouter } from "react-router";
import { format } from "timeago.js";
class NewFeedCard extends React.Component {
  componentDidMount() {
    this.props.getFeedPosts();
  }

  handleClick = posts => {
    // console.log('author is ',this.props)
    this.props.history.push(`/profile/${posts.author}`);
  };

  render() {
    // console.log('d   ata from editor', props.data)
    // console.log('from show card', this.props)

    if (this.props.data) {
      // console.log('for name of author',this.props.data)
      return (
        <div>
          {this.props.data.map((posts, index) => (
            <div key={index} >
              {/* CARD */}
            
              <div className="card gedf-card posts" > 
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mr-2">
                        <img
                          className="rounded-circle"
                          width="45"
                          src={posts.avatarURL}
                          alt=""
                        />
                      </div>
                      <div className="ml-2">
                        <div
                          className="h5 m-0 user"
                          onClick={() => this.handleClick(posts)}
                        >
                          {posts.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">

                  <div key={posts._id}>{posts.content}</div>
                </div>
                <div className="card-footer" style={{height:"50px"}}>
                  <div className="left">
                    <p className="card-link" style={{fontSize:"20px"}}>
                      <i className="fa fa-thumbs-up"></i> Like
                    </p>
                  </div>
                  <div className="text-muted h7 mb-2 right">
                    <i className="fa fa-clock" style={{ marginRight: "10px" }}></i>
                    {format(posts.createdAt)}
                  </div>
                </div>
              </div>
            <br/>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.Feed.feeds
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFeedPosts
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewFeedCard)
);
