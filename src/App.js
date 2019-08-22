import React from 'react';
import './App.css';

import Navigation from './components/navigation/index'
import Manage from './pages/manage/index'
import Preview from './pages/preview/index'
import { Route } from 'react-router-dom'

{/*import logo from './logo.svg';*/}


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path="/" component={Manage} />
      <Route exact path="/preview-page" component={Preview} />

    </div>
  );
}

export default App;
