import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

// importando assets personalizados

import logo from "../../../../assets/logo.png";
import Texto from '../../../Components/Texto';
import Topo from "../Components/Topo";

const reais = "R$";

export default function Cesta() {
    return <>
        <Topo />

        <View style={estilos.cesta} >
            <Texto style={estilos.nome}>Cesta de verduras</Texto>

            <View style={estilos.fazenda} >
                <Image source={logo} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda} >Jenny Jack Farm</Texto>

            </View>

            <Texto style={estilos.descricao} >
                Cesta com produtos selecionados com cuidados espeiciais, direto para a cozinha
            </Texto>
            <Texto style={estilos.preco} >{reais} 40,00</Texto>

        </View>
    </>
}

const estilos = StyleSheet.create({
    

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },

    imagemFazenda: {
        width: 32,
        height: 32
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});