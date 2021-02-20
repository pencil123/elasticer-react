import * as bs from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';

import Aside from './component/Aside';
import LogStat from './pages/LogStat';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <bs.Container fluid className="content">
          <bs.Row>
            <Aside/>
            <LogStat/>
          </bs.Row>
        </bs.Container>
      </BrowserRouter>
  );
}

export default App;
