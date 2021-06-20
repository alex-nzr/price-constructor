import React, {FC} from 'react';
import {ButtonTypes, IButtonProps} from "../../../types/button";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  width: 140px;
  height: 36px;
  border-radius: 6px;
  transition: .5s;
  font-weight: 600;
  font-size: 12px;
  &.${ButtonTypes.primary}{
    background-color: ${props => props.theme.colors.primaryBtnColor};
    color: ${props => props.theme.colors.textWhite};
    &:hover{
      background-color: ${props => props.theme.colors.primaryBtnHoverColor};
    }
  }
  &.${ButtonTypes.deleteWithoutText}{
    --height: 20px;
    --width: 20px;
    position: absolute;
    top: calc(50% - var(--height) / 2);
    right: 10px;
    width: var(--width);
    height: var(--height);
    transition: .3s;
    overflow: hidden;
    &:before,&:after{
      content: '';
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${props=>props.theme.colors.textDark};
      transform-origin: center;
      transition: .3s;
    }
    &:before{
      transform: rotateZ(-45deg);
    }
    &:after{
      transform: rotateZ(45deg);
    }
    &:hover{
      transform: scale3d(1.1,1.1,1.1);
      &:before,&:after{
        background-color: ${props=>props.theme.colors.textBlue};
      }
    }
  }
  &.${ButtonTypes.downloadBtn}{
    background: ${props => props.theme.colors.primaryBtnColor};
    color: ${props => props.theme.colors.textWhite};
    &:hover{
      background: ${props => props.theme.colors.primaryBtnHoverColor};
    }
    & a{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

const Button:FC<IButtonProps> = ({...props}) => {
    return (
        <StyledButton onClick={()=>props.onClick()}
                className={props.variable}
        >{props.children ? props.children : props.text}</StyledButton>
    );
};

export default Button;