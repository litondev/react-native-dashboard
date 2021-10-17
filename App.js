import React from 'react';
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./src/Routes";

const Stack = createNativeStackNavigator();

export default class App extends React.Component{     
  render(){
    return (
      <NavigationContainer>
        <React.Suspense fallback={<View><Text>Loading . . .</Text></View>}>      
          <Stack.Navigator 
            screenOptions={{
              headerShown : false
            }}>
            {
              Routes.map((item,index) => 
                <Stack.Screen 
                  name={item.name} 
                  key={index}>
                  {props => <item.component {...props} {...this.props} /> }
                </Stack.Screen>
              )
            }        
          </Stack.Navigator>
        </React.Suspense>   
      </NavigationContainer>
    );
  }
}