import Form from "./Form"

const Edit = ({ changeFunction, close, id }) => {

    return (
        <div className="edit">
            <header>
                <h3>Edit - note id: {id}</h3>
                <button onClick={close}>CLOSE</button>
            </header>
            <Form edit id={id} changeFunction={changeFunction} close={close} />
        </div>
    )
}

export default Edit