import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, TextInput,TouchableOpacity } from "react-native";
import estilo from "./src/estilos";
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View styles={estilo.container}>
      <LinearGradient
        colors={["blue", "#993399"]}
        style={estilo.gradientBackground}
      ></LinearGradient>
      {/* view com as entradas de dados*/}
      <View style={estilo.box}>
          <View style = {estilo.viewIcons}>
          <Feather name="user" size={24} color="black" />
            <TextInput style = {estilo.input}  placeholder='email' />
          </View>
          <View style = {estilo.viewIcons}>
           <Ionicons name="key-sharp" size={24} color="black" />
            <TextInput style = {estilo.input} placeholder='senha' />
           </View>

           <TouchableOpacity style = {{width:'80%'}}>

              <LinearGradient
              colors = {['blue', '#5d46e2']}
              style={estilo.button}

              >

              </LinearGradient>

           </TouchableOpacity>
           
      </View>
    </View>
  );
}
