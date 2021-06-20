import React from 'react';
import styled from "styled-components";
import Logo from "./Logo/Logo";
import MainTitle from "./MainTitle/MainTitle";

const StyledHeader = styled.header`
  display: block;
  padding: 20px;
  vertical-align: middle;
`;

const Header = () => {
    return (<StyledHeader>
                <Logo/>
                <MainTitle/>
            </StyledHeader>);

}

export default Header;