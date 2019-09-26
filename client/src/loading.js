import React from 'react';

const Loading = () => {
    return (
        <div style={{textAlign: 'center', justifyContent: 'center'}}>
            <img src="https://freefrontend.com/assets/img/css-loaders/code-loader.gif" alt="Loading..." style={{width: '200px', height: '200px', marginTop: '20%', objectFit: 'cover', borderRadius: '50%'}}/>
        </div>
    )
}

export default Loading