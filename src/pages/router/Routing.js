import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Notfound from "./notfound";

import ParkList from '../parkList/ParkList.js';
import ParkDetails from '../parkDetails/ParkDetails.js';
import Search from '../search/Search.js';
const Park = ({ match }) => <ParkDetails parkName = {match.params.name}/>;
const ListParks = ({ match }) => <ParkList stateCode = {match.params.state}/>;

const routing = (
  <Router>
    <div className="Router">
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/parks/:state" component={ListParks} />
        <Route path="/park/:name" component={Park} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

class Routing extends React.Component {
  render(){
    return(routing);
  }
}

export default Routing;
