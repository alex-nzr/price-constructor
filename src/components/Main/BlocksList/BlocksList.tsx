import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import SingleBlock from "./SingleBlock/SingleBlock";
import {GetBlockState} from "../../../store/actions/generalBlockActions";
import {EBlockTypes, IBlockListProps} from "../../../types/content-blocks";
import PdfSingleBlock from "../../PdfDocument/PdfMain/PdfSingleBlock/PdfSingleBlock";
import {View} from "@react-pdf/renderer";

const StyledBlocksList = styled.div`
  margin-top: 20px;
`;
const BlocksList:FC<IBlockListProps> = ({...props}) => {
    const stateCur = GetBlockState(true, EBlockTypes.additionalBlocks);
    const stateInArr = Object.entries(stateCur);

    let singleBlocks:Array<ReactNode> = [];
    if (stateInArr.length){
        singleBlocks = stateInArr.map((el)=> {
            return props.forPdf ?
                    <PdfSingleBlock key={el[0]} parentId={EBlockTypes.additionalBlocks} {...el[1]}/>
                    :
                    <SingleBlock key={el[0]} parentId={EBlockTypes.additionalBlocks} {...el[1]}/>
        })
    }

    return  props.forPdf ? <View>{singleBlocks}</View> : <StyledBlocksList>{singleBlocks}</StyledBlocksList>
};

export default BlocksList;