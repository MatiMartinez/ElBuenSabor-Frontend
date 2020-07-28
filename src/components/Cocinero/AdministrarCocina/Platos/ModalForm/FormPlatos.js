import React, { useState } from "react";
import AddPlato from "./AddPlato";
import AddIngrediente from "./AddIngrediente";

export default function FormPlatos(props) {
  // Steps
  const [step, setStep] = useState(true);

  function siguiente() {
    setStep(false);
  }

  return (
    <div>
      {step === true ? (
        <AddPlato siguiente={siguiente} />
      ) : (
        <AddIngrediente siguiente={siguiente} />
      )}
    </div>
  );
}
