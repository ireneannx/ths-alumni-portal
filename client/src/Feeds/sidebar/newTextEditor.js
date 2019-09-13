import React from 'react'
import { EditorState } from 'draft-js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFeedPost, getFeedPosts } from '../action'
import draftToHtml from "draftjs-to-html";
import '../../App.css'

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
        contentState: ""
    }

    onChange = (editorState) => this.setState({ editorState })

    onSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state.editorState.getCurrentContent().getPlainText());

        // let text = draftToHtml(this.state.editorState.getCurrentContent().getPlainText());
        let text = this.state.editorState.getCurrentContent().getPlainText();
        console.log('written in editor',text);

        await this.props.addFeedPost(text);
        await this.props.getFeedPosts();
        
        console.log("form submitted");
    };

    render() {
        // console.log(this.state.editorState.getCurrentContent().getPlainText())
        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="card" style={{ marginTop: '10px', marginBottom: '10px' }}>
                        {/* <h5 className="card-header">What's Happening</h5> */}
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
                                <button type="submit" className="btn btn-primary btn-sm" >Submit Post</button>
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
        data: state.Feed.feeds
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addFeedPost,
    getFeedPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewTextEditor)
