import { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="w-full mx-5 max-w-[52.5rem]">{children}</div>;
};
