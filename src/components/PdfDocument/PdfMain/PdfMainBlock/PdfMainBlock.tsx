import React, {FC, ReactNode} from 'react';
import {useTypesSelector} from "../../../../hooks/useTypesSelector";
import {InputFieldNames, ISingleBlockState} from "../../../../types/content-blocks";
import {StyleSheet, Text, View, Image} from "@react-pdf/renderer";
import {theme} from "../../../../store/theme/theme";

const separator = "<br>";

const PdfMainBlock:FC = () => {
    const state = useTypesSelector((state):ISingleBlockState => state.blocks.staticBlocks.mainBlock as ISingleBlockState);

    const items:Array<ReactNode> = [];
    if (state[InputFieldNames.list])
    {
        const advList = state[InputFieldNames.list];
        for (let key in advList) {
            items.push(
                <View key={key}>
                    <Text style={styles.mainBlockListItemDot}> </Text>
                    <Text style={styles.mainBlockListItem}>
                        {advList[Number(key)]}
                    </Text>
                </View>
            );
        }
    }

    return (
        <View style={styles.mainBlock}>
            <View style={styles.mainBlockLeft}>
                <View>{processTitle(state[InputFieldNames.title])}</View>
                <Text style={styles.mainBlockLeftDesc}>{state[InputFieldNames.text]}</Text>
                <View style={styles.mainBlockList}>{items}</View>
            </View>

            <View style={styles.mainBockRight}>
                <Image style={styles.mainBockRightImage} src={state[InputFieldNames.image]}/>
            </View>
        </View>
    );
};

export default PdfMainBlock;

const processTitle = (str: string | undefined):ReactNode => {
    if (typeof str === "string")
    {
        const arr: Array<string> = str.split(separator,2);
        if (arr.length>1){
            return  <View style={styles.mainBlockLeftTitle}>
                        <Text>{arr[0].trim()}</Text>
                        <Text style={styles.mainBlockLeftTitleBlue}>{arr[1].trim()}</Text>
                    </View>;
        }else{
            return <Text>{arr[0].trim()}</Text>;
        }
    }
    else
    {
        return <View/>;
    }
}

const styles = StyleSheet.create({
    mainBlock:{
        display: 'flex',
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    mainBlockLeft: {

    },
    mainBlockLeftTitle: {
        marginBottom: "15px",
        fontSize: '18px',
        fontWeight: 400,
        color: theme.colors.textDark,
    },
    mainBlockLeftTitleBlue:{
        fontFamily: "Roboto-SemiBold",
        fontWeight: 700,
        color: theme.colors.textBlue,
    },
    mainBlockLeftDesc:{
        display: 'flex',
        width: theme.pdf.leftBlockWidth,
        fontSize: 10,
        color: theme.colors.textDark,
        textAlign: "justify",
    },
    mainBlockList:{
        marginTop: 10,
    },
    mainBlockListItemDot:{
        position: "absolute",
        top: "calc(50% - 3px)",
        left: 0,
        width: 4,
        height: 4,
        backgroundColor: theme.colors.textBlue,
        borderRadius: 4,
    },
    mainBlockListItem:{
        position: 'relative',
        display: 'flex',
        paddingLeft: 20,
        fontSize: 11,
        fontWeight: 400,
    },
    mainBockRight: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: theme.pdf.rightBlockWidth,
    },
    mainBockRightImage: {
        display: "flex",
        width: theme.pdf.rightBlockWidth,
        height: 'auto',
        maxHeight: theme.pdf.maxImgHeight,
        objectPosition: 'center',
        objectFit: 'cover',
        borderRadius: 10,
    }
})