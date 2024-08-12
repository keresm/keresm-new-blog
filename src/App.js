import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>New North</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Дарова! меня зовут Айыына
        </p>
        <nav>
          <ul>
            <li><a href="index.js">Эта страница</a></li>
            <li><a href="catalog.html">Другая страница</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
