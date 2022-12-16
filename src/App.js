import logo from './logo.svg';
import './App.css';
import {HomePage} from './Pages/HomePage'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <HomePage/>
    <Footer/>
    </div>
  );
}

export default App;
