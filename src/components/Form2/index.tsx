import React from 'react';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
import { TextField, Button } from "@material-ui/core";

export default function Form2() {
  const { handleSubmit, errors, control } = useForm()
  const onSubmit = (data: Object) => { console.table(data) };

  return (
    <div className="form form2">
      <h1>Form2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={<TextField />}
          name="form2_1"
          control={control}
          rules={{ required: "必須です" }}
          defaultValue=""
        />
        <div className="errors">
          <ErrorMessage errors={errors} name="form2_1" />
        </div>
        <Controller
          as={<Button color="primary" ><span>送信</span></Button>}
          name="submit"
          control={control}
          defaultValue=""
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  )
}
