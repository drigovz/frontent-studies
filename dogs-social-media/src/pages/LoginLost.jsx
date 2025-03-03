import Input from '../components/Input';
import Error from '../components/Error';
import useForm from '../hooks/useForm';
import useFetch from '../hooks/useFetch';
import { PASSWORD_LOST } from '../api/passwordEndpoints';

const LoginLost = () => {
  const login = useForm();
  const { data, loading, fetchError, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const resetUrl = window.location.href.replace('forgot-password', 'reset-password');
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        resetUrl,
      });

      await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Forgot password?</h1>

      {data ? (
        <p style={{ color: '#4c1', fontWeight: 'bold' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input type="text" label="E-mail or Username" id="login" name="login" className="input" {...login} />
          {loading ? (
            <Input disabled type="submit" className="button" value="Sending Email..." />
          ) : (
            <Input type="submit" className="button" value="Send Email" />
          )}
        </form>
      )}

      {fetchError && <Error error={fetchError} />}
    </section>
  );
};

export default LoginLost;
