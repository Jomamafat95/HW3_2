import {View, Text, StyleSheet, Pressable, Image,ImageBackground} from 'react-native'
import styles from './styles'
import React from 'react';
export default function ProfileScreen(){
    return(

<View style={styles.Mycontainer}>
<ImageBackground 
            style={styles.Myimage}
            source={require('../../assets/Image2.jpg')}/>
<View>
<Text style={styles.Mytext}>
        I am a billionaire
    </Text>

            
   

    </View>
    </View>
      
   
    );
}