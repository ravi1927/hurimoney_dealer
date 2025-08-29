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

const Depositemoney = () => {
      const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleProceed = () => {
    navigation.navigate('Depositemoneydetails')
  };

  return (
     <SafeAreaView style={styles.container}>
      {/* Back + Title */}
      <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    {/* <Icon name="arrow-back" size={24}  /> */}
    <Image source={require('../assets/arrow.png')} style={{width: 20, height: 18}}/>
  </TouchableOpacity>

  <Text style={styles.headerTitle}>{t('Deposit Money')}</Text>

  <Image
    source={require('../assets/homecardlogo.png')} 
    style={styles.logo}
  />
</View>

      {/* Body */}
      <View style={styles.content}>
        <Text style={styles.title}>{t('Enter the')}{"\n"}{t('Customer Phone Number')}</Text>
        <Text style={styles.subtitle}>
          {t('Enter the phone number of the')} {"\n"} {t('customer to whom the amount is to')} {"\n"} {t('be deposited')}
        </Text>

        <TextInput
          style={styles.input}
          //placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor="#999"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

       <TouchableOpacity onPress={handleProceed} activeOpacity={0.8}>
  <LinearGradient
    colors={['#730101', '#A20101']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.proceedButton}
  >
    <Text style={styles.proceedText}>{t('Proceed')}</Text>
  </LinearGradient>
</TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Depositemoney


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 30,
  },
  headerTitle: {
    fontSize: 20,
  fontWeight: '700',
  color: '#A20101',
  textAlign: 'left',
  flex: 1,
  fontFamily:'Montserrat',
 marginLeft:10
    },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    color: '#A20101',
    marginBottom: 10,
    lineHeight:24
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 12,
    color: '#828181',
    marginBottom: 70,
    fontFamily:'Montserrat',
    fontWeight:'600',
    lineHeight:18
  },
  input: {
    width: '90%',
    height: '14%',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 70,
    fontSize: 16,
    color: '#333',
  },
 proceedButton: {
  width: 280,
  height: 60,
  borderRadius: 8,  // Rounded pill shape
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 6, // Android shadow
},

proceedText: {
  color: '#FFF',
  fontSize: 14,
  fontWeight: '600',
  fontFamily: 'Montserrat',
  fontStyle:'normal'
},

  logo: {
  width: 55,
  height: 27,
  resizeMode: 'contain',
},
})
