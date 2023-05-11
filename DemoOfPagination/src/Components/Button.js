import React from "react";
import { TouchableHighlight,StyleSheet, Text } from "react-native";
const Button=({title,functionality})=>{
    return(
        <TouchableHighlight style={styles.Button} onPress={functionality}>
         <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    )
}
const styles=StyleSheet.create({
Button:{
    width:"90%",
    backgroundColor:"#50C2C8",
    height:50,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center"
},
text:{

    textAlign:"center",
    fontWeight:"bold",
    fontSize:20,
}
})

export default Button