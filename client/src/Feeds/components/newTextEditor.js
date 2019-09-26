import React from 'react'
import { EditorState, ContentState } from 'draft-js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeedPost, getFeedPosts } from '../action'
import axios from 'axios'
// import draftToHtml from "draftjs-to-html";
import '../../App.css'
// import { withRouter } from 'react-router'

import Editor from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import Axios from 'axios';
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const emojiPlugin = createEmojiPlugin();
const { EmojiSelect } = emojiPlugin;

class NewTextEditor extends React.Component {
    state = {
        editorState: EditorState.createEmpty(),
        userId: "",
        userName: "",
        avatarURL: ""
    }

   async  componentWillMount() {
      await  this.props.getFeedPosts();
      const res = await axios.get(`/users/img/${this.props.auth.user._id}`)
       await  this.setState({
            userId: this.props.auth.user._id,
            userName: this.props.auth.user.name,
            avatarURL: res.data
        })
    }

    onChange = (editorState) => this.setState({ editorState })

    onSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state.editorState.getCurrentContent().getPlainText());

        // let text = draftToHtml(this.state.editorState.getCurrentContent().getPlainText());
        let text = this.state.editorState.getCurrentContent().getPlainText();

        // console.log('authdata', this.props.auth.user._id);

        // if (this.props.auth.user) {
            var id = await this.state.userId
            var name = await this.state.userName
            var avatarURL = await this.state.avatarURL

            await this.props.addFeedPost(text, id, name, avatarURL);
            await this.props.getFeedPosts();

            const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
            this.setState({ editorState });
    };

    render() {

        return (
            <div style={{margin:"0 auto"}}>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="card posts" style={{ margin:"20px auto"}}>
                        <div className="card-body">
                            <div >
                                <Editor
                                    plugins={[emojiPlugin, inlineToolbarPlugin]}
                                    editorState={this.state.editorState}
                                    onChange={this.onChange}
                                    placeholder="What's Happening"
                                />
                            </div>
                            <div className='toolbar-options'>

                                {
                                    (this.state.editorState.getCurrentContent().getPlainText().length >= 1)
                                        ? <button type="submit" className="btn btn-primary btn-sm" >Submit Post</button>
                                        : <button type="submit" className="btn btn-primary btn-sm" disabled>Submit Post</button>
                                }

                                <div style={{ marginLeft: '10px', marginTop: '2px' }}>
                                    <EmojiSelect />
                                    <InlineToolbar />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.Feed.feeds,
        auth: state.Auth.authData
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addFeedPost,
    getFeedPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewTextEditor)
