import React, { useCallback } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form'

type Reset = (values?: Record<string, any>) => void;

export default function Form3() {
  const { register, handleSubmit, reset, errors }: ({
    register: Function,
    handleSubmit: Function,
    reset: Reset,
    errors: any,
  }) = useForm();
  const onSubmit = (data: Object) => { console.table(data) };
  const onReset = useCallback(() => reset(), [reset])
  const onDefaultReset = useCallback(() => reset({ first_name: 'ジョン', last_name: '万次郎' }), [reset])

  return (
    <div className="form form3">
      <h1>Form3</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>姓:</span>
        <input
          name="last_name"
          ref={register({ required: '姓は必須です。' })}
        />
        <div className="errors">
          <ErrorMessage errors={errors} name="last_name" />
        </div>
        <span>名:</span>
        <input
          name="first_name"
          ref={register({ required: '名は必須です。' })}
        />
        <div className="errors">
          <ErrorMessage errors={errors} name="first_name" />
        </div>
        <input type="submit" />
        <input
          type="button"
          onClick={onReset}
          value="reset"
        />
        <input
          type="button"
          onClick={onDefaultReset}
          value="reset + default set"
        />
      </form>
    </div>
  )
};
