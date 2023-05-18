import { ReactNode } from "react";

export const Modal = ({
  children,
  title,
  onClose,
}: {
  children: ReactNode;
  title: string;
  onClose: () => void;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        border: "1px solid grey",
        padding: 20,
        borderRadius: 20,
      }}
    >
      <h1>{title}</h1>
      {children}

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
        {<button onClick={onClose}>Close</button>}
      </div>
    </div>
  );
};
