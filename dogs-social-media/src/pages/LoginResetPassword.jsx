import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Error from '../components/Error';
import useForm from '../hooks/useForm';
import useFetch from '../hooks/useFetch';
import { PASSWORD_RESET } from '../api/passwordEndpoints';
import { useNavigate } from 'react-router-dom';

const LoginResetPassword = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const { loading, fetchError, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key && login) {
      setKey(key);
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <section className="container">
      <h1 className="title">
        Reset your <br />
        password
      </h1>

      <form onSubmit={handleSubmit}>
        <Input type="password" label="Password" id="password" name="password" className="input" {...password} />

        {loading ? (
          <Input disabled type="submit" className="button" value="Reseting your password..." />
        ) : (
          <Input type="submit" className="button" value="Reset password" />
        )}
      </form>

      {fetchError && <Error error={fetchError} />}
    </section>
  );
};

export default LoginResetPassword;
