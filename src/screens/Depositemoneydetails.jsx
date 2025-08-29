import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const { width, height } = Dimensions.get('window');

const Depositemoneydetails = () => {
    const navigation = useNavigation();
const { t } = useTranslation();
  const handleProceed = () => {
    navigation.navigate('DepositemoneyAccount');
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight/2 : 0 }]}>
      {/* Header */}
      <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    {/* <Icon name="arrow-back" size={width * 0.06} /> */}
    <Image source={require('../assets/arrow.png')} style={{width: 20, height: 18}}/>
  </TouchableOpacity>

  <View style={styles.titleContainer}>
    <Text style={styles.headerTitle}>{t('Deposit Money')}</Text>
  </View>

  <Image source={require('../assets/homecardlogo.png')} style={styles.logo} />
</View>

      {/* Customer Info */}
      <View style={styles.infoWrapper}>
        <Text style={styles.customerName}>Zuberi Mwangi</Text>
        <Text style={styles.label}>Phone number</Text>
        <Text style={styles.value}>+269 32 26258</Text>
        <Text style={styles.label}>ID Number</Text>
        <Text style={styles.value}>CMR-19920315-0012</Text>
      </View>

      {/* ID Card Image */}
      <Image
        source={require('../assets/idcard.png')}
        style={styles.idCardImage}
        resizeMode="contain"
      />

      {/* Proceed Button */}
     <View style={styles.proceedWrapper}>
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

      {/* Advertisement */}
      <Image
        source={require('../assets/Topupbottom.png')}
        style={styles.banner}
        resizeMode="cover"
      />
    </SafeAreaView>
  )
}

export default Depositemoneydetails


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: width * 0.05,
  },
  header: {
    flexDirection: 'row',
  alignItems: 'center',
  marginBottom: height * 0.04,
  justifyContent: 'space-between',
  
  },
  titleContainer: {
  flex: 1,
  paddingLeft: width * 0.04, // Slight spacing from back icon
},
  headerTitle: {
    fontSize: 20,
  fontWeight: '700',
  fontFamily:'Montserrat',
  fontStyle:'normal',
  color: '#A20101',
  textAlign: 'left',
  },
  infoWrapper: {
    alignSelf: 'flex-start',
    width: '100%',
    marginBottom: height * 0.04,
  },
  customerName: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    color: '#A20101',
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: 10,
    color: '#828181',
    marginBottom: height * 0.005,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'400'
  },
  value: {
    fontSize: 16,
    color: '#818181',
    marginBottom: height * 0.015,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'500'
  },
  idCardImage: {
    width: 218,
    height: 154,
    alignSelf: 'left',
    marginBottom: height * 0.08,
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
  marginBottom: height * 0.08,
},

proceedText: {
  color: '#FFF',
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Montserrat',
  fontStyle:'normal'          
},
  banner: {
    width: width * 1,
    height: height * 0.19,
    borderRadius: 1,
    alignSelf: 'center',
  },
  proceedWrapper: {
  alignItems: 'center',
  marginBottom: height * 0.05, 
},

  logo: {
width: 55,
  height: 27,
  resizeMode: 'contain',
},
});
