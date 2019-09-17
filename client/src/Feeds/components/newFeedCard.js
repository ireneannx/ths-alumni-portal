import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFeedPosts } from '../action'

class NewFeedCard extends React.Component {

    componentDidMount() {
        this.props.getFeedPosts()
    }

    render() {
        // console.log('data from editor', props.data)
        console.log('from show card', this.props)

        if (this.props.data) {
            return (
                <div>
                    {this.props.data.reverse().map((posts) => (

                        <div style={{ margin: '10px -15px 10px -15px' }}>
                            {/* CARD */}
                            <div className="card gedf-card">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="mr-2">
                                                <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                                            </div>
                                            <div className="ml-2">
                                                <div className="h5 m-0">Lorem Ipsum</div>
                                                <div className="h7 text-muted">@loremIpsum</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>{Date.now - Date.now(posts.timeStamp)}</div>

                                    <div key={posts._id}>
                                        {posts.content}
                                    </div>

                                </div>
                                <div className="card-footer">
                                    {/* <a className="card-link"><i className="fa fa-gittip"></i> Like</a>
                                <a className="card-link"><i className="fa fa-comment"></i> Comment</a> */}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            );
        }

    }
}


const mapStateToProps = (state) => {
    return {
        data: state.Feed.feeds
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getFeedPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedCard);
