import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home'
import Metas from './pages/Metas'
import AddMeta from "./pages/AddMeta";

const Stack = createStackNavigator();

export default function Routes() {

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#171941'
        },
        headerTintColor: '#bf38ac',
        headerBackTitle: "voltar"
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Metas" component={Metas} options={{
                    headerTitle: "Listar"
                }} />

                <Stack.Screen name="AddMeta" component={AddMeta} options={{
                    headerTitle: "Cadastrar"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}