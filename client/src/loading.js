import React from 'react';
import loading from './images/code-loader.gif';

const Loading = () => {
    return (
        <div style={{textAlign: 'center', justifyContent: 'center'}}>
            <img src={loading} alt="Loading..." style={{width: '200px', height: '200px', marginTop: '20%', objectFit: 'cover', borderRadius: '50%'}}/>
        </div>
    )
}

export default Loading