import React, { useState } from "react";

export default function CheckBoxField({
  id,
  name,
  label,
  defaultValue,
  register,
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="form-group mt-3 m-1">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          name={name}
          defaultChecked={value}
          className="custom-control-input"
          id={id}
          ref={register}
          onChange={(e) => setValue(e.target.value)}
        />
        <label className="custom-control-label" htmlFor="checkboxRubroInsumo">
          {label}
        </label>
      </div>
    </div>
  );
}
