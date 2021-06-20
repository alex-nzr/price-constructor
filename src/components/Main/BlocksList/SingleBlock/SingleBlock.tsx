import React, {FC, ReactNode} from 'react';
import {InputFieldNames, ISingleBlockProps} from "../../../../types/content-blocks";
import InputText from "../../InputText/InputText";
import StringList from "../../StringList/StringList";
import Textarea from "../../Textarea/Textarea";
import InputFile from "../../InputFile/InputFile";
import styled from "styled-components";
import {GetBlockState, getUniqueId} from "../../../../store/actions/generalBlockActions";
import {useDispatch} from "react-redux";
import {addElement} from "../../../../store/actions/addElement";
import {changeBlockDataAction} from "../../../../store/reducers/inputReducer";
import {ButtonTypes} from "../../../../types/button";
import Button from "../../Button/Button";

const StyledSingleBlock = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SingleBlock:FC<ISingleBlockProps> = ({...props}) => {
    const stateCur = GetBlockState(true, props.parentId, props.id);
    const dispatch = useDispatch();
    const handleButton = () => {
        const newStateValue = addElement(stateCur, InputFieldNames.list);
        dispatch(
            changeBlockDataAction(props.parentId, newStateValue)
        );
    }

    const blockLeft: Array<ReactNode> = [<React.Fragment key={getUniqueId('left-block')}/>];
    const blockRight: Array<ReactNode> = [<React.Fragment key={getUniqueId('right-block')}/>];

    for(let propName in props){
        if (props.hasOwnProperty(propName)){
            const generalProps = {
                id:props.parentId,
                singleBlockId:props.id,
                isDynamic:true,
                stateFieldName:propName,
                key:propName,
            }
            switch (propName) {
                case InputFieldNames.title:
                    blockLeft.push(<InputText type="text" maxLength={200} {...generalProps}/>);
                    break;
                case InputFieldNames.text:
                    blockLeft.push(<Textarea maxLength={500} type={`textarea`} {...generalProps}/>);
                    break;
                case InputFieldNames.list:
                    blockLeft.push(
                        <React.Fragment key={propName}>
                            <StringList type={"text"} maxLength={200} {...generalProps}/>
                            <Button text={`Добавить занятие`}
                                    onClick={handleButton}
                                    variable={ButtonTypes.primary}
                            />
                        </React.Fragment>
                    );
                    break;
                default:
                    break;
            }
        }
    }

    if (props[InputFieldNames.image])
    {
        blockRight.push(<InputFile id={props.parentId}
                                   singleBlockId={props.id}
                                   isDynamic={true}
                                   stateFieldName={InputFieldNames.image}
                                   type="file"
                                   key={InputFieldNames.image}/>)
    }

    return (
        <StyledSingleBlock>
            <div className={`left-side ${props.theme ? props.theme : ''}`}>
                {blockLeft}
            </div>
            <div className={`right-side ${props[InputFieldNames.image]?"":"hidden"}`}>
                {blockRight}
            </div>
        </StyledSingleBlock>
    );
};

export default SingleBlock;