//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
 

//Create custom components
const App = () => {

  //Declare variable
  //var counter = 0;
  const [counter, setCounter] = useState(0);
  //console.log("counter:" + counter);
  //console.log("Set counter:" + setCounter);
  var letters = '0123456789ABCDEF';
  var randcolor = '#';
  for (var i = 0; i < 6; i++) {
    randcolor += letters[Math.floor(Math.random() * 16)];
  }
  const randomcolor = randcolor
  console.log("color" + randcolor)

  return (
    <View 
    style={{backgroundColor: randcolor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    }}>
      <Text>Color Hex: {randcolor}</Text>
      <Button title="New Color"
      onPress={()=>{
        setCounter(counter + 1);
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

//Export 
export default App;
