import { FC } from "react";
import styled from "styled-components";

interface IButtonprops {
  children: string;
}

const Button: FC<IButtonprops> = (props) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

export const StyledButton = styled.button`
  width: 220px;
  height: 80px;
  font-size: 20px;
  
`;
export default Button;
