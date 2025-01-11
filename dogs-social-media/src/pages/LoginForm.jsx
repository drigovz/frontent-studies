import { Link } from 'react-router-dom';
import Input from '../components/Input';
import useForm from '../hooks/useForm';
// import { validationType } from '../utilities/enums';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const LoginForm = () => {
  // passando o tipo de validação para o hook useForm
  // const username = useForm(validationType.email);
  // const password = useForm(validationType.password);
  const username = useForm();
  const password = useForm();
  const { userLogin } = useContext(UserContext);

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
    <div>
      <h2>Login</h2>

      <form action="" onSubmit={handleSubmit}>
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

        <Input type="submit" id="submit" name="submit" className="button" value="Enter" />
      </form>
      <Link to="/login/create">Create</Link>
    </div>
  );
};

export default LoginForm;
