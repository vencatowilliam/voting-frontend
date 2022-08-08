import React from "react";
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import MemberList from "../components/MemberList";

export default function Associado({ navigation }) {
    return (
        <View>
            <MemberList />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastraAssociado')} >
        <Text style={styles.buttonText}>Novo associado</Text>
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