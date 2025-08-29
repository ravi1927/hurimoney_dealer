import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const [notificationCount, setNotificationCount] = useState(3);

  const toggleLanguageOptions = () => {
    setShowLanguageOptions((prev) => !prev);
  };

  
  const handleServicePress = (label) => {
    switch (label) {
      case 'DepositeMoney':
        navigation.navigate('Depositemoney');
        break;
      case 'Withdrawmoney':
        navigation.navigate('Withdrawmoney');
        break;
      case 'Transactions':
        navigation.navigate('Transactions');
        break;
      case 'Profile':
        navigation.navigate('Profile');
        break;
    }
  };

  return (
    
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Top Section with Background Image and Bell Icon */}
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../assets/homebackground.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.topRow}>
              <View>
                <Text style={styles.welcomeText}>{t('welcome')}</Text>
                <Text style={styles.subText}>{t('Dealer')}</Text>
              </View>

             <TouchableOpacity style={styles.bellIconContainer}>
  <Icon name="bell-o" style={styles.bellIcon} size={28} color="#FFF" />
  {notificationCount > 0 && (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{notificationCount}</Text>
    </View>
  )}
</TouchableOpacity>
            </View>

            <View style={styles.cardWrapper}>
              <ImageBackground
                source={require('../assets/homecard.jpg')}
                style={styles.cardBackground}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={styles.cardContent}>
                  {/* Text Left Side */}
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTitle}>{t('Total Balance')}</Text>
                    <Text style={styles.cardSubtitle}>52600<Text style={styles.currency}> {t('KMF')}</Text></Text>

                    <Text style={styles.cardTitle1}>{t('Deposits')}</Text>
                    <Text style={styles.cardSubtitle1}>38210 <Text style={styles.currency}> {t('KMF')}</Text></Text>

                    <Text style={styles.cardTitle2}>{t('Withdrawals')}</Text>
                    <Text style={styles.cardSubtitle2}>47658<Text style={styles.currency}> {t('KMF')}</Text></Text>
                  </View>

                  {/* Right Side: Logo and Commission */}
                  <View style={styles.cardTextRightContainer}>
                    <Image
                      source={require('../assets/homecardlogo.png')}
                      style={styles.cardLogo}
                    />
                    <View style={styles.commissionWrapper}>
                      <Text style={styles.cardTitle3}>{t('Earned Commission')}</Text>
                      <Text style={styles.cardSubtitle3}>
                        6280
                        <Text style={styles.kmfText}> {t('KMF')}</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
      

      
        <View style={styles.servicesContainer}>
  <Text style={styles.servicesTitle}>{t('Services')}</Text>
  <View style={styles.servicesGrid}>
    <View style={styles.serviceItem}>
      <TouchableOpacity onPress={() => handleServicePress('DepositeMoney')}>
      <Image  source={require('../assets/Deposite.png')} /></TouchableOpacity>
      <Text style={styles.serviceLabel}>{t('Deposit Money')}</Text>
    </View>
    <View style={styles.serviceItem}>
      <TouchableOpacity onPress={() => handleServicePress('Withdrawmoney')}>
      <Image  source={require('../assets/Withdraw.png')}/></TouchableOpacity>
      <Text style={styles.serviceLabel}>{t('Withdraw Money')}</Text>
    </View>
    <View style={styles.serviceItem}>
      <TouchableOpacity onPress={() => handleServicePress('Transactions')}>
      <Image  source={require('../assets/Transactions.png')}/></TouchableOpacity>
      <Text style={styles.serviceLabel}>{t('Transactions')}</Text>
    </View>
    <View style={styles.serviceItem}>
      <TouchableOpacity onPress={() => handleServicePress('Profile')}>
      <Image  source={require('../assets/Profile.png')}/></TouchableOpacity>
      <Text style={styles.serviceLabel}>{t('My Profile')}</Text>
    </View>
  </View>
</View>

 <View style={styles.transactionsContainer}>
          <Text style={styles.sectionTitle}>{t('Transactions')}</Text>
          <View style={styles.searchBoxContainer}>
            <Icon name="search" size={20} color="#828181" style={styles.searchIcon} />
            <TextInput style={styles.searchTextInput} placeholder={t('Search by name or number')} placeholderTextColor="#828181" />
          </View>
          <View style={styles.horizontalLine} />
          <ScrollView
    style={{ maxHeight: height * 0.3 }}  // adjust height if needed
    contentContainerStyle={{ paddingBottom: 20 }}
    showsVerticalScrollIndicator={false}
  >
          {[
            { phone: '+269 582 3225', amount: '600KMF' },
            { phone: '+269 582 1891', amount: '520KMF' },
            { phone: '+269 582 1975', amount: '100KMF' },
            { phone: '+269 582 2022', amount: '860KMF' },
            { phone: '+269 582 2022', amount: '5700KMF', isLast: true },
          ].map((t, i) => (
            <TransactionItem key={i} phoneNumber={t.phone} date="Transaction ID 2125687324" amount={t.amount} isLast={t.isLast} />
          ))}
          </ScrollView>
        </View>

      
    </View>
  );
};

const TransactionItem = ({ phoneNumber, date, amount, isLast }) => (
  <View style={[styles.transactionItem, isLast && styles.lastTransactionItem]}>
    <View style={styles.transactionLeft}>
      {/* <Icon name="user-circle" size={40} color="#999" style={{ marginRight: 15 }} /> */}
      <Image source={require('../assets/user.png')} style={{ marginRight: 15,width:45,height:45}}/>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionPhone}>{phoneNumber}</Text>
        <Text style={styles.transactionDate}>{date}</Text>
      </View>
    </View>
    <Text style={styles.transactionAmount}>{amount}</Text>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  headerContainer: {
    position: 'relative',
    
  },
  backgroundImage: {
   width: '100%',
  height: height * 0.30, 
  justifyContent: 'flex-start',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2%',
    padding: '2%',
  },
  welcomeText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#FFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    paddingLeft: '7%',
  },
  subText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    marginLeft: '9%',
  },
  bellIconContainer: {
    padding: 10,
  },

  badgeContainer: {
  position: 'absolute',
  top: 5,
  right: 5,
  backgroundColor: '#03224C',
  borderRadius: 10,
  minWidth: 18,
  height: 18,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 4,
},
badgeText: {
  color: '#fff',
  fontSize: 10,
  fontWeight: '600',
  fontFamily: 'Montserrat',
},
  

   cardWrapper: {
  width: width * 0.9,
  height: height * 0.25,
  alignSelf: 'center',
  marginTop: '-40%',
  borderRadius: 15,
  backgroundColor: '#FFFFFF',
  //shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 8, 
  zIndex: 10,
  overflow: 'visible',
  position: 'absolute',
  top: height * 0.22,
},
  cardTextContainer: {
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  cardTextRightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 5,
  },
  cardBackground: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  cardTitle: {
    fontSize: 11,
    color: '#03224C',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  cardSubtitle: {
    fontSize: 32,
    color: '#03224C',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    marginBottom: '3%',
  },
  cardTitle1: {
    fontSize: 8,
    color: '#03224C',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  cardSubtitle1: {
    fontSize: 20,
    color: '#03224C',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    marginBottom: '22%',
  },
  cardTitle2: {
    fontSize: 8,
    color: '#03224C',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  cardSubtitle2: {
    fontSize: 20,
    color: '#03224C',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },

  currency: {
  fontSize: 14, // smaller than number
  fontWeight: '400',
  color: '#03224C',
  fontFamily: 'Montserrat',
    fontStyle: 'normal',
},
  cardLogo: {
    width: 59,
    height: 41,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  commissionWrapper: {
    alignItems: 'flex-end',
  },
  cardTitle3: {
    fontSize: 8,
    color: '#A20101',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  cardSubtitle3: {
    fontSize: 20,
    color: '#A20101',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  kmfText: {
    fontSize: 12,
    color: '#A20101',
    fontWeight: '400',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  scrollView: {
  maxHeight: height * 0.3,  // or tweak this value
},
  
  servicesContainer: {
    marginTop: '15%',
  paddingHorizontal: 20,
},

servicesTitle: {
  fontSize: 16,
  fontWeight: '700',
  color: '#03224C',
  marginBottom: 10,
  fontFamily: 'Montserrat',
    fontStyle: 'normal',
},

servicesGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},

serviceItem: {
  width: '22%',
  alignItems: 'center',
 marginBottom:'-15%'
},

serviceLabel: {
  fontSize: 11,
  textAlign: 'center',
  marginTop: 5,
  color: '#212121',
  fontFamily: 'Montserrat',
    fontStyle: 'normal',
},

transactionsContainer: {
    paddingHorizontal: 20,
    paddingTop: '20%',
  },
sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#03224C',
    marginBottom: 15,
     fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },

 searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
    marginTop: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchTextInput: {
    flex: 1,
    fontSize: 14,
    color: '#828181',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight:'500'
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginBottom: 15,
  },

  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  lastTransactionItem: {
    borderBottomWidth: 0,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionDetails: {
    justifyContent: 'center',
  },
  transactionPhone: {
    fontSize: 14,
    color: '#818181',
    fontWeight: '600',
    marginVertical: 2,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  transactionDate: {
    fontSize: 8,
    color: '#828181',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight:'400'
  },
  transactionAmount: {
    fontSize: 14,
    color: '#828181',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
});
