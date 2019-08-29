import React from 'react';
import { Route } from 'react-router-dom'

import Navigation from './components/navigation'
import Manage from './pages/managePage'
import Preview from './pages/previewPage'

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
