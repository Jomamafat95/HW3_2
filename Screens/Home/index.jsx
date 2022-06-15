import{View, Text, Pressable,Image, ImageBackground} from 'react-native'
import React from 'react';
import styles from './styles'

export default function HomeScreen({navigation}) {

    return (

       

<View style={styles.Mycontainer}>
    
    <ImageBackground 
    style={styles.MybackImage}
    source={require('../../assets/Image1.jpg')}/>

      <View style={styles.MyinfoButton}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image
          style={styles.Mylogo}
          source={require('../../assets/infowhite.png')}
        />

      </Pressable>
      </View>
    
    </View>


    );
}