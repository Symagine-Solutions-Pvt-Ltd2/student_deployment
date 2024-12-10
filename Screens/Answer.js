import { StyleSheet, Text, View  , FlatList ,  TouchableOpacity   , Dimensions  ,  ImageBackground, Image  , Pressable  } from 'react-native';
import React from "react";
import answerSheetBackground from "../Images/answerSheetBackground.jpg" ;  
import logo_student from "../Images/logo_student.png" ;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import vector from "../Images/vector.png" ; 
const windowHeight = Dimensions.get('window').height;  
 











export default function  Answers  (   {   route , navigation  }) {
   

  
  const [ data  , setData ] = React.useState( route.params.data ) ; 



 
  // console.log( "Answers") ; 
  // console.log( route.params.data ) ; 
  // console.log(  route.params.score) ;   
  // console.log(  route.params.userData) ; 
  // console.log(  route.params.moduledetails.module_name ) ; 
   




    const myItemSeparator = () => {
      return <View style={{ height: 5  }} />;   // separator for flatlist 
      };


 







































     return(  

       <View  style= { styles.container}  > 

              
    <ImageBackground  source={  answerSheetBackground  } resizeMode="cover"  style={styles.image} >   


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
          

             
          <View   style= { styles.view2}  > 
                 
                <View style= { styles.view2_box1}   > 
                <Text style= {{ fontSize : 18  , color : "#FFF"}}>Your Score</Text>
                <Text style= {{ fontSize : 22 , color : "#FFF" , fontWeight : "700"}} >{ route.params.score}%</Text>
                <Text style= {{ fontSize : 20 , color : "#FFF" , fontWeight : "700"}} >Congratulations</Text>
                </View> 

                <View style= { styles.view2_box2}   > 

                <Text style= { styles.view2_box2_text}  >Answer Sheet</Text>

                </View> 

                <View style= { styles.view2_box3}   >
                    

                <FlatList  
               data={ data }   
               ItemSeparatorComponent={ myItemSeparator}
               renderItem={({item  , index }) =>  
                <View style= { styles.row}  >   


                   <View  style={[ styles.question_div  ,  {   borderRadius : 15   } ] }  >   
                  <Text   style={ styles.question_text }> { `${index+1}.  ${item.question}` } </Text>
                  </View> 
   
  
   
                  <View  style={ { height : "70%"}}> 
  
                   <View style = { styles.option_div}> 
                    
  
                    
                    <TouchableOpacity style={{ width : "7%"   , paddingLeft : 10 ,  display : "flex" , justifyContent : "center"  }}  >  
                    <MaterialCommunityIcons name= "circle" size={28}  color = { ( item.final1.answer1 === "false" )?"red"  : "#7BBA85" }  />
                    </TouchableOpacity> 
  
                    <View style={{  width : "93%"    , display : "flex" , justifyContent : "center"} }  >
                   <Text> { item.final1.option1 } </Text>
                   </View>  
  
  
                    </View>    
   
  
                    <View style = { styles.option_div} >   
   



                    <TouchableOpacity style={{ width : "7%"   , paddingLeft : 10 ,  display : "flex" , justifyContent : "center"  }} >
                    <MaterialCommunityIcons name= "circle" size={28}  color = { ( item.final2.answer2 === "false" )?"red"  : "#7BBA85" } />

                    </TouchableOpacity>  


                    <View style={{ width : "93%"  , display : "flex" , justifyContent : "center"  }} >
                   <Text> { item.final2.option2 } </Text>
                   </View> 
  
  
                    </View>  
  
                    <View style = { styles.option_div}>
                     
  
                     
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

        
           
          <View   style= { styles.view3} >
            
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



    }  , 

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
         alignItems : "center"

     
  
        }
     , 
          
         view3 : {
            
  
             
        height : "7%"  , 
        width : "100%"   
  
     }  
    , 


    view2_box1 : {
           

       width : "80%"  ,  
       height : "30%"  , 
       backgroundColor : "#5E82F4"  , 
       display : "flex" , 
       alignItems : "center"  , 
       justifyContent : "space-around" , 
       borderRadius : 15


    } , 

  

    view2_box2 : {

         
       
      width : "80%"  ,  
      height : "20%"  , 
  
      display : "flex"  , 
      alignItems : 'center' , 
      justifyContent : "center"

      
    }
       , 


       view2_box3 : {

                 
      width : "80%"  ,  
      height : windowHeight/3 ,  
      borderRadius : 15 ,
 
   

       }
  

        , 


        view2_box2_text: {

          fontWeight: '700' ,
          fontStyle: 'normal'  , 
           fontSize: 22 , 
          lineHeight: 25.57 , 
          color : "#353B55"

   
        }
   ,



   
      row : {
           
             height : windowHeight/3,
      
        borderRadius : 15  , 
        backgroundColor : "#FFF"

      } , 
    
      question_div : {

        height : "30%" , 
        backgroundColor : "#FFF" , 
       display : 'flex' ,
      justifyContent :"center" , 
      paddingLeft : 10
   
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
       }
     , 
     box_alignment: {
   
      display : "flex" , 
      alignItems : "flex-start" , 
      justifyContent : "center" , 
      paddingLeft : 20
    }
   
     


})

