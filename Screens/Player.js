import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity    , StatusBar  , ImageBackground ,  Dimensions } from 'react-native';

import React, { useEffect , useState } from "react";
import pic2 from "../Images/pic2.jpg" ;  

import Video from 'react-native-video';
import video1 from "../Images/video1.mp4" ; 



const windowHeight = Dimensions.get('window').height; 





export default function  Player (   {   route , navigation  }) { 


  console.log( video1) ; 
  
  return(

  <View style={ styles.container}   > 
     


    <View style={ styles.view1} >  

    <Video source= { { url : "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"} }  style={ styles.video}   />


    </View>

    </View> 
    ) ; 

  }   



  
const styles = StyleSheet.create({ 
   
    container: {
      flex: 1 , 
      backgroundColor : '#F7E5E9'  , 
      display : "flex"  , 
      alignItems : "center" , 
      justifyContent : "center"
   
    }  , 
    
     
    view1:{


        width : "50%"  , 
        height : "50%" , 
        backgroundColor : "purple"
    }
    
     , 
     video : {
           
      width : "100%"  , 
      height : "100%" , 

     }
        
} )