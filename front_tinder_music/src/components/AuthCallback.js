import React, { useEffect } from 'react';

function AuthCallback() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    if (accessToken) {
      // Utilisez l'access token
      console.log(`Access Token: ${accessToken}`);
    }
  }, []);

  const handleClick = () => {
    
  }

  return (
    <div>
      <h2>Authentification réussie</h2>
      <button onClick={handleClick}>Acceder a l'application</button>
    </div>
  );
}

export default AuthCallback;