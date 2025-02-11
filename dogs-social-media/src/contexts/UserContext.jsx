import { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST } from '../api/tokenEndpoints';
import { USER_GET } from '../api/userEndpoints';
import { TOKEN_STORAGE_KEY } from '../utilities/consts';

export const UserContext = createContext();

export const UserContextStorage = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function getToken() {
    return window.localStorage.getItem(TOKEN_STORAGE_KEY);
  }

  function saveToken(token) {
    window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
  }

  function removeToken() {
    window.localStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  // função de logout, remove o token e limpa todos os estados do usuário
  const userLogout = useCallback(async function () {
    setUser(null);
    setError(null);
    setLoading(false);
    setUserIsLogged(false);
    removeToken();
  }, []);

  //função para logar o usuário automaticamente se o token for válido
  useEffect(() => {
    async function autologin() {
      try {
        setError(null);
        setLoading(true);

        // tenta pegar o token se ele já existir
        const token = getToken();
        if (token) {
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            setError(`Invalid token`);
            setLoading(false);
            removeToken();
            return;
          }

          // se tudo estiver correto, realiza o autologin
          getUser(token);
          setUserIsLogged(true);
        }
      } catch (error) {
        setError(`Error: ${error}`);
        await userLogout(); // para garantir que em caso de token inválido, o token seja removido do browser
      } finally {
        setLoading(false);
      }
    }

    autologin();
  }, [userLogout]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    if (!response.ok) {
      setError(`Error: Login error: ${response.statusText}`);
    }

    const json = await response.json();
    setUser(json);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      setUserIsLogged(false);

      const { url, options } = TOKEN_POST({ username: username, password: password });
      const response = await fetch(url, options);
      if (!response.ok) {
        setError(`Error: Login error: ${response.statusText}`);
        setLoading(false);
        removeToken();
        return;
      }

      const { token } = await response.json();
      // se tudo ok, loga o usuário e realiza o autologin
      saveToken(token);
      await getUser(token);
      setUserIsLogged(true);
      // e na sequencia, redireciona o usuário para a página de perfil dele
      navigate('/account');
    } catch (error) {
      setError('Error fetching login:', error.message);
      setLoading(false);
      removeToken();
    }
  }

  return (
    <UserContext.Provider value={{ user, userLogin, userIsLogged, userLogout, loading, error, setError, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
