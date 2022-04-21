import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoScreen from './screens/ToDoScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import WalletScreen from './screens/WalletScreen';
import Logo from './components/ui/Logo'
import { stackScreenList } from './globalTypes'
import { Context } from './screens/Context'
const Stack = createStackNavigator<stackScreenList>();

const amountFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
});

function App() {

    const [name, setName] = useState<string>('')

    const valueForContext = { name, setName, amountFormatter }

    return (
        <Context.Provider value={valueForContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="ToDo" 
                        component={ToDoScreen} 
                        options={{
                            title: 'To Do',
                            headerTitleStyle: {
                                fontFamily: 'Inter-SemiBold',
                                fontSize: 16
                            },
                        }}
                    />
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{
                            headerTitle: () => <Logo/>,
                        }}
                    />
                    <Stack.Screen name="List" component={ListScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                    <Stack.Screen name="Wallet" component={WalletScreen} />
                </Stack.Navigator>
                <StatusBar />
            </NavigationContainer>
        </Context.Provider>

    );
}

export default App;

