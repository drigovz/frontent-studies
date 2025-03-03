import { useState } from 'react';
import { validations } from '../utilities/utils';

const useForm = validationType => {
  // valor e função para atualizar o valor
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    // veriica primeiramente se estamos passando a validação
    // const password = useForm(false); -> não passamos a validação
    if (validationType === false) return true;

    // verifica se o campo está vazio
    if (value.length === 0) {
      setError('Fill in this field');
      return false;
      // verificamos se o tipo de validação é um email
      // e se o valor passado é um email válido através de regex
    } else if (validations[validationType] && !validations[validationType].regex.test(value)) {
      // se o valor for inválido, retornamos a mensagem de erro
      setError(validations[validationType].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  // função de atualização do valor
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    // exportamos a funcão de validação como uma função,
    //  que já vai ser ativada verificando o valor do input
    // para podermos utilizar da seguinte forma:
    // username.validate() -> retorna true ou false
    validate: () => validate(value),
    // validaçao quando o usuário clica no input do formulário
    // ou clica fora do input do formulário
    onBlur: () => validate(value),
  };
};

export default useForm;
