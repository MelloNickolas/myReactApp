import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import Detalhe from "./components/Detalhe";
import Topo from "./components/Topo";
import carrinho from '../../mocks/carrinho';

export default function Carrinho() {
  return (
    <>
      <Topo titulo={carrinho.topo.titulo}/>
      <View style={estilos.carrinho}>
        <Detalhe 
            nome={carrinho.detalhes.nome}
            nomeFazenda={carrinho.detalhes.nomeFazenda}
            descricao={carrinho.detalhes.descricao}
            preco={carrinho.detalhes.preco}
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 12,
  },
  nomeFazenda: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A2",
    fontFamily: "MontserratItalic",
  },
  preco: {
    fontSize: 26,
    fontFamily: "MontserratRegular",
    color: "#2A9F85",
    marginTop: 8,
  },
});
