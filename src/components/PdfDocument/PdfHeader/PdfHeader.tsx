import React from 'react';
import AdvantagesBlock from "./AdvantagesBlock/AdvantagesBlock";
import {Image, StyleSheet, Text, View} from "@react-pdf/renderer";
import logo from "../img/logo.png";

const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        logo:{
            width:150,
            flex: '0 0 150px',
            logoImg:{
                width: '100%',
                height: 'auto',
                objectFit:'contain',
                objectPosition: 'top left',
            },
            logoText:{
                marginTop: 10,
                fontSize: 7.5,
                fontFamily: "Roboto-SemiBold",
            }
        },
    },
});


const PdfHeader = () => {
    return (
        <View style={styles.header}>
            <View style={styles.header.logo}>
                <Image
                    style={styles.header.logo.logoImg}
                    src={logo}
                />
                <Text style={styles.header.logo.logoText}>Сертифицированный производитель образовательных технологий для детей</Text>
            </View>
            <AdvantagesBlock/>
        </View>
    );

}

export default PdfHeader;