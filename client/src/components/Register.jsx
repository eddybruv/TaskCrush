import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./componentStyles/Form.css";
import "./componentStyles/Register.css";
import Button from "./Button";
import CustomInputs from "./CustomInputs";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("/api/user/create-user", {
      email,
      password,
      firstName,
      lastName,
    });
    if (result.status === 200) {
      sessionStorage.setItem("user", JSON.stringify(result.data.data));
      navigate("/user-panel");
    } else {
      alert("user not registered");
    }
  };

  return (
    <div className="ccontainer">
      <div className="Rright ">
        <div className="rightChild ss"></div>
      </div>
      <div className="Lleft">
        <form action="">
          <h1>Register</h1>

          <CustomInputs
            placeholder={"First Name"}
            value={firstName}
            setState={setFirstName}
          />
          <CustomInputs
            placeholder={"Last Name"}
            value={lastName}
            setState={setLname}
          />
          <CustomInputs
            placeholder={"Email"}
            value={email}
            setState={setEmail}
          />
          <CustomInputs
            placeholder={"Password"}
            value={password}
            setState={setPassword}
            type={"password"}
          />
          <Button handleAction={handleSubmit} btnText={"Register"} path="/" />
          {/* <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
