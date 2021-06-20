import React, {FC} from 'react';
import styled from "styled-components";
import Header from "./Header/Header";
import Main from "./Main/Main";
import ContactsList from "./Contacts/ContactsList";
import Footer from "./Footer/Footer";
import PopupOverlay from "./Popup/PopupOverlay";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {TPopupID} from "../types/popup";

const GeneralWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 20px; 
    margin: 0 auto;
    background-color: ${props=>props.theme.colors.appBg};
    box-shadow: 0 0 5px 1px rgba(0,0,0, .2);
    border-radius: 10px;
`;

const App: FC = () => {
    const popupState = useTypesSelector(state=>state.popup);
    let opened = false;
    let popupID: TPopupID = "";
    for(let key in popupState){
        if (popupState[key].isOpened){
            popupID = key;
            opened = true;
            break;
        }
    }
    return (
        <GeneralWrapper>
            <Header/>
            <Main/>
            <ContactsList/>
            <Footer/>
            <PopupOverlay isOpened={opened} popupId={popupID}/>
        </GeneralWrapper>
    );
};

export default App;