import React from "react"
import ListItemJSON from "./ListItemJSON"
import Add from "./Add"
import Edit from "./Edit"
import Search from "./Search"
import "./style.css"
import Data from './notesArrayJSON.json'

class App extends React.Component {
  state = {
    notesJSON: [...Data],
    isEditOpen: false,
    id: "",
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = {
      id: String(e.target[0].value.concat(Data.length + 1)),
      title: e.target[0].value,
      content: e.target[1].value,
    }

    this.setState(prevState => ({
      notesJSON: [...prevState.notesJSON, newItem]
    }))
    Data.push(newItem)
    console.log(Data)
    e.target.reset()
  }

  removeItem = (id) => {
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id === id) {
        Data.splice(i, 1)
      }
    }
    this.setState({ notesJSON: [...Data] })
  }

  editItem = (e, id, titleVal, contentVal) => {
    e.preventDefault()
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id === id) {
        Data[i].title = titleVal
        Data[i].content = contentVal
      }
    }
    this.setState({ notesJSON: [...Data] })
    console.log(this.state.notesJSON)
    console.log(titleVal, contentVal)
    e.target.reset()
  }

  closeEdit = () => {
    this.setState({
      isEditOpen: false,
    })
  }

  openEdit = (id) => {
    this.setState({
      isEditOpen: true,
      id: id
    })
  }

  searchFunction = (foundList) => {
    this.setState({
      notesJSON: foundList
    })
  }

  render() {
          const { isEditOpen } = this.state

    return (
      <>
        <header>
          <h2>_notemacher</h2>
          <nav className="navgh">
            <ul>
              <li><a href="https://tdudkowski.github.io/">[ to Github Page ]</a></li>
              <li><a href="https://github.com/tdudkowski/notemacher">[ repo of _notemacher ]</a></li>
            </ul>
                
              </nav>
          <Search restoreFunction={this.restoreFunction} searchFunction={this.searchFunction} />
        </header>
        <main>
          <article className="listNotes">
            <h3>Notes</h3>
                      <hr />
           {this.state.notesJSON.map(item =>(
              <ListItemJSON key={item.id} {...item} open={this.openEdit} deleteIt={this.removeItem} />
            
            ))}
             <hr />
          </article>
          {isEditOpen && <Edit close={this.closeEdit} id={this.state.id} changeFunction={this.editItem} edit />}
          <aside>
            <Add addFunction={this.addItem} />
          </aside>
        </main>
        <footer><p>_notemacher: React 17 + hooks</p></footer>
      </>
    )
  }
}

export default App 