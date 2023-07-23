import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header/>
        <div className='wrapper'>
            <Login/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
