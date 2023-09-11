import React from 'react';

function LoginBtn() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8888/login';
  };

  return (
    <button onClick={handleClick}>Se connecter avec Spotify</button>
  );
}

export default LoginBtn;