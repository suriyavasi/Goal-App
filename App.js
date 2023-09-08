import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,Button, TextInput,ScrollView ,View, FlatList} from 'react-native';
import Goalitem from './Goalitem';
import Goalinput from './Goalinput';

export default function App() {
  
   
   const [goals,setgoals]=useState([])

   const [Modalvisiable,setmodelvisiable]=useState(false);

   
   function addgoalHandler(goalText){
        setgoals((currentgoals)=>[...currentgoals,goalText])
   }
     function deleteitem(index){
  
      const newGoals = goals.filter((el,i)=> i!=index)
      setgoals(newGoals);
     }

   function startAddGoalHandel(){
    setmodelvisiable(true);
   }
    
   function closeGoalHandel(){
    setmodelvisiable(false);
   }

  return (
    <>
     <StatusBar style='black'/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="black" onPress={startAddGoalHandel}/>
     <Goalinput onclose={closeGoalHandel} visible={Modalvisiable} onAddGoal={addgoalHandler}/>
   
        
        <View style={styles.goalContainer}>
        <FlatList
            data={goals}
            renderItem={(iteamData)=>{
             return<Goalitem text={iteamData.item} onDelete={()=>deleteitem(iteamData.index)}/>
          
            }}
            
          />
   
        
        </View>
      
       
    </View>
    </>
   
  );
}

const styles = StyleSheet.create({
   appContainer:{
     paddingTop:50,
     paddingHorizontal:16,
     flex:1
   },
  //  inputContainer:{
  //   flexDirection:'row',
  //   justifyContent:'space-between',
  //   alignItems:'center',
  //   borderBottomWidth:1,
  //   paddingBottom:30,
  //   borderBottomColor:'blue',
  //   flex:1
  //  },
  //  textInput:{
  //    borderWidth:1,
  //    borderColor:'blue',
  //    width:'70%',
  //    marginRight:4,
  //    padding:8,
  
  //  },
   goalContainer:{
    flex:4
   },
 
});
