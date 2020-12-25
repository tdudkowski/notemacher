import { Editor, EditorState, ContentState, convertFromHTML } from 'draft-js'
import 'draft-js/dist/Draft.css'

const DataMongo = ({ obj, id, open, deleteMongoItem }) => {

    const blocksFromHTML = convertFromHTML(obj.content);
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    );

    const editorState = EditorState.createWithContent(state)

    return (
        <div key={id} className="noteItem">
            <header>
                <div className="note-id">
                    <span>note ID: {obj.id}</span>
                    <button onClick={() => open(obj.id)}>edit</button>
                    <button onClick={() => deleteMongoItem()}>delete</button>
                </div>
                <h4>{obj.title} </h4>
                <p className="noteInfo"><span>Created: {obj.dateCreation} by {obj.author}</span> | <span>{obj.dateEdit ? `Last edit: ${obj.dateEdit} by: ${obj.editor} ` : `unedited`}</span></p>
            </header>
            <Editor
                editorState={editorState}
                readOnly={true}
            />
        </div >
    );
}

export default DataMongo;