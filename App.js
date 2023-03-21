import React from "react";
import { View} from "react-native";
import estilo from "./src/estilos";
import Header  from "./src/components/header";
import Box from "./src/components/Box";
import Footer from "./src/components/footer";


export default function App() {
  return (
    <View styles={estilo.container}>
     
     <Header></Header>
    <Box></Box>
    <Footer></Footer>
     
      </View>
  );
}
