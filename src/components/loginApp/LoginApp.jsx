import React, { useState } from "react";
import TodoApp from "../todoApp/TodoApp";
import "./loginApp.style.css";

const credentials = {
  username: "Aida",
  password: "123",
};

const LoginApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tryCount, setTryCount] = useState(3);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!username && !password) {
      alert("Please enter both username and password");
      return;
    }
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      setIsSubmitted(true);
      setIsSuccess(true);
    } else {
      setUsername("");
      setPassword("");
      setTryCount(tryCount - 1);
      setIsSubmitted(true);
      setIsSuccess(false);
    }
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const showErrorMessage = () => {
    if (tryCount > 0) {
      return <p>Try Again! {tryCount} attempts left</p>;
    }
    if (tryCount === 0) {
      return <p>Your account is locked</p>;
    }
    return null;
  };

  return (
    <div className="container">
      {isSubmitted && isSuccess ? (
        <TodoApp />
      ) : (
        <form onSubmit={onSubmitHandler}>
          <div className="form-item">
            <label>Username</label>
            <input
              name="username"
              value={username}
              onChange={onUsernameChange}
            ></input>
          </div>
          <div className="form-item">
            <label>Password</label>
            <input
              name="password"
              value={password}
              onChange={onPasswordChange}
            ></input>
          </div>
          <button disabled={tryCount === 0} type="submit">
            Login
          </button>
          {isSubmitted && !isSuccess ? showErrorMessage() : null}
        </form>
      )}
    </div>
  );
};

export default LoginApp;
