import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Withdrawmoneydetails = () => {
     const navigation = useNavigation();
      const [amount, setAmount] = useState('');
const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState('wallet');
    
      const handleProceed = () => {
        //navigation.navigate('WithdrawmoneyPayment')
        setModalVisible(true)
      };

      const Handlemodal = () => {

        setModalVisible(false)
        navigation.navigate('WithdrawnmoneyVerification')
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
         <Text style={styles.title}>{t('Enter the Amount')}</Text>
         <Text style={styles.subtitle}>
           {t('Enter the amount that is to be')} {"\n"} {t('withdrawn')}
         </Text>
         <TextInput
           style={styles.amountInput}
           value={amount}
           //editable={false}
           keyboardType="numeric"
           placeholderTextColor="#999"
         />
   
         {/* Proceed Button */}
         


         <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
             <LinearGradient
               colors={['#730101', '#A20101']}
               style={styles.proceedBtn}
               start={{ x: 0, y: 0 }}
               end={{ x: 1, y: 0 }}
             >
               <Text style={styles.proceedText}>Proceed</Text>
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
      <Text style={styles.modalTitle}>{t('Select Account')}</Text>

      {/* Wallet Row with Balance */}
      <TouchableOpacity 
  style={styles.accountRow} 
  onPress={() => setSelectedAccount('wallet')}
>
  <View style={styles.accountText}>
    <Text style={styles.accountName}>{t('My Wallet')}</Text>
    <Text style={styles.accountSub}>Zuberimangwi</Text>
  </View>
  <View style={styles.balanceContainer}>
    <Text style={styles.balanceText}>{t('Balance')}</Text>
    <Text style={styles.balanceAmount}>14,260 KMF</Text>
  </View>
  <Icon 
    name={selectedAccount === 'wallet' ? 'radio-button-on' : 'radio-button-off'} 
    size={22} 
    color="#A20101" 
    style={styles.radioIcon} 
  />
</TouchableOpacity>

{/* Visa 1 */}
<TouchableOpacity 
  style={styles.accountRow} 
  onPress={() => setSelectedAccount('visa1')}
>
  <View style={styles.accountText}>
    <Text style={styles.accountName}>{t('Visa Credit Card')}</Text>
    <Text style={styles.accountSub}>4367 XXXX XXXX 3258</Text>
  </View>
  <Icon 
    name={selectedAccount === 'visa1' ? 'radio-button-on' : 'radio-button-off'} 
    size={22} 
    color="#A20101" 
    style={styles.radioIcon} 
  />
</TouchableOpacity>

{/* Visa 2 */}
<TouchableOpacity 
  style={styles.accountRow} 
  onPress={() => setSelectedAccount('visa2')}
>
  <View style={styles.accountText}>
    <Text style={styles.accountName}>{t('Visa Credit Card')}</Text>
    <Text style={styles.accountSub}>4866 XXXX XXXX 4422</Text>
  </View>
  <Icon 
    name={selectedAccount === 'visa2' ? 'radio-button-on' : 'radio-button-off'} 
    size={22} 
    color="#A20101" 
    style={styles.radioIcon} 
  />
</TouchableOpacity>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.modalButton} onPress={Handlemodal}>
        <LinearGradient
          colors={['#730101', '#A20101']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.modalGradient}
        >
          <Text style={styles.modalButtonText}>{t('Proceed')}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
   
         
       </SafeAreaView>
  )
}

export default Withdrawmoneydetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: '2%',
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
    marginRight:'20%'

  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#A20101',
    textAlign: 'center',
    marginBottom: 10,
    fontStyle:'normal',
    fontFamily:'Montserrat'
  },
  subtitle: {
    fontSize: 12,
    color: '#828181',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  image:{
    width: 55,
  height: 27,
  resizeMode: 'contain',
  },
  amountInput: {
  width: '80%', // 👈 Adjust the width here (60–80% is common)
  alignSelf: 'center', // 👈 Center it horizontally
  borderWidth: 1,
  borderColor: '#818181',
  borderRadius: 15,
  paddingVertical:'5%',
  
  fontSize: 18,
  textAlign: 'center',
  color: '#818181',
  marginBottom: '20%',
},

  proceedButton: {
  width: 280,
  height: 60,
  borderRadius: 8, // fully rounded edges
  overflow: 'hidden',
  alignSelf: 'center',
  elevation: 6, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOpacity: 0.15,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  marginTop: 10,
},

proceedBtn: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
},

proceedText: {
  color: '#FFF',
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
},



  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: width * 0.9,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#790101',
    marginBottom: 16,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  accountText: {
    flex: 1,
  },
  accountName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#404B52',
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  accountSub: {
    fontSize: 12,
    color: '#666',
  },
  balanceContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  balanceText: {
    fontSize: 12,
    color: '#999',
  },
  balanceAmount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#A20101',
     fontFamily: 'Montserrat',
  fontStyle: 'normal',
  },
  radioIcon: {
    marginLeft: 5,
  },
 modalButton: {
  width: 280,
  height: 60,
  borderRadius: 12,
  overflow: 'hidden',
  alignSelf: 'center',
  elevation: 6, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOpacity: 0.15,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  marginTop: 24,
},

modalGradient: {
  flex: 1, // 👈 fill the button
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 12,
},

modalButtonText: {
  color: '#fff',
  fontWeight: '400',
  fontSize: 14,
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
},
 
});