import React from 'react';
import PdfMainBlock from "./PdfMainBlock/PdfMainBlock";
import BlocksList from "../../Main/BlocksList/BlocksList";
import {StyleSheet, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    pdfMain:{
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 6,
    },
})

const PdfMain = () => {
    return (
        <View style={styles.pdfMain}>
            <PdfMainBlock/>
            <BlocksList forPdf={true}/>
        </View>
    );
};

export default PdfMain;