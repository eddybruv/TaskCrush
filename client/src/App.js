import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import PopUp from './components/PopUp';
import Ticket from './components/Ticket';
// import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserPanel from './components/UserPanel';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import CreateBus from './components/CreateBus';

function App() {
  return (
    <div className="App">
      <UserPanel></UserPanel>
      <AdminDashboard></AdminDashboard>
      <Ticket location={"Bamenda"} destination={"Buea"} price={"5000"} busNum={203} timeOfDay={"Night"} timeOfDeparture={"12pm"} dateOfDeparture={"April 1"}></Ticket>
      {/* <PopUp></PopUp> */}
      {/* <UserPanel></UserPanel> */}
      {/* <PopUp></PopUp> */}
      <Login></Login>
      <Register></Register>
      <CreateBus></CreateBus>
      {/* <Router>
        <Route path = "/" exact component={Login}></Route>
        <Route path = "/UserPanel" exact component={UserPanel}></Route>
        <Route path = "/AdminDashboard" exact component={AdminDashboard}></Route>
        <Route path = "/Login" exact component={Login}></Route>
        <Route path = "/CreateBus" exact component={CreateBus}></Route>
      </Router> */}
    </div>
  );
}

export default App;
