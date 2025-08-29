import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Toaster } from 'sonner-native';
import WelcomeScreen from "../src/screens/Welcome"
import Login from '../src/screens/Login';
import LoginOtp from '../src/screens/LoginOtp';
import Home from '../src/screens/Home';
import Depositemoney from './screens/Depositemoney';
import Depositemoneydetails from './screens/Depositemoneydetails';
import DepositemoneyAccount from './screens/DepositemoneyAccount';
import DepositemoneyPayment from './screens/DepositemoneyPayment';
import Withdrawmoney from './screens/Withdrawmoney';
import WithdrawmoneyAccount from './screens/WithdrawmoneyAccount';
import Withdrawmoneydetails from './screens/Withdrawmoneydetails';
import WithdrawmoneyPayment from './screens/WithdrawmoneyPayment';
import WithdrawnmoneyVerification from './screens/WithdrawnmoneyVerification';
import Transactions from './screens/Transactions';
import Profile from './screens/Profile';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (

    <NavigationContainer>
        <Stack.Navigator 
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginOtp" component={LoginOtp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Depositemoney" component={Depositemoney} />
      <Stack.Screen name="Depositemoneydetails" component={Depositemoneydetails} />
      <Stack.Screen name="DepositemoneyAccount" component={DepositemoneyAccount} />
      <Stack.Screen name="DepositemoneyPayment" component={DepositemoneyPayment} />
      <Stack.Screen name="Withdrawmoney" component={Withdrawmoney} />
      <Stack.Screen name="WithdrawmoneyAccount" component={WithdrawmoneyAccount} />
      <Stack.Screen name="Withdrawmoneydetails" component={Withdrawmoneydetails} />
      <Stack.Screen name="WithdrawmoneyPayment" component={WithdrawmoneyPayment} />
      <Stack.Screen name="WithdrawnmoneyVerification" component={WithdrawnmoneyVerification} />
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="Profile" component={Profile} />
      
      
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
        <RootStack />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    userSelect: "none"
  }
});