import React from 'react';
import '../styles/Button.scss';

export interface IButton {
  color?: IButtonColor;
  children?: React.ReactNode;
  onClick?: () => void;
}

export type IButtonColor = 'primary' | 'secondary';

const Button: React.FC = ({
  children,
  color,
  onClick,
}: IButton): JSX.Element => {
  return (
    <button onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
};

export default Button;
