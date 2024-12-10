import { StyleSheet, Text, View  , TextInput , FlatList  ,  TouchableOpacity    , StatusBar  , ImageBackground , Dimensions   , Image, Pressable   } from 'react-native';

import React  , { useState  , useEffect }   from "react";
import pic3 from "../Images/pic3.jpg" ;  
import app_backgrounds_quiz from "../Images/app_backgrounds_quiz.jpg"  ;
import answerSheetBackground from "../Images/answerSheetBackground.jpg" ;  
import logo_student from "../Images/logo_student.png" ;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import vector from "../Images/vector.png" ; 
import Checkbox from './Checkbox';


const windowHeight = Dimensions.get('window').height; 

 



export default function  Quiz  (   {   route , navigation  }) {
      
  
   
  const n =  route.params.data[ route.params.currentElement].quiz_data.length ;
  const arr = Array.from({length: n}).map(el => "") ;
  const arr1 = Array.from({length: n}).map(el => false) ; 

  const[ quizarr , setQuizArr ] = useState( arr) ;  // answers are saved 
  const[ isChecked , setIsChecked ] = useState( arr1) ; 
  const[ DATA_quiz  , setDATA_quiz ] = useState(  route.params.data[ route.params.currentElement].quiz_data ) ;  
  const [ submitButtonStatus  , setSubmitButtonStatus ] = React.useState( "" ) ; 
   const[ screenType  , setScreenType ] = useState(  route.params.screenType  );
   const[  quizScore  , setQuizScore ] = useState("" );

   
  // console.log( "quiz") ; 
  // console.log(  route.params.currentElement) ; 
  // console.log( route.params.totalLength  ) ; 
 // // console.log(   route.params.userData ) ;  
 // // console.log(   route.params.screenProp ) ; 

  // console.log(  route.params.data) ;   
  // console.log(  route.params.moduleNumber ) ; 
  // console.log( route.params.moduledetails ) ;
 // // console.log(   route.params.data[ route.params.currentElement].quiz_data.length ) ; 
  
  




















  // to get and check  quiz already submitted or not 
   const  getAns = async (  ) => {  
       
    // console.log( "getans") ;       


    try {
      const response = await fetch( "https://learn-up.app/admin/student_details" ,  

      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
        }
    , 
    body: JSON.stringify({
       
     "_id" :   route.params.userData._id.$oid  
 
  }),
}
     );
      const json = await response.json();

      
    // // console.log( json.data.student_module_details[ route.params.moduleNumber]) ; 
     const newInfo  = json.data.student_module_details[ route.params.moduleNumber] ; 
  

     const newAnsArr  = newInfo[  route.params.moduledetails.module_name] ; 
   



     // console.log( "hi") ; 
     // console.log( newAnsArr[   route.params.currentElement]) ; 


     if(  newAnsArr[ route.params.currentElement ]  === "" ){
       
       setSubmitButtonStatus("yes") ; 
        
     }else{ 
       
      setScreenType( "quiz_answer_screen") ;
      setQuizScore(  newAnsArr[ route.params.currentElement ]  ) ; 
       setSubmitButtonStatus("") ;  

     }

    } catch (error) {
      console.error(error);
    }   



  }



 React.useEffect(() => { 
    
  // console.log("useeffect") ; 
 // setCurrentElement(  route.params.currentElement );   
  //getData();  
  getAns();
  


}  , [   route.params.screenProp  ,  route.params.currentElement ]) ; 

  
   









  // for going back to module screen 


  const handlePrevButton = (  ) => {
    
    //  // console.log(    route.params.data[ route.params.currentElement - 1].sub_type )  ;
     
      if(   route.params.data[ route.params.currentElement - 1].sub_type === "quiz"){
       
        navigation.navigate( "Quiz"     ,  {   currentElement : route.params.currentElement - 1   , screenProp : ( route.params.screenProp === true ) ? false : true   ,   totalLength  :  route.params.totalLength     ,  data : route.params.data   , screenProp : route.params.screenProp   , userData :  route.params.userData   ,  moduleNumber :  route.params.moduleNumber   ,   moduledetails :  route.params.moduledetails      }   )  ; 
  
      }else{



      navigation.navigate( "Module"   , {       screenProp : ( route.params.screenProp === true ) ? false : true   , currentElement :  route.params.currentElement -1  ,  userData  : route.params.userData  , moduleNumber :  route.params.moduleNumber   ,   data :  route.params.moduledetails    }  ) ;


      }

  }
  

  const  handleNextButton = (  ) => {
      

    if(   route.params.data[ route.params.currentElement + 1].sub_type === "quiz"){
       
      navigation.navigate( "Quiz"     ,  {   currentElement : route.params.currentElement + 1   , screenProp : ( route.params.screenProp === true ) ? false : true   ,   totalLength  :  route.params.totalLength     ,  data : route.params.data   , screenProp : route.params.screenProp   , userData :  route.params.userData  , moduleNumber :  route.params.moduleNumber   ,   moduledetails :  route.params.moduledetails    }   )  ; 

    }else{

    
      navigation.navigate( "Module"   , {      screenProp : ( route.params.screenProp === true ) ? false : true   , currentElement :  route.params.currentElement + 1  ,   userData  : route.params.userData  ,  moduleNumber :  route.params.moduleNumber   ,   data :  route.params.moduledetails }  ) ; 
    }
  }
  
   



    const myItemSeparator = () => {
      return <View style={{ height: 5  }} />;   // separator for flatlist 
      };



     

    






    
      const   handleSelectOption = (  index  , value  ) => {


     /*    // console.log( "handleSelectOption") ; 
        // console.log( index) ;
        // console.log( value) ; 
        // console.log( isChecked) ;  
        // console.log( quizarr) ;
         */
       const newarr = [...isChecked ];
       newarr[index] = true ;
        setIsChecked( newarr) ;  

      const newarr2 = [...quizarr ];
        newarr2[index] = value ;
        setQuizArr(  newarr2) ;
      }
    
     






      

    const   submitQuizScore  =  async ( score  ) => {   
        
      // console.log( route.params.userData._id.$oid  ) ; 
      // console.log( route.params.moduleNumber ) ; 
      // console.log(route.params.moduledetails.module_name ) ; 
      // console.log( `${route.params.currentElement}` ) ; 
      // console.log( score) ; 
         


        
      try {
        const response = await fetch( "https://learn-up.app/admin/motu" , 
        {   method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'  ,
          }
      , 
      body: JSON.stringify({
         
        "student_id" : route.params.userData._id.$oid    ,
        "module_no":    route.params.moduleNumber , 
        "module_name":  route.params.moduledetails.module_name ,  
        "index_no" : `${route.params.currentElement}`   , 
         "details" : `${score}`
   
    }),
  }
       );
        const json = await response.json();
          
  
            // console.log(   json) ;   
  
         
            
      if(  json.status === "success"   ){ 
            
       alert(  json.message ) ;    
       setScreenType("quiz_answer_screen") ;
       setQuizScore(score) ; 
  
        }else{
           
          alert( json.message) ;
  
        }  
        
        
      } catch (error) {
        console.error(error);
      } 

     

      
   
 };

    



    



    
    
      

     const  handleQuizSubmit = (  ) => {
     
     // // console.log( "bhjz") ;
      let score =0 ;

      for(  let i=0  ; i< DATA_quiz.length ; i++ ){
          
        /* // console.log( DATA_quiz[i]) ;
        // console.log( DATA_quiz[i].final1.option1 ) ;
        // console.log( quizarr[i] ) ;
        // console.log( DATA_quiz[i].final1.answer1 ) ; */

         if( DATA_quiz[i].final1.option1 === quizarr[i]  &&  DATA_quiz[i].final1.answer1 === "true" ){

               score++ ;  
           //    // console.log( "1") ;

         } else if(  DATA_quiz[i].final2.option2 === quizarr[i]  &&  DATA_quiz[i].final2.answer2 === "true"  ){
  
          score++ ; 
       //   // console.log( "2") ;

        }else if( DATA_quiz[i].final3.option3 === quizarr[i]  &&  DATA_quiz[i].final3.answer3 === "true"  ){

          score++ ; 
       //   // console.log( "3") ;

           }

      }  
      // console.log( "score" ) ;   
      
       // console.log( score ) ;   
      
      let finalScore   =  (score*100)/n  ;   
       
      // console.log( finalScore) ;
      submitQuizScore(  finalScore )  ;

    
    
    
     }

 


























     
     if( screenType === "quiz_screen"  ){

     
     
    return(  

      <View style={ styles.container}   > 
                  
      <ImageBackground  source={ app_backgrounds_quiz } resizeMode="cover"  style={styles.image} >  
       
       
      <StatusBar  barStyle="dark-content" 
        backgroundColor="#f7e5e9"  />  
        
      <View  style={ styles.sidebar}   > 
  
  
      <View  style= {{ height : "17%"  , width : '100%'  , display : "flex"  , alignItems: "center"  , justifyContent : "flex-end"   }}>
                    
                   
                    <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "80%"}}  source={ logo_student } /> 
                  
  
                  </View>   
                   
  
  
  
                  <View  style= {{ height : "65%"  , width : "100%"  , display : "flex"   ,  justifyContent : "center" }}>
      
    
                  <View  style= {{ height : "60%"  , width : "100%" ,  display : "flex"  , justifyContent : "space-around"  , alignItems : "center"}} >  
  
  
  
    
                        <TouchableOpacity  style= {{ height : "15%"  , width : "40%" }} >
                        <MaterialCommunityIcons name="grid"  size={30}  color={ "#B6B7D0"}    onPress= {() => {   navigation.navigate( "Home"  , { userData : route.params.userData }   )  }}   />
                        </TouchableOpacity> 
  
  
                        <TouchableOpacity  style= {{ height : "15%"  , width : "40%"}}    onPress= {() => {   navigation.navigate( "Bplan"  ,  { userData : route.params.userData }  ) }}  >
                        <MaterialCommunityIcons name="receipt"  size={30}  color={ "#B6B7D0"} />
                            </TouchableOpacity>  
  
  
  
  
                            <TouchableOpacity  style= {{ height : "15%"  , width : "40%" }} >
                              
                            <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"}    onPress= {() => { alert("To receive your certificate, please contact your teacher." )} }      />
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
            
               <View   style={ [  styles.box_alignment , {  height : "60%"  , width : '18%' , backgroundColor : "#5E82F4" ,  borderTopRightRadius :25  , borderBottomRightRadius : 25  } ] } >
   
   <Text style = { { color : "#FFF"  , fontWeight : "700" , fontSize : 20} }>{  route.params.moduledetails.module_name } </Text>
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
    
  
  
  
                 <View style= { styles.main_body  }>
                     
  
  
                 <FlatList  
                 data={  DATA_quiz }
                 ItemSeparatorComponent={ myItemSeparator}
                 renderItem={({item  , index }) =>  
                 
                <View  style={ styles.row }  >   
                  
                 <View  style={ styles.row_innner_box  }    >  
                  
  
                  <View  style={[ styles.question_div  ,  {   borderRadius : 15} ] }  >   
                  <Text   style={ styles.question_text }> { item.question } </Text>
                  </View> 
   
  
   
                  <View  style={ { height : "70%"}}> 
  
                   <View style = { styles.option_div}> 
                    
  
                    
                    <TouchableOpacity style={{ width : "5%"  , backgroundColor : "#FFF" }}  > 
  
                    <Checkbox 
                    title= { item.final1.option1 }  
                    setop = { () => { handleSelectOption( index  , item.final1.option1   ) }}
                      selectedOption = { quizarr }  
                       index ={  index }  
                       trigger = { isChecked}
                     
                    />  
                    </TouchableOpacity> 
  
                    <View style={{  width : "95%"    , display : "flex" , justifyContent : "center"} }  >
                   <Text> { item.final1.option1 } </Text>
                   </View>  
  
  
                    </View>    
   
  
                    <View style = { styles.option_div} >   
   



                    <TouchableOpacity style={{ width : "5%"  }}  >
                    <Checkbox  
                     title= { item.final2.option2 }  
                     setop = { () => { handleSelectOption( index  , item.final2.option2   ) }}
                       selectedOption = { quizarr }  
                        index ={  index }  
                        trigger = { isChecked}
                    
                    />  
                    </TouchableOpacity> 
                    <View style={{ width : "95%"  , display : "flex" , justifyContent : "center"  }} >
                   <Text> { item.final2.option2 } </Text>
                   </View> 
  
  
                    </View>  
  
                    <View style = { styles.option_div}>
                     
  
                     
                    <TouchableOpacity style={{ width : "5%"   }}  >
                    <Checkbox  
                      title= { item.final3.option3 }  
                      setop = { () => { handleSelectOption( index  , item.final3.option3   ) }}
                        selectedOption = { quizarr }  
                         index ={  index }  
                         trigger = { isChecked}
                    
                     />  
                    </TouchableOpacity>  
  
                    <View style={{ width : "95%"  ,  display : "flex" , justifyContent : "center" }} >
                   <Text> { item.final3.option3 } </Text>
                   </View>  
  
  
                    </View> 
               
                  </View >
  
  
  
                 </View>
  
  
  
  
                </View>  }
                 keyExtractor={item => item._id}  
  
              /> 
  
                 </View>
                  
                  
  
  
  
                 <View style= { styles.lower_div  }>
                      
                       
                  <View  style= { styles.lower_btn   }>
          
  
             

              <TouchableOpacity   style={[ {  width : "20%"  ,  height : "70%"    , borderRadius : 25  , display : "flex"  , alignItems : "center"   , justifyContent : "center"}  ,   ( submitButtonStatus === "yes" )? styles.button_active  : styles.button_inactive  ] }  
                 disabled= { (submitButtonStatus === "yes" )? false : true}        onPress= {() => {  handleQuizSubmit()}}
              >
                <Text style = {{ fontWeight : "600"  , fontSize : 16}}  >
                Submit
                </Text>
              </TouchableOpacity>
      
  
  
  
  
                 </View>
  
                 </View>
                  
                  
  
  
  
               </View> 
  
               
  
                  
               <View style={ styles.view3 }  >   
           
                 
                       
            <View  style={  styles.view3_inner_view  }  >
       
              
       <Pressable    disabled={ ( route.params.currentElement >= 1) ? false : true }   onPress={ () => {  handlePrevButton( ) }}   style={ styles.btn }   >
       <MaterialCommunityIcons name="chevron-left"  size={45}    color= { ( route.params.currentElement >= 1 )? "#000" : "#808080"}   />
       </Pressable> 
  
  
       <Pressable  disabled={ ( route.params.currentElement <= route.params.totalLength  - 2 ) ? false : true }   onPress={ () => {   handleNextButton( )}}    style={ styles.btn }   >
       <MaterialCommunityIcons name="chevron-right"  size={45}    color= { (  route.params.currentElement <= route.params.totalLength  - 2 )? "#000" : "#808080"}    />
       </Pressable>
       
       </View >
               </View> 
          
           </View>
  
   </ImageBackground>
    </View>
    ) ;  
    














































































    
    }else if(   screenType === "quiz_answer_screen"  ){
    return(  

   <View style= { styles.container}  >  


<ImageBackground  source={  answerSheetBackground  } resizeMode="cover"  style={styles.image} >   
 
 
<StatusBar  barStyle="dark-content" 
        backgroundColor="#f7e5e9"  />  

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




                    <TouchableOpacity  style= {{ height : "15%"  , width : "40%" }} >
                      
                    <MaterialCommunityIcons name="certificate"  size={30}  color={ "#B6B7D0"}    onPress= {() => { alert("To receive your certificate, please contact your teacher." )} }      />
                    </TouchableOpacity> 


          </View>

            
          </View>
            
          <View  style= {{ height : "18%"  , width : "100%"  , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
      
         
         <TouchableOpacity  style= { [  styles.alignment ,  { height : "30%"  , width : "50%"}] }     onPress= {() => {   navigation.navigate( "LogIn") }}     >

         <MaterialCommunityIcons name="logout"  size={30}  color={ "#F06B6D"} /> 

         </TouchableOpacity>
         <View>

         </View>
            
          </View>

   </View>  

   <View  style= { styles.body}  > 

      
      <View   style= { styles.view1} >  


      <View   style={ [  styles.box_alignment , {  height : "60%"  , width : '20%' , backgroundColor : "#5E82F4" ,  borderTopRightRadius :25  , borderBottomRightRadius : 25  } ] } >

<Text style = { { color : "#FFF"  , fontWeight : "700" , fontSize : 20} }> {  route.params.moduledetails.module_name } </Text>
</View>
   

<View  style= {{  height : "60%"  , width : '25%'  ,  display : "flex"  , justifyContent : 'center'  ,   alignItems :"center"  ,   flexDirection  : "row"   , backgroundColor :"#D9D9D9"  , borderTopLeftRadius : 25 , borderBottomLeftRadius :  25  , overflow :"hidden" }}>  
                    
                    
                      
     <Image  resizeMode='contain'  style = {{ height : "80%"  , width : "25%"}}  source={ vector  } /> 
                       
                          

                  <View style={{    height : "80%"  , width : '75%'    ,   display : "flex"   , alignItems : "flex-start"  , justifyContent : "center"  , paddingLeft : 2  }}>
                                
            <Text style={{   fontSize : 17  , color : "#353B55"  , fontWeight : "700"  , fontStyle : "normal"}}>{ route.params.userData.student_name  }</Text> 

            <Text style={{ fontSize : 10  , color : "#5A6198"  , fontWeight : "600"  , fontStyle : "normal"  }} >{ route.params.userData.school_name  } </Text>
                            </View>
                </View>
          




      </View>
      

         
      <View   style= { styles.view2_Ans}  > 
             
            <View style= { styles.view2_box1_Ans }   > 
            <Text style= {{ fontSize : 18  , color : "#FFF"}}>Your Score</Text>
            <Text style= {{ fontSize : 22 , color : "#FFF" , fontWeight : "700"}} >{ quizScore }%</Text>
            <Text style= {{ fontSize : 20 , color : "#FFF" , fontWeight : "700"}} >Congratulations</Text>
            </View> 

            <View style= { styles.view2_box2_Ans}   > 

            <Text style= { styles.view2_box2_text_Ans}  >Answer Sheet</Text>

            </View> 

            <View style= { styles.view2_box3_Ans}   >
                

            <FlatList  
           data={ DATA_quiz }   
           ItemSeparatorComponent={ myItemSeparator}
           renderItem={({item  , index }) =>  
            <View style= { styles.row_Ans }  >   


               <View  style={[ styles.question_div_Ans  ,  {   borderRadius : 15   } ] }  >   
              <Text   style={ styles.question_text_Ans }> { `${index+1}.  ${item.question}` } </Text>
              </View> 



              <View  style={ { height : "70%"}}> 

               <View style = { styles.option_div_Ans}> 
                

                
                <TouchableOpacity style={{ width : "7%"   , paddingLeft : 10 ,  display : "flex" , justifyContent : "center"  }}  >  
                <MaterialCommunityIcons name= "circle" size={28}  color = { ( item.final1.answer1 === "false" )?"red"  : "#7BBA85" }  />
                </TouchableOpacity> 

                <View style={{  width : "93%"    , display : "flex" , justifyContent : "center"} }  >
               <Text> { item.final1.option1 } </Text>
               </View>  


                </View>    


                <View style = { styles.option_div_Ans } >   




                <TouchableOpacity style={{ width : "7%"   , paddingLeft : 10 ,  display : "flex" , justifyContent : "center"  }} >
                <MaterialCommunityIcons name= "circle" size={28}  color = { ( item.final2.answer2 === "false" )?"red"  : "#7BBA85" } />

                </TouchableOpacity>  


                <View style={{ width : "93%"  , display : "flex" , justifyContent : "center"  }} >
               <Text> { item.final2.option2 } </Text>
               </View> 


                </View>  

                <View style = { styles.option_div_Ans}>
                 

                 
                <TouchableOpacity style={{ width : "7%"   , paddingLeft : 10 ,  display : "flex" , justifyContent : "center"  }}  >
                 
                <MaterialCommunityIcons name= "circle" size={28}  color = { ( item.final3.answer3 === "false" )?"red"  : "#7BBA85" } />
                </TouchableOpacity>  



                <View style={{ width : "93%"  ,  display : "flex" , justifyContent : "center" }} >

                
               <Text> { item.final3.option3 } </Text>
               </View>  


                </View> 
           
              </View >  
             </View>  
         }
           keyExtractor={item => item._id}  
          
        /> 

            </View>
        
      </View>

    
       
      <View   style= { styles.view3_Ans} >  


      <View  style={  styles.view3_inner_view_Ans  }  >
       
              
       <Pressable    disabled={ ( route.params.currentElement >= 1) ? false : true }   onPress={ () => {  handlePrevButton( ) }}   style={ styles.btn }   >
       <MaterialCommunityIcons name="chevron-left"  size={45}    color= { ( route.params.currentElement >= 1 )? "#000" : "#808080"}   />
       </Pressable> 
  
  
       <Pressable  disabled={ ( route.params.currentElement <= route.params.totalLength  - 2 ) ? false : true }   onPress={ () => {   handleNextButton( )}}    style={ styles.btn }   >
       <MaterialCommunityIcons name="chevron-right"  size={45}    color= { (  route.params.currentElement <= route.params.totalLength  - 2 )? "#000" : "#808080"}    />
       </Pressable>
       
       </View >


        
      </View>


    
   </View>   



   </ImageBackground>
  
   </View>

       ) ;}



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
    } , 

    box_alignment: {
   
      display : "flex" , 
      alignItems : "flex-start" , 
      justifyContent : "center" , 
      paddingLeft : 20
    }  , 
    
    button_active : {
    
      backgroundColor : '#FCC046' 
  
    }  , 
     
    button_inactive : {
     
      backgroundColor :  '#C8C8C8'
    }  ,   

    view2_Ans : {
           
          
             
      height : "76%"  , 
      width : "100%"    , 
      display : "flex"  , 
      alignItems : "center"

  

     }     , 

  

    view2_box1_Ans : {
     
      width : "80%"  ,  
      height : "30%"  , 
      backgroundColor : "#5E82F4"  , 
      display : "flex" , 
      alignItems : "center"  , 
      justifyContent : "space-around" , 
      borderRadius : 15


    }  , 


    view3_Ans : {
            
  
             
      height : "9%"  , 
      width : "100%"   , 
      display : "flex"  , 
    alignItems : "flex-end"  , 


   }    ,   


            
  view3_inner_view_Ans : {
    
    height : "100%"  ,  
    width : "30%" ,  
    display : "flex"  ,  
    flexDirection : "row" , 
    justifyContent : "center"  , 
    alignItems : "flex-start"
  
    }   ,


   view2_box2_Ans : {

         
       
    width : "80%"  ,  
    height : "20%"  , 

    display : "flex"  , 
    alignItems : 'center' , 
    justifyContent : "center"

    
  }
     , 


     view2_box3_Ans : {

               
    width : "80%"  ,  
    height : windowHeight/3 ,  
    borderRadius : 15 ,

 

     }


      , 


      view2_box2_text_Ans : {

        fontWeight: '700' ,
        fontStyle: 'normal'  , 
         fontSize: 22 , 
        lineHeight: 25.57 , 
        color : "#353B55"

 
      }  ,   

      row_Ans : {
           
        height : windowHeight/3,
 
   borderRadius : 15  , 
   backgroundColor : "#FFF"

 } , 

 question_div_Ans : {

   height : "30%" , 
   backgroundColor : "#FFF" , 
  display : 'flex' ,
 justifyContent :"center" , 
 paddingLeft : 10

  } ,  

  question_text_Ans : {
     
    fontWeight: '700' ,
    fontStyle: 'normal'  , 
     fontSize: 16 , 
   
     

   }  
,  

  option_div_Ans : {
   
   
    height : "33.3%" , 
    backgroundColor : "#FFF" ,
    display : "flex" , 
    flexDirection : "row" , 
    borderRadius :  15
  }
, 











  }
    )  


