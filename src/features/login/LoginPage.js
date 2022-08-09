import React from 'react';
import { useAuth } from '../../shared/UseAuth';

const LoginPage = () => {
  const { onLogin } = useAuth();
  const handleLogin = () => {
    onLogin('Sam');
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
