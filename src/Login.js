import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.form}>
        <h2>Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        /><br />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        /><br />
        <button onClick={handleLogin} className={styles.loginButton}>Login</button>
        <p>Don't have an account? <Link to="/" className={styles.link}>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
