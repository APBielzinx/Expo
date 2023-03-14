import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#d3d3d3'
},
gradientBackground:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
},
box:{
    marginTop: 250,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#a2c1f7',
    width: "85%",
    height: 400,
    marginLeft: 30
    
},
input:{
    borderRadius: 5,
    width: "80%",
    marginLeft: 4,
    padding: 15,
    borderWidth: 1,
    marginTop: 20,
    
    
},
viewIcons:{
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row",
    marginTop: 35
},
button:{
    padding: 20,
    marginTop: 60,
    alignItems: 'center',
    
},

Text: {
  fontWeight: "bold",
  color: "white",
},
Image:{
  width:180,
  height:180
}

})

export default estilo;
