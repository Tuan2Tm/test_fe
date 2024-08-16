import { FC, ReactNode } from "react";

interface IProp {
  children: ReactNode;
  className?: string;
}

const Container: FC<IProp> = ({ children, className }) => {
  return (
    <div className="flex justify-center w-full ">
      <div className={`flex flex-col md:flex-row container px-5 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
