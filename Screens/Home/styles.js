import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({

    Mycontainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },

    Mylogo:{
        width:30,
        height:30,
    },

    MyinfoButton: {
      paddingTop: '140%',
        paddingRight: '7%',
      alignSelf: 'flex-end'
    },

    MybackImage: {
      width: 320,
      height: 320,
      position: 'absolute',
      resizeMode: 'contain',
    },
 });

 export default styles;