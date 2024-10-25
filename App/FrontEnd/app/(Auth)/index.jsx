import { StyleSheet, Text, View, ImageBackground , Image } from 'react-native';
import React from 'react';
import SplashScreen from '/Sissly/App/FrontEnd/components/SplashScreen';


const Index = () => {
  return (

    
<SplashScreen>

</SplashScreen>
  );
};

export default Index;

const styles = StyleSheet.create({
  container :{
width : "100%" ,
height : "100%" ,
display : "flex" ,
flexDirection : "column" ,
justifyContent : "center" ,
alignItems : "center" ,
    backgroundColor : "white" ,
flex : 1 ,

  },
  logo : {
    width : 153 ,
    height : 123 ,
  }


});
