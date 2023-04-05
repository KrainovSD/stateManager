import "./CustomButton.scss";
import { PropsWithChildren } from "react";

interface CustomButtonProps {
  fontSize: number;
  action: () => void;
}

export const CustomButton: React.FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  fontSize,
  action,
}) => {
  return (
    <div
      className="custom-button"
      style={{ fontSize: `${fontSize}px` }}
      onClick={action}
    >
      <p>{children}</p>
    </div>
  );
};
