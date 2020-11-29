import React from "react"
import ListItemJSON from "./ListItemJSON"
import Form from "./Form"
import Edit from "./Edit"
import Search from "./Search"
import "./style.css"
import Data from './notesArrayJSON.json'

class App extends React.Component {

  state = {
    notesJSON: [...Data],
    isEditOpen: false,
    id: "",
    nbpdata: null,
    euro: null,
    dollar: null,
    ratio: null,
    temperatureInWroclaw: null,
  }

  async componentDidMount() {
    // gotData = () => {
    // fetch('http://api.nbp.pl/api/exchangerates/tables/a')
    //   .then(response => response.json())
    //   .then(nbpdata => this.setState({ isLoaded: true, nbpdata }))
    //   .then(nbpdata => { console.log('Success:', this.state.nbpdata) })
    //   // .then((nbpdata) => nbpdata.length ? JSON.parse(nbpdata) : {})
    //   .catch((error) => { console.error('Error:', error) })
    const response1 = await fetch('https://api.nbp.pl/api/exchangerates/tables/a')
    const response2 = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.1&lon=17.0')
    const geld = await response1.json()
    const weather = await response2.json()

    if (!response1.ok) {
      const message = `An error has occured: ${response1.status}`;
      throw new Error(message);
    }
    this.setState({
      nbpdata: [...geld],
      euro: [...geld][0].rates[7].mid,
      dollar: [...geld][0].rates[1].mid,
      temperatureInWroclaw: weather.properties.timeseries[0].data.instant.details.air_temperature
    })
  }

  addItem = (e) => {
    e.preventDefault()
    const dateCreation = new Date().toISOString().slice(0, 10)
    const newItem = {
      id: String(e.target[0].value.concat(Data.length + 1)),
      dateCreation: dateCreation,
      title: e.target[0].value,
      content: e.target[1].value,
      author: "admin"
    }

    this.setState(prevState => ({
      notesJSON: [...prevState.notesJSON, newItem]
    }))
    Data.push(newItem)
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
    const dateEdit = new Date().toISOString().slice(0, 10)
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id === id) {
        Data[i].dateEdit = dateEdit
        Data[i].title = titleVal
        Data[i].content = contentVal
      }
    }
    this.setState({
      notesJSON: [...Data],
    })
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
            {this.state.notesJSON.map(item => (
              <ListItemJSON key={item.id} {...item} open={this.openEdit} deleteIt={this.removeItem} />

            ))}
            <hr />
          </article>
          {isEditOpen && <Edit close={this.closeEdit} id={this.state.id} changeFunction={this.editItem} edit />}
          <aside>
            <div>
              <h3>Add a note</h3>
              <Form addFunction={this.addItem} />
            </div>
          </aside>
        </main>
        <footer><p>_notemacher: React 17 + hooks</p>
          <hr />
          <p>Fetched from NBP API: Euro: {this.state.euro}; US Dollar: {this.state.dollar} | Fetched from Meteorologisk institutt: temperature in Wrocław {this.state.temperatureInWroclaw}°C</p>
        </footer>
      </>
    )
  }
}

export default App 