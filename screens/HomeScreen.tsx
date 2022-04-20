import React, { useState, useContext } from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appScreens } from '../globalTypes'
import { Context } from './Context'
import globalstyles from "../globalStyles"

/*
  Implement form using any user/pass combination
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
export default function HomeScreen() {

    const { name, setName } = useContext(Context)

    const navigation = useNavigation<appScreens>()

    const onPress = () => navigation.navigate('List')

    const [password, setPassword] = useState<string>('')

    return (
        <View style={globalstyles.container}>
            <Text style={globalstyles.title}>Welcome</Text>
            
            <View style={{marginTop: 44}} />

            <View style={styles.input}>
                <TextInput 
                    value={name}
                    style={styles.inputText} 
                    placeholder="Enter your name" 
                    placeholderTextColor={'#6B7280'}
                    onChangeText={setName}
                />            
            </View>

            <View style={{marginTop: 16}}/>

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText} 
                    placeholder="Enter your passowrd" 
                    placeholderTextColor={'#6B7280'}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>

            <View style={{marginTop: 44}} />

            <Pressable onPress={onPress} style={({ pressed }) => ([globalstyles.button, pressed && { opacity: 0.6 }])}>
                <Text style={globalstyles.buttonText}>Sign in</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 42,
        borderColor: '#D1D5DB',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',
        paddingLeft: 13
    },
    inputText: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        color: '#6B7280'
    }
});
