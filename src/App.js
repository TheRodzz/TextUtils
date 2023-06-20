import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#292828';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, typ) => {
    setAlert({
      message: msg,
      type: typ
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text you want to manipulate" mode={mode} showAlert={showAlert} />
       {/* <Router>
        <div className="container">
          <Routes>
            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/">
              <TextForm heading="Enter the text you want to manipulate" mode={mode} showAlert={showAlert} />
            </Route>
          </Routes>
        </div>
      </Router> */}
      {/* <About/> */}

    </>
  );
}

export default App;
