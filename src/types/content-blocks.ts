export enum EBlockTypes{
    footerBlock = "footerBlock",
    mainBlock = "mainBlock",
    additionalBlocks = "additionalBlocks",
    singleBlocks = "singleBlocks",
}

export enum DynamicBlockThemes{
    classicListBlock = "classicListBlock",
    horizontalListBlock = "horizontalListBlock",
    textBlock = "textBlock",
    textOnlyBlock = "textOnlyBlock",
    imageOnlyBlock = "imageOnlyBlock",
}

export enum InputFieldNames{
    id = "id",
    theme = "theme",
    title = "title",
    text = "text",
    image = "image",
    list = "list",
    notRenderInList = "notRenderInList",
}

export interface ListParamState{
    [key:number]: string
}

export interface ISingleBlockState{
    [InputFieldNames.id]: EBlockTypes | string;
    [InputFieldNames.theme]?: DynamicBlockThemes;
    [InputFieldNames.title]?: string;
    [InputFieldNames.text]?: string;
    [InputFieldNames.image]?: string;
    [InputFieldNames.list]?: ListParamState;
    [InputFieldNames.notRenderInList]?: boolean;
}

export interface ISingleBlockProps extends ISingleBlockState{
    parentId: EBlockTypes;
}

export interface IBlockListProps{
    forPdf: boolean;
}

export type TStaticBlocksState = {
    [EBlockTypes.footerBlock]?: ISingleBlockState;
    [EBlockTypes.mainBlock]?: ISingleBlockState;
};
export type TDynamicBlocksState = {
    [EBlockTypes.additionalBlocks]?: {
        [key: string]: ISingleBlockState
    };
    [EBlockTypes.singleBlocks]?: {
        [key: string]: ISingleBlockState
    };
};

export enum EBlockGroups{
    staticBlocks = "staticBlocks",
    dynamicBlocks = "dynamicBlocks",
}

export interface TRootBlocksState{
    [EBlockGroups.staticBlocks]: TStaticBlocksState;
    [EBlockGroups.dynamicBlocks]: TDynamicBlocksState;
}

export enum BlockActionTypes{
    CHANGE_SINGLE_BLOCK ="CHANGE_SINGLE_BLOCK",
    CHANGE_ADDITIONAL_BLOCKS ="CHANGE_ADDITIONAL_BLOCKS",
}
interface IChangeBlockData{
    type: BlockActionTypes.CHANGE_SINGLE_BLOCK | BlockActionTypes.CHANGE_ADDITIONAL_BLOCKS;
    payload: ISingleBlockState;
}

export type TBlockAction = IChangeBlockData;


