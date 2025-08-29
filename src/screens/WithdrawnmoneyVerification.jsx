import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Dimensions,
  Image 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const { width, height } = Dimensions.get('window');

const WithdrawnmoneyVerification = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
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
  };

  const handleBackspace = (key, index) => {
    if (key === 'Backspace' && pin[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const Handleproceed = () =>{
    setModalVisible(true)
  }

  const Handleclose = () =>{
    setModalVisible(false)
    navigation.navigate('Home')
  }
  return (
     <SafeAreaView style={styles.container}>
          <Text style={styles.title}>{t('Validation Code')}</Text>
          <Text style={styles.subtitle}>{t('Enter the validation code to proceed')} {"\n"} {t('further')}</Text>

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
    
          <TouchableOpacity style={styles.proceedBtn1} onPress={Handleproceed}>
            <LinearGradient
              colors={['#730101', '#A20101']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientBtn}
            >
              <Text style={styles.proceedText}>{t('Confirm')}</Text>
            </LinearGradient>
          </TouchableOpacity>




          <Modal
                      animationType="fade"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => setModalVisible(false)}
                    >
                      <View style={styles.modalOverlay}>
                        <View style={styles.modalCard}>
                          <Image source={require('../assets/sucess.png')} />
                          
                          <Text style={styles.modalTitle}>{t('Success')}</Text>
                          <Text style={styles.modalSubtitle}>{t('KMF Withdrawal from Account ')} {'\n'} {t('3232997 Sucess!')}</Text>
          
                          
                    
                    
                          {/* Proceed Button */}
                          


                              <TouchableOpacity onPress={Handleclose} >
  <LinearGradient
    colors={['#730101', '#A20101']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.proceedBtn}
  >
    <Text style={styles.proceedBtnText}>Close</Text>
  </LinearGradient>
</TouchableOpacity>
                        </View>
                      </View>
                    </Modal>
        </SafeAreaView>
  )
}

export default WithdrawnmoneyVerification


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '50%',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#A20101',
    marginBottom: 6,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    lineHeight:24,
    textAlign:'center'
  },
  subtitle: {
    fontSize: 12,
    color: '#828181',
    marginBottom: 40,
    fontFamily:'Montserrat',
    textAlign:'center',
    fontStyle:'normal',
    fontWeight:'500'
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
 
  gradientBtn: {
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  proceedText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    width: 300,
    elevation: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#A20101',
    marginBottom: 8,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#828181',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    lineHeight:18
  },
  modalButton: {
    backgroundColor: '#A30000',
    paddingVertical: 12,
    paddingHorizontal: '20%',
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalSub_subtitle:{
    color:'#A30000',
    paddingBottom:'9%'

  },
  proceedBtn1:{
  width:280,
  height:60, 
  borderRadius: 12,
  alignSelf: 'center',
  
  },
  proceedBtn:{
width:280,
  height:60,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  },

  proceedBtnText:{
    color: '#FFF',
  fontSize: 14,
  fontWeight: '600',
  fontFamily: 'Montserrat',
  fontStyle:'normal'
  }
});
