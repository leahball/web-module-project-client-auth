import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { push } = useHistory();
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", cred)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username"></label>
            <input
              onChange={handleChange}
              name="username"
              placeholder="username"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="password"
              id="password"
            />
          </div>
        </form>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
