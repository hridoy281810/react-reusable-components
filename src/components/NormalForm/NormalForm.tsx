import React from 'react';
import { FieldValues, useForm ,FormProvider} from 'react-hook-form';
import cn from '../../utils/cn';
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, TNormalForm } from './Validation';


const NormalForm = () => {
    const methods = useForm<TNormalForm>({
       resolver: zodResolver(SignUpSchema)
    });
    const onSubmit = (data: FieldValues)=>{
console.log(data);
    }
    console.log(watch('name'));
    const {register,handleSubmit,watch,formState:{errors}} = methods
  const double = true 
  return (
    <FormProvider  {...methods}>

    <form onSubmit={handleSubmit(onSubmit)} className={cn('border border-red-500 max-w-md p-5 mx-auto' , {
        "max-w-5xl": double,
        "max-w-md": !double,
    })} >
      <div className={cn(' p-4 grid grid-cols-1  justify-items-center gap-5', {
        "md:grid-cols-2": double,

      })}>
      <div className='w-full max-w-md'>
            <label className='block'> Name </label>
            <input type="text"   id='name ' {...register('name')}/>
            {errors.name && <span className='text-xs text-red-600'>{errors.name?.message}</span>}
      
        </div>
      <div className='w-full max-w-md'>
            <label className='block'> Email </label>
            <input type="email"   id='email ' {...register('email')}/>
            {errors.email && <span className='text-xs text-red-600'>{errors.email?.message}</span>}
        </div>
      <div className='w-full max-w-md'>
            <label className='block'> Password </label>
            <input type="password"   id='password ' {...register('password')}/>
            {errors.password && <span className='text-xs text-red-600'>{errors.password.message} </span>}

        </div>
      </div>
      {/* button section  */}
      <div className={cn(' grid grid-cols-1  justify-items-center gap-5 my-8', {
        "md:grid-cols-2": double,
      })}>
    <div className='w-full max-w-md col-start-1 md:col-start-2 flex justify-end'>
    <button className='bg-purple-500 px-3 py-2 rounded-md text-white w-full md:w-fit' type='submit'>Submit</button>
    </div>
      </div>
    </form>
    </FormProvider>
  );
};

export default NormalForm;