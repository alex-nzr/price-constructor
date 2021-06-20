import {EBlockGroups, EBlockTypes, ISingleBlockState} from "../../types/content-blocks";
import {useTypesSelector} from "../../hooks/useTypesSelector";

export const GetBlockState = (
        isDynamic: boolean,
        specifiedId: EBlockTypes,
        dynamicId?: string
    ):ISingleBlockState => {

        const blockGroup:EBlockGroups = isDynamic ? EBlockGroups.dynamicBlocks : EBlockGroups.staticBlocks;

        const blockState = useTypesSelector((state):ISingleBlockState => {

            if (isDynamic && dynamicId){
                // @ts-ignore
                return state.blocks[blockGroup][specifiedId][dynamicId];
            }else{
                // @ts-ignore
                return state.blocks[blockGroup][specifiedId];
            }
        });
        return blockState;
}

export const getUniqueId = (string:string = "uid"):string => {
    return `${string}-${(+new Date()).toString(36).slice(-5)}${Math.random().toString(36).slice(-5)}`;
}