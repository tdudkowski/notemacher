import PropTypes from "prop-types"

const ListItemJSON = ({ id, title, content, open, deleteIt }) => {
    return (
        <div key={id}>
            <h4>{title}--{id}
                <span>
                    <button onClick={() => open(id)}>edit</button>
                    <button onClick={(e) => deleteIt(id)}>delete</button>
                </span>
            </h4>
            <p>{content}</p>
        </div >
    )
}

ListItemJSON.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
}
export default ListItemJSON