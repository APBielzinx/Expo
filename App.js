import React from "react";
import { View} from "react-native";
import estilo from "./src/estilos";
import Header  from "./src/components/header";
import Inputs from "./src/components/formEntrar";
import Footer from "./src/components/footer";


export default function App() {
  return (
    <View styles={estilo.container}>
     
     <Header></Header>
    <Inputs></Inputs>
    <Footer></Footer>
     
      </View>
  );
}
