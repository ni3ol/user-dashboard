import { ChangeEvent } from "react";

type Option = {
  label: string;
  value: string;
};

export const Select = ({
  options,
  label,
  value,
  onChange,
}: {
  options: Option[];
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <>
      {label && <h3>{label}</h3>}
      <select onChange={(e) => onChange(e)} value={value}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
