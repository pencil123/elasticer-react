import * as bs from 'react-bootstrap';
import Aside from './component/Aside/aside';
import Home from './pages/Home/home';
import './App.css';


function App() {
  return (
      <bs.Container fluid className="content">
        <bs.Row>
          <Aside />
          <Home />
        </bs.Row>
      </bs.Container>
  );
}

export default App;
