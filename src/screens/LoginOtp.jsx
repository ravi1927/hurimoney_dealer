import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Keyboard 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const LoginOtp = () => {
     const navigation = useNavigation();
     const { t } = useTranslation();
    const [pin, setPin] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const handleChange = (text, index) => {
    if (text.length > 1) return;
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }

    if (index === 3 && text) {
    Keyboard.dismiss(); 
  }

  };

  const handleBackspace = (key, index) => {
    if (key === 'Backspace' && pin[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const Handleproceed = () =>{
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('Enter your PIN')}</Text>
      <Text style={styles.subtitle}>{t('Please enter your PIN to Sign in')}</Text>

      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={[
              styles.pinInput,
              digit !== '' && styles.filled,
              index === pin.findIndex((d) => d === '') && styles.activeInput,
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            secureTextEntry={true}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent.key, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.proceedBtn} onPress={Handleproceed}>
  <LinearGradient
    colors={['#730101', '#A20101']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.gradientBtn}
  >
    <Text style={styles.proceedText}>{t('Proceed')}</Text>
  </LinearGradient>
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginOtp


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '50%',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    lineHeight:36,
    color: '#03224C',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#212121',
    marginBottom: 40,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:16,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  pinInput: {
    width: 55,
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    backgroundColor: '#F9F9F9',
  },
  activeInput: {
    borderColor: '#3B82F6',
    borderWidth: 2,
  },
  filled: {
    backgroundColor: '#E5E5E5',
  },
  proceedBtn: {
  width: 280,
  height: 55,
  borderRadius: 12,
  alignSelf: 'center',
  overflow: 'hidden', // ensures gradient respects rounded corners
  elevation: 5, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOpacity: 0.15,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
},
gradientBtn: {
  flex: 1, // make gradient fill parent button
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 12,
},
proceedText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Montserrat',
  fontStyle:'normal'
},
});

