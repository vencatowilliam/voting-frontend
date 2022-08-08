import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import api from './services/api';

export default class listaPautas extends Component {
  constructor(props) {
    super(props);
    //this.getListAgendas();
    this.state = {
      errorMessage: null,
      agendas: [],
    };
  };

  getListAgendas = async () => {
    console.log('adfasdf');
     try {
       const response = await api.get('/api/pautas');
       const agendas = response.data;
       console.log("teste", response.data);
       console.log(agendas);
       this.setState({ ...this.state, agendas });
       console.log(this.state);
     } catch (response) {
       this.setState({ errorMessage: response.data.error });
     }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.getListAgendas} title="Carregar Pautas" />
        { this.state.agendas.map(agenda => (
          <View key={agenda.id} style={{ marginTop: 30 }}>
            <Text>{agenda.agendaTitle}</Text>
            <Text>{agenda.agendaDescription}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
