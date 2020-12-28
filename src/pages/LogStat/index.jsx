import React, {Component} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import * as bs from 'react-bootstrap';

import LogstatListData from './ListData'
import LogstatInfosData from './InfosData'

import RightHeader from '../../component/RightHeader/RightHeader';

class Index extends Component {
  render (){
    return (
        <bs.Col>
          <RightHeader/>
          <Switch>
            <Route path="/logstat/listdata" component={LogstatListData}/>
            <Route path="/logstat/infosdata/:appCode" component={LogstatInfosData}/>
            <Redirect to="/logstat/listdata"/>
          </Switch>
        </bs.Col>
    )
  };
}

export default Index;