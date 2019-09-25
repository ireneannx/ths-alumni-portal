import React, { Component } from 'react';
import {Avatar, TextField} from '../styled-components';

export class TextArea extends Component {
    render() {
        return (
            <div style={{width:"80%", margin:"0 auto"}}>
                <Avatar/>
                <TextField/>
            </div>
        )
    }
}

export default TextArea
