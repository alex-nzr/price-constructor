import React, {ReactNode} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {togglePopupAction} from "../../store/reducers/popupReducer";
import {IPopupActionParams, PopupIDs} from "../../types/popup";

const StyledPopupOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.popupOverlayBg};
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  & .popup-content{
    position: relative;
    transform: translateY(-100%);
    transition: .5s;
  }
  &.opened{
      opacity: 1;
      pointer-events: auto;
      & .popup-content{
        transform: translateY(0);
      }
  }
`;

const PopupOverlay = ({isOpened, popupId}:IPopupActionParams) => {
    const dispatch = useDispatch();

    let ReactElement:ReactNode = <React.Fragment/>;
    switch (popupId) {
        case PopupIDs.pdfPopup:
            break;
        default:
            break;
    }

    const closeCurrentPopup = () => {
        dispatch(togglePopupAction({popupId: popupId, isOpened: false}));
    }

    return (
        <StyledPopupOverlay
            onClick={() => closeCurrentPopup()}
            className={popupId && isOpened ? `opened`: ``}
        >
            {popupId && isOpened ? ReactElement : ``}
        </StyledPopupOverlay>
    );
};

export default PopupOverlay;