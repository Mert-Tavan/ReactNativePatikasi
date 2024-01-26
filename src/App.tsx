import React from 'react';
import {SafeAreaView, Text, View, FlatList, StyleSheet,Dimensions,TextInput} from 'react-native';
import ProductCard from './components/ProductCard';

import item_data from './item_data.json';


function App(){ 
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.patika_title}> PATIKASTORE </Text>
        <TextInput style={styles.text_input}  placeholder='Ara...' placeholderTextColor={'black'} ></TextInput>
      </View>
        <FlatList
           numColumns={2}
           data={item_data}
           renderItem={({item}) => <ProductCard product={item}/>}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  patika_title:{
    marginTop:10,
    color:'purple',
    fontSize:35,
    fontWeight:'bold',

  },
  text_input:{
    width:Dimensions.get("window").width - 10,
    height:Dimensions.get("window").height/15,
    backgroundColor:'#f1f1f1',
    borderWidth:1,
    borderColor:'#f1f1f1',
    borderRadius:10,
    margin:10,
    marginLeft:5,
    marginRight:5,
    
  }
})

export default App;
