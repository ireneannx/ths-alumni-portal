import React from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const emojiPlugin = createEmojiPlugin();
const { EmojiSelect } = emojiPlugin;


class Summary extends React.PureComponent {
    state = {
        editorState: EditorState.createEmpty(),
    };

    onChange = async (editorState) => {
        let text = this.state.editorState.getCurrentContent().getPlainText();
        await this.setState({
            editorState,
        });
        console.log(text)
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let text = this.state.editorState.getCurrentContent().getPlainText();
        console.log(text);
    }

    render({ addPage, subtractPage } = this.props) {

        return (
            <div style={{ padding: '5%' }}>

                <h2><b>Summary</b></h2>
                <h6>Your summary should showcase the highlights of your<br /> work experience, skills, and your best achievements. </h6>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div class="form-row" >

                        <div className="row" style={{ marginTop: '20px', marginBottom: '10px' }}>
                            <div className="col">
                                <div class="card">
                                    <div className="card-body" style={{ width: '400px', minHeight: '150px', padding: '-3px' }}>
                                        <p style={{ height: '15px' }}>Write your summary here</p> <hr />
                                        <Editor
                                            plugins={[emojiPlugin, inlineToolbarPlugin]}
                                            editorState={this.state.editorState}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>


                    <button type="submit" class="btn btn-primary" onClick={subtractPage} style={{ margin: "10px" }}> Back </button>
                    <button type="submit" class="btn btn-primary" onClick={addPage}>Continue </button>
                </form>


            </div>)
    }
}

export default Summary;