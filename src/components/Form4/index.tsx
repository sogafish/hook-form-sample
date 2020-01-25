import React, { useCallback } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form'

export default function Form4() {
  const { register, handleSubmit, setError, clearError, errors, setValue } = useForm();
  const onSubmit = (data: any) => {
    const goodAnswer = 12 * 12;
    if (parseInt(data.answer, 10) !== goodAnswer) return setError('answer', 'notMatch', '不正解です');
    clearError('answer');

    console.log('正解');
  };
  const onSetValue = useCallback(() => {
    setValue('answer', 12 * 12);
  }, [setValue]);

  return (
    <div className="form form4">
      <h1>Form4</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>12 × 12 = </span>
        <input
          name="answer"
          ref={register({ required: '入力してください' })}
        />
        <div className="errors">
          <ErrorMessage errors={errors} name="answer" />
        </div>
        <input
          type="submit"
          value="回答"
        />
        <input
          type="button"
          value="諦める"
          onClick={onSetValue}
        />
      </form>
    </div>
  )
};
