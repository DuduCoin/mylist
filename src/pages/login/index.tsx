import React from  "react";
import {Text, View } from 'react-native';
import { style } from "./styles";

export default function Login (){
    return  (
        <View style={style.container}>
            <View style={style.boxTop}><Text>Vermelho</Text></View>
            <View style={style.boxMid}><Text>Azul</Text></View>
            <View style={style.boxBottom}><Text>Verde</Text></View>
        </View>
    )

}