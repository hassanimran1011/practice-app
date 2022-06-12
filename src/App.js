
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App = () =>{

  return(
      <>
        <Navbar title='Text Utils' aboutText='About Us'/>
        <div className='container my-3'>
          <TextForm heading="Enter Text To Analyze" />
        </div>
      </>

  );
}

export default App;
