import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity    , StatusBar  , ImageBackground   } from 'react-native';

import React from "react";  
import pic1 from "../Images/pic1.jpg" ;  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function  LogIn  (  {   route , navigation  }) {
      
  const [  email , onChangeEmail ] = React.useState("");  // email 
  const [ password1 , onChangePassword1  ] = React.useState("");    // password  
  const [ icon , onChangeIcon ] = React.useState( 'eye-off');
  const [ visible  , onChangeVisibilty   ] = React.useState( true );    // password





  // login api  
  
 



  const submit2    = ()  => {   
   
  
   
    const getdata1 =  async () => {  
  

      const clientTime = new Date() ;
      // console.log( email );
     

     
     try {
    //  const response = await fetch( 'http://10.0.2.2:8000/student/login'  ,   
    const response = await fetch( "https://learn-up.app/student/login"    ,  

    {  method: 'POST', 

        headers: {
       'Accept': 'application/json',
       'Content-type': 'application/json'  ,  
       'X-Client-Time' : clientTime , 
       "email_id" : email
        
      }
   , 
body: JSON.stringify({
  
 
"email_id":  email , 
"password": password1 						


}),
}
);  

 const json = await response.json(); 


      console.log(json);     
   
    if(  json.status === "success"){ 

    alert( json.message)  ; 
    onChangeEmail("")  ;
    onChangePassword1("") ; 
    navigation.navigate( "Home"    ,   {   userData : json.data  }   ) ;
    
   
  }else {

      alert(  json.message)  ; 
     
  }

} catch (error) {
 console.error(error); 
 alert( error ) ; 
}  
};


    getdata1()  ;   
  




};    






   
const handlePasswordVisibility   = ()  => {
            
  if(  icon == 'eye-off') {
   
    onChangeIcon('eye')  ; 
    onChangeVisibilty( false) ; 

  }else if(    icon == 'eye') {

    onChangeIcon('eye-off')  ; 
    onChangeVisibilty( true ) ; 
  }
      
 }  ;  



  


   

    
       






    return ( 
        <View style={ styles.container}  >
        
        <ImageBackground  source={pic1 } resizeMode="cover"  style={styles.image} >
    
        <StatusBar  barStyle="dark-content" 
       backgroundColor="#f7e5e9"  />

        <View style={styles.view1} >

         <View style={styles.view2} > 

          <Text   style={styles.text1}  >Welcome on board !</Text>
         </View> 


         <TextInput   style= {[ styles.t2  , {  paddingLeft : 10    } ]}  placeholder='Enter your email id' 
        value= { email }  onChangeText= { onChangeEmail }/>  
         

         <View  style={[styles.t2 , { display : "flex" , flexDirection : "row"} ]}  > 

         <TextInput   secureTextEntry={ visible}      style={ styles.password_inp}  placeholder='Enter your password' 
        value= { password1 }  onChangeText= { onChangePassword1}/>   


     <TouchableOpacity  style={styles.password_eye}
     onPress={ () => { handlePasswordVisibility()}} >  
<MaterialCommunityIcons name={ icon }  size={30}  /> 
         </TouchableOpacity>  


          </View> 



          <View  style={styles.view2}> 

            <Text>Forget password ? contact your facilitator</Text> 

          </View>

     
        <TouchableOpacity style={ styles.t1}   onPress = {  submit2 } >  
        <Text  style={{ fontSize : 14  , color : "#FFF"  , fontWeight : "600"   }} >  Log In </Text>
        </TouchableOpacity>
          

        </View>  



         </ImageBackground>
      </View> 

        ) ;
  
}  
 



const styles = StyleSheet.create({ 
   
  container: {
    flex: 1 , 
    backgroundColor : '#F7E5E9'  , 
    display : "flex"  , 
    flexDirection : "row", 
    alignItems : "center"  ,
 
  } 
  ,   


  image : {

  height : "100%"  , 
  width : "100%"   ,  
    display : "flex"  , 
  alignItems : "flex-end" ,  
  justifyContent  : "center" , 

  }  ,  
 

  view1 : {

    height : "46.92%"  , 
    width : "52.95%"   , 
    display: "flex"   ,
    justifyContent : "space-between"

 

  }     ,  


  view2 : {
    
        
    height : "15.92%"  , 
    width : "62.95%"   
  

     
     

  }   ,


  t1 : {
     
    height : "13.52%"  , 
    width : "28.44%"   ,  
    backgroundColor : "#5E81F4"  ,  
    display : "flex" , 
    alignItems : 'center' , 
    justifyContent : "center"  , 
    borderRadius : 25 

  }  , 


  t2 : {
          
    height : "13.52%"  , 
    width : "57.44%"   , 
    backgroundColor : "white"  , 
    borderRadius : 25 , 
    borderColor : '#5E82F4' ,
    borderWidth : 1 , 
    

  } , 
    


  password_inp :  {

    width : "80%" ,
    borderRadius : 25 ,  
    paddingLeft : 8, 
  }
 , 
  password_eye  : {
    width : "20%" , 
    alignItems : "center" , 
    height : "100%"  , 
    borderRadius : 25 ,

  }  , 



   
  text1 : {


    fontWeight: '700' ,
    fontStyle: 'normal'  , 
     fontSize: 30 , 
     color : "#F06B6D"
   
     
  }

})  
 



