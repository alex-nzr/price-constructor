import {
    BlockActionTypes,
    EBlockGroups,
    EBlockTypes,
    InputFieldNames,
    ISingleBlockState,
    TBlockAction,
    TDynamicBlocksState,
    TStaticBlocksState
} from "../../types/content-blocks";
import inputDefaultState from "./inputDefaultState";

export const inputReducer = (state = inputDefaultState, action:TBlockAction) => {
    switch (action.type){
        case BlockActionTypes.CHANGE_SINGLE_BLOCK:
            const newBlockState:TStaticBlocksState = {
                [action.payload.id]:{...action.payload}
            };
            const newStaticState = {
                [EBlockGroups.staticBlocks]: {...state[EBlockGroups.staticBlocks], ...newBlockState}
            }
            return {...state, ...newStaticState};
        case BlockActionTypes.CHANGE_ADDITIONAL_BLOCKS:
            const blockType = action.payload[InputFieldNames.notRenderInList]
                                ? EBlockTypes.singleBlocks
                                : EBlockTypes.additionalBlocks;
            const nextBlockState:TDynamicBlocksState = {[action.payload.id]:{...action.payload}};

            const newDynamicState = {
                [EBlockGroups.dynamicBlocks]: {
                    ...state[EBlockGroups.dynamicBlocks],
                    [blockType]: {
                        ...state[EBlockGroups.dynamicBlocks][blockType],
                        ...nextBlockState
                    },
                }
            }
            return {...state, ...newDynamicState};
        default:
            return state;
    }
}

export const changeBlockDataAction = (dynamicBlockType:EBlockTypes | undefined, BlockData:ISingleBlockState):TBlockAction => {
    const type = dynamicBlockType ? BlockActionTypes.CHANGE_ADDITIONAL_BLOCKS : BlockActionTypes.CHANGE_SINGLE_BLOCK;
    return {
        type: type,
        payload: BlockData
    }
}