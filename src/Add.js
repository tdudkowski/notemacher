import Form from "./Form"

const Add = ({ addFunction }) => {
    return (
        <>
            <h3>Add a note</h3>
            <Form addFunction={addFunction} />
        </>
    )
}

export default Add