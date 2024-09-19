import { PropsWithChildren } from "react";

export const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="font-bold tracking-tight text-2xl lg:text-3xl">{children}</h2>
);
