import React, {FC} from 'react';
import styled from "styled-components";

const StyledMainTitle = styled.h1`
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: calc(100% - 320px);
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  color: ${props=>props.theme.colors.textDark};
  user-select: none;
`;

const MainTitle: FC = () => {
    return (
        <StyledMainTitle>Конструктор прайсов</StyledMainTitle>
    );
};

export default MainTitle;