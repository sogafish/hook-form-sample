import React from 'react';
import { useForm } from 'react-hook-form'

export default function Form2() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data: any) => { console.log(data) }

  return (
    <div className="form2">
      <p>Form2</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue="test" ref={register} />
        <input name="exampleRequired" ref={register({ required: true })} />
        <p className="error-text">{errors.exampleRequired && <span>This field is required</span>}</p>
        <input type="submit" />
      </form>
    </div>
  )
}
