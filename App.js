import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={{flex:1,backgroundColor: "red",alignItems:"center",justifyContent:"center"}}>
      <View>
        <Text style={{fontSize:20,color:"#ffffff",fontWeight:"bold"}}>Ha ha Ha :)</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
