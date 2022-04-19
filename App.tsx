import * as React from 'react';
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

const Stack = createStackNavigator<stackScreenList>();



function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ToDo" component={ToDoScreen} />
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
    );
}

export default App;

