import { useState } from "react"
import { EditorState, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
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

// https://www.draft-js-plugins.com/plugin/static-toolbar

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin];

const FormAddMongo = ({ addMongoFunction, edit, close, id }) => {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [titleVal, setTitleVal] = useState("")
    const [contentVal, setContentVal] = useState("")
    const [categoriesVal, setCategoriesVal] = useState([])

    const titleChange = (e) => {
        setTitleVal(e.target.value)
    }

    const contentChange = (contentState, editorState) => {
        let content = stateToHTML(contentState)
        setContentVal(content)
        setEditorState(editorState)
    }

    const categoriesChange = (e) => {
        // setCategoriesVal(categoriesVal => categoriesVal.concat(e.target.value))
        // setCategoriesVal([...categoriesVal, e.target.value])
        setCategoriesVal(e.target.value)
        console.log("ADD1 categories", categoriesVal)
        // console.log("TEST: ", Array.from(categoriesVal.split(",").trim()))
        // console.log("CATVAL: ", categoriesVal)
    }

    const handleSubmit = (e, titleVal, contentVal) => {
        let arrEffect = []
        if (categoriesVal.length) {
            arrEffect = Array.from(categoriesVal.split(","))
        }
        addMongoFunction(e, titleVal, contentVal, arrEffect)
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
            <label htmlFor="categories">Categories</label>
            <input type="text" name="categories" id="categories" onChange={categoriesChange} value={categoriesVal} />
            <button className="big" type="submit">ADD</button>

        </form>
    )
}

export default FormAddMongo