import { useState } from "react"
import Data from './notesArrayJSON.json'
import { Editor, EditorState, RichUtils, ContentState, getPlainText } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { stateToHTML } from 'draft-js-export-html'

const Form = ({ addFunction, changeFunction, edit, add, close, id }) => {

    let x, y

    if (edit) {
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].id === id) {
                x = Data[i].title
                y = Data[i].content
            }
        }
    } else {
        x = ""
        y = ""
    }

    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(ContentState.createFromText(y)))
    const [titleVal, setTitleVal] = useState(x)
    const [contentVal, setContentVal] = useState(y)

    const titleChange = (e) => {
        setTitleVal(e.target.value)
    }

    const contentChange = (contentState, editorState) => {

        let firstLine = contentState.getPlainText('\u000A')
        setContentVal(firstLine)
        setEditorState(editorState)
    }

    const resetState = () => {
        setTitleVal("")
        setContentVal("")
        setEditorState(() => EditorState.createEmpty())
    }

    const addValues = (e, id) => {
        changeFunction(e, id, titleVal, contentVal)
        close()
    }

    const handleSubmit = (e, contentVal) => {
        if (edit) {
            addValues(e, id, contentVal)
            setEditorState(contentVal)
        }
        else {
            addFunction(e, contentVal)
            resetState()
        }
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
        <form className="form" autoComplete="off" onSubmit={(e) => handleSubmit(e, contentVal)}>
            <label htmlFor="title">{edit ? "Title of [ " + id + " ]" : "Title"}</label>
            <input type="text" name="title" id="title" onChange={titleChange} value={titleVal} required />
            <label htmlFor="content">Content</label>
            <Editor editorState={editorState} onChange={onChange} handleKeyCommand={handleKeyCommand} />
            <div>
                <button type="submit">{add ? "ADD" : "SAVE"}</button>
            </div>
        </form>
    )
}

export default Form