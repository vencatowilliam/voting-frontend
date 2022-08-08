import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pauta')} >
                <Text style={styles.buttonText}>Consultar Pautas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Associado')} >
                <Text style={styles.buttonText}>Consultar associado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Voto')} >
                <Text style={styles.buttonText}>Realizar votação</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
        color:"#ffffff",
        fontSize: 16,
        lineHeight: 42,
    },
  });