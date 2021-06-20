import React, {FC} from 'react';
import styled from "styled-components";
import {IInputNodeProps} from "../../../types/input";
import useInput from "../../../hooks/useInput";

const  StyledInput = styled.input`
  width: 100%;
  height: 36px;
  background: #EDF0F4;
  box-shadow: inset 2px 2px 4px rgba(190, 205, 226, 0.8);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  color: ${props => props.theme.colors.textDark};
  text-align: center;
`;

const InputText:FC<IInputNodeProps> = ({...props}) => {
    const inputTextParams = useInput(props);

    return (
        <StyledInput {...inputTextParams}/>
    );
}

export default InputText;