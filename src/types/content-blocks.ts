export enum EBlockTypes{
    footerBlock = "footerBlock",
    mainBlock = "mainBlock",
    additionalBlocks = "additionalBlocks",
    singleBlocks = "singleBlocks",
    priceBlock = "priceBlock",
}

export enum DynamicBlockThemes{
    classicListBlock = "classicListBlock",
    horizontalListBlock = "horizontalListBlock",
    textBlock = "textBlock",
    textOnlyBlock = "textOnlyBlock",
    imageOnlyBlock = "imageOnlyBlock",
    advantagesBlock = "advantagesBlock",
    priceBlock = "priceBlock",
}

export enum InputFieldNames{
    id = "id",
    theme = "theme",
    title = "title",
    text = "text",
    image = "image",
    list = "list",
    titleSecond = "titleSecond",
    textSecond = "textSecond",
    priceOneValue = "priceOneValue",
    priceTwoValue = "priceTwoValue",
    priceOneText = "priceOneText",
    priceTwoText = "priceTwoText",
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
    [InputFieldNames.titleSecond]?: string;
    [InputFieldNames.textSecond]?: string;
    [InputFieldNames.priceOneValue]?: number;
    [InputFieldNames.priceTwoValue]?: number;
    [InputFieldNames.priceOneText]?: string;
    [InputFieldNames.priceTwoText]?: string;
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
    [EBlockTypes.priceBlock]?: ISingleBlockState;
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


