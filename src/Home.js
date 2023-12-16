import logo from './logo.jpg';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NerdWeb
        </p>
        
        <Link to="pel"><button class='button'><span>Sign Up!</span></button></Link>

      </header>
    </div>
  );
}

export default Home;