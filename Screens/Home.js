import { StyleSheet, Text, View  , Alert ,  TouchableOpacity    , StatusBar  , ImageBackground,  Image  , BackHandler  } from 'react-native';
import pic2 from "../Images/pic2.jpg" ;  
import React, { useState } from "react"; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';  
import logo_student from "../Images/logo_student.png" ; 
import vector from "../Images/vector.png" ;  
import  Module1_0_1 from "../assets/Module1_0_1.mp4" ; 
import Module_1_1_0 from "../assets/Module_1_1_0.mp4" ; 
import Module_1_1_2 from "../assets/Module_1_1_2.mp4" ; 
import Module_1_1_4 from "../assets/Module_1_1_4.mp4" ; 
import Module_1_1_6 from "../assets/Module_1_1_6.mp4" ; 
import Module_1_1_8 from "../assets/Module_1_1_8.mp4" ; 







import M2_2_0 from "../assets/M2_2_0.mp4"  ;
import M2_2_1 from "../assets/M2_2_1.mp4"  ;
import M2_2_3 from "../assets/M2_2_3.mp4"  ;









export default function  Home (   {   route , navigation  }) {
     
      
    console.log(  route.params.userData ) ; 

  const [ data  , setData ] = useState(  []  

   /*  [   


      { 

        name : "Module1"  , 

       data :   [



      {

        type : "video"  ,  
        name : "Introduction video" , 
        video : Module1_0_1 

    }  ,  
    
    { 

      type : "video"  ,  
        name : "Entrepreneurial friends' video" , 
        video : Module_1_1_0

  }    , 
 


    {

      type : "task_text"  , 
      question  : "Which of these entrepreneurial friends do you identify with the most? And why?"
      
  }  ,    



{

         type : "video"  ,  
        name : "Entrepreneurial friends' video" , 
        video : Module_1_1_2 

}  ,  



{

  type : "task_text"  , 
  question  : "Drawing from the experiences of my friends' journeys, lets' examine the key takeaways: What do you think are the essential  requirements for bringing a business idea to life?"
  

}    , 

{

       type : "video"  ,  
        name : "Theoretical deep dive video" , 
        video : Module_1_1_4
  
  }    , 
  

{

  type : "task_text"  , 
  question : "Felix shared with you the four principles of entrepreneurship: 1) Innovation , 2) Pursuing opportunities , 3) Adapting to change , 4) Strive for unlimited possibilities with limited resources. Think of the example of entrepreneurial friends and their business. Which aspects of their business fall into which principle?"

}  ,   


{

  type : "video"  ,  
  name : "Theoretical deep dive video" , 
  video : Module_1_1_6
 
}    
  , 
  

  
{

  type : "task_text"  ,  
  question : "Is the business venture of the four friends truly aligned with the classification of social entrepreneurship? What do you think? Please explain and explore the reasons why you may agree or disagree with this statement."
}  ,  

  
{

  type : "video"  ,  
  name : "Theoretical deep dive video" , 
  video : Module_1_1_8
 
}    

]   


      }, 

      
         


          { 

            name : "Module2"  , 
    
           data :   [
    
         
    
          {
    
            type : "video"  ,  
            name : "Introduction video" , 
            video : M2_2_0
    
        }  ,    


        {
    
          type : "video"  ,  
          name : "Theoretical deep dive video" , 
          video : M2_2_1 
  
      }  , 
      
      
      {
    
        type : "quiz"  ,   
         text : "fghfhf"
    }  , 
       
      
      {
    
        type : "video"  ,  
        name : "Theoretical deep dive video" , 
        video : M2_2_3 

    }  , 

    {
    
      type : "quiz"  ,   
       text : "fghfhf"
  }   ,   
     
     
           ]  

  }  ,   
 



 {
  name : "Module3"  , 
    
  data :   [



 {

   type : "video"  ,  
   name : "Introduction video" , 
   video : "https://learn-up.s3.eu-central-1.amazonaws.com/1651_20240118_170939_422537.mp4"

}  ]

}


          

       
    ]   */

   
  ) ; 
   


 
    
/*    console.log( route.params.userData.name) ;
   console.log( route.params.userData.school_id) ;
   console.log( route.params.userData.program_id ) ;   
   console.log( route.params.userData.student_id ) ; */   







         
   const  getmodule = async ( p_name ) => {  
     
    


   // console.log(   p_name ) ;  


    try {
      const response = await fetch( "http://learn-up.app:5000/admin/a_module" ,  

      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
        }
    , 
    body: JSON.stringify({
       
       "program_name" : p_name 
 
  }),
}
     );
      const json = await response.json();

        
        console.log(   json  ) ;  

       if(  json.status === "success"){  
         
             setData( json.data )  ;  
       }
        else{
       
           console.log( json.message) ; 
 
       }  

    
      
    } catch (error) {
      console.error(error);
    }   
    
  };





   const getData = async () => {  

    try {
      const response = await fetch( "http://learn-up.app:5000/admin/d_program" , 
      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
        }
    , 
    body: JSON.stringify({
       
      _id :  route.params.userData.program_id
 
  }),
}
     );
      const json = await response.json();
        

    //   console.log(   json) ;   
       
         
    if(  json.status === "success"){ 
      
          getmodule(  json.data.program_name ) ;  

      }else{
       
         console.log( json.message) ; 

      }  
      
      
    } catch (error) {
      console.error(error);
    }    
  };



   


   React.useEffect(() => {

    // console.log( "bbhja")  ;
    
    getData();  



   }, []);





      



 
  const backAction = () => {
    Alert.alert("Hold on!", "Do you want to exit from app ?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };
  
  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
  
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
       
  
  













  const lapsList = data.map(( el   ,  index ) => { 


    return (
      <View   key= { index}   style= { styles.modules}> 
         


          <View  style= {  styles.module_view1  }  >
 
            <Text style =  {  styles.text1 }  > {  el.module_name} </Text> 

          </View>
         

         
          <View    style =  { styles.module_view2 }   >  
           



          <View   style =  { { height : "100%"  , width : '75%'  ,       display : "flex" ,  justifyContent : "flex-end"    ,     padding : 2       } }    >  


          <Text  style =  { styles.text2 }  > { el.subject_name } </Text> 
          </View> 
             
          <TouchableOpacity  style =  { { height : "70%"  , width : '25%'   }}    onPress= {() => {   navigation.navigate( "Module" , {   currentElement  : 0   , screenProp : true   ,   userData : route.params.userData   ,  data : el       }      ) }} > 
          <MaterialCommunityIcons name="page-next-outline"  size={30}  color={ "#5E82F4"} /> 

          </TouchableOpacity>  

          </View> 
            
        </View>
    )
  })






    return(
    <View style={ styles.container}  >
        
    <ImageBackground  source={pic2 } resizeMode="cover"  style={styles.image} >  



         <View  style={ styles.sidebar}   > 
                

                <View  style= {{ height : "17%"  , width : '100%'  , display : "flex"  , alignItems: "center"  , justifyContent : "flex-end"   }}>
                  
                 
                  <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "80%"}}  source={ logo_student } /> 
                

                </View>   
                 



                <View  style= {{ height : "65%"  , width : "100%"  , display : "flex"   ,  justifyContent : "center" }}>
    
  
                <View  style= {{ height : "60%"  , width : "100%" ,  display : "flex"  , justifyContent : "space-around"  , alignItems : "center"}} >  



  
                      <TouchableOpacity  style= {{ height : "15%"  , width : "40%" }} >
                      <MaterialCommunityIcons name="grid"  size={30}  color={ "#B6B7D0"} />
                      </TouchableOpacity> 


                      <TouchableOpacity  style= {{ height : "15%"  , width : "40%"}}    onPress= {() => {   navigation.navigate( "Bplan"  ,   {   userData : route.params.userData    }  )  } }  >
                      <MaterialCommunityIcons name="receipt"  size={30}  color={ "#B6B7D0"} />
                          </TouchableOpacity>  




                          <TouchableOpacity  style= {{ height : "15%"  , width : "40%" }} >
                            
                          <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"} />
                          </TouchableOpacity> 


                </View>

                  
                </View>
                  
                <View  style= {{ height : "18%"  , width : "100%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
            
               
               <TouchableOpacity  style= { [  styles.alignment ,  { height : "30%"  , width : "50%"}] } onPress= {() => {   navigation.navigate( "LogIn") }}      >

               <MaterialCommunityIcons name="logout"  size={30}  color={ "#F06B6D"} /> 

               </TouchableOpacity>
               <View>

               </View>
                  
                </View>


         </View>  


 










         <View style={ styles.body} >  


             <View style={ styles.view1 }  >   
          
                  <View  style= {{  height : "60%"  , width : '25%'  ,  display : "flex"  , justifyContent : 'center'  ,   alignItems :"center"  ,   flexDirection  : "row"   , backgroundColor :"#D9D9D9"  , borderTopLeftRadius : 25 , borderBottomLeftRadius :  25  , overflow :"hidden" }}>  
                      
                      
                        
       <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "25%"}}  source={ vector  } /> 
                         
                            

                    <View style={{    height : "80%"  , width : '75%'    ,   display : "flex"   , alignItems : "flex-start"  , justifyContent : "center"  , paddingLeft : 2  }}>
                                  
              <Text style={{   fontSize : 17  , color : "#353B55"  , fontWeight : 700  , fontStyle : "normal"}}>{ route.params.userData.student_name  }</Text> 

              <Text style={{ fontSize : 10  , color : "#5A6198"  , fontWeight : 600  , fontStyle : "normal"  }} >{ route.params.userData.school_name  } </Text>
                              </View>
                  </View>
            
             </View> 
 




 
               
             <View style={ styles.view2 }  >     



  {
   
      /*     data.map((el , index ) => { 
               
            <View style={ styles.modules }>   

            <TouchableOpacity onPress= {() => {   navigation.navigate( "Player") } }>  
             <Text> player </Text>   
             </TouchableOpacity> 
              </View>
          })
     */   
          lapsList
      
        } 
             </View> 

             
        
                
             <View style={ styles.view3 }  >   
        
            
             </View> 
        
         </View>

    </ImageBackground>  
  </View>
    ) ;
} 




const styles = StyleSheet.create({ 
   
  container: {
    flex: 1 , 
    backgroundColor : '#F7E5E9'  , 
    
 
  }  , 
   
      

  sidebar  : {
  
   flex :  1  , 
   backgroundColor : "#353B55"  ,  
   borderTopRightRadius: 25 ,  
   borderBottomRightRadius : 25 

  }


    ,  
    

    body : {
  

      flex :  11  ,  


    }
  
   , 

   
   image : {

    height : "100%"  , 
    width : "100%"   ,  
      display : "flex"  ,
      flexDirection : "row"  
  
    }  ,  

   

    view1 : {
      
      height : "15%"  , 
      width : "100%"   ,    
      display : "flex"  , 
      alignItems : "flex-end"     , 
      justifyContent : "flex-end"
     

    }  
      , 

      view2 : {
         
        
           
       height : "78%"  , 
       width : "100%"    , 
       display : "flex"  , 
       flexDirection : "row" , 
       flexWrap : "wrap" ,   
       paddingRight : "5%"  , 
       paddingLeft : "5%"  ,  
   

      }
   , 
        
       view3 : {
          

           
      height : "7%"  , 
      width : "100%"   

   }  

    , 

        
    modules : {

              
      height : "19%"  , 
      width : "19.20%"   ,   
      backgroundColor :  "#FFFFFF"  , 
      marginBottom :  "5%"  , 
      marginRight : "2%"  ,
      marginLeft : "2%"  , 
      marginTop : "1%" , 
      borderRadius : 12  , 

    }  


    ,   


    module_view1 : {
    

      height : "40%"  , 
      width : "100%"   ,  
  
      
      display : "flex"  , 
      alignItems :"flex-start"  , 
      justifyContent :"flex-start"

    } 
     ,   


     module_view2  : {
      
      height : "60%"  , 
      width : "100%"   ,
      flexDirection : "row"  , 
      display :"flex" , 
      alignItems : "flex-end"
     }  
    



  ,  
  
  alignment : {

    display : "flex"  , 
    alignItems : "center"  , 
      justifyContent : "center"  
  } , 


  text1 : {

   
    fontWeight: '800' ,
    fontStyle: 'normal'  , 
     fontSize: 24 , 

  }  , 

   
  text2 : {

   
    fontWeight: '400' ,
    fontStyle: 'normal'  , 
     fontSize: 14 , 
     color : "#B6B7D0"

  }  ,  
  box_alignment: {
   
    display : "flex" , 
    alignItems : "flex-start" , 
    justifyContent : "center" , 
    paddingLeft : 20
  }
      
} )