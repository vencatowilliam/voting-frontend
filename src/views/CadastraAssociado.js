import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Alert } from "react-native";

import api from "../services/api";
import axios from "axios";

export default function CadastraAssociado({ navigation }) {
  const [memberName, setMemberName] = useState('');
  const [memberCpf, setMemberCpf] = useState('');

  function create(nome, documento) {
    axios.post(api.getUri() + '/api/associados/', {
      memberName: nome,
      cpf: documento
    }).then(() => { return 'Sucesso' })
      .catch(erro => { return 'Erro' })
  }

  async function createMember() {
    const resultado = create(memberName, memberCpf);
    //console.log(resultado);
    navigation.goBack();
    navigation.goBack();
  };

  return (
    <View>
      <TextInput style={styles.input} placeholder="Nome do associado" clearButtonMode="always"
        value={memberName} onChangeText={setMemberName} />
      <TextInput style={styles.input} placeholder="CPF do associado" keyboardType={'numeric'} clearButtonMode="always"
        value={memberCpf} onChangeText={setMemberCpf} />
      <TouchableOpacity style={styles.button} onPress={createMember}>
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