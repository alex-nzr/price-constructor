import React, {FC} from 'react';
import {IInputNodeProps} from "../../../types/input";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";

const StyledTextarea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 120px;
  background: #EDF0F4;
  box-shadow: inset 2px 2px 4px rgba(190, 205, 226, 0.8); 
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.colors.textDark};
  text-align: left;
  resize: none;
`;

const Textarea:FC<IInputNodeProps> = ({...props}) => {

    const textareaParams = useInput(props);

    return (
        <StyledTextarea {...textareaParams}/>
    );
}

export default Textarea;