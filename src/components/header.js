import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from 'react-native';
import estilo from "../estilos";

export default function Header(){
    return(
        <LinearGradient
        colors={["blue", "#993399"]}
        style={estilo.gradientBackground}
        >
        
          <Image source = {{ uri :'https://artpoin.com/wp-content/uploads/2022/08/ESTRELA-ROSA-PNG.png'}}
          style = {estilo.Image}
          /> 
        
        
        </LinearGradient>
    )
}


