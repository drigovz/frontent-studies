import PropTypes from 'prop-types';
import './styles.css';

const Input = props => {
  return (
    <div className="wrapper">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}

      <input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
        {...props}
      />

      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  className: PropTypes.string,
  onChange: PropTypes.func || undefined,
  error: PropTypes.string,
};

export default Input;
