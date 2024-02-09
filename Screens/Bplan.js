import { StyleSheet, Text, View  , TextInput , FlatList  ,  TouchableOpacity    , StatusBar  , ImageBackground , Dimensions  , Image } from 'react-native';

import React from "react";
import pic3 from "../Images/pic3.jpg" ;  
import logo_student from "../Images/logo_student.png" ;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import vector from "../Images/vector.png" ; 


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

 



export default function  Bplan  (   {   route , navigation  }) {
       

   
  const [ data  , setData ] = React.useState( [ ] ) ; 
  
  const [ Answer  , setAnswer  ] = React.useState( [ ] ) ;
   
  const [ fetchedBpName  , setFetchedBpName  ] = React.useState( "" ) ;   
   
  const [ feedback  , setFeedback  ] = React.useState( [] ) ; 

  const [ userDetails , setuserDetails ] = React.useState( route.params.userData ) ; 



    
   //   console.log( route.params.userData)  ; 

   
      
  // get all business plan details  
  const  getAllTask = async ( bp_name  ) => {  
     
     let userDetailsIN  = { } ; 

/* 
    console.log(   bp_name ) ;  
    console.log( route.params.userData.bp_name)   ;  */ 


    try {
      const response = await fetch( "http://3.123.37.47:5000/admin/student_details" , 
      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
        }
    , 
    body: JSON.stringify({
       
      _id :  route.params.userData._id 
 
  }),
}
     ); 
      const json = await response.json();
      

          console.log(   json) ;    


       
          
    if(  json.status === "success"){ 
          
       setuserDetails( json.data) ; 
        userDetailsIN = json.data ; 

      }else{
       
         console.log( json.message) ; 

      }  
      
      
    } catch (error) {
      console.error(error);
    }   


   




     
   try {
      const response = await fetch( "http://3.123.37.47:5000/admin/all_bp" ,  

      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
        }
    , 
    body: JSON.stringify({
       
        "search_key" :   bp_name 
 
  }),
}
     );
      const json = await response.json();

     /*    
        console.log(  json.status  ) ;   
        console.log( userDetailsIN.bp_name ) ;
        console.log( bp_name ) ; */


       if(  json.status === "success"  &&  userDetailsIN.bp_name === ""    ){  
              
    
           
              setData( json.data )  ; 


       }else if(   json.status === "success"    &&   userDetailsIN.bp_name !== ""     &&   userDetailsIN.bp_name === bp_name     ){

    
        setData( json.data )  ;  
        setAnswer(  userDetailsIN.bp_answer );  
        setFeedback (  userDetailsIN.bp_feedback) ; 

        


       }else if(   json.status === "success"    &&  userDetailsIN.bp_name !== ""     &&   userDetailsIN.bp_name !== bp_name     ){

        console.log(  "here"  ) ; 
        setData( json.data )  ;   
       } else{
       
          console.log( json.message) ; 
 
       }  

    
      
    } catch (error) {
      console.error(error);
    }    
    
  
  };  




  // get business plan name  

  const getBP = async () => {  

    try {
      const response = await fetch( "http://3.123.37.47:5000/admin/student_bp_name" , 
      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
        }
    , 
    body: JSON.stringify({
       
      _id :  route.params.userData._id
 
  }),
}
     );
      const json = await response.json();
        

          console.log(   json) ;   
       
          
    if(  json.status === "success"){ 
          


          setFetchedBpName( json.data.bp_name)  ;  
          getAllTask(  json.data.bp_name ) ;     



      }else{
         

        alert( json.message ) ;
         console.log( json.message) ; 

      }  
      
      
    } catch (error) {
      console.error(error);
    }    
  };
   

  
   // get business plan name  

 /*   const getUserDetails = async () => {  

    try {
      const response = await fetch( "http://3.123.37.47:5000/admin/student_details" , 
      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
        }
    , 
    body: JSON.stringify({
       
      _id :  route.params.userData._id 
 
  }),
}
     ); 
      const json = await response.json();
      

          console.log(   json) ;    


       
          
    if(  json.status === "success"){ 
          
      // setuserDetails( json.data) ; 
       getBP(); 

      }else{
       
         console.log( json.message) ; 

      }  
      
      
    } catch (error) {
      console.error(error);
    }  
  }; 
 */

  

   
    


   
  React.useEffect(() => {

  //  console.log( "in bplan")  ;
    //getUserDetails()  ;  
    
    getBP(); 

   }, [ ]);
  




   const  updateAnswer = (  index ,   value ) => {
     
  
    console.log ( index )  ;   
    console.log ( value )  ;   
    
    const demoAnswer =  Answer ;
    demoAnswer[index]   = value ; 
    setAnswer( demoAnswer)  ; 
    
}


  



  





    // to submit business plan 

  const submitBplan  = ()  => {
   
      
       
      

      const   submit_bp =  async () => {   
      
        console.log (  Answer)  ;   
        console.log (   route.params.userData._id )  ;    
         

        try {
          const response = await fetch( "http://3.123.37.47:5000/admin/bp_answer" , 
          {   method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'  ,
            }
        , 
        body: JSON.stringify({
           
          _id :  route.params.userData._id , 
          bp_answer :  Answer , 
          bp_submitted  : "Yes"  , 
          bp_name :  fetchedBpName
     
      }),
    }
         );
          const json = await response.json();
            
    
              console.log(   json) ;   

           
              
        if(  json.status === "success"   ){ 
              
          alert( json.message) ; 
          navigation.navigate( "Home"    ,  {   userData :  userDetails   }   ) 

    
          }else{
             
            alert( json.message) ;
             console.log( json.message) ; 
    
          }  
          
          
        } catch (error) {
          console.error(error);
        } 

     
   };
       submit_bp()  ;     


       

  }











    return(
    <View style={ styles.container}  >
        
    <ImageBackground  source={pic3 } resizeMode="cover"  style={styles.image} > 

         <View  style={ styles.sidebar}> 

         <View  style= {{ height : "17%"  , width : '100%'  , display : "flex"  , alignItems: "center"  , justifyContent : "flex-end"   }}>
                  
                 
                  <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "80%"}}  source={ logo_student } /> 
                

                </View>   
                 



                <View  style= {{ height : "65%"  , width : "100%"  , display : "flex"   ,  justifyContent : "center" }}>
    
  
                <View  style= {{ height : "60%"  , width : "100%" ,  display : "flex"  , justifyContent : "space-around"  , alignItems : "center"}} >  



  
                      <TouchableOpacity  style= {{ height : "15%"  , width : "40%" }}   onPress= {() => {   navigation.navigate( "Home"    ,  {   userData : userDetails  }   ) }}    >
                      <MaterialCommunityIcons name="grid"  size={30}  color={ "#B6B7D0"} />
                      </TouchableOpacity> 


                      <TouchableOpacity  style= {{ height : "15%"  , width : "40%"}}    onPress= {() => {   navigation.navigate( "Bplan") }}  >
                      <MaterialCommunityIcons name="receipt"  size={30}  color={ "#B6B7D0"} />
                          </TouchableOpacity>  




                          <TouchableOpacity  style= {{ height : "15%"  , width : "40%" }} >
                            
                          <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"} />
                          </TouchableOpacity> 


                </View>

                  
                </View>
                  
                <View  style= {{ height : "18%"  , width : "100%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
            
               
               <TouchableOpacity  style= { [  styles.alignment ,  { height : "30%"  , width : "50%"}] }    onPress= {() => {   navigation.navigate( "LogIn") }}  >

               <MaterialCommunityIcons name="logout"  size={30}  color={ "#F06B6D"} /> 

               </TouchableOpacity>
               <View>

               </View>
                  
                </View>

         </View> 

         <View style={ styles.body} >  


             <View style={ styles.view1 }  >   
            
                  
              <View   style={ [  styles.box_alignment , {  height : "60%"  , width : '20%' , backgroundColor : "#5E82F4" ,  borderTopRightRadius :25  , borderBottomRightRadius : 25  } ] } >

             <Text style = { { color : "#FFF"  , fontWeight : "700" , fontSize : 20} }>Business Plan</Text>
              </View>
                 


              <View  style= {{  height : "60%"  , width : '25%'  ,  display : "flex"  , justifyContent : 'center'  ,   alignItems :"center"  ,   flexDirection  : "row"   , backgroundColor :"#D9D9D9"  , borderTopLeftRadius : 25 , borderBottomLeftRadius :  25  , overflow :"hidden" }}>  
                      
                      
                        
                      <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "25%"}}  source={ vector  } /> 
                                        
                                           
               
                                   <View style={{    height : "80%"  , width : '75%'    ,   display : "flex"   , alignItems : "flex-start"  , justifyContent : "center"  , paddingLeft : 2  }}>
                                                 
                             <Text style={{   fontSize : 17  , color : "#353B55"  , fontWeight : "700"  , fontStyle : "normal"}}>{ route.params.userData.student_name  }</Text> 
               
                             <Text style={{ fontSize : 10  , color : "#5A6198"  , fontWeight : "600"  , fontStyle : "normal"  }} >{ route.params.userData.school_name  } </Text>
                                             </View>
                                 </View>
                           
    

             </View> 

               
             <View style={ styles.view2 }  >   
            
              <View style={  styles.header  } > 


                  
              <View style={ [ styles.box_alignment ,{  width : "8.09%"  , borderColor :"#B6B7D0"  , borderBottomWidth : 1  , borderRightWidth : 1  , borderTopWidth : 1}]  }  >  

                      <Text style={{ fontWeight : "800"  , fontSize : 18 }}>Sl No</Text>    

                             </View> 

       
                  <View style={  [styles.box_alignment ,{  width : "23.04%"  , borderColor :"#B6B7D0"  , borderBottomWidth : 1  , borderRightWidth : 1  , borderTopWidth : 1 } ] }  >  

                  <Text style={{ fontWeight : "800" , fontSize : 18 }}>Name of task</Text>    
                  
                  </View> 

                  
                  <View style={  [styles.box_alignment , {  width : "43.64%"    , borderColor :"#B6B7D0"  , borderBottomWidth : 1  , borderRightWidth : 1  , borderTopWidth : 1} ] }  >  

               

                  </View>  

                  <View style={  [styles.box_alignment , {  width : "25.26%"  , borderColor :"#B6B7D0"  , borderBottomWidth : 1  , borderRightWidth : 1  , borderTopWidth : 1}  ]}  >  

                  <Text style={{ fontWeight : "800"  , fontSize : 18}}>  Feedback</Text>    
                  
                  </View> 

              </View>  

 




               <View style= { styles.main_body  }>
                    
               <FlatList  
               data={  data } 
               renderItem={({item  , index }) =>  
               
              <View style={ styles.row }  >   

                <View  style={[ styles.box_alignment , {  width : "8.09%"    , borderColor :"#B6B7D0"  , borderBottomWidth : 1  , borderRightWidth : 1 } ] }  >
                 <Text  >  { index+1  }  </Text>

                </View> 
                <View style={ [  styles.box_alignment , {  width : "23.04%" , borderColor :"#B6B7D0"  , borderBottomWidth : 1  , borderRightWidth : 1 } ]} >
                 <Text> { item.task_name} </Text>

                </View>

                <View  style={ [ styles.box_alignment ,  {  width : "43.64%"   , borderColor :"#B6B7D0"  , borderBottomWidth : 1  , borderRightWidth : 1 } ] } >
                  

                <TextInput   autoCorrect={ false}  
                    placeholder="Type here..."   
                    defaultValue= { Answer[index]}
                    onChangeText= { (   value ) => { updateAnswer(  index ,   value ) }}
                        style = {{ width : "96%"  , backgroundColor : "#FFF"  , height : "90%"  , borderColor :'#5E81F4'  , borderWidth : 1 , borderRadius : 10}} />

                </View> 

                <View  style={[  styles.box_alignment ,  {  width : "25.26%"  , borderColor :"#B6B7D0"  , borderBottomWidth : 1}]  } >
                 <Text>  { feedback [index]  } </Text>

                </View>
          
              </View>  }
               keyExtractor={item => item._id}  

            /> 

               </View>
                
               
               <View style= { styles.lower_div  }>
                    
                     
                <View  style= { styles.lower_btn   }>


            <TouchableOpacity   style={ {  width : "38.26%"  ,  height : "50%"  ,  backgroundColor : "#FCC046"  ,  borderRadius : 25  , display : "flex"  , alignItems : "center" , justifyContent :"center"} }   onPress= {() => {submitBplan()}}     >
              <Text style = {{ fontWeight : "600"  , fontSize : 16}}> 
              Submit
              </Text>
            </TouchableOpacity>
    


            <TouchableOpacity   style={ {  width : "42%"  ,   height : "50%"  ,  backgroundColor : "#FCC046"  ,  borderRadius : 25  , display : "flex"  , alignItems : "center" , justifyContent :"center"} }   >
              <Text style = {{ fontWeight : "600"  , fontSize : 16}}>
                Download 
              </Text>
            </TouchableOpacity>


               </View>

               </View>
                
                



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
      display : "flex" ,  
      flexDirection: "row" , 
      alignItems : "flex-end" , 
      justifyContent : "space-between" , 
      paddingBottom : 5 

    }  
      , 

      view2 : {
         
        
           
       height : "78%"  , 
       width : "100%"    ,  
       display : "flex"  , 
       flexDirection : "column"  , 
    
       

      }
   , 
        
       view3 : {
          

           
      height : "7%"  , 
      width : "100%"   ,  

   }  
   , 
 

    header : {
    
      height : "14.08%"  , 
      width : "100%"   ,  
      display : "flex"  , 
      flexDirection : "row" ,    
      backgroundColor : "#D9D9D9" 


    }  , 

     
    main_body : {

      height : windowHeight / 2 , 
      width : "100%"   ,  
  
    }  ,  


    lower_div: {


      height : "17.09%"  , 
      width : "100%"   ,   
     
      alignItems : "flex-end"

    }  
     ,   


     lower_btn  : {
           
      height : "100%"  , 
      width : "30.40%"   ,   
      
      display : "flex"  , 
      flexDirection : "row"   , 
      alignItems  : "center"   , 
      justifyContent : "space-around" , 
      paddingRight : "6%" , 
    



     }
   , 

     row : {
       
      width : "100%" , 
      height : windowHeight / 4 , 
      display :  "flex" , 
      flexDirection : "row"

     }  , 


     box_alignment : {

        display: "flex"  , 
        alignItems :"center" , 
        justifyContent :"center"
     }
  
} )