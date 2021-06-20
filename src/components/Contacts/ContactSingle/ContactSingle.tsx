import React from 'react';
import Icon from "./Icon/Icon";
import {IContactSingleProps} from "../../../types/contacts";
import {IconIDs} from "../../../types/icon";


const ContactSingle = ({...props}:IContactSingleProps) => {
    let valuePrefix: string = "";
    let useIcon: boolean = false;
    let iconID = IconIDs.instagram;
    switch (props.contactKey){
        case "phone":
            valuePrefix = "tel: ";
            break;
        case "instagram":
            valuePrefix = "https://instagram.com/";
            useIcon = true;
            iconID = IconIDs.instagram;
            break;
        case "youtube":
            valuePrefix = "https://youtube.com/";
            useIcon = true;
            iconID = IconIDs.youtube;
            break;
        case "vk":
            valuePrefix = "https://vk.com/";
            useIcon = true;
            iconID = IconIDs.vk;
            break;
        case "fb":
            valuePrefix = "https://fb.com/";
            useIcon = true;
            iconID = IconIDs.fb;
            break;
        case "email":
            valuePrefix = "mailto:";
            break;
        case "site":
            valuePrefix = "https://";
            break;
        default:
            valuePrefix = "";
    }
    let iconElement = useIcon ? <Icon icon={iconID}/> : "";
    let htmlElement =  <a href={`${valuePrefix}${props.contactValue}`} target="blank">
                            {iconElement}
                            {props.contactValue}
                        </a>

    if (props.contactKey === "phoneText")
    {
        htmlElement = <span>{props.contactValue}</span>
    }

    return htmlElement;
};

export default ContactSingle;