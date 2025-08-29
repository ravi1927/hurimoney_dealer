import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,Dimensions,StatusBar  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native/types_generated/index';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Profile = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
  <View style={styles.headerLeft}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require('../assets/arrow.png')} style={{width: 20, height: 18}}/>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{t('Dealer Profile')}</Text>
  </View>

  {/* <TouchableOpacity>
    <Icon name="edit" size={20} color="#A30000" />
  </TouchableOpacity> */}
</View>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://api.a0.dev/assets/image?text=Z' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{t('Zanele Okonkwo')}</Text>
        <Text style={styles.balanceLabel}>{t('Dealer')}</Text>
        {/* <Text style={styles.balanceLabel}>Available balance</Text>
        <Text style={styles.balance}>63800 KMF</Text> */}
      </View>

      {/* Details */}
      <View style={styles.detailSection}>
        <DetailItem label={t('Account number')} value="152201254348" />
        <DetailItem label={t('Phone number')} value="+269 32 26258" />
        <DetailItem label={t('NIN number')} value="CMR-19920315-0012" />
        <DetailItem label={t('Email ID')} value="zaneleokonkwo@gmail.com" />
        <DetailItem label={t('Expiry Date')} value="22.08.2002" />
        <DetailItem label={t('Address')} value="Maison blanche, Quartier Mtsangani\nMoroni, Grande Comore\nComores" />
        <DetailItem label={t('Preferred language')} value="English" />
        <DetailItem label={t('My Documents')} value={t('ID Card')} icon="file" />
         
      </View>
    



      <View style={styles.closeButtonContainer}>
  <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
    <LinearGradient
      colors={['#730101', '#A20101']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBtn}
    >
      <Text style={styles.closeButtonText}>{t('Close')}</Text>
    </LinearGradient>
  </TouchableOpacity>
</View>


    </ScrollView>
  );
};

const DetailItem = ({ label, value, icon }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailLabel}>{label}</Text>
    <View style={styles.detailValueRow}>
      <Text style={styles.detailValue}>{value}</Text>
      {icon && <Icon name={icon} size={16} color="#888" style={{ marginLeft: 5 }} />}
    </View>
  </View>
);

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10, // Optional: use paddingRight instead if using older RN
},
  headerTitle: {
  fontSize: 20,
  color: '#A20101',
  fontWeight: '700',
  marginLeft: 10,
  fontFamily:'Montserrat',
  fontStyle:'normal'
},
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#A20101',
    marginBottom: 4,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  balanceLabel: {
    fontSize: 10,
    color: '#828181',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'400'
  },
  balance: {
    fontSize: 16,
    color: '#000',
    marginTop: 2,
    fontWeight: '600',
  },
  detailSection: {
    marginTop: 10,
  },
  detailItem: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 10,
    color: '#828181',
    marginBottom: 4,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    lineHeight:'150%'
  },
  detailValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailValue: {
    fontSize: 16,
    color: '#828181',
    fontWeight: '500',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    lineHeight:'150%'
  },

  closeButton: {
   width:280,
  height: 60,
  borderRadius: 8,
  alignSelf: 'center',
  },
  closeButtonText: {
   color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },

  closeButtonContainer: {
  marginTop: '2%',
  alignItems: 'center',
  justifyContent: 'center',
},
gradientBtn: {
  // width: width * 0.6,
  // height: height * 0.07,
  width:280,
  height: 60,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
},
  scrollContent: {
  paddingBottom: '20%', // ensures Close button is visible
},
});