import { Link } from 'react-router-dom';
import Input from '../components/Input';
import useForm from '../hooks/useForm';
// import { validationType } from '../utilities/enums';
import { TOKEN_POST } from '../api/tokenEndpoints';
import { USER_GET } from '../api/userEndpoints';
import { useEffect } from 'react';

const LoginForm = () => {
  // passando o tipo de validação para o hook useForm
  // const username = useForm(validationType.email);
  // const password = useForm(validationType.password);
  const username = useForm();
  const password = useForm();

  function saveToken(token) {
    window.localStorage.setItem('_t', token);
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error: User fetch error');
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      throw new Error('Error fetching user:', error.message);
    }
  }

  // try get user when access the page
  useEffect(() => {
    const token = window.localStorage.getItem('_t');
    if (token) {
      getUser(token);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    // realizamos as validações nos campos antes do fetch para a API de login
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({ username: username.value, password: password.value });

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Error: Login error');
        }

        const json = await response.json();
        // save token on localstorage
        saveToken(json.token);
        getUser(json.token);
        // clean inputs before login success
        username.setValue('');
        password.setValue('');
      } catch (error) {
        throw new Error('Error fetching login:', error.message);
      }
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
