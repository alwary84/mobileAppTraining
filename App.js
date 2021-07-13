import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
  <View style={{flex:1, }}>

     <View style={{flex:1, flexDirection:"row"}}>
       <View style={{flex:1, backgroundColor: "yellow"}}></View>
       <View style={{flex:1, backgroundColor: "purple"}}></View>
       <View style={{flex:1, backgroundColor: "blue"}}></View>
     </View>

    <View style={{flex:5, backgroundColor:"red"}}>
    </View>

    <View style={{flex:1, flexDirection:"row"}}>
       <View style={{flex:1, backgroundColor: "yellow"}}></View>
       <View style={{flex:1, backgroundColor: "purple"}}></View>
     </View>

  </View>
  );
}


