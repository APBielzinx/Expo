import React from "react"
import { Text, View } from "react-native"
import estilo from "../estilos"


export default function Footer(){
    return(
      
        <View style={estilo.Links}>
        <Text style={estilo.teste}  href="http://google.com" > Esqueci a Senha</Text>
        <Text  href="http://google.com" > Cadastrar-se</Text>
        </View>
      

        
       
    
        
    )
}