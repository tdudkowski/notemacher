import React from "react"
import axios from 'axios'
import DataMongo from "./DataMongo"
import ListItemJSON from "./ListItemJSON"
import Form from "./Form"
import FormEditMongo from "./FormEditMongo"
import FormAddMongo from "./FormAddMongo"
import Data from './notesArrayJSON.json'
import FetchFn from "./Fetch"
import "./style.css"

// export const BASE_API_URL = ''

class App extends React.Component {

  state = {
    notesJSON: [...Data],
    isEditOpen: false,
    isEditOpenMongo: false,
    isCreateOpenMongo: false,
    isCreateOpenJSON: false,
    id: "",
    nbpdata: null,
    euro: null,
    dollar: null,
    ratio: null,
    temperatureInWroclaw: null,
    stateContentVal: null,
    stateContentMongoVal: null,
    stateTitleMongoVal: null,
    editMongoTime: null,
    userMongoID: null,
    mongoDB: [],
    searchValue: 0,
  }

  async componentDidMount() {
    const response1 = await fetch('https://api.nbp.pl/api/exchangerates/tables/a')

    if (this.searchValue === 0) {
      axios.get('https://notemacher.herokuapp.com/notes')
        // axios.get('http://localhost:5000/notes')

        .then(res => {
          this.setState({ mongoDB: [...res.data] });
        })
        .then(console.log("componentMounted"))
        .catch(function (error) {
          console.log("ERROR IN componentDidMount: ", error);
        })
    }
    const geld = await response1.json()

    this.setState({
      nbpdata: [...geld],
      euro: [...geld][0].rates[7].mid,
      dollar: [...geld][0].rates[1].mid,
    })
  }

  async componentDidUpdate() {
    if (this.state.searchValue === 0) {
      axios.get('https://notemacher.herokuapp.com/notes')
        // axios.get('http://localhost:5000/notes')
        .then(res => {
          this.setState({ mongoDB: [...res.data] });
        })
        .then(console.log("componentUpdated"))
        .catch(function (error) {
          console.log("ERROR IN componentDidUpdate: ", error);
        })
    }
  }

  /*--- JSON ----*/

  /* OPEN CREATE JSON */
  openCreateJSON = () => {
    this.setState({
      isCreateOpenJSON: true,
    })
  }

  /* CLOSE CREATE JSON */
  closeCreateJSON = () => {
    this.setState({
      isCreateOpenJSON: false,
    })
  }

  /* OPEN EDIT JSON */
  openEdit = (id) => {
    const thisContent = this.state.notesJSON.filter(item => item.id === id)[0].content
    this.setState({
      isEditOpen: true,
      id: id,
      stateContentVal: thisContent
    })
  }

  /* CLOSE EDIT JSON */
  closeEdit = () => {
    this.setState({
      isEditOpen: false,
    })
  }

  /* ADD JSON */
  addItem = (e, contentVal) => {
    e.preventDefault()

    const dateEdit = new Date().toISOString().slice(0, 10)
    const hrEdit = new Date().toLocaleTimeString("pl-PL").slice(0, 5)
    const aMoment = `${dateEdit} - ${hrEdit}`

    const newItem = {
      id: String(e.target[0].value.slice(0, 10).concat(Data.length + 1)),
      dateCreation: aMoment,
      title: e.target[0].value,
      content: contentVal,
      author: e.target[0].author || "anon"
    }

    this.setState(prevState => ({
      notesJSON: [...prevState.notesJSON, newItem],
      isCreateOpenJSON: false,
    }))
    Data.push(newItem)
    e.target.reset()
  }

  /* EDIT JSON */
  editItem = (e, id, titleVal, contentVal) => {
    e.preventDefault()
    const dateEdit = new Date().toISOString().slice(0, 10)
    const hrEdit = new Date().toLocaleTimeString("pl-PL").slice(0, 5)
    const aMoment = `${dateEdit} - ${hrEdit}`
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id === id) {
        Data[i].dateEdit = aMoment
        Data[i].title = titleVal
        Data[i].content = contentVal
        Data[i].editor = e.target[0].editor || "anon"
      }
    }
    this.setState({
      notesJSON: [...Data],
    })
  }

  /* REMOVE JSON */
  removeItem = (id) => {
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id === id) {
        Data.splice(i, 1)
      }
    }
    this.setState({ notesJSON: [...Data] })
  }

  /* SEARCH JSON */
  searchFunction = (foundList) => {
    this.setState({
      notesJSON: foundList
    })
  }

  /*--- MONGO ---*/

  /* MONGO LIST */
  mongoNotes() {
    console.log("inside LIST BEFORE: ", this.state.mongoDB)
    if (this.state.searchValue) {
      // this.setState({ mongoDB: this.state.mongoDB, })
      console.log("inside LIST if SEARCHVALUE: ", this.state.mongoDB)
      return this.state.mongoDB.map((data, id) => {
        return <DataMongo obj={data} key={id} open={this.openEditMongo}
          deleteMongoItem={() => this.removeItemMongo(data)} />
      });
    }
    else {
      console.log("inside LIST if SEARCH NULL: ", this.state.mongoDB)
      return this.state.mongoDB.map((data, id) => {
        return <DataMongo obj={data} key={id} open={this.openEditMongo}
          deleteMongoItem={() => this.removeItemMongo(data)} />
      });
    }
  }

  /* OPEN CREATE MONGO */
  openCreateMongo = () => {
    this.setState({
      isCreateOpenMongo: true,
    })
  }

  /* CLOSE CREATE MONGO */
  closeCreateMongo = () => {
    this.setState({
      isCreateOpenMongo: false,
    })
  }

  /* CLOSE EDIT MONGO */
  closeEditMongo = () => {
    this.setState({
      isEditOpenMongo: false,
      isCreateOpenMongo: false,
    })
  }

  /* ADD MONGO */
  addItemMongo = (e, titleVal, contentVal) => {
    e.preventDefault()

    const dateEdit = new Date().toISOString().slice(0, 10)
    const hrEdit = new Date().toLocaleTimeString("pl-PL").slice(0, 5)
    const aMoment = `${dateEdit} - ${hrEdit}`

    const newMongoItem = {
      id: String(titleVal.slice(0, 10).concat(this.state.mongoDB.length + 1)),
      dateCreation: aMoment,
      title: titleVal,
      content: contentVal,
      author: "anon"
    }

    axios.post('https://notemacher.herokuapp.com/notes', newMongoItem)
      .then(res => {
        // this.setState({ mongoDB: [...newMongoItem] });
      })
      .catch(function (error) {
        console.log("ERROR IN REACT APP AAD MONGO NOTE", error);
      })

    this.setState({
      isCreateOpenMongo: false,
    })
  }

  /* OPEN EDIT MONGO */
  openEditMongo = (id) => {
    const dateEdit = new Date().toISOString().slice(0, 10)
    const hrEdit = new Date().toLocaleTimeString("pl-PL").slice(0, 5)
    const aMoment = `${dateEdit} - ${hrEdit}`
    const thisUser = "anon"
    const thisTitle = this.state.mongoDB.filter(item => item.id === id)[0].title
    const thisContent = this.state.mongoDB.filter(item => item.id === id)[0].content
    this.setState({
      isEditOpenMongo: true,
      id: id,
      stateTitleMongoVal: thisTitle,
      stateContentMongoVal: thisContent,
      editMongoTime: aMoment,
      userMongoID: thisUser,
    })
  }

  /* SAVE EDITED MONGO */
  editItemMongo = (e, id, titleVal, contentVal, editMongoTime, userMongoID) => {
    e.preventDefault()

    const dateEdit = new Date().toISOString().slice(0, 10)
    const hrEdit = new Date().toLocaleTimeString("pl-PL").slice(0, 5)
    const aMoment = `${dateEdit} - ${hrEdit}`

    for (let i = 0; i < this.state.mongoDB.length; i++) {
      if (this.state.mongoDB[i].id === id) {
        const changedMongoItem = {
          _id: this.state.mongoDB[i]._id,
          id: this.state.mongoDB[i].id,
          dateCreation: this.state.mongoDB[i].dateCreation,
          author: this.state.mongoDB[i].author,
          dateEdit: aMoment,
          title: titleVal,
          content: contentVal,
          editor: "anon"
        }

        const newStateNotes = this.state.mongoDB
        newStateNotes.splice(i, 1, changedMongoItem)

        this.setState({
          mongoDB: newStateNotes,
          isCreateOpenMongo: false,
        })

        axios.put('https://notemacher.herokuapp.com/notes', changedMongoItem)
          .then(res => {
            // this.setState({ mongoDB: [...newMongoItem] });
          })
          .catch(function (error) {
            console.log("ERROR IN REACT EDIT MONGO NOTE", error);
          })
      }
    }
  }

  /* REMOVE MONGO */
  removeItemMongo = (data) => {
    axios.delete('https://notemacher.herokuapp.com/notes', { data })
      .then(res => {
        // this.setState({ mongoDB: [...newMongoItem] });
      })
      .catch(function (error) {
        console.log("ERROR IN REACT REMOVE MONGO NOTE", error);
      })
  }

  /* SEARCH MONGO */
  // https://stackoverflow.com/questions/37401635/react-js-wait-for-setstate-to-finish-before-triggering-a-function
  // https://stackoverflow.com/questions/3790681/regular-expression-to-remove-html-tags
  // https://digitalfortress.tech/tricks/top-15-commonly-used-regex/
  searchMongoFunction = (e) => {
    e.preventDefault()
    axios.get('https://notemacher.herokuapp.com/notes')
      .then(res => {
        this.setState({
          searchValue: e.target[0].value.length,
          mongoDB: [...res.data],
        },
          () => {
            const removedHTML = (itemContent) => itemContent.toLowerCase().replaceAll(/<\/?[\w\s]*>|<.+[\W]>/g, "")
            const searchData = this.state.mongoDB.filter(obj => obj.title.toLowerCase().includes(e.target[0].value.toLowerCase()) || removedHTML(obj.content).toLowerCase().includes(e.target[0].value.toLowerCase()))
            this.setState(prevState => ({
              mongoDB: searchData,
            }))
          })
        // this.mongoNotes()
        console.log("inside SEARCH: ", this.state.mongoDB, e.target[0].value.length)
        document.getElementsByClassName("searchResult")[0].classList.add("result")
      })
      .catch(function (error) {
        console.log("ERROR IN componentSearch: ", error)
      })
  }

  handleInput = (e) => {
    if (e.target.value.length === 0) {
      this.setState({
        searchValue: 0,
      },
        document.getElementsByClassName("searchResult")[0].classList.remove("result"))
    }
  }

  restoreList = () => {
    axios.get('https://notemacher.herokuapp.com/notes')
      .then(res => {
        this.setState({
          searchValue: 0,
          mongoDB: [...res.data],
        },
          document.getElementsByClassName("searchResult")[0].classList.remove("result"))
      })
  }

  searchInstant = (e) => {
    console.log("INSTANT!!!", e.target.value)

    axios.get('https://notemacher.herokuapp.com/notes')
      .then(res => {
        this.setState({
          searchValue: e.target.value.length,
          mongoDB: [...res.data],
        },
          () => {
            const removedHTML = (itemContent) => itemContent.toLowerCase().replaceAll(/<\/?[\w\s]*>|<.+[\W]>/g, "")
            const searchData = this.state.mongoDB.filter(obj => obj.title.toLowerCase().includes(e.target.value.toLowerCase()) || removedHTML(obj.content).includes(e.target.value.toLowerCase()))
            this.setState(prevState => ({
              mongoDB: searchData,
            }))
          })
        if (e.target.value.length === 0) { document.getElementsByClassName("searchResult")[0].classList.remove("result") }
        else {
          document.getElementsByClassName("searchResult")[0].classList.add("result")
        }
      })

  }
  /*--- APP BODY ---*/

  render() {
    const { isEditOpen, isEditOpenMongo, isCreateOpenMongo, isCreateOpenJSON } = this.state

    return (
      <>
        <header className="header">
          <h2>_notemacher</h2>
          <nav className="navgh">
            <ul>
              <li><a href="https://tdudkowski.github.io/">[ to Github Page ]</a></li>
              <li><a href="https://github.com/tdudkowski/notemacher">[ repo of _notemacher ]</a></li>
            </ul>
            <ul>
              <li><button onClick={this.openCreateJSON}>ADD JSON Note</button></li>
              <li><button onClick={this.openCreateMongo}>ADD mongoDB Note</button></li>
            </ul>
          </nav>
          <div className="search">
            <form onSubmit={(e) => this.searchMongoFunction(e)}>
              <input type="text" name="clickit" id="clickit" placeholder="search Mongo"
                onChange={this.handleInput}
              />
              <button className="big" type="submit">SEARCH</button>
            </form>
            <div>
              <input type="text" name="instant" id="instant" placeholder="search Mongo"
                onChange={(e) => this.searchInstant(e)}
              />
              <h3>type to search</h3>
            </div></div>
          <div>
            <p>This is almost-almost version. Adding, deleting, and editing notes is fine. Search is... almost OK. I left 2 options of searching, both have the same failures: 1) only a second, and every next, action (click or character in input) is effective, 2) search is fine regardless of formatting, but only in scope of one line, any break to next line results in fail.</p>
            <p>I send this to the server because it's better than previous one. But it sill has some urgent TODOs.</p>
          </div>
        </header>
        <main>
          <article className="listNotes">
            <h3>MongoDB Notes</h3>
            <div className="searchResult">
              {this.state.searchValue ? <div><h4>Search mode</h4>
                <p>Till <strong>search mode</strong> is on, you can add, remove, and edit notes, but with no visible effect. To close search mode you should empty both input fields or click the button below 'restore list'.</p>
                <p>The search returned {this.mongoNotes().length} items | <button className="big" onClick={this.restoreList}>Restore list</button></p></div> : null}
              {this.state.mongoDB ? this.mongoNotes() : <div className="infoOnMongo">
                <p>If you are seeing this info, there're a few possibilities:</p>
                <ul>
                  <li>Your search returned no results (aka result is empty)</li>
                  <li>Notes are not yet loaded, connection to database usually takes a moment (but not enough long to read it comfortably)</li>
                  <li>Database is empty now, in this case please use "ADD mongoDB Note" button to create one</li>
                </ul>
              </div>}
            </div>
            <hr />

            <h3>JSON Notes</h3>

            {this.state.notesJSON.map(item => (
              <ListItemJSON key={item.id} {...item} open={this.openEdit} deleteIt={this.removeItem} />
            ))}

          </article>

          {isEditOpen && <div className="edit">
            <header>
              <h3>Edit JSON Note - note id: {this.state.id}</h3>
              <button className="big" onClick={this.closeEdit}>CLOSE</button>
            </header>
            <Form edit id={this.state.id} changeFunction={this.editItem} array={this.state.notesJSON}
              stateContentVal={this.state.stateContentVal} close={this.closeEdit} />
          </div>}


          {isCreateOpenJSON && <div className="edit">
            <header><h3>Add a JSON note</h3>
              <button className="big" onClick={this.closeCreateJSON}>CLOSE</button>
            </header>
            <Form add addFunction={this.addItem} />
          </div>}


          {isEditOpenMongo && <div className="edit">
            <header>
              <h3>Edit Mongo - note id: {this.state.id}</h3>
              <button className="big" onClick={this.closeEditMongo}>CLOSE</button>
            </header>
            <FormEditMongo
              edit
              id={this.state.id}
              changeFunctionMongo={this.editItemMongo}
              changeMongoFn={this.editItemMongo}
              array={this.state.mongoDB}
              stateTitleVal={this.state.stateTitleMongoVal}
              stateContentVal={this.state.stateContentMongoVal}
              editMongoTime={this.state.editMongoTime}
              userMongoID={this.state.userMongoID}
              close={this.closeEditMongo}
            />
          </div>}

          {isCreateOpenMongo && <div className="edit">
            <header><h3>Add a Mongo Note</h3>
              <button className="big" onClick={this.closeCreateMongo}>CLOSE</button>
            </header>
            <FormAddMongo addMongoFunction={this.addItemMongo} close={this.closeEditMongo} />
          </div>}

          <aside>

            <h3>_notemacher</h3>
            <p>Two kinds of Notes:</p>
            <ul>
              <li><strong>mongoDB Notes</strong> from mongoDB Atlas served by Node.js API</li>
              <li><strong>JSON Notes</strong> (below hr line) kept in local React file. I've started from it, but now they are kept only for a testing purposes.</li>
            </ul>

            <p>Stack:</p>
            <ul>
              <li>Draft.js</li>
              <li>React 17 + hooks (Github)</li>
              <li>async, fetch, axios</li>
              <li>Node.js + Express (Heroku)</li>
              <li>mongoDB (MongoDB Atlas)</li>
            </ul>
            <hr />
            <h3>Fetch</h3>
            <p>(state component) Data fetched from NBP API, ratio to Polish PLN</p>

            <table className="tableFetch">
              <thead><tr><th>Currency</th><th>Ratio</th></tr></thead>
              <tbody>
                <tr><td>Euro</td><td>{this.state.euro}</td></tr>
                <tr><td>US Dollar</td><td>{this.state.dollar}</td></tr>
              </tbody>
            </table>

            <FetchFn />
          </aside>
        </main>
        <footer>
          <p>
            _notemacher @2020
          </p>
        </footer>
      </>
    )
  }
}

export default App 