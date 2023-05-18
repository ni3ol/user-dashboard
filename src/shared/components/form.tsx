import { ReactNode } from "react";

export const Form = ({
  children,
  handleSubmit,
}: {
  children: ReactNode;
  handleSubmit: (d: any) => void;
}) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};
