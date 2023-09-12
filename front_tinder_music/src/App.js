import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import AuthSuccess from "./components/AuthSuccess";
function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get("access_token");

  return (
    <div className="App">
      {accessToken ? <AuthSuccess /> : <LoginButton />}
    </div>
  );
}

export default App;
