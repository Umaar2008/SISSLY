import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
// Remove Animated import if not using animations

// Adjust the image path according to your project structure

const Index = () => {
  return (
    <ImageBackground source={require('/Sissly/App/FrontEnd/assets/images/LandingPageBackgorundImage')}
>

      <View style={styles.container}>
        <Text>lol</Text>
      </View>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Example: semi-transparent background
    padding: 20,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
