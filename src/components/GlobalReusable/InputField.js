import React from 'react';

const InputField = ({ id, label, type, name, register, defaultValue }) => {
  return (
    <div className="form-group">
      <label className="control-label" forhtml={id}>
        {label}
      </label>
      <input
        className="form-control"
        id={id}
        type={type}
        name={name}
        ref={register}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputField;
