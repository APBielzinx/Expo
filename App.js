import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import estilo from "./src/estilos";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View styles={estilo.container}>
      <LinearGradient
        colors={["blue", "#993399"]}
        style={estilo.gradientBackground}
      >

          <Image source = {{ uri :'https://artpoin.com/wp-content/uploads/2022/08/ESTRELA-ROSA-PNG.png'}}
          style = {estilo.Image}
          /> 


      </LinearGradient>

      {/* View com as entradas de dados*/}
      <View style={estilo.box}>
        <View style={estilo.viewIcons}>
          <Feather name="user" size={24} color="black" />
          <TextInput style={estilo.input} placeholder="E-mail" />
        </View>

        <View style={estilo.viewIcons}>
          <FontAwesome5 name="key" size={24} color="black" />
          <TextInput style={estilo.input} placeholder="Senha" />
        </View>
        <TouchableOpacity style={{ width: "80%" }}>
          <LinearGradient colors={['blue', '#5d46e2']} style={estilo.button}>
            <Text style={estilo.Text}> Logar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
