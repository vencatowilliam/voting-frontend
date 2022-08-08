import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AgendaList from "../components/AgendaList";

export default function Pauta({ navigation }) {

  return (
    <View>
      <AgendaList />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastraPauta')} >
        <Text style={styles.buttonText}>Nova Pauta</Text>
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
      color:"#ffffff",
      fontSize: 16,
      lineHeight: 42,
  },
});