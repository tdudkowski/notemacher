import PropTypes from "prop-types"

const ListItemJSON = ({ id, title, author, editor, dateCreation, dateEdit, content, open, deleteIt }) => {
    return (
        <div key={id} className="noteItem">
            <header>
                <div className="note-id">
                    <span>note ID: {id}</span>
                    <button onClick={() => open(id)}>edit</button>
                    <button onClick={(e) => deleteIt(id)}>delete</button>
                </div>
                <h4>{title}</h4>
                <p className="noteInfo"><span>Created: {dateCreation} by {author}</span> | <span>{dateEdit ? `Last edit: ${dateEdit} by: ${editor} ` : `unedited`}</span></p>
            </header>
            <div className="content">{content}</div>
        </div >
    )
}

ListItemJSON.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
}
export default ListItemJSON