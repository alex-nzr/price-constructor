import React, {FC} from 'react';
import {usePDF} from "@react-pdf/renderer";
import PdfDocument from "../PdfDocument/PdfDocument";
import Button from "../Main/Button/Button";
import {ButtonTypes, IPdfButtonProps, IDynamicLinkAttrs} from "../../types/button";

const PdfActionButton:FC<IPdfButtonProps> = (props) => {
    const [instance] = usePDF({ document: <PdfDocument/> });
    let btnText:string;

    instance.loading ?  btnText = "Loading ..." : btnText = "Action";

    if (instance.error) return <div>Something went wrong: {instance.error}</div>;

    let attrs:IDynamicLinkAttrs = {}

    if (props.download){
        btnText = "Скачать";
        attrs.download = `price.pdf`;
    }else{
        btnText = "Посмотреть";
        attrs.target = '_blank';
    }

    return  <Button text={``} onClick={()=>void(0)} variable={ButtonTypes.downloadBtn}>
                <a href={instance.url ? instance.url : ""} {...attrs}>
                    {btnText}
                </a>
            </Button>
};

export default PdfActionButton;