import type { TInputProps } from './Input.type';

const Input = ({ label, id, ...props }: TInputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </>
  );
};

export default Input;
