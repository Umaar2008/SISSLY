import { View , Image, Platform } from "react-native";
import React from "react";




export default function SplashScreen (){

    const logo =    Platform.OS === 'ios' ? require('../assets/images/Logo -uihut@3x.png') : require('/Sissly/App/FrontEnd/assets/images//Logo -uihut.png');

    return (
        <View>
            <View>
                <Image source={logo}>

                </Image>
            </View>
        </View>
    )
}