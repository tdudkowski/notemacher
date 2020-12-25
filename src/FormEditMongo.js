import { useState } from "react"
import { EditorState, RichUtils, ContentState, convertFromHTML } from 'draft-js'
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


const FormEditMongo = ({ changeMongoFn, id, close, editMongoTime, userMongoID, stateTitleVal, stateContentVal }) => {
    const blocksFromHTML = convertFromHTML(stateContentVal);
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    );

    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(state))
    const [titleVal, setTitleVal] = useState(stateTitleVal)

    const titleChange = (e) => {
        setTitleVal(e.target.value)
    }

    const onChange = (editorState) => {
        setEditorState(editorState);
        stateContentVal = stateToHTML(editorState.getCurrentContent());
    }

    const handleSubmit = (e, titleVal) => {
        stateContentVal = stateToHTML(editorState.getCurrentContent());
        changeMongoFn(e, id, titleVal, stateContentVal, editMongoTime, userMongoID);
        close()
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    // focus = () => { editor.focus(); };

    return (
        <form className="form" autoComplete="off" onSubmit={(e) => handleSubmit(e, titleVal)}>
            <label htmlFor="title">{"Title of [ " + id + " ]"}</label>
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
            <button className="big" type="submit">SAVE</button>
            <h4>Result of EDIT</h4>
            <p>Title: {titleVal}</p>
            <p>Edit time: {editMongoTime}</p>
            <p>Editor: {userMongoID}</p>
        </form>
    )
}

export default FormEditMongo