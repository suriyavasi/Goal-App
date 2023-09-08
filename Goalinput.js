import { StyleSheet, Text,Button, TextInput,View,Modal,Image} from 'react-native';
import { useState } from 'react';
function Goalinput(props){
    
   const [goalText,setgoalText]=useState('')
    function goalInputHandler(text){
        setgoalText(text)
   } 

   function addgoalHandler(){
      props.onAddGoal(goalText)
      props.onclose();
   }

    return(
        <Modal visible={props.visible} animationType='slide'>
             <View style={styles.inputContainer}>

           <Image style={styles.image}  source={require('./assets/goalimage.png')}/>      
 
        <TextInput
        onChangeText={goalInputHandler}
         style={styles.textInput} placeholder='Type Your Goal'/>

          <View style={styles.buttonContainer}>


          <View  style={styles.button}>
               <Button color="black" title='cancel'onPress={props.onclose}/>
           </View>

            <View  style={styles.button}>
              <Button color="black"onPress={addgoalHandler} title='Add Goal'/>
            </View>

            
         
          </View>


        
        </View>
        </Modal>
       
    )

    
}
const styles = StyleSheet.create({
   
      inputContainer:{
    //    flexDirection:'Column',
       justifyContent:'center',
       alignItems:'center',
       borderBottomWidth:1,
       paddingBottom:30,
       borderBottomColor:'black',
       flex:1,
       padding:16,
       backgroundColor:"#cccccc"
      },
      textInput:{
        borderWidth:1,
        borderColor:'black',
        width:'100%',
        padding:8,
        borderRadius:6
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:16
      },
      button:{
        width:100,
        marginHorizontal:8
      },
      image:{
        width:200,
        height:200,
        margin:20
      }
     

})
module.exports=Goalinput;