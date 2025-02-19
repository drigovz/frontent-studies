import PropTypes from 'prop-types';
import './styles.css';

const Textarea = props => {
  return (
    <div className="wrapper">
      {props.label && (
        <label className="label" htmlFor={props.id}>
          {props.label}
        </label>
      )}

      <textarea
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        rows={props.rows ?? '4'}
        cols={props.cols ?? '50'}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className ?? 'input'}
      />

      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  rows: PropTypes.string,
  cols: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func || undefined,
  onBlur: PropTypes.func || undefined,
  error: PropTypes.string,
};

export default Textarea;
