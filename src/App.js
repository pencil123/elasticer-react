import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert dismissible variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
           BootStrap  Alert Warning!
          </p>
        </Alert>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
