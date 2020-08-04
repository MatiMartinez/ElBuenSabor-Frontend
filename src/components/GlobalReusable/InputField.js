import React from "react";

const InputField = ({ id, label, type, name, register, defaultValue }) => {
  return (
    <div className="form-group w-100 m-1">
      <label className="col-form-label col-form-label-sm" forhtml={id}>
        {label}
      </label>
      <input
        className="form-control form-control-sm"
        id={id}
        type={type}
        name={name}
        ref={register}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default InputField;
