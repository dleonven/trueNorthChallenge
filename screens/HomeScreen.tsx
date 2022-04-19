import React from 'react';
import {Alert, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appScreens } from '../globalTypes'

/*
  Implement form using any user/pass combination
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
export default function HomeScreen() {

    const navigation = useNavigation<appScreens>()

    const onPress = () => navigation.navigate('List')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text />
            <TextInput style={{height: 40}} placeholder="Enter your name" />
            <TextInput style={{height: 40}} placeholder="Enter your passowrd" />
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
