import React from 'react';
import { Route } from 'react-router-dom'

import Navigation from './components/navigation'
import ManagePage from './pages/managePage'
import PreviewPage from './pages/previewPage'

class App extends React.Component {

  state = {
    shows: []
  }

  renderManagePage = () => {
    return <ManagePage shows={this.state.shows} showDeleted={this.showDeleted} saveShow={this.saveShow} />
  }

  renderPreviewPage = () => {
    return <PreviewPage show={this.state.shows[0]} />
  }

  showDeleted = (show) => {
    this.setState({
      
    })
  }

  saveShow = (showToSave) => {
    console.log('hello from app.js saveShow!')
    this.setState((prevState)=>({
      shows:[...prevState.shows,showToSave]
    }))
  }
  render() {
    console.log('app.js state:',this.state)
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
