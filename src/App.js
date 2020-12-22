import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Header from './component/PageHome/header';
import Footer from './component/PageHome/footer';
import * as bs from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Header/>
      <bs.Container className="App-header">
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
      </bs.Container>
      <Footer/>

    </div>
  );
}

export default App;
