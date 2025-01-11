import { createContext, useState } from 'react';
import { TOKEN_POST } from '../api/tokenEndpoints';
import { USER_GET } from '../api/userEndpoints';

export const UserContext = createContext();

export const UserContextStorage = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function saveToken(token) {
    window.localStorage.setItem('_t', token);
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        setError('Error: User fetch error');
      }

      const json = await response.json();
      setUser(json);
    } catch (error) {
      setError('Error fetching user:', error.message);
    }
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username: username, password: password });

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        setError('Error: Login error');
      }

      const { token } = await response.json();
      saveToken(token);
      getUser(token);
    } catch (error) {
      setError('Error fetching login:', error.message);
    }
  }

  return <UserContext.Provider value={{ user, userLogin, loading, error }}>{children}</UserContext.Provider>;
};
