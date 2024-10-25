import { View , Image, Platform } from "react-native";
import React from "react";




export default function SplashScreen (){

    const logo =    Platform.OS === 'ios' ? require('/Sissly/App/FrontEnd/assets/images/Logo_uihut_ios.png') : require('/Sissly/App/FrontEnd/assets/images/Logo_uihut_Andoid.png');

    return (
        <View>
            <View>
                <Image source={logo}>
                                    
                </Image>
            </View>
        </View>
    )
}

