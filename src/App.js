import React from "react";
import AddEvent from "./components/AddEvent"
import OnGoing from "./components/OnGoing";
import Upcoming from "./components/Upcoming";
import Finished from "./components/Finished";
import HSettings from "./components/HSettings";
import EventTabs from "./components/EventTabs";
import UOnGoing from "./user components/UOnGoing";
import UUpcoming from "./user components/UUpcoming";
import UFinished from "./user components/UFinished";
import UAll from './user components/UAll';
import UEvent from './user components/UEvent';
import {BrowserRouter,Switch,Route,useParams} from "react-router-dom";
import UEventTabs from './user components/UEventTabs'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/host/" exact component={OnGoing}/>
        <Route path="/host/addevent" exact component={AddEvent}/>
        <Route path="/host/finished" exact component={Finished}/>
        <Route path="/host/upcoming" exact component={Upcoming}/>
        <Route path="/host/settings" exact component={HSettings}/>
        <Route path="/host/event/:eventname" component={EventTabs}/>
        <Route path="/user/" exact component={UAll}/>
        <Route path="/user/ongoing" exact component={UOnGoing}/>
        <Route path="/user/finished" exact component={UFinished}/>
        <Route path="/user/upcoming" exact component={UUpcoming}/>
        <Route path="/user/settings" exact component={HSettings}/>
        <Route path="/user/account" exact component={UEventTabs}/>
        <Route path="/user/event/:eventname" component={UEvent}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
