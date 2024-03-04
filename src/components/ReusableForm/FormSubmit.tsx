import React, { useContext } from 'react';
import cn from '../../utils/cn';
import { FormElementContext } from '.';

export const FormSubmit = () => {
  const {double} = useContext(FormElementContext)
return(
  <div className={cn(' grid grid-cols-1  justify-items-center gap-5 my-8', {
    "md:grid-cols-2": double,
  })}>
<div className='w-full max-w-md col-start-1 md:col-start-2 flex justify-end'>
<button className='bg-purple-500 px-3 py-2 rounded-md text-white w-full md:w-fit' type='submit'>Submit</button>
</div>
  </div>
)
 
};

