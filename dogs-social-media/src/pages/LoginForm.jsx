import { Link } from 'react-router-dom';
import Input from '../components/Input';
import useForm from '../hooks/useForm';
// import { validationType } from '../utilities/enums';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Error from '../components/Error';
import './LoginForm.css';

const LoginForm = () => {
  // passando o tipo de validação para o hook useForm
  // const username = useForm(validationType.email);
  // const password = useForm(validationType.password);
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    // realizamos as validações nos campos antes do fetch para a API de login
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);

      // clean inputs before login success
      username.setValue('');
      password.setValue('');
    }
  }

  return (
    <section className="animeLeft">
      <h2 className="title">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Username"
          id="username"
          name="username"
          className="input"
          // desestruturamos o objeto retornado por useForm (que possui o onChange, o value, entre outros)
          {...username}
        />

        <Input type="password" label="Password" id="password" name="password" className="input" {...password} />

        {loading ? (
          <Input type="submit" id="submit" name="submit" className="button" value="Loading..." disabled />
        ) : (
          <Input type="submit" id="submit" name="submit" className="button" value="Enter" />
        )}
      </form>
      <Error error={error} />

      <Link to="/login/forgot-password" className="forgot-password">
        Forgot password?
      </Link>

      <div className="create-account">
        <h2 className="subtitle">Create Account</h2>
        <p>Dont have an account yet? Create your account now!</p>

        <Link className="button" to="/login/create">
          Create
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
