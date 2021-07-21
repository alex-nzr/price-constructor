import React from 'react';
import PdfMainBlock from "./PdfMainBlock/PdfMainBlock";
import BlocksList from "../../Main/BlocksList/BlocksList";
import {StyleSheet, View} from "@react-pdf/renderer";
import PdfPriceBlock from "./PdfPriceBlock/PdfPriceBlock";

const styles = StyleSheet.create({
    pdfMain:{
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 6,
    },
})

const PdfMain = () => {
    return (
        <View>
            <View style={styles.pdfMain}>
                <PdfMainBlock/>
                <BlocksList forPdf={true}/>
            </View>
            <View wrap={false}>
                <PdfPriceBlock/>
            </View>
        </View>
    );
};

export default PdfMain;