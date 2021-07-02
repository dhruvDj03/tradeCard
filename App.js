import * as React from 'react';
import { View, Text,Button,StyleSheet ,TouchableOpacity,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenGrid from './ScreenGrid';
import Card from'./Card';
import DeckView from './DeckView';
import Card2 from './Card2';

const HomeScreen=({navigation})=> {
  const [cardItem,setCardItem]=React.useState([
   {name:'example', id:'1'},
   {name:'example', id:'2'},
   {name:'example', id:'3'},
   {name:'example', id:'4'},
   {name:'example', id:'5'},
   {name:'example', id:'6'},
   {name:'example', id:'7'},
   {name:'example', id:'8'},
   {name:'example', id:'9'},
   
 ]);
  return (
    <View style={{ flex: 1, }}>
    <View style={styles.cardPreviewConatiner}>
    <Text style={styles.cardPreview} >Card Preview</Text>
    </View>
    <FlatList 
   data={cardItem}
   renderItem={({item})=>  
   <View style={styles.deckViewConatiner}>
    <TouchableOpacity onPress={()=>navigation.navigate('Grid')}>
    <DeckView title={item.name} id={item.id}/>
    </TouchableOpacity> 
    </View>
   }
   horizontal={true}
   />   
   
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Grid" component={ScreenGrid}/>
        <Stack.Screen name="Card" component={Card}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
deckViewConatiner:{
marginTop:70,
width:250,
height:180,
backgroundColor:'#D3D3D3',
},
cardPreview:{
  fontSize:28,
},
cardPreviewConatiner:{
 
  alignItems:'flex-start',
}
});

export default App;