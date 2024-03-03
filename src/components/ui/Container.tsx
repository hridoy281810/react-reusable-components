import { Children, ReactNode } from "react";

type TChildren = {
  children?: ReactNode
}
const Container = ({children}:TChildren) => {
  return (
    <div className="h-full w-full max-w-[1250px] mx-auto bg-slate-100 ">
    {children}
    </div>
  );
};

export default Container;