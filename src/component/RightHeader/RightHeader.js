import * as bs from 'react-bootstrap';
import logoImg from '../../imgs/logo.jpg';
import './RightHeader.css';

function RightHeader() {
  return (
      <bs.Container className="rightHeader" fluid>
        <i className="icon iconfont icon-ren-copy"></i>
        <span>LyZhang</span>
      </bs.Container>
  );
}
export default RightHeader;
