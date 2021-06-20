import {InputFieldNames, ISingleBlockState} from "../../types/content-blocks";

export const addElement = (stateCur:ISingleBlockState, stateFieldName:InputFieldNames):ISingleBlockState => {
    let newValue;

    if(stateFieldName === "list")
    {
        let newKey = 0;
        if (stateCur.list){
            const keysArr = Object.keys(stateCur.list);
            const lastIndex = Number(keysArr[keysArr.length - 1]);
            newKey = !isNaN(lastIndex) ? lastIndex+1 : 0;
            newValue = {...stateCur.list, [newKey]: "Новая строка"};
        }
    }

    return {
        ...stateCur,
        [stateFieldName]: newValue,
    };
}