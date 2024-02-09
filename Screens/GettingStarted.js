import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity    , StatusBar  , ImageBackground} from 'react-native';
import  gettingStarted from "../Images/gettingStarted.jpg"  ; 
import React from "react";


export default function  GettingStarted (   {   route , navigation  }) {
     




  
    return ( 
        <View style={ styles.container}  > 
   
   <ImageBackground  source={ gettingStarted } resizeMode="cover"  style={styles.image} > 



         <View  style={ styles.v1} > 
         </View> 

         <View style={ styles.v2}   >  

                    <View  style={ styles.inner_text_box} >  

                           <View style={ styles.t1}>
                           <Text style= {  styles.text1 }>Unlock your potential with </Text>
                           <Text style={ [ styles.text1  , { color :  "rgba(90 , 97, 153, 1)"  }] } >learn-up</Text> 
                           </View>  


                           <View style={ styles.t2}>
                           <Text  style= { styles.text2}  >learn, explore, grow</Text> 
                           </View> 
                              

                           <TouchableOpacity style={ styles.btn}  onPress= {() => {   navigation.navigate( "LogIn") } }> 
 


                           <Text  style={{ color : "#FFF" }}>Get Started</Text>  


                           </TouchableOpacity> 



                    </View > 


         </View>
    
      


  </ImageBackground>

        </View>
        ) ;

}  





const styles = StyleSheet.create({ 

    container: {
      flex: 1 ,  
      display : "flex"  , 
      flexDirection : "row", 
      alignItems : "center"  ,
   
    },
   
    
    v1 : {
    
        flex : 1 , 
        height : "100%"

    }  , 
   

    v2 : {

        flex : 1 ,
        height : "100%" , 
        display : "flex" , 
        justifyContent : "center"  , 
    } 
   , 
     
    inner_text_box : {

        width : "62.71%"  , 
        height : "53.28%"    , 

    }
,
   t1 : {
     
     width :  "95%"  , 
     height : "46.09%"    , 
     display : "flex"  , 
     alignItems : "flex-start"

   }  , 


   t2 : {

    width :  "100%"  , 
    height : "39%"  , 
 

   }  , 

    
   btn : {

          
    width :  "59%"  , 
    height : "12.93%"  , 
    backgroundColor : "#5E81F4" , 
     borderRadius : 13 , 
     display : "flex" , 
     alignItems : "center"  , 
     justifyContent : "center"
    
   }  
 , 

   image : {

     
    height : "100%"  , 
    width : "100%"   ,  
      display : "flex"  ,
      flexDirection : "row"  

 
   }
 
 ,   
 



 text1 :  {
      

  textAlign : "left"  , 
  fontWeight: '800' ,
  fontStyle: 'normal'  , 
   fontSize:30 , 
  lineHeight: 35.45, 
  color : '#5A6199'


  }  


 ,   

   text2 :  {
     
   fontWeight: '600' ,
   fontStyle: 'normal'  , 
    fontSize:20 , 
   lineHeight: 23.63, 
   letterSpacing: -0.408 ,
   color : "#F06B6D"


   }


  });