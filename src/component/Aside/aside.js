import * as bs from 'react-bootstrap';
import logoImg from '../../imgs/logo.jpg';
import './aside.css';

function Aside() {
  return (
      <bs.Col lg={3} className="Aside">
        <bs.Image src={logoImg} alt="logo images" rounded/>
        <bs.Nav defaultActiveKey="/home" className="flex-column">
          <bs.Nav.Link href="/home">
            <i className="icon iconfont icon-Home"></i>
            <span>首页</span>
          </bs.Nav.Link>
          <bs.Nav className="nav-link">
            <i className="icon iconfont icon-ren-copy"></i>
            <span>项目管理</span>
            <bs.Nav.Link as='span'>
              <bs.Nav.Link eventKey="appShow">
                <i className="icon iconfont icon-ren-copy"></i>
                <span>现目展示</span>
              </bs.Nav.Link>
              <bs.Nav.Link eventKey="appAdd">
                <i className="icon iconfont icon-ren-copy"></i>
                <span>添加项目</span>
              </bs.Nav.Link>
            </bs.Nav.Link>
          </bs.Nav>
          <bs.Nav.Link eventKey="statShow">
            <i className="icon iconfont icon-align_horizontal_left"></i>
            <span>数据查询</span></bs.Nav.Link>
        </bs.Nav>
      </bs.Col>
  );
}
export default Aside;
