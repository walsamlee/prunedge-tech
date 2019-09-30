// react
import React from 'react';

// components
import Activity from './components/Activity';
import Sidebar from './components/Sidebar'

// style
import './App.scss';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Activity />
    </div>
  );
}

export default App;
