import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Login = () => {
   const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const [language, setLanguage] = useState(i18n.language || "en");
  const { t } = useTranslation();

  const navigation = useNavigation();

  const handleLogin = () => {
    if (phoneNumber && password) {
      setIsLoading(true);
      navigation.navigate('LoginOtp');
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password functionality
    //console.log('Forgot password');
    navigation.navigate('Forgotpassword');
  };

  const handleRegister = () => {
    // Navigate to registration screen
    navigation.navigate('Createaccount');
  };


  useEffect(() => {
    setLanguage(i18n.language); // update picker if i18n language changes
  }, []);


  const handleLanguageChange = (lang) => {
  setLanguage(lang);
  i18n.changeLanguage(lang); 
};

const data = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Arabic', value: 'ar' },
    
  ];

  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.languageWrapper}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select Language"
          value={language} // ✅ selected language
          onChange={(item) => handleLanguageChange(item.value)}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.placeholderStyle}
          itemTextStyle={{ color: '#333' }}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.logoContainer}>
               <Image source={require('../assets/loginlogo.jpg')} style={styles.logo} />
            </View>
            
            <View style={styles.titleContainer}>
            <Text style={styles.titleTop}>{t('Login to your Account')}</Text>
            
            </View>
            
            <View style={styles.inputContainer}>
                <View style={styles.phoneInputContainer}>
                    <Icon name="mobile" size={25} color="#000000" style={styles.inputIcon} />
                    <Text style={styles.phonePrefix}>+269</Text>
                    <TextInput
                    style={styles.phoneInput}
                    placeholder="773 5258"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                    />
                </View>
                </View>
            
            <View style={styles.inputContainer}>
            <View style={styles.passwordContainer}>
                <Icon name="lock" size={25} color="#000000" style={styles.inputIcon} />
                <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                <Icon
                    name={isPasswordVisible ? 'eye-slash' : 'eye'}
                    size={20}
                    color="#000000"
                />
                </TouchableOpacity>
            </View>
            </View>
            
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
  <LinearGradient
    colors={['#730101', '#A20101']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.proceedBtn}
  >
    <Text style={styles.loginButtonText}>{t('Log in')}</Text>
  </LinearGradient>
</TouchableOpacity>
            
            <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>{t('Forgot password?')}</Text>
            </TouchableOpacity>
            
            
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  inputIcon: {
  paddingHorizontal: 10,
},
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A2342',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    height: 50,
  },
  phonePrefix: {
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
  },
  phoneInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    height: 50,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 12,
  },
  eyeIcon: {
    padding: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
  marginBottom: '20%',
},

titleTop: {
  fontSize: 26,
  fontWeight: '700',
  color: '#03224C',
  fontFamily:'Montserrat',
  fontStyle:'normal'
},

titleBottom: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#0A2342',
},
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#A30000',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#A30000',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
  },
  termsContainer: {
    marginBottom: 20,
  },
  termsText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  termsLink: {
    color: '#A30000',
    textDecorationLine: 'underline',
  },
  loginButton: {
  borderRadius: 12,
  overflow: 'hidden',
  marginVertical: 20,
  alignSelf: 'center', // centers button horizontally
  width: 280,
  height: 55,
  elevation: 4, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOpacity: 0.2,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
},
proceedBtn: {
  flex: 1, // take full size of parent
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
},
loginButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Montserrat',
},
  forgotPasswordContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#477feeff',
    fontSize: 16,
    fontWeight:'700',
    fontFamily: 'Montserrat',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#666',
    fontSize: 14,
  },
  registerLink: {
    color: '#A30000',
    fontSize: 14,
    fontWeight: '600',
  },

  languageWrapper: {
    width: 100,
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
  },

  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 22,
    backgroundColor: '#fff',
  },

   selectedTextStyle: {
    fontSize: 10,
    color: '#828181',
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#999',
  },
});
