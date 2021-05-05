import React from "react";
import { ButtonBase, DefaultButtonProps } from "./styles";

export interface ButtonProps extends DefaultButtonProps {
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => {
  const onButtonClick = () => {
    onClick && onClick();
  };

  return (
    <ButtonBase onClick={onButtonClick} {...rest}>
      {children}
    </ButtonBase>
  );
};
