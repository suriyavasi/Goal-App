import { StyleSheet,View, Text,Pressable } from "react-native";

function Goalitem(props){
    return(
        <Pressable
         onPress={props.onDelete}
        //  android_ripple={{color:'red'}}
        style={({pressed})=>pressed && styles.presseritem}
         >
            <View style={styles.goalitem}>
        <Text style={styles.goaltext} >{props.text}</Text></View>
        </Pressable>

//  <View style={styles.goalitem}>
// <Pressable
//          onPress={props.onDelete}
//          android_ripple={{color:'red'}}
//          >
        
//         <Text style={styles.goaltext} >{props.text}</Text>
//         </Pressable> 

// </View>

       
    )
}
const styles = StyleSheet.create({
    goalitem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:"yellowgreen", 
       },
       goaltext:{
        color:'white'
       },
       presseritem:{
        opacity:0.5
       }
})



module.exports = Goalitem;