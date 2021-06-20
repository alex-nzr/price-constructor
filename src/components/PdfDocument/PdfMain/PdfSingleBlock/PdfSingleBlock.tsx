import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {DynamicBlockThemes, InputFieldNames, ISingleBlockProps} from "../../../../types/content-blocks";
import {StyleSheet, Text, View, Image} from "@react-pdf/renderer";
import {theme} from "../../../../store/theme/theme";

const StyledPdfSingleBlock = styled.div`
  --leftBlockBorderWidth: 3px;
  
  & h2{
    
  }
  & .left-side{
    position: relative;
    border: 3px solid ${theme.colors.textBlue};
    border-radius: 20px;
    padding: 20px 25px;
  }
  &.${DynamicBlockThemes.classicListBlock}{
    & .left-side{
      & ul{
        & li{
          display: block;
          margin-top: 5px;
          font-size: 16px;
          font-weight: 400;
          &:first-child{
            margin-top: 0;
          }
          & b{
            font-weight: 700;
          }
        }
      }
    }
  }
  &.${DynamicBlockThemes.textBlock}{
    & span{
      display: block;
      font-size: 16px;
      font-weight: 400;
      & b{
        font-weight: 700;
      }
    }
  }
`;

const styles = StyleSheet.create({
    block: {
        position: 'relative',
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    blockTitle:{
        position: 'absolute',
        top: 0,
        left: 25,
        paddingTop: 0,
        paddingBottom: 0,
        paddingHorizontal: 5,
        transform: `translateY(-50%)`,
        fontSize: 16,
        fontWeight: 700,
        color: theme.colors.textBlue,
        backgroundColor: theme.colors.mainContentBG,
    },
    blockText: {
        display: 'flex',
        fontSize: 16,
        fontWeight: 400,
    },
    blockTextBold : {
        fontSize: 16,
        fontWeight: 700,
    },
    defaultTheme :{},
    [DynamicBlockThemes.classicListBlock]: {

    },
    [DynamicBlockThemes.horizontalListBlock]:{

    },
    [DynamicBlockThemes.imageOnlyBlock]:{

    },
    [DynamicBlockThemes.textBlock]:{
        position: "relative",
    },
    [DynamicBlockThemes.textOnlyBlock]:{

    },
});

const PdfSingleBlock:FC<ISingleBlockProps> = ({...props}) => {

    const blockLeft: Array<ReactNode> = [];
    const blockRight: Array<ReactNode> = [];

    for(let propName in props){
        if (props.hasOwnProperty(propName)){
            switch (propName) {
                case InputFieldNames.title:
                    blockLeft.push( <Text key={`${props.id}-${propName}`} style={styles.blockTitle}>
                                        {props[InputFieldNames.title]}
                                    </Text>);
                    break;
                case InputFieldNames.text:
                    blockLeft.push( <Text key={`${props.id}-${propName}`} style={styles.blockText}>
                                        {props[InputFieldNames.text]}
                                    </Text>);
                    break;
                case InputFieldNames.list:
                    const listItems:Array<ReactNode> = [];
                    const iteratedObj = props[InputFieldNames.list];
                    for (let numberKey in iteratedObj) {
                        if (iteratedObj.hasOwnProperty(numberKey))
                        {
                            const textArr = iteratedObj[Number(numberKey)].split(":");
                            let titleText = textArr.shift();
                            let lastText = textArr.join(":");

                            let formattedText = <span><b>{titleText}:</b>{lastText}</span>;
                            listItems.push(<li key={`${props.id}-${propName}-${numberKey}`}>{formattedText}</li>);
                        }
                    }
                    blockLeft.push(
                        <ul key={propName}>
                            {listItems}
                        </ul>
                    );
                    break;
                default:
                    break;
            }
        }
    }

    if (props[InputFieldNames.image])
    {
        blockRight.push(<Image  key={`${props[InputFieldNames.image]}-${InputFieldNames.image}`}
                                src={props[InputFieldNames.image]} />)
    }

    let blockTheme:any = styles.defaultTheme;
    switch (props[InputFieldNames.theme]) {
        case DynamicBlockThemes.classicListBlock:
            blockTheme = styles[DynamicBlockThemes.classicListBlock];
            break;
        case DynamicBlockThemes.horizontalListBlock:
            blockTheme = styles[DynamicBlockThemes.horizontalListBlock];
            break;
        case DynamicBlockThemes.imageOnlyBlock:
            blockTheme = styles[DynamicBlockThemes.imageOnlyBlock];
            break;
        case DynamicBlockThemes.textBlock:
            blockTheme = styles[DynamicBlockThemes.textBlock];
            break;
        case DynamicBlockThemes.textOnlyBlock:
            blockTheme = styles[DynamicBlockThemes.textOnlyBlock];
            break;
    }

    return (
        <View style={blockTheme}>
            <div className={`left-side`}>
                {blockLeft}
            </div>
            <div className={`right-side ${props[InputFieldNames.image]?"":"hidden"}`}>
                {blockRight}
            </div>
        </View>
    );
};

export default PdfSingleBlock;