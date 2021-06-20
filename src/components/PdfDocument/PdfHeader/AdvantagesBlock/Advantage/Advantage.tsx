import React from 'react';
import {IAdvantageProps} from "../../../../../types/header";
import {Image, StyleSheet, Text, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    advantage:{
        display:'flex',
        flexDirection: "column",
        alignItems:"center",
        width: '19%',
    },
    img:{
        margin: '0 auto',
        width: '100%',
        height: 40,
        objectFit:'contain',
        objectPosition: 'top center',
    },
    txt:{
        width: '100%',
        marginTop: 5,
        fontSize: 8,
        color: "#00AEEF",
        textAlign: "center",
    }
});

const Advantage = ({image,text}:IAdvantageProps) => {
    return (
        <View style={styles.advantage}>
            <Image src={image} style={styles.img}/>
            <Text style={styles.txt}>{text}</Text>
        </View>
    );
};

export default Advantage;