import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const url = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token';
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      };

      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error('Error: Login error');
      }

      const loginData = await response.json();
      setUsername('');
      setPassword('');
    } catch (error) {
      throw new Error('Error fetching login:', error.message);
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enter</button>
      </form>
      <Link to="/login/create">Create</Link>
    </div>
  );
};

export default LoginForm;
