import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const accounts = [
  { id: '1', name: 'Super saver account', number: '1900 8988 1234' },
  { id: '2', name: 'Gold Standard account', number: '1900 8988 1234' },
  { id: '3', name: 'Visa Credit Card', number: '4367 7935 1258 3258' },
  { id: '4', name: 'Visa Credit Card', number: '4367 7935 1258 3258' },
];

const DepositemoneyPayment = () => {

    const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const handleProceed = () => {
    
   setModalVisible(true)

  };

  const Handleclose = () =>{
    setModalVisible('false')
  }

  return (
    <SafeAreaView style={styles.container}>
        
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#A30000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Deposit Money</Text>
        <Image source={require('../assets/loginlogo.jpg')} style={styles.logo} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Enter the Amount</Text>
      <Text style={styles.subtitle}>Enter the amount that is to be deposited</Text>

      {/* Amount Input */}
      <View style={styles.amountWrapper}>
        <TextInput
          style={styles.amountInput}
          value={amount}
          onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#999"
        />
        <Text style={styles.currency}>KMF</Text>
      </View>

      {/* Account List */}
      <Text style={styles.sectionTitle}>Deposit Money to</Text>
      <FlatList
  data={accounts}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.accountItem}
      onPress={() => setSelectedAccountId(item.id)}
    >
      <View>
        <Text style={styles.accountName}>{item.name}</Text>
        <Text style={styles.accountNumber}>{item.number}</Text>
      </View>
      <View style={styles.radioOuter}>
        {selectedAccountId === item.id && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  )}
  ListFooterComponent={
    <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
      <Text style={styles.proceedText}>Proceed</Text>
    </TouchableOpacity>
    
  }
  contentContainerStyle={{ paddingBottom: 40 }}
/>

     

      <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalCard}>
                {/* Blue Circle with White Check */}
                <View style={styles.iconCircle}>
                  <Icon name="check" size={30} color="#fff" />
                </View>
                
          
                
                <Text style={styles.modalTitle}>Success</Text>
                <Text style={styles.modalSubtitle}>KMF Deposite to Account 3232997</Text>

                <Text style={styles.modalSub_subtitle}>Sucess</Text>
          
               {/* <Image source={require('../assets/sucessmodal.jpg')} style={styles.logo} /> */}
          
                {/* Proceed Button */}
                <TouchableOpacity style={styles.proceedBtn} onPress={Handleclose}>
                    <Text style={styles.proceedBtnText}>Close</Text>
                    </TouchableOpacity>
              </View>
            </View>
          </Modal>
      


       
    </SafeAreaView>
  )
}

export default DepositemoneyPayment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: '15%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10%',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#A30000',
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#A30000',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#AAA',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 20,
  },
  amountInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#A30000',
  },
  currency: {
    fontSize: 14,
    //marginLeft: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#A30000',
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#DDD',
  },
  accountName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  accountNumber: {
    fontSize: 13,
    color: '#666',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A30000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#A30000',
  },
  proceedButton: {
    backgroundColor: '#A30000',
    paddingVertical: '5.3%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '10%',
    elevation: 5,
    shadowColor: '#A30000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  proceedText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A30000',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#828181',
    textAlign: 'center',
    marginBottom: 20,
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
  proceedBtn:{
backgroundColor: '#A30000',
    paddingVertical: 14,
    paddingHorizontal: '30%',
    borderRadius: 10,
    marginHorizontal: 25,
    alignItems: 'center',
    
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  proceedBtnText:{

  }
});

