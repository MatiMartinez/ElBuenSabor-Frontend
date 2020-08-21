import React from "react";

export default function InputSmall({
  id,
  label,
  type,
  name,
  value,
  onChange,
  required,
}) {
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
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
