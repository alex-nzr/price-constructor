import React from 'react';
import styled from "styled-components";
import {InputFieldNames, EBlockTypes} from "../../../types/content-blocks";
import InputText from "../InputText/InputText";
import Textarea from "../Textarea/Textarea";
import InputFile from "../InputFile/InputFile";
import StringList from "../StringList/StringList";
import Button from "../Button/Button";
import {ButtonTypes} from "../../../types/button";
import {addElement} from "../../../store/actions/addElement";
import {useDispatch} from "react-redux";
import {changeBlockDataAction} from "../../../store/reducers/inputReducer";
import {GetBlockState} from "../../../store/actions/generalBlockActions";

const StyledMainBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const MainBlock = () => {
    const stateCur = GetBlockState(false, EBlockTypes.mainBlock);
    const dispatch = useDispatch();
    const handleButton = () => {
        const newStateValue = addElement(stateCur, InputFieldNames.list);
        dispatch(
            changeBlockDataAction(undefined, newStateValue)
        );
    }
    return (
        <StyledMainBlock>
            <div className="left-side">
                <InputText id={EBlockTypes.mainBlock}
                           type="text" maxLength={100}
                            stateFieldName={InputFieldNames.title}/>
                <Textarea id={EBlockTypes.mainBlock}
                          maxLength={500} type={`textarea`}
                          stateFieldName={InputFieldNames.text}  />
                <StringList id={EBlockTypes.mainBlock}
                            type="text" maxLength={100}
                            stateFieldName={InputFieldNames.list}/>
                <Button text={`Добавить в список`}
                        onClick={handleButton}
                        variable={ButtonTypes.primary}
                />
            </div>
            <div className="right-side">
                <InputFile id={EBlockTypes.mainBlock}
                           stateFieldName={InputFieldNames.image}
                           type="file"/>
            </div>
        </StyledMainBlock>
    );
}

export default MainBlock;