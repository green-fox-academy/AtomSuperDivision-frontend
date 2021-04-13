import React from 'react';
import PropTypes from 'prop-types';

function UserInput({
  divClass,
  labelClass,
  title,
  type,
  id,
  inputClass,
  required,
  value,
  whenChange,
}) {
  return (
    <div className={divClass}>
      <label className={labelClass} htmlFor={id}>
        {title}
      </label>
      <input
        type={type}
        id={id}
        className={inputClass}
        required={required}
        value={value}
        onChange={whenChange}
      />
    </div>
  );
}
UserInput.propTypes = {
  divClass: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  required: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  whenChange: PropTypes.func.isRequired,
};

UserInput.defaultProps = {
  required: '',
};
export default UserInput;