import React, {FC} from 'react';
import {useTypesSelector} from "../../../hooks/useTypesSelector";
import {EBlockTypes} from "../../../types/content-blocks";
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {theme} from "../../../store/theme/theme";

const styles = StyleSheet.create({
        footer: {
            position: "relative",
            width: "100%",
            paddingHorizontal: 5,
            paddingTop: 15,
            paddingBottom: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
        },
        footerText: {
            position: "relative",
            textAlign: "center",
            fontSize: 10,
            fontFamily: "Roboto-SemiBold",
            color: theme.colors.textBlue,
        },
        dashedLine: {
            position: "absolute",
            top: 24,
            width: 50,
            height: 0,
            borderTop: `1px dashed ${theme.colors.textBlue}`,
        },
});

const PdfFooter:FC = () => {
    const footerInputsState = useTypesSelector(state => state.blocks.staticBlocks[EBlockTypes.footerBlock]);
    return (
        <View style={styles.footer}>
            <View style={[styles.dashedLine, { left: 10 }]}/>
            <Text style={styles.footerText}>{footerInputsState?.title}</Text>
            <View style={[styles.dashedLine, { right: 10 }]}/>
        </View>
    );
};

export default PdfFooter;