import Data from './notesArrayJSON.json'
import { useState } from "react"

const Form = ({ addFunction, changeFunction, edit, close, id }) => {

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

    const [titleVal, setTitleVal] = useState(x)
    const [contentVal, setContentVal] = useState(y)

    const titleChange = (e) => {
        setTitleVal(e.target.value)
    }

    const contentChange = (e) => {
        setContentVal(e.target.value)
    }

    const resetState = () => {
        setTitleVal("")
        setContentVal("")
    }

    const addValues = (e, id) => {
        changeFunction(e, id, titleVal, contentVal)
        close()
    }

    const handleSubmit = (e) => {
        edit ? addValues(e, id) : addFunction(e)
        resetState()
    }

    return (
        <form className="form" autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="title">{edit ? "Title of [ " + id + " ]" : "Title"}</label>
            <input type="text" name="title" id="title" onChange={titleChange} value={titleVal} required />
            <label htmlFor="content">Text</label>
            <textarea type="text" name="content" id="content" value={contentVal} onChange={contentChange} required />
            <div>
                <button type="submit">{edit ? "SAVE" : "ADD"}</button>
                <h4>Result of {edit ? "edit" : "add"}</h4>
                <p>Title: {titleVal}</p>
                <p>Content: {contentVal}</p>
            </div>
        </form>
    )
}

export default Form