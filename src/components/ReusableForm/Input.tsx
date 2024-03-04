import React from 'react';

export const Input = ({errors,register,type,label}) => {
  return (
    <div className='w-full max-w-md'>
    <label className='block'> {label} </label>
    <input type={type}   id='name ' {...register}/>
    {errors.name && <span className='text-xs text-red-600'>{errors.name.message}</span>}

</div>
  );
};

