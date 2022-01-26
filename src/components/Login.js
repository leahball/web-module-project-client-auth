import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username"></label>
            <input placeholder="username" id="username" />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input type="password" placeholder="password" id="username" />
          </div>
        </form>
      </div>
      <button>Submit</button>
    </>
  );
};

export default Login;
