import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPanel from "./components/UserPanel";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import CreateBus from "./components/CreateBus";

function App() {
  return (
    <div className="App">
      {/* <AdminDashboard></AdminDashboard> */}
      {/* <UserPanel></UserPanel>
      <AdminDashboard></AdminDashboard>
      <Ticket location={"Bamenda"} destination={"Buea"} price={"5000"} busNum={203} timeOfDay={"Night"} timeOfDeparture={"12pm"} dateOfDeparture={"April 1"}></Ticket>
      <PopUp></PopUp>
      <UserPanel></UserPanel>
      <PopUp></PopUp>
      <Login></Login>
      <Register></Register>
      <CreateBus></CreateBus> */}
      <Router>
        <Routes>
          <Route path="/" /* exact */ element={<Login />}></Route>
          <Route path="/user-panel" /* exact */ element={<UserPanel />}></Route>
          <Route
            path="/admin-dashboard"
            /* exact */
            element={<AdminDashboard />}
          ></Route>
          <Route path="/register" /* exact */ element={<Register />}></Route>
          <Route path="/create-bus" /* exact */ element={<CreateBus />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
