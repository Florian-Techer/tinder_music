import React from "react";
import LoginBtn from "./components/LoginBtn.js";
import AuthCallback from "./components/AuthCallback.js";
import "./App.css";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get("access_token");

  return (
    <div className="App">{accessToken ? <AuthCallback /> : <LoginBtn />}</div>
  );
}

export default App;
