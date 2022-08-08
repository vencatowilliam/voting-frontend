import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import api from "../services/api"
import Icon from "react-native-vector-icons/AntDesign";

export default function ListMember({ navigation }) {

  const [members, setMembers] = useState([])

  useEffect(() => {
    axios.get(api.getUri() + '/api/associados/')
      .then(response => {
        const listMembers = response.data;
        setMembers(listMembers)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])

  return <>
    <FlatList data={members} style={styles.flatList} keyExtractor={member => member.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemList}>
          <Icon name="menuunfold" size={25} color='#000' />
          <View>
            <Text style={styles.itemText}>{item.memberName}</Text>
            <Text style={styles.itemText}>{item.cpf}</Text>
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