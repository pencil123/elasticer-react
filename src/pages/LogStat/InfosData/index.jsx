import React, {Component} from 'react';
import axios from "axios";
import * as bs from 'react-bootstrap';

class Index extends Component {
  state = {
    infos:[],
    err:''
  }

  componentDidMount() {
    const {appCode} = this.props.match.params;
    axios.get(`http://localhost:3000/elastic/platform/${appCode}`).then(
        response => {
          console.log('成功了',response.data.stats);
          this.setState({infos:response.data.stats});
        },
        error => {console.log('失败了',error);}
    )
  }

  render() {
    console.log("出信息：",this.state.infos);
    return (
        <bs.Table>
          <thead>
          <tr>
            <th>日期</th>
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
                        <td>{stat.createDate}</td>
                        <td>{stat.pv}</td>
                        <td>{stat.uv}</td>
                        <td>{stat.avgResponsetime}</td>
                        <td>{stat.sumSize}</td>
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