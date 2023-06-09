import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/Home/home';
import { RegisterScreen } from './src/Presentation/views/Register/Register';

export type RootStackParamList= {
  HomeScreen:undefined,
  RegisterScreen:undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
         <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
          <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{title: 'Registro de Usuarios', headerShown:true }}
        />
       
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;