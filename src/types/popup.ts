
export interface IPopupState{
    [popupId: string]: {
        isOpened: boolean
    };
}

export enum PopupActionTypes{
    TOGGLE_POPUP = "TOGGLE_POPUP",
}

export enum PopupIDs{
    pdfPopup = "pdfPopup",
}

export type TPopupID = PopupIDs | string;

export interface IPopupActionParams{
    popupId: TPopupID;
    isOpened: boolean;
}

interface ITogglePopupAction{
    type: PopupActionTypes.TOGGLE_POPUP;
    payload: IPopupActionParams;
}

export type TPopupAction = ITogglePopupAction;

