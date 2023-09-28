'use client';

interface IPropsButton {
  label: string;
  onClick: any;
  value: string;
}

export const Button = ({ label, onClick, value }: IPropsButton) => {
  return (
    <div>
      <button value={value} type="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
