import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

// importando componentes personalizados
import Texto from '../../../Components/Texto';

export default function Detalhes({ nome, nomeFazenda, logoFazenda, preco, descricao, botao }) {

    return <>
        <Texto style={estilos.nome}> {nome} </Texto>

        <View style={estilos.fazenda} >
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazendaEstilo}> {nomeFazenda} </Texto>

        </View>

        <Texto style={estilos.descricaoEstilo}> {descricao} </Texto>
        <Texto style={estilos.precoEstilo}> {preco} </Texto>

        <TouchableOpacity style={estilos.botao} >
            <Texto style={estilos.textoBotao} > {botao} </Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
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

    nomeFazendaEstilo: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    descricaoEstilo: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    precoEstilo: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },

    botao: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },

    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        paddingHorizontal: 16
    }
});