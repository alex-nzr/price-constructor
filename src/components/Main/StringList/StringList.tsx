import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import StringListItem from "./StringListItem/StringListItem";
import {IInputNodeProps} from "../../../types/input";
import {InputFieldNames} from "../../../types/content-blocks";
import {GetBlockState} from "../../../store/actions/generalBlockActions";

const StyledDynamicList = styled.ul`
  display: block;
  margin-top: 20px;
`;

const StringList:FC<IInputNodeProps> = (props) => {
    const isDynamic = (!(typeof props.isDynamic === "undefined" || !props.isDynamic));
    const blockState = GetBlockState(
        isDynamic,
        props.id,
        props.singleBlockId ? props.singleBlockId : undefined
    );
    const list = blockState[InputFieldNames.list];
    const items:Array<ReactNode> = [];
    for (let propKey in list) {
        if (list.hasOwnProperty(propKey))
        {
            items.push(<StringListItem key={`${props.id}-${propKey}`} {...props} value={list[Number(propKey)]} index={Number(propKey)}/>);
        }
    }
    return (
        <StyledDynamicList>
            {items}
        </StyledDynamicList>
    );
};

export default StringList;