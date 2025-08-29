import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const WithdrawmoneyAccount = () => {
   const navigation = useNavigation();
const { t } = useTranslation();
  const handleProceed = () => {
    navigation.navigate('Withdrawmoneydetails');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Image source={require('../assets/arrow.png')} style={{width: 20, height: 18}}/>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{t('Withdraw Money')}</Text>

        <View style={styles.headerRight}>
          <Image source={require('../assets/homecardlogo.png')} style={styles.image} />
        </View>
      </View>

      {/* Content */}
     <View style={styles.body}>
 <View style={styles.topRow}>
  <View style={styles.customerDetails}>
    <Text style={styles.customerName}>{t('Zuberi Mwangi')}</Text>
    <Text style={styles.label}>{t('Phone number')}</Text>
    <Text style={styles.value}>+269 32 26258</Text>
    <Text style={styles.label}>{t('ID Number')}</Text>
    <Text style={styles.value}>CMR-19920315-0012</Text>
  </View>
</View>
<Image
    source={require('../assets/idcard.png')}
    style={styles.idCardImage}
  />

  <View style={styles.balanceContainer}>
    <Text style={styles.balanceLabel}>{t('Withdrawble balance')}</Text>
    <Text style={styles.balanceValue}>19500KMF</Text>
  </View>

  <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
    <LinearGradient
      colors={['#730101', '#A20101']}
      style={styles.proceedBtn}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text style={styles.proceedText}>{t('Proceed')}</Text>
    </LinearGradient>
  </TouchableOpacity>
</View>
       <Image
          source={require('../assets/Topupbottom.png')}
          style={styles.banner}
        />
    </SafeAreaView>
  );
};

export default WithdrawmoneyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight/2 : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    //marginTop: height * 0.02,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerTitle: {
    position: 'absolute',
    left: width * 0.15,
    fontSize: 20,
    fontWeight: '700',
    color: '#A20101',
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  image: {
     width: 55,
  height: 27,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.010,
  },
  topRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  marginBottom: '-5%',
},
  customerDetails: {
    width: '100%',
  },
  customerName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#A20101',
    marginBottom: height * 0.010,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  label: {
    color: '#828181',
    fontSize: 10,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'400',
    marginTop: height * 0.01,
  },
  value: {
    fontSize: 16,
    color: '#818181',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'500'
  },
  idCardImage: {
    width: 218,
  height: 154,
  alignSelf:'left',
  resizeMode: 'contain',
  
  },

  balanceContainer: {
  alignItems: 'center',
  marginBottom: '5%',
  marginTop:'-20%'
},

balanceLabel: {
  color: '#828181',
  fontFamily: 'Montserrat',
  textAlign: 'center',
  fontSize: 10,
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: 18,
  
},

balanceValue: {
  color: '#A20101',
  fontFamily: 'Montserrat',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: '500',
  fontStyle: 'normal',
  
},
  // proceedButton: {
  //    width:'100%',
  //   alignItems: 'center',
  // justifyContent: 'center',
  // },
  proceedBtn:{
    marginTop:'-20%',
    width:280,
    height:60,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  },
  proceedText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight: '400',
  },
  banner: {
    width: '100%',
    height: height * 0.20,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
