import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const Welcome = () => {
  const navigation = useNavigation();

  const handleProceed = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Top Logo */}
        <Image
          source={require('../assets/loginlogo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Center Illustration */}
        <Image
          source={require('../assets/dealerwelcome.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Lines Background */}
      <View style={styles.bottomContainer}>
        <Image
          source={require('../assets/welcomelines.jpg')}
          style={styles.bottomLines}
          resizeMode="cover"
        />

        {/* Button Overlapping Image */}
        


         <TouchableOpacity style={styles.button} onPress={handleProceed}>
        <LinearGradient
          colors={['#730101', '#A20101']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBtn}
        >
          <Text style={styles.buttonText}>Dealer</Text>
        </LinearGradient>
      </TouchableOpacity>


      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  logo: {
    width: '40%',
    height: height * 0.16,
  },
  image: {
    width: '80%',
    height: height * 0.35,
  },
  bottomContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomLines: {
    width: '100%',
    height: height * 0.29,
  },
  button: {
    position: 'absolute',
  bottom: height * 0.05, 
  borderRadius: 12,
  elevation: 5,
  
  },
  gradientBtn: {
    width: 280,
    height:60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
});