
import { StyleSheet, Text, View  , TextInput  ,  Image   , Pressable  } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function  Checkbox( props) {
     //&& ( props.title ===  props.selectedOption[props.index] )  
 const iconName = (props.trigger[props.index] && ( props.title ===  props.selectedOption[props.index] )  ) ? 
   "checkbox-marked-circle" : "checkbox-blank-circle-outline" ;  

   
 /*    
 console.log( "checkbox") ;  
 console.log( props.index) ;   
 console.log( props.selectedOption[props.index] ) ;  
 */
    return (
  <Pressable style={ styles.container} onPress={ props.setop} > 

 <MaterialCommunityIcons name={iconName}  size={30}  />
  </Pressable>
    ) ; 
} 



const styles = StyleSheet.create({ 
   
    container: {
      flex: 1 , 
      
      display : "flex"  , 
      alignItems : "center" , 
      justifyContent : "center"
    }  
})