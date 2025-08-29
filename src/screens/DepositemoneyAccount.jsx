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

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const { width, height } = Dimensions.get('window');

const DepositemoneyAccount = () => {
    const navigation = useNavigation();
  const [amount, setAmount] = useState('');
const { t } = useTranslation();
const [modalVisible, setModalVisible] = useState(false);

const [modalVisible1, setModalVisible1] = useState(false);

const [selectedAccount, setSelectedAccount] = useState('wallet');

  const handleProceed = () => {
    //navigation.navigate('DepositemoneyPayment')
    setModalVisible(true)
  };

  const modalpress = () =>{
    setModalVisible(false)
    setModalVisible1(true)
  }

  const handledeposite = () =>{
    setModalVisible1(false)
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={{width: 20, height: 18}}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('Deposit Money')}</Text>
        <Image source={require('../assets/homecardlogo.png')} style={styles.image} />
      </View>

      {/* Input Section */}
      <Text style={styles.title}>{t('Enter the Amount')}</Text>
      <Text style={styles.subtitle}>
        {t('Enter the amount that is to be')} {"\n"} {t('deposited')}
      </Text>
      <TextInput
        style={styles.amountInput}
        value={amount}
        //editable={false}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />

      
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

 <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>{t('Select Account')}</Text>

          {/* Account List */}
          <TouchableOpacity
            style={styles.accountRow}
            onPress={() => setSelectedAccount('wallet')}
          >
            <View style={styles.accountText}>
              <Text style={styles.accountName}>{t('My Wallet')}</Text>
              <Text style={styles.accountSub}>{t('Zuberimangwi')}</Text>
            </View>
            <Icon
              name={
                selectedAccount === 'wallet'
                  ? 'radio-button-on'
                  : 'radio-button-off'
              }
              size={22}
              color="#A20101"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.accountRow}
            onPress={() => setSelectedAccount('visa1')}
          >
            <View style={styles.accountText}>
              <Text style={styles.accountName}>{t('Visa Credit Card')}</Text>
              <Text style={styles.accountSub}>4367 XXXX XXXX 3258</Text>
            </View>
            <Icon
              name={
                selectedAccount === 'visa1'
                  ? 'radio-button-on'
                  : 'radio-button-off'
              }
              size={22}
              color="#A20101"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.accountRow}
            onPress={() => setSelectedAccount('visa2')}
          >
            <View style={styles.accountText}>
              <Text style={styles.accountName}>{t('Visa Credit Card')}</Text>
              <Text style={styles.accountSub}>4866 XXXX XXXX 4422</Text>
            </View>
            <Icon
              name={
                selectedAccount === 'visa2'
                  ? 'radio-button-on'
                  : 'radio-button-off'
              }
              size={22}
              color="#A20101"
            />
          </TouchableOpacity>

          {/* Proceed Button */}
          <TouchableOpacity style={styles.modalButton} onPress={modalpress}>
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
      



      {/* {sucess modal} */}



       <Modal
     animationType="fade"
     transparent={true}
     visible={modalVisible1}
     onRequestClose={() => setModalVisible1(false)}
   >
     <View style={styles.modalOverlay1}>
       <View style={styles.modalCard1}>
         <Image source={require('../assets/sucess.png')} />
         <Text style={styles.modalTitle1}>Success</Text>
         <Text style={styles.modalSubtitle1}>KMF Deposite to Account 3232997</Text>

         <Text style={{color:'#828181',fontFamily:'Montserrat',fontSize:12,fontStyle:'normal',fontWeight:'500'}}>Sucess!</Text>

         
         {/* <TouchableOpacity
           style={styles.modalButton1}
           onPress={() => {
             setModalVisible(false);
             navigation.navigate('Home');
           }}
         >
           <Text style={styles.modalButtonText1}>Close</Text>
         </TouchableOpacity> */}

          <TouchableOpacity
                       style={styles.modalButton1}
                       
                        onPress={handledeposite}
                       
                     >
                       <LinearGradient
                             colors={['#730101', '#A20101']}
                             style={styles.proceedBtn1}
                             start={{ x: 0, y: 0 }}
                             end={{ x: 1, y: 0 }}
                           >
                         <Text style={styles.proceedText1}>Close</Text>
                       </LinearGradient>
                     </TouchableOpacity>
       </View>
     </View>
   </Modal>
    </SafeAreaView>
  )
}

export default DepositemoneyAccount


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
marginRight:'30%',


  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#A20101',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  subtitle: {
    fontSize: 12,
    color: '#828181',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'500'
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
  borderColor: '#AAA',
  borderRadius: 15,
  padding: 20,
  fontSize: 18,
  textAlign: 'center',
  color: '#818181',
  marginBottom: '40%',
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

  proceedBtn: {
  width: '100%',
  paddingVertical: 17,
  borderRadius: 10,
  alignItems: 'center',
},

proceedBtn1:{
width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
},


proceedText1: {
    width: '100%',
  paddingVertical: '1%',
  borderRadius: 10,
  textAlign: 'center',
  color: '#FFF',
  fontFamily:'Montserrat',
  fontSize:14,
  fontStyle:'normal',
  fontWeight:'400'
  },
proceedWrapper: {
  alignItems: 'center',
  marginBottom: height * 0.05, // adds spacing below the button
},


 modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalCard: {
  width: '85%',
  backgroundColor: '#fff',
  borderRadius: 20,
  padding: 20,
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
},
modalTitle: {
  color: '#A20101',
  fontSize: 14,
  fontWeight: '600',
  fontFamily: 'Montserrat',
  marginBottom: 20,
},
accountRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
  paddingVertical: 12,
},
accountText: {
  flexDirection: 'column',
},
accountName: {
  fontSize: 12,
  fontWeight: '500',
  color: '#404B52',
  fontFamily: 'Montserrat',
  fontStyle:'normal'
},
accountSub: {
  fontSize: 12,
  color: '#404B52',
  fontFamily: 'Montserrat',
  fontStyle:'normal'
},
modalButton: {
  width: 250,
  height: 60,
  
  alignSelf: 'center',
  shadowColor: '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 6,
  marginTop:30
},

modalGradient: {
  flex: 1,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
},

modalButtonText: {
  color: '#FFF',
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Montserrat',
  
},











 modalOverlay1: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard1: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    width: 300,
    elevation: 10,
  },
  iconCircle1: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle1: {
    fontSize: 20,
    fontWeight: '700',
    color: '#A20101',
    marginBottom: 8,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  modalSubtitle1: {
    fontSize: 12,
    color: '#828181',
    textAlign: 'center',
    marginBottom: 2,
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
  modalButton1: {
   width:250,
               
  height: 60,               
  borderRadius: 10,
  marginTop: '8%',
  overflow: 'hidden',
  alignSelf: 'center', 
  elevation: 5, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOpacity: 0.15,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  
  },
  modalButtonText1: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily:'Montserrat',
    fontStyle:'normal'
  },
 
});
