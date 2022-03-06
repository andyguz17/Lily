import React from 'react';
import '../styles/Button.scss';

export interface IButton {
  children?: React.ReactNode;
}

const Button: React.FC = ({ children }: IButton): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
