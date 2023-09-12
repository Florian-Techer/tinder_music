import React, { useEffect } from "react";

function AuthSuccess() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
    if (accessToken) {
      // Utilisez l'access token
      console.log(`Access Token: ${accessToken}`);
    }
  }, []);

  return (
    <div>
      <h2>Authentification réussie</h2>
    </div>
  );
}

export default AuthSuccess;
