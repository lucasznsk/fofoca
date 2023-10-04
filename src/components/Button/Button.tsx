import { ButtonHTMLAttributes } from "react";

interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  value: string;
}

export const Button = ({ label, value, ...props }: IPropsButton) => {
  return (
    <div>
      <button
        type="button"
        {...props}
        className="bg-black"
        style={{ color: "red" }}
      >
        {label}
      </button>
    </div>
  );
};
