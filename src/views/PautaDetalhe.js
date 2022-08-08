import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AgendaList from "../components/AgendaList";

export default function PautaDetalhe({ navigation }) {

  return (
    <View>
      <TextInput style={styles.input} placeholder="" clearButtonMode="always" />
      <TextInput style={styles.input} placeholder="" keyboardType={'numeric'} clearButtonMode="always" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
});