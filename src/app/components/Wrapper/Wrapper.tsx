import { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="w-full mx-5 max-w-screen-lg">{children}</div>;
};
