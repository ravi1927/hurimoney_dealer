import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
// import { Image } from 'react-native/types_generated/index';

const transactions = [
  { id: '1', phone: '+269 382 9012', amount: '450 KMF' },
  { id: '2', phone: '+269 382 9012', amount: '150 KMF' },
  { id: '3', phone: '+269 382 9012', amount: '385 KMF' },
  { id: '4', phone: '+269 382 9012', amount: '4200 KMF' },
  { id: '5', phone: '+269 382 9012', amount: '690 KMF' },
  { id: '6', phone: '+269 382 9012', amount: '1400 KMF' },
  { id: '7', phone: '+269 382 9012', amount: '322 KMF' },
];

const Transactions = () => {

  const { t } = useTranslation();
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
  

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Home')}
      activeOpacity={0.7}
    >
      <Image
        source={require('../assets/user.png')}
        style={{ marginRight: 15, width: 45, height: 45 }}
      />
      <View style={styles.transactionDetails}>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={styles.transactionId}>Transaction ID 2125687324</Text>
      </View>
      <Text style={styles.amount}>{item.amount}</Text>
    </TouchableOpacity>
  );
};

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
  <View>
    <Text style={styles.welcome}>{t('Welcome')}</Text>
    <Text style={styles.frontDesk}>{t('Dealer')}</Text>
  </View>
  <TouchableOpacity style={styles.bellIcon}>
    <Icon name="bell-o" size={23} color="#212121" />
    <View style={styles.badge}>
      <Text style={styles.badgeText}>3</Text>
    </View>
  </TouchableOpacity>
</View>

      {/* Floating Bell Icon with Badge */}
      

      {/* Title */}
      <Text style={styles.title}>{t('Transactions')}</Text>

      {/* Search */}
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#828181" />
        <TextInput
          placeholder={t('Search by name or number')}
          placeholderTextColor="#828181"
          style={styles.searchInput}
        />
        
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
};

export default Transactions;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight / 2 : 10,
    position: 'relative',
  },
  header: {
   flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  },
  welcome: {
    fontSize: 11,
    color: '#212121',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    lineHeight:12
  },
  frontDesk: {
    fontSize: 16,
    color: '#A20101',
    fontWeight: '700',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    lineHeight:16
  },
  languageContainer: {
    paddingRight: 40, // space for bell
  },
  language: {
    fontSize: 13,
    color: '#000',
  },
  bellIcon: {
    marginLeft: 10,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -6,
    backgroundColor: '#FF4267',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#A20101',
    marginTop: 25,
    marginBottom: 10,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 55,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#828181',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  phone: {
    fontSize: 14,
    color: '#818181',
    fontWeight: '600',
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  transactionId: {
    fontSize: 8,
    color: '#818181',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight: '500',
  },
  amount: {
    fontSize: 14,
    
    color: '#818181',
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight: '500',
  },
});
