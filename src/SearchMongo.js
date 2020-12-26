import Data from './notesArrayJSON.json'

const Search = ({ searchMongoFunction }) => {

    const handleInputValue = (e) => {
        const foundList = Data.filter(obj => obj.title.toLowerCase().includes(e.target.value.toLowerCase()) || obj.content.toLowerCase().includes(e.target.value.toLowerCase()))
        searchMongoFunction(foundList)
    }

    return (
        <div className="search">
            <input type="text" name="notes" onChange={handleInputValue} />
            <h3>type to search</h3>
        </div>
    )
}

export default Search