import React from "react"
import { View, Image ,Text, StyleSheet} from "react-native"
import logo from '/littlecar/assets/logo.png'

type props ={
    nome: string,
    nomeFazenda: string,
    descricao: string,
    preco: string,
}

export default function Detalhe({nome, nomeFazenda, descricao, preco} : props){
    return<>
        <Text style={style.nome}>{nome}</Text>
        <View style={style.fazenda}>
            <Image source={logo} style={style.imagemFazenda}/>
        <Text style={style.nomeFazenda}>{nomeFazenda}</Text>
        </View>
        <Text style={style.descricao}>{descricao}</Text>
        <Text style={style.preco}>{preco}</Text>
    </>
}

const style = StyleSheet.create({
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontFamily: 'MontSerratBold'
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
        fontFamily: "MontSerratBold",
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontFamily: "MontSerratItalic",
    },
    preco: {
        fontSize: 26,
        fontFamily: "MontSerratRegular",
        color: "#2A9F85",
        marginTop: 8
    }
})