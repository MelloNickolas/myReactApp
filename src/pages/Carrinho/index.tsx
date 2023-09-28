import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../../assets/logo.png'
import Topo from './components/Topo';

export default function Carrinho() {
    return<>

    <Topo/>

    <View style={estilos.carrinho}>
        <Text style={estilos.nome}>Carrinho de Compras</Text>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.fazenda}/>
            <Text style={estilos.nomeFazenda}>Fazenda Etec Cidade do Livro</Text>
        </View>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente
            da fazenda direto para a sua cozinha.</Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </> 
}

const estilos = StyleSheet.create({
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 12
    },
    nomeFazenda: {
        fontSize: 16,
        fontFamily: "MontserratBold",
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A2",
        fontFamily: "MontserratItalic"
    },
    preco: {
        fontSize: 26,
        fontFamily: "MontserratRegular",
        color: "#2A9F85",
        marginTop: 8
    }

})
