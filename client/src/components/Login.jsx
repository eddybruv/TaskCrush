import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./componentStyles/Form.css";
import CustomInputs from "./CustomInputs";
import Button from "./Button";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("/api/user/login", { email, password });
    if (result.status === 200) {
      sessionStorage.setItem("user", JSON.stringify(result.data.data));
      if (
        result.data.data.email === "admin@gmail.com" &&
        result.data.data.password === "admin"
      ) {
        console.log(result.data.data);
        navigate("/admin-dashboard");
      } else {
        console.log(result.data.data);
        navigate("/user-panel");
      }
    } else {
      alert("user not registered");
    }
  };

  return (
    <div className="ccontainer">
      <div className="Rright">
        <div className="rightChild"></div>
      </div>
      <div className="Lleft">
        <form action="">
          <h1>Login</h1>
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
          {/* <Button btnText={"Login"}/> */}
          <Button handleAction={handleSubmit} btnText={"Login"} />
          <Link className="linkk" to="/register">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
