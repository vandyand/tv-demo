import React from 'react';
import { Route } from 'react-router-dom'

import Navigation from './components/navigation'
import ManagePage from './pages/managePage'
import PreviewPage from './pages/previewPage'

class App extends React.Component {

  state = {
    shows: []
  }

  componentDidMount() {
    this.renderShows()
  }

  renderShows = async () => {
    try {
      const response = await fetch('http://localhost:3001')
      this.setState({
        shows: await response.json()
      })
    } catch (err) {
      console.log(err)
    }
    // fetch('http://localhost:3001')
    //   .then(res => res.json())
    //   .then(shows => {
    //     this.setState({
    //       shows: shows
    //     })
    //     console.log(this.state.shows)
    //   })
    //   .catch(err => console.log(err))
  }

  renderManagePage = () => {
    return <ManagePage shows={this.state.shows} deleteShow={this.deleteShow} createOrUpdateShow={this.createOrUpdateShow} />
  }

  renderPreviewPage = () => {
    return <PreviewPage shows={this.state.shows} />
  }

  deleteShow = async (showToDelete) => {
    console.log('delete show called!', showToDelete)
    try {
      const promise = await fetch('http://localhost:3001', {
        method: "delete",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id: showToDelete._id })
      })
      this.renderShows()
    } catch (err) {
      console.log(err)
    }
  }

  createOrUpdateShow = async (show) => {
    if (show._id) {
      console.log("putting show now!", show)
      await fetch('http://localhost:3001', {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(show)
      })
    } else {
      console.log("posting show now!", show)
      delete show._id
      await fetch('http://localhost:3001', {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(show)
      })
    }
    this.renderShows()
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
