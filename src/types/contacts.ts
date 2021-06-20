export interface IContacts{
    phone: string;
    phoneText: string;
    instagram: string;
    youtube: string;
    vk: string;
    fb: string;
    email: string;
    site: string;
}

export interface IContactSingleProps{
    contactKey: string;
    contactValue: string;
}

export type IContactsArrayFromObject = Array<Array<string>>;
export type IContactsArrayToRender = Array<Array<string>>;