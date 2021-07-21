import React, {FC} from 'react';
import styled from "styled-components";
import MainBlock from "./MainBlock/MainBlock";
import BlocksList from "./BlocksList/BlocksList";
import PdfActionButton from "../PdfActionsButtons/PdfActionButton";
import PriceBlock from "./PriceBlock/PriceBlock";

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
                <PriceBlock/>
            </StyledMain>
        </React.Fragment>
    );
};

export default Main;