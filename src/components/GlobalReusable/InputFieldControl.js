import React from "react";

export default function InputFieldControl({
  label,
  type,
  name,
  value,
  handleChange,
}) {
  return (
    <div className="input-group mb-4 w-100">
      <input
        className="form-control border-r-none"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <div className="input-group-prepend">
        <span className="input-group-text text-muted" id="">
          {label}
        </span>
      </div>
    </div>
  );
}
