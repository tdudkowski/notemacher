import { useState } from "react"
import { EditorState, RichUtils, ContentState, convertFromHTML } from 'draft-js'
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

const FormEditMongo = ({ changeMongoFn, id, close, editMongoTime, userMongoID, stateCategoriesVal, stateTitleVal, stateContentVal }) => {

    const blocksFromHTML = convertFromHTML(stateContentVal);
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    );

    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(state))
    const [titleVal, setTitleVal] = useState(stateTitleVal)
    const [categoriesVal, setCategoriesVal] = useState([stateCategoriesVal, ""].toString(", "))

    const titleChange = (e) => {
        setTitleVal(e.target.value)
    }

    const categoriesChange = (e) => {
        // setCategoriesVal(categoriesVal => categoriesVal.concat(e.target.value))
        // setCategoriesVal([...categoriesVal, e.target.value])
        setCategoriesVal(e.target.value)
        // console.log("STATE: ", stateCategoriesVal, "CATVAL: ", categoriesVal)
    }

    const onChange = (editorState) => {
        setEditorState(editorState);
        stateContentVal = stateToHTML(editorState.getCurrentContent());
    }

    const handleSubmit = (e, titleVal) => {
        const arrEffect = Array.from(categoriesVal.split(","))
        setCategoriesVal(Array.from(categoriesVal.split(",")))
        stateContentVal = stateToHTML(editorState.getCurrentContent());
        changeMongoFn(e, id, titleVal, stateContentVal, arrEffect, editMongoTime, userMongoID);
        // console.log(stateCategoriesVal, categoriesVal, arrEffect)
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
            <label htmlFor="categories">{"Categories of [ " + id + " ]"}</label>
            <input type="text" name="categories" id="categories" onChange={categoriesChange} value={categoriesVal} />
            <h4>Result of EDIT</h4>
            <p>Title: {titleVal}</p>
            <p>Edit time: {editMongoTime}</p>
            <p>Editor: {userMongoID}</p>
            <p>StateCategories: {[stateCategoriesVal]}</p>
            <p>Categories: {categoriesVal}</p>
        </form>
    )
}

export default FormEditMongo