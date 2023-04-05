import "./CustomCheckBox.scss";

interface IChecBoxProps {
  value: boolean;
  action: () => void;
}

export const CustomCheckBox: React.FC<IChecBoxProps> = ({ value, action }) => {
  return (
    <div className="check-box">
      <div
        className={`check-box__custom ${value ? "_checked" : ""}`}
        onClick={action}
      ></div>
    </div>
  );
};
