import React, {FC} from 'react';
import styled from "styled-components";
import {IInputNodeProps} from "../../../types/input";
import {InputFieldNames} from "../../../types/content-blocks";
import useInput from "../../../hooks/useInput";
import {GetBlockState} from "../../../store/actions/generalBlockActions";

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.textBlue};
  box-shadow: inset 2px 2px 4px rgba(190, 205, 226, 0.8);
  border-radius: 6px;
  cursor: pointer;
  & input{
    opacity: 0;
    max-width: 0;
    max-height: 0;
    overflow: hidden;
  }
  & span{
    position: relative;
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    text-align: center;
    transition: .3s;
    z-index: 1;
    opacity: 0;
    user-select: none;
  }
  &:hover{
    &:before{
      opacity: 1;
    }
    & span  {
      opacity: 1;
    }
  }
  &:before{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.7);
    z-index: 0;
    opacity: 0;
    transition: .3s;
  }
`;

const InputFile:FC<IInputNodeProps> = ({...props}) => {
    const isDynamic = (!(typeof props.isDynamic === "undefined" || !props.isDynamic));
    const blockState = GetBlockState(isDynamic, props.id);
    // @ts-ignore
    const stateImage = isDynamic&&props.singleBlockId !==undefined ? blockState[props.singleBlockId][InputFieldNames.image] : blockState[InputFieldNames.image];
    const inputParams = useInput(props);

    return (
        <StyledLabel htmlFor={inputParams.id} style={{backgroundImage: `url(${stateImage})`}}>
            <span>Click to upload your image</span>
            <input {...inputParams}/>
        </StyledLabel>
    );
};

export default InputFile;