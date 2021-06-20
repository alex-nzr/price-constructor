import React, {FC} from 'react';
import {IContacts, IContactsArrayFromObject, IContactsArrayToRender} from "../../types/contacts";
import StyledContactsList from "./StyledContactsList";
import IconsLib from "./ContactSingle/Icon/IconsLib";
import ContactSingle from "./ContactSingle/ContactSingle";


const ContactsList:FC = () => {
    const contactValues:IContacts = {
        phone: "+7 (958) 100-02-76",
        phoneText: "(Viber, WhatsApp, Telegram)",
        instagram: "innovations_for_kids",
        youtube: "StandUpProject74",
        vk: "innovationsforkids",
        fb: "innovationsforkids",
        email: "order@playstand.ru",
        site: "www.playstand.ru",
    }

    const contactsArray: IContactsArrayFromObject = Object.entries(contactValues);

    const contactsToRender:IContactsArrayToRender = [];
    let container:Array<any> = [];
    contactsArray.forEach((el,i)=>{
        if (i%2 === 0)
        {
            container.push(el);
        }
        else
        {
            container.push(el);
            contactsToRender.push(container);
            container = [];
        }
    })

    return (
        <React.Fragment>
            <StyledContactsList>
                {
                    contactsToRender.map((contactCouple, index)=>{
                        return (
                            <div key={index}>
                                {
                                    contactCouple.map(contact=>{
                                        return <ContactSingle contactKey={contact[0]}
                                                              contactValue={contact[1]}
                                                              key={contact[0]}
                                                />
                                    })
                                }
                            </div>
                        );
                    })
                }
            </StyledContactsList>
            <IconsLib/>
        </React.Fragment>
    );
};

export default ContactsList;