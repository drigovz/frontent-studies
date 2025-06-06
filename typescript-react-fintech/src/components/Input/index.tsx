import { inputStyle, labelStyle } from './input.style';
import type { TInputProps } from './Input.type';

const Input = ({ label, id, ...props }: TInputProps) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input style={inputStyle} id={id} {...props} />
    </div>
  );
};

export default Input;
