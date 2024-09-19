import { PropsWithChildren } from "react";

interface WrapperProps extends PropsWithChildren {
  isFooter?: boolean;
}
export const Wrapper = ({ children, isFooter }: WrapperProps) => {
  return (
    <div className={`mx-5 max-w-[52.5rem] ${isFooter ? "w-full" : ""}`}>
      {children}
    </div>
  );
};
