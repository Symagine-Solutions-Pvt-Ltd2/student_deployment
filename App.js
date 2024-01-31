import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 





// import  screens   
import LogIn from "./Screens/LogIn" ;
import Home from './Screens/Home'; 
import GettingStarted from './Screens/GettingStarted';  
import Bplan from "./Screens/Bplan" ; 
import Quiz from "./Screens/Quiz" ;
import Module  from './Screens/Module'; 
import Answer from "./Screens/Answer"  ;  





 

export default function App() {  

  
  const Stack =  createNativeStackNavigator()  ;  

  
  return (
    <View style={styles.container}>  

     <NavigationContainer>  

     <Stack.Navigator initialRouteName= "GettingStarted"   screenOptions={{ headerShown: false }} >  

         
     <Stack.Screen name="GettingStarted" component={GettingStarted } 
       />


     <Stack.Screen name="LogIn" component={LogIn} 
       />
        
         
     <Stack.Screen name="Home" component={ Home }  />

    
     <Stack.Screen name="Module" component={ Module }  /> 
     
     <Stack.Screen name="Bplan" component={ Bplan   } />  
      
  
     <Stack.Screen name="Quiz" component={ Quiz  } />   
    

     <Stack.Screen name="Answer" component={ Answer  } />   
     
     </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
} 


 
const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    backgroundColor: '#fff'
  },

});