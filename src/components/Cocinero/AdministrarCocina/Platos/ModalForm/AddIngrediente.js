import React from "react";
import { useForm } from "react-hook-form";

import InputField from "../../../../GlobalReusable/InputField";
import { createIngrediente } from "../../../../../API/ApiIngredientes";

export default function AddIngrediente() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await createIngrediente(data);
  };

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
}
