import React from 'react';
import Navbar from './navbar';
import NewTextEditor from './newTextEditor';
import NewFeedCard from './newFeedCard';

class FeedArea extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#F7F9F9' }}>
                <div className="row">
                    <div className="col" >
                    </div>

                    <div className="col-5">
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