import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Pauta from './views/Pauta';
import Associado from './views/Associado';
import CadastraAssociado from './views/CadastraAssociado';
import CadastraPauta from './views/CadastraPauta';
import PautaDetalhe from './views/PautaDetalhe';
import Voto from './views/Voto';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Bem vindo"}} />
        <Stack.Screen name="Pauta" component={Pauta} options={{title:"Pautas"}}/>
        <Stack.Screen name="Associado" component={Associado} options={{title:"Associados"}}/>
        <Stack.Screen name="CadastraAssociado" component={CadastraAssociado} options={{title:"Cadastrar novo associado"}}/>
        <Stack.Screen name="CadastraPauta" component={CadastraPauta} options={{title:"Cadastrar nova pauta"}}/>
        <Stack.Screen name="PautaDetalhe" component={PautaDetalhe} options={{title:"Detalhes da pauta"}}/>
        <Stack.Screen name="Voto" component={Voto} options={{title:"Realizar voto"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}