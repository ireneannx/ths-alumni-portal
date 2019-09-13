import React from 'react';
import Navbar from './navbar';
import NewTextEditor from './newTextEditor';
import NewFeedCard from './newFeedCard';

class FeedArea extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col" style={{ backgroundColor: '#F7F9F9' }}>
                        will be used later on
                </div>
                    <div className="col-5" style={{ backgroundColor: '#F7F9F9' }}>
                        <NewTextEditor />
                        <NewFeedCard />
                    </div>
                    <div className="col" style={{ backgroundColor: '#F7F9F9' }}>
                        will be used later on
                    </div>
                </div>

            </div>
        )
    }
}

export default FeedArea;