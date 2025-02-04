import { useContext } from 'react';
import { validationType } from '../utilities/enums';
import useForm from '../hooks/useForm';
import useFetch from '../hooks/useFetch';
import Input from '../components/Input';
import Error from '../components/Error';
import { USER_POST } from '../api/userEndpoints';
import { UserContext } from '../contexts/UserContext';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm(validationType.email);
  const password = useForm(validationType.password);
  const { error, userLogin } = useContext(UserContext);
  const { loading, request, fetchError } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Register</h1>

      <form onSubmit={handleSubmit}>
        <Input id="username" type="text" label="Username" name="username" {...username} />
        <Input id="email" type="email" label="E-mail" name="email" {...email} />
        <Input id="password" type="password" label="Password" name="password" {...password} />

        {loading ? (
          <Input type="submit" id="submit" name="submit" className="button" value="Loading..." disabled />
        ) : (
          <Input type="submit" id="submit" name="submit" className="button" value="Register your account" />
        )}

        <Error error={error ?? fetchError} />
      </form>
    </section>
  );
};

export default LoginCreate;
