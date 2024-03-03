import React, { createContext } from 'react';
import cn from '../../utils/cn';
export const FormElementContext = createContext<{double: boolean} | null>(null)
export const Form = ({children,onSubmit,double}) => {

  return (
    <FormElementContext.Provider value={double}>
  <form onSubmit={onSubmit} className={cn('border border-red-500 max-w-md p-5 mx-auto' , {
      "max-w-5xl": double,
      "max-w-md": !double,
  })}>
        {children}
    </form>
    </FormElementContext.Provider>
  
  );
};
