import {useDispatch} from "react-redux";
import {changeBlockDataAction} from "../store/reducers/inputReducer";
import {IInputNodeProps} from "../types/input";
import {GetBlockState, getUniqueId} from "../store/actions/generalBlockActions";
//import axios from "axios";

const useInput = (props: IInputNodeProps) => {
    const isDynamic = !(typeof props.isDynamic === "undefined" || !props.isDynamic);
    const stateCur = GetBlockState(
        isDynamic,
        props.id,
        props.singleBlockId ? props.singleBlockId : undefined
    );
    const isList = (props.stateFieldName === "list");
    const dispatch = useDispatch();

    const handleTextInput = (e: any) => {
        let newValue = e.target.value;

        if(isList)
        {
            if (stateCur.list&&(props.index || props.index===0))
            {
                const newList = {...stateCur.list};
                newList[props.index] = e.target.value;
                newValue = newList;
            }
            else
            {
                newValue = {0: e.target.value};
            }
        }

        if (e.target.type === "number"){
            newValue > 9999999 ? newValue = 9999999 : void(0);
            newValue < 0 ? newValue = 0 : void(0);
        }

        dispatch(
            changeBlockDataAction(
                isDynamic ? props.id : undefined,
                {
                    ...stateCur,
                    [props.stateFieldName]: newValue,
                }
            )
        );
    }

    const handleFileInput = async(e: any) => {
        const file = e.target.files[0];
        const data = new FormData();
        data.append('file', file);

        //const response = await axios.post("http://playstand/price-constructor/src/server/uploadFile.php", data, {});
        //console.log(response.data);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadstart = () => {
            //show loader
        }

        reader.onloadend = () => {
            //hide loader
            dispatch(
                changeBlockDataAction(
                    isDynamic ? props.id : undefined,
                    {
                        ...stateCur,
                        [props.stateFieldName]: reader.result,
                    }
                )
            );
        }

        reader.onerror = function() {
            console.log(reader.error);
        }
    }

    const type = props.type;
    const maxLength = props.maxLength;
    // @ts-ignore
    const value = props.type === "file" ? '' : (props.value?props.value:stateCur[props.stateFieldName]);
    const id = getUniqueId(props.singleBlockId ? props.singleBlockId : props.id);

    const onEvent = (e:any) => props.type === "file" ? handleFileInput(e) :handleTextInput(e);
    const eventListener = isList ? {onChange:onEvent} : {onInput:onEvent};

    return {
        id,
        value,
        ...eventListener,
        type,
        maxLength,
    }
}

export default useInput;