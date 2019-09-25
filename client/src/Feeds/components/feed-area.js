import React from 'react';
import NewTextEditor from './newTextEditor';
import NewFeedCard from './newFeedCard';

class FeedArea extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#F7F9F9' }}>
                <div className="container">
                   

                    <div>
                        <NewTextEditor />
                        <NewFeedCard />
                    </div>

                </div>

            </div>
        )
    }
}

export default FeedArea;