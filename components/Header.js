import React from 'react';
import { View } from 'react-native';

const Header = () => {
    return(
    <View style={{flex:1, flexDirection:"row"}}>
        <View style={{flex:1, backgroundColor: "yellow"}}></View>
        <View style={{flex:1, backgroundColor: "purple"}}></View>
        <View style={{flex:1, backgroundColor: "white"}}></View>
  </View>
  )
}

export default Header;