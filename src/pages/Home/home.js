import logo from "../../logo.svg";
import * as bs from 'react-bootstrap';
import RightHeader from '../../component/RightHeader/RightHeader';


function Home() {
  return (
      <bs.Col>
        <RightHeader/>
        <div className="App">
          内容部分
        </div>
      </bs.Col>
  );
}
export default Home;
