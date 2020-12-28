import React, {Component} from 'react';
import axios from "axios";
import * as bs from 'react-bootstrap';

class Index extends Component {
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
          <bs.Table>
            <thead>
            <tr>
              <th>服务名</th>
              <th>服务管理员</th>
              <th>PV</th>
              <td>UV</td>
              <td>平均响应时间</td>
              <td>流量</td>
              <td>详情</td>
            </tr>
            </thead>
            <tbody>
            {
              this.state.infos.map((stat) => {
                    return (
                        <tr key={stat.appCode}>
                          <td>{stat.platform.appName}</td>
                          <td>{stat.platform.platformAdmin} / {stat.platform.platformAdminCode}</td>
                          <td>{stat.stats[0].pv}</td>
                          <td>{stat.stats[0].uv}</td>
                          <td>{stat.stats[0].avgResponsetime}</td>
                          <td>{stat.stats[0].sumSize}</td>
                          <td><bs.Button variant="info" href={`/logstat/infosdata/${stat.appCode}`}>详情</bs.Button></td>
                        </tr>
                    )
                  }
              )
            }
            </tbody>
          </bs.Table>
    );
  }
}

export default Index;