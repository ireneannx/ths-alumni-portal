import React from 'react';
import NewTextEditor from './newTextEditor';
import NewFeedCard from './newFeedCard';
import GithubCalender from '../../github-calender/calender'

class FeedArea extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#F7F9F9' }}>
                <div className="row">
                    <div className="col" >
                    </div>

                    <div className="col-5">
                        <GithubCalender/>
                        <NewTextEditor />
                        <NewFeedCard />
                    </div>

                    <div className="col" >
                    </div>
                </div>

            </div>
        )
    }
}

export default FeedArea;