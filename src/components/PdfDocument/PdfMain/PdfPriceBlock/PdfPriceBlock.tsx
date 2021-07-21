import React, {FC} from 'react';
import {useTypesSelector} from "../../../../hooks/useTypesSelector";
import {InputFieldNames, ISingleBlockState} from "../../../../types/content-blocks";
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {theme} from "../../../../store/theme/theme";

const PdfPriceBlock:FC = () => {
    const state = useTypesSelector((state):ISingleBlockState => state.blocks.staticBlocks.priceBlock as ISingleBlockState);

    return (
        <View style={styles.priceBlock}>
            <View style={styles.priceBlockLeft}>
                <Text style={styles.priceBlockLeftText}>{state[InputFieldNames.text]}</Text>
            </View>

            <View style={styles.priceBlockRight}>
                <View style={styles.priceBlockRightItem}>
                    <Text style={styles.priceBlockRightItemPrice}>{state[InputFieldNames.priceOneValue]}</Text>
                    <Text style={styles.priceBlockRightItemDesc}>{state[InputFieldNames.priceOneText]}</Text>
                </View>
                <View style={styles.priceBlockRightItem}>
                    <Text style={styles.priceBlockRightItemPrice}>{state[InputFieldNames.priceTwoValue]}</Text>
                    <Text style={styles.priceBlockRightItemDesc}>{state[InputFieldNames.priceTwoText]}</Text>
                </View>
            </View>
        </View>
    );
};

export default PdfPriceBlock;

const styles = StyleSheet.create({
    priceBlock:{
        marginTop: 10,
        padding: 20,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        borderRadius: 6,
        overflow: "hidden",
    },
    priceBlockLeft: {
        flexBasis: "50%",
        paddingRight: 10,
    },
    priceBlockLeftText: {
        fontSize: '12px',
        fontWeight: 400,
        color: theme.colors.textDark,
        textAlign: "justify",
    },
    priceBlockRight: {
        flexBasis: "50%",
        display: 'flex',
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    priceBlockRightItem:{
        padding: 5,
        flexBasis: "48%",
        backgroundColor: "#FFBD32",
        borderRadius: 6,
        overflow: "hidden",
    },
    priceBlockRightItemPrice:{
        fontFamily: "Roboto-SemiBold",
        fontSize: '24px',
        fontWeight: "bold",
        color: theme.colors.textDark,
        textAlign: "center",
    },
    priceBlockRightItemDesc:{
        fontSize: '12px',
        fontWeight: 400,
        color: theme.colors.textDark,
        textAlign: "center",
    },
})