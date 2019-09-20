import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFeedPosts } from '../action'
import { isThisQuarter } from 'date-fns';
import {withRouter} from 'react-router'
import { format } from 'timeago.js'
import axios from 'axios';
class NewFeedCard extends React.PureComponent {
    // state={
    //     users:[],
    // }
    componentDidMount() {
        this.props.getFeedPosts()
        // axios.get(`/user/`)
        // .then(res =>{
        //     this.setState({
        //         users: res.data
        //     })
        // })
        // console.log(this.state.users) 
    }

    handleClick=(posts)=>{
        // console.log('author is ',this.props)
        this.props.history.push(`/profile/${posts.author}`)
    }

    render() {
        // console.log('data from editor', props.data)
        // console.log('from show card', this.state.users)
        
        if (this.props.data) {
            return (
                <div>
                    {this.props.data.reverse().map((posts) => 
                        // const user = this.state.users.filter((data)=> data.id == posts.author)
                        
                        (
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
                                                <div className="h5 m-0" onClick={()=>this.handleClick(posts)}>{posts.author}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="text-muted h7 mb-2"> <i class="fa fa-clock"><p> </p></i>{format(posts.createdAt)}</div>

                                    <div key={posts._id}>
                                        {posts.content}
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <a href='#'className="card-link"><i class="fa fa-thumbs-up"></i> Like</a>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewFeedCard));
