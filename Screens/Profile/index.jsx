import {View, Text, StyleSheet, Pressable, Image,ImageBackground} from 'react-native'
import styles from './styles'
import React from 'react';
export default function ProfileScreen(){
    return(

<View style={styles.container}>
<ImageBackground 
            style={styles.image}
            source={require('../../assets/Image2.jpg')}/>
<View>
<Text style={styles.text}>
        I am rich I deserv it I am good, healthy {'&'} successful
    </Text>

            
   

    </View>
    </View>
      
   
    );
}