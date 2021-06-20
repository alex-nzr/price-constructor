import React, {FC} from 'react';
import logo from "./logo.svg";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: inline-block;
  width: 320px;
  height: 100%;
  padding-right: 40px;
  border-right: 2px dashed ${props => props.theme.colors.textBlue};
  user-select: none;
  vertical-align: middle;
  & img{
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
  & span{
    font-weight: 700;
    font-size: 12px;
  }
`;

const Logo: FC = () => {
    return (
        <StyledLogo>
            <img src={logo} alt="logo"/>
            <span>Сертифицированный производитель<br/>образовательных технологий для детей</span>
        </StyledLogo>
    );
};

export default Logo;