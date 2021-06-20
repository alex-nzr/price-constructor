import React, {FC} from 'react';
import styled from "styled-components";
import {useTypesSelector} from "../../../hooks/useTypesSelector";
import {EBlockTypes} from "../../../types/content-blocks";

const StyledPdfFooter = styled.div`
  padding: 15px 150px;
  & span{
    position: relative;
    display: block;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.colors.textBlue};
    text-align: center;
    &:before,&:after{
      content: '';
      position: absolute;
      top: 50%;
      left: -125px;
      width: 100px;
      height: 0px;
      border-top: 2px dashed ${props => props.theme.colors.textBlue};
    }
    &:after{
      right: -125px;
      left: auto;
    }
  }
`;

const PdfFooter:FC = () => {
    const footerInputsState = useTypesSelector(state => state.blocks.staticBlocks[EBlockTypes.footerBlock]);
    return (
        <StyledPdfFooter>
            <span>{footerInputsState?.title}</span>
        </StyledPdfFooter>
    );
};

export default PdfFooter;