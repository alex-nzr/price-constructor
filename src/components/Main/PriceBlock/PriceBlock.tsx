import React from 'react';
import styled from "styled-components";
import {InputFieldNames, EBlockTypes} from "../../../types/content-blocks";
import InputText from "../InputText/InputText";
import Textarea from "../Textarea/Textarea";

const StyledPriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  & [type="number"]{
    margin-bottom: 5px;
  }
  & .middle{
    margin: 0 10px;
  }
`;

const PriceBlock = () => {
    return (
        <StyledPriceBlock>
            <Textarea id={EBlockTypes.priceBlock}
                      maxLength={300} type={`textarea`}
                      stateFieldName={InputFieldNames.text}  />
            <div className={"middle"}>
                <InputText id={EBlockTypes.priceBlock}
                           type="number" maxLength={7}
                           stateFieldName={InputFieldNames.priceOneValue}/>
                <InputText id={EBlockTypes.priceBlock}
                           type="text" maxLength={60}
                           stateFieldName={InputFieldNames.priceOneText}/>
            </div>
            <div>
                <InputText id={EBlockTypes.priceBlock}
                           type="number" maxLength={7}
                           stateFieldName={InputFieldNames.priceTwoValue}/>
                <InputText id={EBlockTypes.priceBlock}
                           type="text" maxLength={60}
                           stateFieldName={InputFieldNames.priceTwoText}/>
            </div>
        </StyledPriceBlock>
    );
}

export default PriceBlock;