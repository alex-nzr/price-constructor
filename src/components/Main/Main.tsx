import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {togglePopupAction} from "../../store/reducers/popupReducer";
import {PopupIDs} from "../../types/popup";
import Button from "./Button/Button";
import {ButtonTypes} from "../../types/button";
import styled from "styled-components";
import MainBlock from "./MainBlock/MainBlock";
import BlocksList from "./BlocksList/BlocksList";
import PdfDocument from "../PdfDocument/PdfDocument";
import {PDFDownloadLink} from "@react-pdf/renderer";
import PdfActionButton from "../PdfActionsButtons/PdfActionButton";

const StyledMain = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.mainContentBG};
  border-radius: 6px;
`;

const Main: FC = () => {
    return (
        <React.Fragment>
            <div style={{display: 'flex', justifyContent: 'space-around',margin:'15px auto'}}>
                <PdfActionButton download={false}/>
                <PdfActionButton download={true}/>
            </div>
            <StyledMain>
                <MainBlock/>
                <BlocksList forPdf={false}/>
            </StyledMain>
        </React.Fragment>
    );
};

export default Main;