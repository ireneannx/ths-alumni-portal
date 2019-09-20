import React from 'react'
import { EditorState, ContentState } from 'draft-js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeedPost, getFeedPosts } from '../action'
// import draftToHtml from "draftjs-to-html";
import '../../App.css'
// import { withRouter } from 'react-router'

import Editor from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const emojiPlugin = createEmojiPlugin();
const { EmojiSelect } = emojiPlugin;

class NewTextEditor extends React.Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onChange = (editorState) => this.setState({ editorState })

    onSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state.editorState.getCurrentContent().getPlainText());

        // let text = draftToHtml(this.state.editorState.getCurrentContent().getPlainText());
        let text = this.state.editorState.getCurrentContent().getPlainText();

        // console.log('authdata', this.props.auth.user._id);

        /**
         ** In the fist load, even though the auth data has loaded in the redux store
         ** it is not available in this component
         ** However, after one hard refresh, the data is available and everything works fine.
         */
        if (this.props.auth.user) {
            var id = this.props.auth.user._id
            var name = this.props.auth.user.name

            await this.props.addFeedPost(text, id, name);
            await this.props.getFeedPosts();

            const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
            this.setState({ editorState });
        }


    };

    render() {

        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="card" style={{ marginTop: '10px', marginBottom: '10px' }}>
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
