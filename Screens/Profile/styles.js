import { StyleSheet } from "react-native";

 

    const styles = StyleSheet.create({
        Mycontainer: {
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        },
    
        Mytext: {
          fontSize: 60,
          paddingLeft:10,
          color: 'white',
          alignItems: 'center'
        },
    
        Myimage:{
          width:300,
          height:400,
          opacity:.4,
          position: 'absolute',
          resizeMode: 'contain',
      }
     

});

export default styles;