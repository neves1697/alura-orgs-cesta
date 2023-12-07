import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Detalhes from "./Detalhes";

// importando assets personalizados

import Texto from '../../../Components/Texto';
import Topo from "../Components/Topo";
import Itens from "./Itens";

export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo} />

        <View style={estilos.cesta} >
            <Detalhes {...detalhes} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});