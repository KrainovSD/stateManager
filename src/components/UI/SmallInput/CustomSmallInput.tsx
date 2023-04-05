import "./CustomSmallInput.scss";
import { KeyboardEvent } from "react";

interface CustomInputProps {
  fontSize: number;
  placeholder: string;
  value: string;
  setValue: (v: string) => void;
  action: () => void;
}

export const CustomSmallInput: React.FC<CustomInputProps> = ({
  fontSize,
  placeholder,
  action,
  setValue,
  value,
}) => {
  const enterAction = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") action();
  };

  return (
    <input
      type="text"
      className="custom-small-input"
      style={{ fontSize: `${fontSize}px` }}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyDown={enterAction}
    />
  );
};
