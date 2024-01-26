import {Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor:'#f1f1f1',
        flex: 1,
        padding: 5,
        margin: 5,
        borderRadius: 10,
    },
    image: { 
        borderRadius:10,
        height: Dimensions.get('window').height / 4,
        margin:5,
        resizeMode:'contain',
        flex: 1, 
        backgroundColor:'white',
    },
    title: {
        fontSize:17,
        color:'black',
        marginTop:20,
        fontWeight:'bold',
        marginLeft:5,
        flex: 1,
    },
    price: {
        margin:10,
        fontWeight:'bold',
        fontSize:15, 
        flex: 1,
    },
    inStock: {
        color:'red',
        fontSize:18,
        margin:5,
        fontWeight:"bold",
        flex: 1,
    },
})