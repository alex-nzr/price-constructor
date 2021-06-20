import React, {FC} from 'react';
import styled from "styled-components";
import {InputFieldNames, EBlockTypes} from "../../types/content-blocks";
import InputText from "../Main/InputText/InputText";

const StyledFooter = styled.div`
  padding: 15px 150px;
  & label{
    position: relative;
    display: block;
    margin: 0 auto;
    &:before,&:after{
      content: '';
      position: absolute;
      top: 50%;
      left: -125px;
      width: 100px;
      height: 0;
      border-top: 2px dashed ${props => props.theme.colors.textBlue};
    }
    &:after{
      right: -125px;
      left: auto;
    }
  }
`;

const Footer:FC = () => {
    return (
        <StyledFooter>
            <label>
                <InputText id={EBlockTypes.footerBlock}
                           isDynamic={false}
                           type={`text`} maxLength={100}
                           stateFieldName={InputFieldNames.title}/>
            </label>
        </StyledFooter>
    );
};

export default Footer;