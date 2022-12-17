import logo from './logo.svg';
import './App.css';
import {HomePage} from './Pages/HomePage'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRouter from './Routes/MainRoute';

function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <AllRouter/>
    <Footer/>
    </div>
  );
}

export default App;
