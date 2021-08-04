import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  isOutlined = false,
  ...rest
}) => {
  return (
    <Container {...rest} isOutlined={isOutlined}>
      {children}
    </Container>
  );
};
