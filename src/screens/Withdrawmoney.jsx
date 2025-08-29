import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Withdrawmoney = () => {
    const navigation = useNavigation();
      const [amount, setAmount] = useState('');
const { t } = useTranslation();
      const handleProceed = () =>{
        navigation.navigate('WithdrawmoneyAccount');
      }
  return (
    <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/arrow.png')} style={{width: 20, height: 18}}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{t('Withdraw Money')}</Text>
            <Image source={require('../assets/homecardlogo.png')} style={styles.image} />
          </View>
    
          {/* Input Section */}
          <Text style={styles.title}>{t('Enter the')} {"\n"} {t('Customer Phone Number')}</Text>
          <Text style={styles.subtitle}>
            {t('Enter the phone number of the')} {"\n"} {t('customer from whom the amount is')} {"\n"} {t('to be withdrawn')}
          </Text>
          <TextInput
            style={styles.amountInput}
            value={amount}
            //editable={false}
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
    
          {/* Proceed Button */}
         

          <TouchableOpacity style={styles.proceedButton} onPress={handleProceed} activeOpacity={0.8}>
  <LinearGradient
    colors={['#730101', '#A20101']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.proceedBtn}
  >
    <Text style={styles.proceedText}>{t('Proceed')}</Text>
  </LinearGradient>
</TouchableOpacity>
    
          
        </SafeAreaView>
  )
}

export default Withdrawmoney

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: '3%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20%',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#A20101',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    marginRight:'22%'

  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    color: '#A20101',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#828181',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight:18
  },
  image:{
   width: 55,
  height: 27,
  resizeMode: 'contain',
  },
  amountInput: {
  width: '80%', 
  paddingVertical:'4%',
  alignSelf: 'center', 
  borderWidth: 1,
  borderColor: '#AAA',
  borderRadius: 15,
  padding: 20,
  fontSize: 18,
  textAlign: 'center',
  color: '#333',
  marginBottom: '20%',
},
  
  proceedButton: {
  width: 280,
  height: 60,
  alignSelf: 'center',
  borderRadius: 8,
  shadowColor: '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5, // Android shadow
},

proceedBtn: {
  flex: 1,
  borderRadius: 15,
  alignItems: 'center',
  justifyContent: 'center',
},

proceedText: {
  color: '#FFF',
  fontSize: 14,
  fontWeight: '400',
  fontFamily:'Montserrat',
  fontStyle:'normal'
},
 
});
