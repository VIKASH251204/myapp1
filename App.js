
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      
    }
  }

  

  const changeBgColor = () =>{
    document.body.style.backgroundColor = 'red';
    showAlert("Red Background Enabled", "success");   

  }

  const changeBgColor1 = () =>{
    document.body.style.backgroundColor = 'green';
    showAlert("Green Background Enabled", "success");
  }

  const changeBgColor2 = () =>{
    document.body.style.backgroundColor = 'grey';
    showAlert("Grey Background Enabled", "success");
  }

  
  return (
    <>
    {/* <Router> */}
     <Navbar title="ReactApp" reacthome="Home" reactabout="About Us" mode={mode} toggleMode={toggleMode} changeBgColor={changeBgColor} changeBgColor1={changeBgColor1} changeBgColor2={changeBgColor2} />
     <Alert alert={alert}/>
     <div className="container">
     <TextForm showAlert={showAlert} heading="Enter The Text Analyze Blow" mode={mode}/>
     <About/>

     {/* <Routes>
         <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text Analyze Blow" mode={mode}/>} />
         <Route exact path="/about" element={<About />} />
        </Routes> */}
        
      </div> 
      {/* </Router>  */}
     
     
    </>

 
  );
}

export default App;
