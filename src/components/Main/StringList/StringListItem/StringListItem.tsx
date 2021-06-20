import React, {FC} from 'react';
import styled from "styled-components";
import InputText from "../../InputText/InputText";
import {IInputNodeProps} from "../../../../types/input";
import {ButtonTypes} from "../../../../types/button";
import Button from "../../Button/Button";
import {GetBlockState} from "../../../../store/actions/generalBlockActions";
import {InputFieldNames} from "../../../../types/content-blocks";
import {useDispatch} from "react-redux";
import {changeBlockDataAction} from "../../../../store/reducers/inputReducer";
import {deleteElement} from "../../../../store/actions/deleteElement";

const StyledDynamicListItem = styled.li`
  position: relative;
  display: block;
  margin-bottom: 5px;
`;

const StringListItem:FC<IInputNodeProps> = (props) => {
    const isDynamic = !(typeof props.isDynamic === "undefined" || !props.isDynamic);
    const stateCur = GetBlockState(
        isDynamic,
        props.id,
        props.singleBlockId ? props.singleBlockId : undefined
    );
    const dispatch = useDispatch();
    const handleButton = () => {
        const newValue = deleteElement(stateCur, InputFieldNames.list, props.index);
        dispatch(
            changeBlockDataAction(isDynamic ? props.id : undefined, newValue)
        );
    }

    return (
        <StyledDynamicListItem>
            <InputText {...props}/>
            <Button text={``}
                    onClick={handleButton}
                    variable={ButtonTypes.deleteWithoutText}
            />
        </StyledDynamicListItem>
    );
}

export default StringListItem;