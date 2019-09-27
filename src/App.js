import React from 'react';
import { Route } from 'react-router-dom'

import Navigation from './components/navigation'
import ManagePage from './pages/managePage'
import PreviewPage from './pages/previewPage'

class App extends React.Component {

  state = {
    shows: []
  }

  componentDidMount = () => {
    this.renderShows()
  }

  renderShows = () => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(shows => {
        this.setState({
          shows: shows
        })
      })
      .catch(err => console.log(err))

  }

  renderManagePage = () => {
    return <ManagePage shows={this.state.shows} deleteShow={this.deleteShow} saveShow={this.saveShow} />
  }

  renderPreviewPage = () => {
    return <PreviewPage shows={this.state.shows} />
  }

  deleteShow = (showToDelete) => {
    console.log('delete show called!', showToDelete)
    fetch('http://localhost:3001', {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id: showToDelete._id })
    })
      .then()
      .then( () => {return this.renderShows()} )
  }

  saveShow = (showToSave) => {
    fetch('http://localhost:3001', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(showToSave)
    })
      .then()
      .then( () => {return this.renderShows()} )
  }

  render() {
    return (
      <div className="App" >
        <Navigation />
        <Route exact path="/" component={this.renderManagePage} />
        <Route exact path="/preview-page" component={this.renderPreviewPage} />
      </div>
    );
  }
}


export default App;
