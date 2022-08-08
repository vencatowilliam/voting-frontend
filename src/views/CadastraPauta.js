import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from "react-native";

import api from "../services/api";
import axios from "axios";

export default function CadastraPauta({ navigation }) {
  const [agendaTitle, setPautaTitle] = useState('');
  const [agendaDescription, setPautaDescription] = useState('');
  const [expirationTime, setPautaExpirationTime] = useState('');

  function create(nomePauta, descricaoPauta, tempoAtivoPauta) {
    axios.post(api.getUri() + '/api/pautas/', {
      agendaTitle: nomePauta,
      agendaDescription: descricaoPauta,
      expirationTime: tempoAtivoPauta
    }).then(() => { return 'Sucesso' })
      .catch(erro => { return 'Erro' })
  }

  async function createAgenda() {
    const resultado = create(agendaTitle, agendaDescription, expirationTime);
    //console.log(resultado);
    navigation.goBack();
    navigation.goBack();
  };

  return (
    <View>
      <TextInput style={styles.input} placeholder="Nome da pauta" clearButtonMode="always"
        value={agendaTitle} onChangeText={setPautaTitle} />
      <TextInput style={styles.input} placeholder="Descrição da pauta" clearButtonMode="always"
        value={agendaDescription} onChangeText={setPautaDescription} />
      <TextInput style={styles.input} placeholder="Tempo para expirar" keyboardType={'numeric'} clearButtonMode="always"
        value={expirationTime} onChangeText={setPautaExpirationTime} />
      <TouchableOpacity style={styles.button} onPress={createAgenda}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 30,
    marginHorizontal: 15,
    backgroundColor: "#2A9F85",
    paddingVertical: 15,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 42,
  },
});