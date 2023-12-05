import React from "react";
import { StyleSheet, View } from "react-native";
import Detalhes from "./Detalhes";

// importando assets personalizados

import Texto from '../../../Components/Texto';
import Topo from "../Components/Topo";


export default function Cesta({ topo, detalhes }) {
    return <>
        <Topo {...topo} />
        <Detalhes {...detalhes} />
        <View style={estilos.cesta} >
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});