import { StyleSheet, Text, View  , TextInput ,  Pressable    , StatusBar  , ImageBackground ,  Dimensions, AppRegistry  , TouchableOpacity , Image, ScrollView } from 'react-native';


import * as React from 'react';
import pic2 from "../Images/pic2.jpg" ;  
import  videoPic from "../Images/videoPic.jpg" ;  
import tasktextback from "../Images/tasktextback.jpg" ; 
import textBackPic from "../Images/textBackPic.jpg"  ;  
import app_backgrounds_picture from "../Images/app_backgrounds_picture.jpg"  ;  
import video2 from "../assets/video2.mp4" ;  
import { Video, ResizeMode } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';  
import logo_student from "../Images/logo_student.png" ; 
import vector from "../Images/vector.png" ;  
import Checkbox from './Checkbox';
import  "../app.json" ; 
import * as DocumentPicker from 'expo-document-picker';




const windowHeight = Dimensions.get('window').height; 





export default function  Module (   {   route , navigation  }) { 
 
  const [  currentOrigin  , setCurrentOrigin ] = React.useState( null ) ; 
  const [  currentElement  , setCurrentElement  ] = React.useState( 0 ) ;  
  const [  Answer  , setAnswer  ] = React.useState(  [] ) ;  
  const [  isChecked , setIsChecked  ] = React.useState( [] ) ;   // for handling quiz   

  



/* 
  console.log( "module") ; 
  console.log( currentElement) ;
  console.log( route.params.screenProp ) ;  
  console.log(  route.params.data ) ;  
  console.log(  route.params.userData ) ;  */


  const [ data  , setData ] = React.useState( [ { type : "none"} ] ) ; 

    

  const  getData = async (  ) => {  
     
    


  /*   console.log(  "ingetdata" ) ;  */ 


    try {
      const response = await fetch( "http://3.123.37.47:5000/admin/group_by" ,  

      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
        }
    , 
    body: JSON.stringify({
       
      "course_name" : route.params.data.course_name , 
    "module_name" : route.params.data.module_name , 
 
  }),
}
     );
      const json = await response.json();

        
    //   console.log(   json  ) ;  

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








  
  React.useEffect(() => { 

   // console.log( "useeffect") ; 
   /*  setCurrentOrigin( route.params.currentElement ); */
    setCurrentElement(  route.params.currentElement );   
    
    
   

    getData();  



  }  , [   route.params.screenProp  ]) ; 




   


  // all the types and are mentioned 

 /*  {

    type : "text"  , 
    text : "quiz"

}  ,    


  {



    type : "picture"  , 
    text : "picture"
  
  }  , 
  {

    type : "task_text"  , 
    text : "task_text"
  
  
     }  , 

  {

    type : "text"  , 
    text : "yuyu jyt6uty gf67yr  gyutyu  gyg  gjygugu hjgg"

}    ,  

  {

    type : "video"  , 
    text : "video "

}  ,   
{

  type : "quiz"  , 
  text : "quiz"

}  
,    

{

type : "picture_upload"  , 
text : "picture_upload"

}  ,   


{



type : "calculation"  , 
text : "calculation"

}  , 



{

type : "quiz"  , 
text : "quiz"

}  
 */ 


 

 

  //   submit picture  
  const submitPicture = async ()  => { 
   // alert("gjj") ;  


    try { 

      const result = await DocumentPicker.getDocumentAsync({
        type: 'image/*',
        
      })
      if (result.type === 'cancel') { 
      
        alert('File not selected!');
        return;
      } 
      
      alert( "File Uploaded!" ) ; 
      console.log('Document picked:', result);

    } catch(err) {
          
      alert( "Please try again!") ; 
      console.log("Error picking document: ", err);
    }  
  }




  

 
 



  const video = React.useRef(null);  
  const [status, setStatus] = React.useState({}); 



















  const handlePrevButton = (  ) => {
     

    setCurrentElement(  currentElement-1 )  ;    
    console.log(  data[ currentElement - 1 ].type)  ; 
       
    console.log("inprev")  ;

      if(  data[ currentElement - 1 ].sub_type === "quiz"     ) {
           
        navigation.navigate( "Quiz"     ,  {   currentElement : currentElement - 1   ,    totalLength  :  data.length     , data : data   , screenProp : route.params.screenProp   , userData :  route.params.userData   }   )  ;   

      }  

  }
  

  const  handleNextButton = (  ) => {
     

    setCurrentElement(  currentElement+1 )  ;    
    console.log(  data[ currentElement + 1 ].sub_type)  ; 
       
    
    console.log("innext")  ;

      if(  data[ currentElement + 1 ].sub_type === "quiz"     ) {  


           
        navigation.navigate( "Quiz"     ,  {   currentElement : currentElement +1   ,    totalLength  :  data.length     , data : data   , screenProp : route.params.screenProp  ,   userData :  route.params.userData  }   )  ;  

      } 
  }
  








   if(   data[currentElement].sub_type  === "text" ) {

       

   


  return(

  <View style={ styles.container}   > 
 <ImageBackground  source={ textBackPic }  resizeMode="cover"  style={styles.image} >  

       
 <View  style={ styles.sidebar}    >
      
    
   
 <View  style= {{ height : "17%"  , width : '100%'  , display : "flex"  , alignItems: "center"  , justifyContent : "flex-end"   }}>
                  
                 
                  <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "80%"}}  source={ logo_student } /> 
                

                </View>   
                 



                <View  style= {{ height : "65%"  , width : "100%"  , display : "flex"   ,  justifyContent : "center" }}>
    
  
                <View  style= {{ height : "60%"  , width : "100%" ,  display : "flex"  , justifyContent : "space-around"  , alignItems : "center"}} >  



  
                      <Pressable  style= {{ height : "15%"  , width : "40%" }}  onPress= {() => {   navigation.navigate( "Home"   ,  { userData : route.params.userData }  ) }}  >
                      <MaterialCommunityIcons name="grid"  size={30}  color={ "#B6B7D0"} />
                      </Pressable> 


                      <Pressable  style= {{ height : "15%"  , width : "40%"}}    onPress= {() => {   navigation.navigate( "Bplan"     ,  { userData : route.params.userData }   ) }}  >
                      <MaterialCommunityIcons name="receipt"  size={30}  color={ "#B6B7D0"} />
                          </Pressable>  




                          <Pressable  style= {{ height : "15%"  , width : "40%" }} >
                            
                          <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"} />
                          </Pressable> 


                </View>

                  
                </View>
                  
                <View  style= {{ height : "18%"  , width : "100%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
            
               
               <Pressable  style= { [  styles.alignment ,  { height : "30%"  , width : "50%"}] }     >

        
               <MaterialCommunityIcons name="logout"  size={30}  color={ "#F06B6D"}   onPress= {() => {   navigation.navigate( "LogIn") }} /> 
               </Pressable>
               <View>

               </View>
                  
                </View>




      </View> 
      
     
     
     
      <View style={ styles.body} >  
      
   
 
 
 
          <View    style={ styles.view1} >     
           
 
          <View   style={ [  styles.box_alignment , {  height : "60%"  , width : '20%' , backgroundColor : "#5E82F4" ,  borderTopRightRadius :25  , borderBottomRightRadius : 25  } ] } >
 
 <Text style = { { color : "#FFF"  , fontWeight : "700" , fontSize : 20} }>{ route.params.name }</Text>
  </View>
     
 
 
 <View  style= {{  height : "60%"  , width : '25%'  ,  display : "flex"  , justifyContent : 'center'  ,   alignItems :"center"  ,   flexDirection  : "row"   , backgroundColor :"#D9D9D9"  , borderTopLeftRadius : 25 , borderBottomLeftRadius :  25  , overflow :"hidden" }}>  
                      
                      
                        
                      <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "25%"}}  source={ vector  } /> 
                                        
                                           
               
                                   <View style={{    height : "80%"  , width : '75%'    ,   display : "flex"   , alignItems : "flex-start"  , justifyContent : "center"  , paddingLeft : 2  }}>
                                                 
                             <Text style={{   fontSize : 17  , color : "#353B55"  , fontWeight : "700"  , fontStyle : "normal"}}>{ route.params.userData.student_name  }</Text> 
               
                             <Text style={{ fontSize : 10  , color : "#5A6198"  , fontWeight : "600"  , fontStyle : "normal"  }} >{ route.params.userData.school_name  } </Text>
                                             </View>
                                 </View>
 
 
          </View> 
     
      
          <View    style={ [styles.view2   , {  justifyContent : "flex-start"} ] } >      
     
         
             <View  style={{ height : "20%"  , width : "75%"   , borderRadius : 20}} > 
 
             <Text> question  hjjhgjds hkuyku iuu  ?? </Text> 
             </View>
             

            <View  style={{ height : "70%"  , width : "75%"   , backgroundColor : '#FFF'  , borderRadius : 20}} > 
             <Text>text</Text> 
             </View>

     
          </View> 
     
        
     
     
          <View    style={ styles.view3} >  
            
          <View  style={  styles.view3_inner_view  }  >
     
            
          <Pressable   disabled={ ( currentElement >= 1) ? false : true }  onPress={ () => {   handlePrevButton( ) }}   style={ styles.btn }  >
     <MaterialCommunityIcons name="chevron-left"  size={45}   color= { ( currentElement >= 1 )? "#000" : "#808080"}  />
     </Pressable> 


     <Pressable   disabled={ ( currentElement <= data.length - 2 ) ? false : true }  onPress={ () => {   handleNextButton( ) }}    style={ styles.btn }   >
     <MaterialCommunityIcons name="chevron-right"  size={45}    color= { (  currentElement <= data.length - 2 )? "#000" : "#808080"} />
     </Pressable>
     
          
          </View >
         
     
          </View>
     
       </View>  
 

</ImageBackground>
  </View> 






  ) ;
  


   }     



 

  else if(   data[currentElement].type  === "quiz" ) {

  return(

  <View>
    <Text>xajgah</Text>
  </View>

  ) ;
  }

























































  




 


  else if  (     data[currentElement].sub_type  === "video"   ) {
   




    return(

      <View style={ styles.container}   > 
           
        <ImageBackground  source={ videoPic  } resizeMode="cover"  style={styles.image} > 


    <View  style={ styles.sidebar}   >
      
        
    <View  style= {{ height : "17%"  , width : '100%'  , display : "flex"  , alignItems: "center"  , justifyContent : "flex-end"   }}>
                  
                 
                  <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "80%"}}  source={ logo_student } /> 
                

                </View>   
                 



                <View  style= {{ height : "65%"  , width : "100%"  , display : "flex"   ,  justifyContent : "center" }}>
    
  
                <View  style= {{ height : "60%"  , width : "100%" ,  display : "flex"  , justifyContent : "space-around"  , alignItems : "center"}} >  



                <Pressable  style= {{ height : "15%"  , width : "40%" }}  onPress= {() => {   navigation.navigate( "Home"   ,  { userData : route.params.userData }  ) }}  >
                      <MaterialCommunityIcons name="grid"  size={30}  color={ "#B6B7D0"} />
                      </Pressable> 


                      <Pressable  style= {{ height : "15%"  , width : "40%"}}    onPress= {() => {   navigation.navigate( "Bplan"     ,  { userData : route.params.userData }   ) }}  >
                      <MaterialCommunityIcons name="receipt"  size={30}  color={ "#B6B7D0"} />
                          </Pressable> 




                          <Pressable  style= {{ height : "15%"  , width : "40%" }} >
                            
                          <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"} />
                          </Pressable> 


                </View>

                  
                </View>
                  
                <View  style= {{ height : "18%"  , width : "100%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
            
               
               <Pressable  style= { [  styles.alignment ,  { height : "30%"  , width : "50%"}] }    onPress= {() => {   navigation.navigate( "LogIn") }}    >

               <MaterialCommunityIcons name="logout"  size={30}  color={ "#F06B6D"} /> 

               </Pressable>
               <View>

               </View>
                  
                </View>



     </View> 
     
    
    
    
     <View style={ styles.body} >  
     
  



         <View    style={ styles.view1} >     
          

         <View   style={ [  styles.box_alignment , {  height : "60%"  , width : '20%' , backgroundColor : "#5E82F4" ,  borderTopRightRadius :25  , borderBottomRightRadius : 25  } ] } >

<Text style = { { color : "#FFF"  , fontWeight : "700" , fontSize : 20} }>{ route.params.name }</Text>
 </View>
    

 <View  style= {{  height : "60%"  , width : '25%'  ,  display : "flex"  , justifyContent : 'center'  ,   alignItems :"center"  ,   flexDirection  : "row"   , backgroundColor :"#D9D9D9"  , borderTopLeftRadius : 25 , borderBottomLeftRadius :  25  , overflow :"hidden" }}>  
                      
                      
                        
       <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "25%"}}  source={ vector  } /> 
                         
                            

                    <View style={{    height : "80%"  , width : '75%'    ,   display : "flex"   , alignItems : "flex-start"  , justifyContent : "center"  , paddingLeft : 2  }}>
                                  
              <Text style={{   fontSize : 17  , color : "#353B55"  , fontWeight : "700"  , fontStyle : "normal"}}>{ route.params.userData.student_name  }</Text> 

              <Text style={{ fontSize : 10  , color : "#5A6198"  , fontWeight : "600"  , fontStyle : "normal"  }} >{ route.params.userData.school_name  } </Text>
                              </View>
                  </View>

         </View> 
    
     
         <View    style={ styles.view2   } >      
    
     
        <View  style={{ height : "80%"  , width : "75%"    , borderRadius : 20 }} > 
 

         <Video
        ref={video}
        style={styles.vid}
        source= {
        /*   uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',  */
               { uri:  data[currentElement].file }
        }
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
            </View>  



    
    
         </View> 
    
       
    
    
         <View    style={ styles.view3} >  
           
         <View  style={  styles.view3_inner_view  }  >
    
           
         <Pressable  disabled={ ( currentElement >= 1) ? false : true }  onPress={ () => {   handlePrevButton( ) }}   style={  styles.btn   }   >
     <MaterialCommunityIcons name="chevron-left"  size={45}  color= { ( currentElement >= 1 )? "#000" : "#808080"} />
     </Pressable> 


     <Pressable    disabled={ ( currentElement <= data.length - 2 ) ? false : true }   onPress={ () => {   handleNextButton( ) }}  style={ styles.btn }   >
     <MaterialCommunityIcons name="chevron-right"  size={45}  color= { (  currentElement <= data.length - 2 )? "#000" : "#808080"}  />
     </Pressable>
     
         
         </View >
        
    
         </View>
    
      </View>  



    
    </ImageBackground>   




    
      </View> 


      ) ;
     


  }   











































  




































  
  if(   data[currentElement].sub_type  === "picture" ) {

       

   


    return(
  
    <View style={ styles.container}   > 
   <ImageBackground  source={ textBackPic } resizeMode="cover"  style={styles.image} >  
  
         
   <View  style={ styles.sidebar}   >
        
     
   <View  style= {{ height : "17%"  , width : '100%'  , display : "flex"  , alignItems: "center"  , justifyContent : "flex-end"   }}>
                  
                 
                  <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "80%"}}  source={ logo_student } /> 
                

                </View>   
                 



                <View  style= {{ height : "65%"  , width : "100%"  , display : "flex"   ,  justifyContent : "center" }}>
    
  
                <View  style= {{ height : "60%"  , width : "100%" ,  display : "flex"  , justifyContent : "space-around"  , alignItems : "center"}} >  



  
                <Pressable  style= {{ height : "15%"  , width : "40%" }}  onPress= {() => {   navigation.navigate( "Home"   ,  { userData : route.params.userData }  ) }}  >
                      <MaterialCommunityIcons name="grid"  size={30}  color={ "#B6B7D0"} />
                      </Pressable> 


                      <Pressable  style= {{ height : "15%"  , width : "40%"}}    onPress= {() => {   navigation.navigate( "Bplan"     ,  { userData : route.params.userData }   ) }}  >
                      <MaterialCommunityIcons name="receipt"  size={30}  color={ "#B6B7D0"} />
                          </Pressable>   




                          <Pressable  style= {{ height : "15%"  , width : "40%" }} >
                            
                          <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"} />
                          </Pressable> 


                </View>

                  
                </View>
                  
                <View  style= {{ height : "18%"  , width : "100%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
            
               
               <Pressable  style= { [  styles.alignment ,  { height : "30%"  , width : "50%"}] }     >

               <MaterialCommunityIcons name="logout"  size={30}  color={ "#F06B6D"}   onPress= {() => {   navigation.navigate( "LogIn") }} /> 

               </Pressable>
               <View>

               </View>
                  
                </View>

  
  
        </View> 
        
       
       
       
        <View style={ styles.body} >  
        
     
   
   
   
            <View    style={ styles.view1} >     
             
   
            <View   style={ [  styles.box_alignment , {  height : "60%"  , width : '20%' , backgroundColor : "#5E82F4" ,  borderTopRightRadius :25  , borderBottomRightRadius : 25  } ] } >
   
   <Text style = { { color : "#FFF"  , fontWeight : "700" , fontSize : 20} }>{ route.params.name }</Text>
    </View>
       
   
   
   
 <View  style= {{  height : "60%"  , width : '25%'  ,  display : "flex"  , justifyContent : 'center'  ,   alignItems :"center"  ,   flexDirection  : "row"   , backgroundColor :"#D9D9D9"  , borderTopLeftRadius : 25 , borderBottomLeftRadius :  25  , overflow :"hidden" }}>  
                      
                      
                        
                      <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "25%"}}  source={ vector  } /> 
                                        
                                           
               
                                   <View style={{    height : "80%"  , width : '75%'    ,   display : "flex"   , alignItems : "flex-start"  , justifyContent : "center"  , paddingLeft : 2  }}>
                                                 
                             <Text style={{   fontSize : 17  , color : "#353B55"  , fontWeight : "700"  , fontStyle : "normal"}}>{ route.params.userData.student_name  }</Text> 
               
                             <Text style={{ fontSize : 10  , color : "#5A6198"  , fontWeight : "600"  , fontStyle : "normal"  }} >{ route.params.userData.school_name  } </Text>
                                             </View>
                                 </View>
   
   
            </View> 
       
        
            <View    style={ [styles.view2   , {  justifyContent : "flex-start"} ] } >      
       
           
               <View  style={{ height : "20%"  , width : "75%"   , borderRadius : 20}} > 
   
               <Text> question  hjjhgjds hkuyku iuu  ?? </Text> 
               </View>
               
  
              <View  style={{ height : "70%"  , width : "75%"   , backgroundColor : '#FFF'  , borderRadius : 20}} > 
               <Text> picture </Text> 
               </View>
  
       
            </View> 
       
          
       
       
            <View    style={ styles.view3} >  
              
            <View  style={  styles.view3_inner_view  }  >
       
            <Pressable  disabled={ ( currentElement >= 1) ? false : true }   onPress={ () => {   handlePrevButton( ) }}  style={ styles.btn }   >
     <MaterialCommunityIcons name="chevron-left"  size={45}   color= { ( currentElement >= 1 )? "#000" : "#808080"} />
     </Pressable> 


     <Pressable   disabled={ ( currentElement <= data.length - 2 ) ? false : true }    onPress={ () => {   handleNextButton( ) }}   style={ styles.btn }   >
     <MaterialCommunityIcons name="chevron-right"  size={45}  color= { (  currentElement <= data.length - 2 )? "#000" : "#808080"}   />
     </Pressable>
     
     
            
            </View >
           
       
            </View>
       
         </View>  
   
  
  </ImageBackground>
    </View> 
  
  
  
  
  
  
    ) ;
    
  
  
     }     















































  
  else if(   data[currentElement].sub_type  === "task_text"    ) {
    

    return( 
       <View style={ styles.container}   > 
                
       <ImageBackground  source={  tasktextback } resizeMode="cover"  style={styles.image} >  
     
              
 <View  style={ styles.sidebar}   >
      
   
 <View  style= {{ height : "17%"  , width : '100%'  , display : "flex"  , alignItems: "center"  , justifyContent : "flex-end"   }}>
                  
                 
                  <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "80%"}}  source={ logo_student } /> 
                

                </View>   
                 



                <View  style= {{ height : "65%"  , width : "100%"  , display : "flex"   ,  justifyContent : "center" }}>
    
  
                <View  style= {{ height : "60%"  , width : "100%" ,  display : "flex"  , justifyContent : "space-around"  , alignItems : "center"}} >  



  
                <Pressable  style= {{ height : "15%"  , width : "40%" }}  onPress= {() => {   navigation.navigate( "Home"   ,  { userData : route.params.userData }  ) }}  >
                      <MaterialCommunityIcons name="grid"  size={30}  color={ "#B6B7D0"} />
                      </Pressable> 


                      <Pressable  style= {{ height : "15%"  , width : "40%"}}    onPress= {() => {   navigation.navigate( "Bplan"     ,  { userData : route.params.userData }   ) }}  >
                      <MaterialCommunityIcons name="receipt"  size={30}  color={ "#B6B7D0"} />
                          </Pressable> 




                          <Pressable  style= {{ height : "15%"  , width : "40%" }} >
                            
                          <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"} />
                          </Pressable> 


                </View>

                  
                </View>
                  
                <View  style= {{ height : "18%"  , width : "100%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
            
               
               <Pressable  style= { [  styles.alignment ,  { height : "30%"  , width : "50%"}] }    onPress= {() => {   navigation.navigate( "LogIn") }}   >

               <MaterialCommunityIcons name="logout"  size={30}  color={ "#F06B6D"} /> 

               </Pressable>
               <View>

               </View>
                  
                </View>



      </View> 
      
     
     
     
      <View style={ styles.body} >  
      
   
 
 
 
          <View    style={ styles.view1} >     
           
 
          <View   style={ [  styles.box_alignment , {  height : "60%"  , width : '20%' , backgroundColor : "#5E82F4" ,  borderTopRightRadius :25  , borderBottomRightRadius : 25  } ] } >
 
 <Text style = { { color : "#FFF"  , fontWeight : "700" , fontSize : 20} }>{ route.params.name }</Text>
  </View>
     
 
 

  <View  style= {{  height : "60%"  , width : '25%'  ,  display : "flex"  , justifyContent : 'center'  ,   alignItems :"center"  ,   flexDirection  : "row"   , backgroundColor :"#D9D9D9"  , borderTopLeftRadius : 25 , borderBottomLeftRadius :  25  , overflow :"hidden" }}>  
                      
                      
                        
                      <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "25%"}}  source={ vector  } /> 
                                        
                                           
               
                                   <View style={{    height : "80%"  , width : '75%'    ,   display : "flex"   , alignItems : "flex-start"  , justifyContent : "center"  , paddingLeft : 2  }}>
                                                 
                             <Text style={{   fontSize : 17  , color : "#353B55"  , fontWeight : "700"  , fontStyle : "normal"}}>{ route.params.userData.student_name  }</Text> 
               
                             <Text style={{ fontSize : 10  , color : "#5A6198"  , fontWeight : "600"  , fontStyle : "normal"  }} >{ route.params.userData.school_name  } </Text>
                                             </View>
                                 </View>
 
          </View> 
     
      
          <View    style={ [styles.view2    ] } >      
     
         
             <View  style={{ height : "20%"  , width : "75%"   , borderRadius : 20  , display : "flex",   flexDirection :"row", paddingTop : 5 }} > 
              

             <Text style = { [styles.text1  , { fontSize : 16  , fontWeight : "700"  } ]}> Instructions.</Text>  

             <ScrollView style = {{ width : "85%" , height : "100%"}}>
             <Text style = {[styles.text1  , { fontSize : 14  , fontWeight : "400"  ,  width :  "100%"  , height : "100%" } ]}  >{data[currentElement].enter_text}</Text>  
             </ScrollView>
             </View>
             

            <View  style={{ height : "60%"  , width : "75%"   , backgroundColor : '#FFF'  , borderRadius : 20}} > 
             <TextInput   placeholder='Type here...' 
              /* onChangeText = {  setAnswer }  value = { Answer  }  */ 
             style={  { padding : 10}}     />
             </View>
               

            
             <View  style={{ height : "20%"  , width : "75%"    , display : "flex"  , alignItems : "flex-end"  , justifyContent : "center"}} > 
              
              <Pressable  style={{ height : "50%"  , width : "20%"   , backgroundColor : '#FCC046'  , borderRadius : 20  , display : "flex"  , justifyContent : 'center'  , alignItems : 'center'}} >
                 <Text>Submit</Text>
              </Pressable>
             </View>


     
          </View> 









     
        
     
     
          <View    style={ styles.view3} >  
            
          <View  style={  styles.view3_inner_view  }  >
     
          <Pressable    disabled={ ( currentElement >= 1) ? false : true }  onPress={ () => {   handlePrevButton( ) }}   style={ styles.btn }   >
     <MaterialCommunityIcons name="chevron-left"  size={45}   color= { ( currentElement >= 1 )? "#000" : "#808080"} />
     </Pressable> 


     <Pressable   disabled={ ( currentElement <= data.length - 2 ) ? false : true }   onPress={ () => {   handleNextButton( ) }}   style={ styles.btn }   >
     <MaterialCommunityIcons name="chevron-right"  size={45}   color= { (  currentElement <= data.length - 2 )? "#000" : "#808080"}  />
     </Pressable>
     
          
          </View >
         
     
          </View>
     
       </View>  


         </ImageBackground>
         
         </View> 
     
    ) ;
      } 
































































      else if(   data[currentElement].sub_type  === "upload_picture"    ) {
    

        return( 
           <View style={ styles.container}   > 
                    
           <ImageBackground  source={  tasktextback } resizeMode="cover"  style={styles.image} >  
         
                  
     <View  style={ styles.sidebar}   >
          
       
     <View  style= {{ height : "17%"  , width : '100%'  , display : "flex"  , alignItems: "center"  , justifyContent : "flex-end"   }}>
                      
                     
                      <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "80%"}}  source={ logo_student } /> 
                    
    
                    </View>   
                     
    
    
    
                    <View  style= {{ height : "65%"  , width : "100%"  , display : "flex"   ,  justifyContent : "center" }}>
        
      
                    <View  style= {{ height : "60%"  , width : "100%" ,  display : "flex"  , justifyContent : "space-around"  , alignItems : "center"}} >  
    
    
    
      
                    <Pressable  style= {{ height : "15%"  , width : "40%" }}  onPress= {() => {   navigation.navigate( "Home"   ,  { userData : route.params.userData }  ) }}  >
                          <MaterialCommunityIcons name="grid"  size={30}  color={ "#B6B7D0"} />
                          </Pressable> 
    
    
                          <Pressable  style= {{ height : "15%"  , width : "40%"}}    onPress= {() => {   navigation.navigate( "Bplan"     ,  { userData : route.params.userData }   ) }}  >
                          <MaterialCommunityIcons name="receipt"  size={30}  color={ "#B6B7D0"} />
                              </Pressable> 
    
    
    
    
                              <Pressable  style= {{ height : "15%"  , width : "40%" }} >
                                
                              <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"} />
                              </Pressable> 
    
    
                    </View>
    
                      
                    </View>
                      
                    <View  style= {{ height : "18%"  , width : "100%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
                
                   
                   <Pressable  style= { [  styles.alignment ,  { height : "30%"  , width : "50%"}] }    onPress= {() => {   navigation.navigate( "LogIn") }}   >
    
                   <MaterialCommunityIcons name="logout"  size={30}  color={ "#F06B6D"} /> 
    
                   </Pressable>
                   <View>
    
                   </View>
                      
                    </View>
    
    
    
          </View> 
          
         
         
         
          <View style={ styles.body} >  
          
       
     
     
     
              <View    style={ styles.view1} >     
               
     
              <View   style={ [  styles.box_alignment , {  height : "60%"  , width : '20%' , backgroundColor : "#5E82F4" ,  borderTopRightRadius :25  , borderBottomRightRadius : 25  } ] } >
     
     <Text style = { { color : "#FFF"  , fontWeight : "700" , fontSize : 20} }>{ route.params.name }</Text>
      </View>
         
     
     
    
      <View  style= {{  height : "60%"  , width : '25%'  ,  display : "flex"  , justifyContent : 'center'  ,   alignItems :"center"  ,   flexDirection  : "row"   , backgroundColor :"#D9D9D9"  , borderTopLeftRadius : 25 , borderBottomLeftRadius :  25  , overflow :"hidden" }}>  
                          
                          
                            
                          <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "25%"}}  source={ vector  } /> 
                                            
                                               
                   
                                       <View style={{    height : "80%"  , width : '75%'    ,   display : "flex"   , alignItems : "flex-start"  , justifyContent : "center"  , paddingLeft : 2  }}>
                                                     
                                 <Text style={{   fontSize : 17  , color : "#353B55"  , fontWeight : "700"  , fontStyle : "normal"}}>{ route.params.userData.student_name  }</Text> 
                   
                                 <Text style={{ fontSize : 10  , color : "#5A6198"  , fontWeight : "600"  , fontStyle : "normal"  }} >{ route.params.userData.school_name  } </Text>
                                                 </View>
                                     </View>
     
              </View> 
         
          
              <View    style={ [styles.view2    ] } >      
         
             
                 <View  style={{ height : "20%"  , width : "75%"   , borderRadius : 20  , display : "flex",   flexDirection :"row", paddingTop : 5 }} > 
                  
    
                 <Text style = { [styles.text1  , { fontSize : 16  , fontWeight : "700"  } ]}> Instructions.</Text>  
    
                 <ScrollView style = {{ width : "85%" , height : "100%"}}>
                 <Text style = {[styles.text1  , { fontSize : 14  , fontWeight : "400"  ,  width :  "100%"  , height : "100%" } ]}  >{data[currentElement].enter_text}</Text>  
                 </ScrollView>
                 </View>
                 
    
                <TouchableOpacity  style={{ height : "60%"  , width : "75%"   , backgroundColor : '#B7B7D1'  , borderRadius : 20  , display : "flex"  , alignItems : "center"  , justifyContent : "center"}} 
                 onPress={ submitPicture}
                >  
                   
                <FontAwesomeIcon  name="upload"  size={30}    /> 
                   <Text style = {{   fontSize : 17  , fontWeight : "500"  , fontStyle : "normal"}}> Upload Picture</Text>  
                 </TouchableOpacity>
                   
    
                
                 <View  style={{ height : "20%"  , width : "75%"    , display : "flex"  , alignItems : "flex-end"  , justifyContent : "center"}} > 
                  
                  <Pressable  style={{ height : "50%"  , width : "20%"   , backgroundColor : '#FCC046'  , borderRadius : 20  , display : "flex"  , justifyContent : 'center'  , alignItems : 'center'}} >
                     <Text>Submit</Text>
                  </Pressable>
                 </View>
    
    
         
              </View> 
    
    
    
    
    
    
    
    
    
         
            
         
         
              <View    style={ styles.view3} >  
                
              <View  style={  styles.view3_inner_view  }  >
         
              <Pressable    disabled={ ( currentElement >= 1) ? false : true }  onPress={ () => {   handlePrevButton( ) }}   style={ styles.btn }   >
         <MaterialCommunityIcons name="chevron-left"  size={45}   color= { ( currentElement >= 1 )? "#000" : "#808080"} />
         </Pressable> 
    
    
         <Pressable   disabled={ ( currentElement <= data.length - 2 ) ? false : true }   onPress={ () => {   handleNextButton( ) }}   style={ styles.btn }   >
         <MaterialCommunityIcons name="chevron-right"  size={45}   color= { (  currentElement <= data.length - 2 )? "#000" : "#808080"}  />
         </Pressable>
         
              
              </View >
             
         
              </View>
         
           </View>  
    
    
             </ImageBackground>
             
             </View> 
         
        ) ;
          }
      










}   





const styles = StyleSheet.create({ 
   
    container: {
      flex: 1 , 
      backgroundColor : '#F7E5E9'  , 
      display : "flex"  ,
      flexDirection : "row"
   
    }  , 
      

    image : {

      height : "100%"  , 
      width : "100%"   ,  
        display : "flex"  ,
        flexDirection : "row"  
    
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
  
  
  
      }   ,  

      main_body : {

        height : windowHeight /1.8, 
        width : "100%"   ,  
      

  
      }  ,   

      lower_div: {


        height : "14%"  , 
        width : "100%"   ,  
        display : "flex"  , 
        alignItems : "center"

  
      }  
       ,   
  
  
       lower_btn  : {
             
        height : "100%"  , 
        width : "80%"   ,   
        
        display : "flex"  , 
        flexDirection : "row"   , 
        alignItems  : "center"   , 
        justifyContent : "flex-end" , 
 
      
  
  
  
       }
     , 
  
       row : {
         
        width : "100%" , 
        height : windowHeight/3.6, 
        display :  "flex" , 
        flexDirection : "row"  , 
        alignItems : "center"  ,  
        justifyContent : "center"  ,  
     
        
       }  , 
  
  
       row_innner_box : {
      
        
         width : "80%"  , 
         height : "85%"  , 
        backgroundColor: "#FFF" ,
        borderRadius : 15

         
  
  
  
       },


  
      


      view1 : {

        height : "15%"  , 
        width : "100%"   ,   
        display : "flex" ,  
        flexDirection: "row" , 
        alignItems : "flex-end" , 
        justifyContent : "space-between" , 
        paddingBottom : 5 

      }
  , 

      

  view2 : {
    
    height : "72%"  ,  
    width : "100%" ,
     display : "flex"  , 
     alignItems : "center" , 
     justifyContent : "center" ,
        
    } 
    
      , 
 


      
  view3 : {
    
    height : "13%"  ,  
    width : "100%" ,  
    display : "flex"  , 
    alignItems : "flex-end"  , 
    paddingTop : 5 , 
        
    }   ,  

    

          
  view3_inner_view : {
    
    height : "80%"  ,  
    width : "30%" ,  
    display : "flex"  ,  
    flexDirection : "row" , 
    justifyContent : "center"  , 
    
   
        
    }   ,  

    btn : {

      height : "100%"  ,  
      width : "20%" , 
    borderRadius : 15 ,  
     display : 'flex'  , 
     alignItems : "center"  , 
     justifyContent : "center"
          

    }  ,  

    vid : {

      height :"100%"  , 
    
    }  , 

    question_div : {

     height : "30%" , 
     backgroundColor : "#FFF"

    } ,  

    question_text: {
       
      fontWeight: '700' ,
      fontStyle: 'normal'  , 
       fontSize: 16 , 
     
       
 
     }  
  ,  

    option_div : {
     
     
      height : "33.3%" , 
      backgroundColor : "#FFF" ,
      display : "flex" , 
      flexDirection : "row" , 
      borderRadius :  15
    }  , 
    


   text1 : {

  
    fontWeight : "800" , 
    lineHeight : 22 , 
    letterSpacing: -0.408 ,
   }
   ,  

   box_alignment: {
   
    display : "flex" , 
    alignItems : "flex-start" , 
    justifyContent : "center" , 
    paddingLeft : 20
  }



  }
    )  


