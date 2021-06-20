import React from 'react';
import img1 from "./img/russianProduct.png";
import img2 from "./img/from2012.png";
import img3 from "./img/patentedDevelop.png";
import img4 from "./img/skolkovoResident.png";
import img5 from "./img/geography.png";
import Advantage from "./Advantage/Advantage";
import {IAdvantageProps} from "../../../../types/header";
import {StyleSheet, View} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    advList:{
        paddingLeft: 10,
        marginLeft: 20,
        display:'flex',
        flexDirection: "row",
        alignItems:"flex-start",
        justifyContent: "space-between",
        width: '100%',
        borderLeft: '1px dashed #00AEEF',
    }
})

const AdvantagesBlock = () => {
    const advantages: Array<IAdvantageProps> = [
        {image:img1,text:"Производство в России"},
        {image:img2,text:"Основана в 2012"},
        {image:img3,text:"Запатентованные разработки"},
        {image:img4,text:"Резидент Сколково"},
        {image:img5,text:"Присутствие в 9 странах и 86 городах"},
    ];

    return (
        <View style={styles.advList}>
            {
                advantages.map((adv)=>{
                    return <Advantage key={adv.text} image={adv.image} text={adv.text}/>
                })
            }
        </View>
    );
}

export default AdvantagesBlock;