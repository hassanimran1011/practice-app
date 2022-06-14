import React, { useState, useEffect } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App = () =>{
  const [bgStyle, setBgStyle] = useState("bg-light");
  const [textStyle, setTextStyle] = useState("text-dark");
  const [status, setStatus] = useState("light");
  const [alert, setAlert] = useState(null);

  useEffect(()=>{
    setInterval(()=>{
      setAlert(null);
    },2000);
  },[alert]);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    });

  }

  const handleTheOnChange = () =>{
    if(status === "dark"){
        setBgStyle("bg-light");
        setTextStyle("text-dark");
        setStatus("light");
        document.body.style.backgroundColor="#ededed";
        showAlert("Light mode enabled","dark");
    }else{
        setBgStyle("bg-dark");
        setTextStyle("text-light");
        setStatus("dark");
        document.body.style.backgroundColor="#202124";
        showAlert("Dark mode enabled","light");
    }
}

  return(
      <>
        <Navbar title='Text Utils' aboutText='About Us' bgStyle={bgStyle} textStyle={textStyle} handleTheOnChange={handleTheOnChange}  />
        <Alert alert={alert}/>
        <div className='container my-3'>
          <TextForm heading="Enter Text To Analyze" bgStyle={bgStyle} textStyle={textStyle}/>
        </div>
        {/* <AboutUs heading="About Text Utils" bgStyle={bgStyle} textStyle={textStyle}/> */}
      </>

  );
}

export default App;
