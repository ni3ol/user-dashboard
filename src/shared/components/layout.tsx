import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div style={{ padding: 50 }}>{children}</div>
);
