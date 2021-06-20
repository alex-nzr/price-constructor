import {InputFieldNames, ISingleBlockState} from "../../types/content-blocks";

export const deleteElement = (stateCur:ISingleBlockState,stateFieldName:InputFieldNames, objKey:any):ISingleBlockState => {
    let newValue;
    if (stateFieldName === "list")
    {
        newValue = stateCur[stateFieldName] ? Object.assign({},stateCur[stateFieldName]) : {};

        if (newValue[objKey])
        {
            delete newValue[objKey];
        }
    }
    return {
        ...stateCur,
        [stateFieldName]: newValue,
    };
}