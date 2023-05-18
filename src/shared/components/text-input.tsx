import { ChangeEvent } from "react";

type TextInputProps = {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  value: string;
};

export const TextInput = (props: TextInputProps) => {
  const { label, onChange, value, isRequired = false } = props;
  return (
    <>
      <p>{label}</p>
      <input
        value={value}
        onChange={(e) => onChange(e)}
        aria-label={label}
        required={isRequired}
      />
    </>
  );
};
