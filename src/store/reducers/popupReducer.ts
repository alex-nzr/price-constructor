import {IPopupActionParams, IPopupState, TPopupAction, PopupActionTypes, PopupIDs} from "../../types/popup";

const defaultState:IPopupState = {
    [PopupIDs.pdfPopup]:{
        isOpened: false,
    }
}

export const popupReducer = (state:IPopupState = defaultState, action:TPopupAction) => {
    switch (action.type){
        case PopupActionTypes.TOGGLE_POPUP:
            const newState:IPopupState = {};
            newState[action.payload.popupId] = {isOpened:action.payload.isOpened}
            return {...state, ...newState}
        default:
            return state;
    }
}

export const togglePopupAction = (popupParams:IPopupActionParams):TPopupAction => {
    return {
        type: PopupActionTypes.TOGGLE_POPUP,
        payload: popupParams
    }
}