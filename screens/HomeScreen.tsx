import React, { useState, useContext } from 'react';
import {Alert, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appScreens } from '../globalTypes'
import { Context } from './Context'

/*
  Implement form using any user/pass combination
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
export default function HomeScreen() {

    const { setName } = useContext(Context)

    const navigation = useNavigation<appScreens>()

    const onPress = () => navigation.navigate('List')

    const [password, setPassword] = useState<string>('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text />
            <TextInput 
                style={{height: 40}} 
                placeholder="Enter your name" 
                onChangeText={setName}
            />
            <TextInput 
                style={{height: 40}} 
                placeholder="Enter your passowrd" 
                onChangeText={setPassword}
            />
            <Button title="Sign in" onPress={onPress} />
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
