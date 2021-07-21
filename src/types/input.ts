import {EBlockTypes} from "./content-blocks";

export interface IInputNodeProps {
    id: EBlockTypes,
    type: "text" | "file" | 'textarea' | "number",
    maxLength?: number;
    isDynamic?: boolean;
    singleBlockId? : string;
    value?:string,
    stateFieldName: string;
    index?: number;
}