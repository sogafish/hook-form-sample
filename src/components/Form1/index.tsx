import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form'

export default function Form1() {
  const { register, handleSubmit, watch, errors } = useForm({  validateCriteriaMode: 'all' });
  const onSubmit = (data: Object) => { console.table(data) };

  return (
    <div className="form form1">
      <h1>Form1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <span>1_1: </span>
          <input name="form1_1" defaultValue="test" ref={register} />
          <span className="sub-text">*watched</span>
        </div>
        <div className="form-section">
          <span>1_2: </span>
          <input
            name="form1_2"
            ref={
              register({
                required: '1_2は必須です',
                minLength : {
                  value: 5,
                  message: '5桁以上必要です'
                }
              })
            }
          />
          <span className="sub-text">*required</span>
        </div>
        <div className="form1-watch">
          <p className="form1-watch-text">watch output: {watch('form1_1')}</p>
        </div>
        <div className="errors">
          <ErrorMessage errors={errors} name="form1_2" />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
};
