import * as bs from 'react-bootstrap';
import logoImg from '../../imgs/logo.jpg';
import './aside.css';

function Aside() {
  return (
      <bs.Col lg={3} className="Aside">
        <bs.Image src={logoImg} alt="logo images" rounded/>
        <bs.Nav defaultActiveKey="/home" className="flex-column" variant="pills">
          <bs.Nav.Link href="/home">首页</bs.Nav.Link>
          <bs.Nav.Link>项目管理
            <bs.Nav className="flex-column">
              <bs.Nav.Link eventKey="appShow">现目展示</bs.Nav.Link>
              <bs.Nav.Link eventKey="appAdd">添加项目</bs.Nav.Link>
            </bs.Nav>
          </bs.Nav.Link>
          <bs.Nav.Link eventKey="statShow">数据查询</bs.Nav.Link>
        </bs.Nav>
      </bs.Col>
  );
}
export default Aside;
