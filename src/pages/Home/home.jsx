import React, {Component} from 'react';
import * as bs from 'react-bootstrap';
import axios from 'axios';

import RightHeader from '../../component/RightHeader/RightHeader';

class Home extends Component {

  state = {
    infos:[],
    err:''
  }

  componentDidMount() {
    axios.get("http://localhost:3000//elastic/yesterday").then(
        response => {
          console.log('成功了',response.data);
          this.setState({infos:response.data});
        },
        error => {console.log('失败了',error);}
    )
  }

  render() {
    return (
        <bs.Col>
          <RightHeader/>
          <bs.Table>
            <thead>
            <tr>
              <th>AppID</th>
              <th>服务名</th>
              <th>服务管理员</th>
              <th>PV</th>
              <td>UV</td>
              <td>平均响应时间</td>
              <td>流量</td>
            </tr>
            </thead>
            <tbody>
            {
              this.state.infos.map((stat) => {
                    return (
                        <tr key={stat.appCode}>
                          <td>{stat.appCode}</td>
                          <td>{stat.platform.appName}</td>
                          <td>{stat.platform.platformAdmin}</td>
                          <td>{stat.stats[0].pv}</td>
                          <td>{stat.stats[0].uv}</td>
                          <td>{stat.stats[0].avgResponsetime}</td>
                          <td>{stat.stats[0].sumSize}</td>
                        </tr>
                    )
                  }
              )
            }
            </tbody>
          </bs.Table>
        </bs.Col>
    );
  }
}

export default Home;