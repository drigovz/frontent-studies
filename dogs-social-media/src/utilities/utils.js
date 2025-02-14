import { TOKEN_STORAGE_KEY } from '../utilities/consts';

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const saveToken = token => {
  window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const removeToken = () => {
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
};

export const validations = {
  // cria um objeto com a regex e a mensagem de erro para validar o email
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email',
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
    message: `Password must contain:
        at least 8 characters
        with at least one capital letter
        one number and one special character`,
  },
  number: {
    regex: /^\d+$/,
    message: 'Use only numbers',
  },
};
