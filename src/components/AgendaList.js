import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../services/api"
import Icon from "react-native-vector-icons/AntDesign";

export default function ListAgenda() {

  const [agendas, setAgendas] = useState([])
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(api.getUri() + '/api/pautas/')
      .then(response => {
        const listAgendas = response.data;
        setAgendas(listAgendas)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])

  return <>
    <FlatList data={agendas} style={styles.flatList} keyExtractor={agenda => agenda.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('PautaDetalhe', {id: item.id})}>
          <Icon name="menuunfold" size={25} color='#000' />
          <View>
            <Text style={styles.itemText}>{item.agendaTitle}</Text>
            <Text style={styles.itemText}>{item.agendaDescription}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </>
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemList: {
    width: '100%',
    height: 80,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    paddingLeft: 25,
  },
});