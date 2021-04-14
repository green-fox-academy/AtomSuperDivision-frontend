import React from "react";

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

export default UserInput;
