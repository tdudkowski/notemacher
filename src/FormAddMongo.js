import { useState } from "react"
import { EditorState, RichUtils } from 'draft-js'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import 'draft-js/dist/Draft.css'
import 'draft-js-static-toolbar-plugin/lib/plugin.css'
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import editorStyles from './editorStyles.css'
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from 'draft-js-buttons';
import { stateToHTML } from 'draft-js-export-html'

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin];
const text = 'The toolbar above the editor can be used for formatting text, as in conventional static editors  …';

const FormAddMongo = ({ addMongoFunction, edit, close, id }) => {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [titleVal, setTitleVal] = useState("")
    const [contentVal, setContentVal] = useState("")

    const titleChange = (e) => {
        setTitleVal(e.target.value)
    }

    const contentChange = (contentState, editorState) => {
        let content = stateToHTML(contentState)
        setContentVal(content)
        setEditorState(editorState)
    }

    const handleSubmit = (e, titleVal, contentVal) => {
        addMongoFunction(e, titleVal, contentVal)
        close()
    }

    const onChange = editorState => {
        const contentState = editorState.getCurrentContent()
        setEditorState(editorState)
        contentChange(contentState, editorState)
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    return (
        <form className="form" autoComplete="off" onSubmit={(e) => handleSubmit(e, titleVal, contentVal)}>
            <label htmlFor="title">{edit ? "Title of [ " + id + " ]" : "Title"}</label>
            <input type="text" name="title" id="title" onChange={titleChange} value={titleVal} required />
            <label htmlFor="content">Content</label>
            <div className={editorStyles.editor}
            // onClick={focus}
            >
                <Toolbar>
                    {
                        // may be use React.Fragment instead of div to improve perfomance after React 16
                        (externalProps) => (
                            <div>
                                <BoldButton {...externalProps} />
                                <ItalicButton {...externalProps} />
                                <UnderlineButton {...externalProps} />
                                <CodeButton {...externalProps} />
                                <Separator {...externalProps} />
                                <HeadlineOneButton {...externalProps} />
                                <HeadlineTwoButton {...externalProps} />
                                <HeadlineThreeButton {...externalProps} />
                                <UnorderedListButton {...externalProps} />
                                <OrderedListButton {...externalProps} />
                                <BlockquoteButton {...externalProps} />
                                <CodeBlockButton {...externalProps} />
                            </div>
                        )
                    }
                </Toolbar>
                <Editor editorState={editorState}
                    onChange={onChange}
                    handleKeyCommand={handleKeyCommand}
                    plugins={plugins}
                // ref={(element) => { editor = element; }}
                />
            </div>

            <button className="big" type="submit">ADD</button>

        </form>
    )
}

export default FormAddMongo