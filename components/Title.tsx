import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: Props) => {
  return (
    <h2 className={twMerge("text-2xl font-semibold", className)}>{children}</h2>
  );
};

export default Title;
