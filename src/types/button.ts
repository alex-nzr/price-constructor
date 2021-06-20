
export enum ButtonTypes{
    primary = "primary",
    deleteWithoutText = "delete-without-text",
    downloadBtn = "downloadBtn",
}

export interface IButtonProps {
    text: string;
    onClick: (...args: any[])=>any|void|boolean;
    variable: ButtonTypes;
}
export interface IPdfButtonProps{
    download : boolean;
}

export interface IDynamicLinkAttrs {
    download?: string,
    target?: string,
}