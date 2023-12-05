import React from "react";
import { Text, StyleSheet, Image, Dimensions } from "react-native";

// Importando componentes
import Texto from '../../../Components/Texto';

// importando assets personalizados
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width; // pegando a largura da tela

export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}> {titulo} </Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
        fontFamily: "Montserrat"
    },

    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
        fontWeight: "normal"
    },
});