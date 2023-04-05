import "./CustomInput.scss";
import { useState, KeyboardEvent } from "react";

interface CustomInputProps {
  fontSize: number;
  placeholder: string;
  value: string;
  setValue: (v: string) => void;
  action: () => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  fontSize,
  placeholder,
  value,
  setValue,
  action,
}) => {
  const [isActive, setIsActive] = useState(false);
  const enterAction = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") action();
  };

  return (
    <input
      type="text"
      className={`custom-input ${isActive ? "_active" : ""}`}
      style={{ fontSize: `${fontSize}px` }}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onFocus={() => {
        setIsActive(true);
      }}
      onBlur={() => {
        setIsActive(false);
      }}
      onKeyDown={enterAction}
    />
  );
};
