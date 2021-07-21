import React from 'react';
import {Document, Font, Page, StyleSheet} from "@react-pdf/renderer";
import PdfHeader from "./PdfHeader/PdfHeader";
import PdfMain from "./PdfMain/PdfMain";
import {Provider} from "react-redux";
import {store} from "../../store";
import PdfFooter from "./PdfFooter/PdfFooter";

const PdfDocument = () => {
    return (
        <Provider store={store}>
            <Document>
                <Page style={styles.page}>
                    <PdfHeader/>
                    <PdfMain/>
                    <PdfFooter/>
                </Page>
            </Document>
        </Provider>
    );
}

export default PdfDocument;

const styles = StyleSheet.create({
    wrapper:{
        width: `100%`,
        maxWidth: `1000px`,
        margin: `0 auto`,
        minHeight: '50vh',
    },
    page: {
        fontFamily: "Roboto",
        width: '100%',
        padding: 10,
        backgroundColor: "#EAF5FB",
    },
});

Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});
Font.register({
    family: "Roboto-SemiBold",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});