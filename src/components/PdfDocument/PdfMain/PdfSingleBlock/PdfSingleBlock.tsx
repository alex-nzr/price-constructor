import React, {FC, ReactNode} from 'react';
import {DynamicBlockThemes, InputFieldNames, ISingleBlockProps} from "../../../../types/content-blocks";
import {Image, StyleSheet, Text, View} from "@react-pdf/renderer";
import {theme} from "../../../../store/theme/theme";

const PdfSingleBlock:FC<ISingleBlockProps> = ({...props}) => {
    const defaultBlockStyle = StyleSheet.create({
        block: {
            position: 'relative',
            marginTop: 15,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    });

    const styles = StyleSheet.create({

        blockTitle:{
            position: 'absolute',
            top: 37,
            left: 25,
            paddingTop: 0,
            paddingBottom: 0,
            paddingHorizontal: 5,
            transform: `translateY(-50%)`,
            fontFamily: "Roboto-SemiBold",
            fontSize: 16,
            fontWeight: 700,
            color: theme.colors.textBlue,
            backgroundColor: theme.colors.mainContentBG,
        },
        blockText: {
            fontSize: props[InputFieldNames.theme]===DynamicBlockThemes.textOnlyBlock ? 12: 10,
            fontFamily: props[InputFieldNames.theme]===DynamicBlockThemes.textOnlyBlock ? "Roboto-SemiBold" : "Roboto",
            fontWeight: props[InputFieldNames.theme]===DynamicBlockThemes.textOnlyBlock ? 700 : 400,
            color: props[InputFieldNames.theme]===DynamicBlockThemes.textBlock ? theme.colors.textBlack : theme.colors.textDark,
        },
        blockTextBold : {
            fontFamily: "Roboto-SemiBold",
            fontSize: 11,
            fontWeight: 700,
            color: theme.colors.textBlack,
        },
        blockLeftSide: {
            position: "relative",
            border: `1px solid ${theme.colors.textBlue}`,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: props[InputFieldNames.theme]===DynamicBlockThemes.textOnlyBlock ? 0 : 10,
            width: props[InputFieldNames.image] || props[InputFieldNames.theme]===DynamicBlockThemes.textBlock ? theme.pdf.leftBlockWidth : "100%",
        },
        blockLeftSideSecond: {
            marginTop: 20,
        },
        blockRightSide: {
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: theme.pdf.rightBlockWidth,
        },
        blockRightSideImage: {
            display: "flex",
            width: theme.pdf.rightBlockWidth,
            height: 'auto',
            maxHeight: theme.pdf.maxImgHeight,
            objectPosition: 'center',
            objectFit: 'cover',
            borderRadius: 10,
        },
        hidden: {
            display: "none",
            opacity: 0,
            visibility: "hidden",
            position: "absolute",
            zIndex: -999,
        },

        defaultTheme : Object.assign({}, defaultBlockStyle.block),

        classicListBlock: Object.assign({}, defaultBlockStyle.block),
        classicListBlockList: {
            display : "flex",
            flexDirection: "column",
        },
        classicListBlockListItem: {
            marginTop: 5,
            fontSize: 10,
            fontWeight: 400,
            color: theme.colors.textDark,
        },

        horizontalListBlock:Object.assign({}, defaultBlockStyle.block),

        imageOnlyBlock:Object.assign({}, defaultBlockStyle.block),

        textBlock:Object.assign({}, defaultBlockStyle.block, {}),
        textBlockText: {
            display: "flex",
            fontSize: 16,
            fontWeight: 400,
        },
        textBlockTextBold: {
            display: "flex",
            fontFamily: "Roboto-SemiBold",
            fontSize: 16,
            fontWeight: 700,
        },

        textOnlyBlock: Object.assign({}, defaultBlockStyle.block),
    });

    const blockLeftElems: Array<ReactNode> = [];
    const blockLeftElemsSecond: Array<ReactNode> = [];
    const blockRightElems: Array<ReactNode> = [];

    for(let propName in props){
        if (props.hasOwnProperty(propName)){
            switch (propName) {
                case InputFieldNames.title:
                    blockLeftElems.push( <Text key={`${props.id}-${propName}`} style={styles.blockTitle}>
                                            {props[InputFieldNames.title]}
                                         </Text>);
                    break;
                case InputFieldNames.text:
                    blockLeftElems.push( <Text key={`${props.id}-${propName}`} style={styles.blockText}>
                                            {props[InputFieldNames.text]}
                                         </Text>);
                    break;
                case InputFieldNames.titleSecond:
                    blockLeftElemsSecond.push( <Text key={`${props.id}-${propName}`} style={styles.blockTitle}>
                        {props[InputFieldNames.titleSecond]}
                    </Text>);
                    break;
                case InputFieldNames.textSecond:
                    blockLeftElemsSecond.push( <Text key={`${props.id}-${propName}`} style={styles.blockText}>
                        {props[InputFieldNames.textSecond]}
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

                            let formattedText = <Text style={styles.classicListBlockListItem}>
                                                    <Text style={styles.blockTextBold}>{titleText}:</Text> {lastText}
                                                </Text>;
                            listItems.push(<View key={`${props.id}-${propName}-${numberKey}`}>{formattedText}</View>);
                        }
                    }
                    blockLeftElems.push(
                        <View key={propName} style={styles.classicListBlockList}>
                            {listItems}
                        </View>
                    );
                    break;
                default:
                    break;
            }
        }
    }

    if (props[InputFieldNames.image])
    {
        blockRightElems.push(<Image  key={`${props[InputFieldNames.image]}-${InputFieldNames.image}`}
                                style={styles.blockRightSideImage}
                                src={props[InputFieldNames.image]} />)
    }

    let blockTheme:any = styles.defaultTheme;
    let blockLeftSideTheme = styles.blockLeftSide;
    switch (props[InputFieldNames.theme]) {
        case DynamicBlockThemes.classicListBlock:
            blockTheme = styles.classicListBlock;
            break;
        case DynamicBlockThemes.horizontalListBlock:
            blockTheme = styles.horizontalListBlock;
            break;
        case DynamicBlockThemes.imageOnlyBlock:
            blockTheme = styles.imageOnlyBlock;
            break;
        case DynamicBlockThemes.textBlock:
            blockTheme = styles.textBlock;
            break;
        case DynamicBlockThemes.textOnlyBlock:
            blockTheme = styles.textOnlyBlock;
            blockLeftSideTheme = Object.assign({}, styles.blockLeftSide, {border: "none"});
            break;
    }

    const leftSide = blockLeftElemsSecond.length > 0
                    ?
                    <View>
                        <View style={styles.blockLeftSide}>
                            {blockLeftElems}
                        </View>
                        <View style={Object.assign({}, styles.blockLeftSide, styles.blockLeftSideSecond)}>
                            {blockLeftElemsSecond}
                        </View>
                    </View>
                    :
                    <View style={blockLeftSideTheme}>
                        {blockLeftElems}
                    </View>;

    return (
        <View style={blockTheme}>
            {leftSide}
            <View style={props[InputFieldNames.image] ? styles.blockRightSide : styles.hidden}>
                {blockRightElems}
            </View>
        </View>
    );
};

export default PdfSingleBlock;