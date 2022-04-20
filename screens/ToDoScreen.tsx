import React from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appScreens } from '../globalTypes'
import globalstyles from "../globalStyles"

export default function HomeScreen() {

    const navigation = useNavigation<appScreens>()

    const onPress = () => navigation.navigate('Home')

    return (
        <View style={globalstyles.container}>
            <Image
                style={styles.illustration}
                source={require('../assets/home-illustration.png')}
            />

            <View style={{marginTop: 24}} />

            <Text style={globalstyles.title}>Howdy partner!</Text>

            <View style={{marginTop: 24}} />

            <>
                <Text style={globalstyles.infoText}>This is your assignment.</Text>
                <Text style={globalstyles.infoText}>Follow the instructions on the Readme file.</Text>
                
                <View style={{marginTop: 16}} />

                <Text style={globalstyles.infoText}>
                    Don’t worry, it’s easy! You should have the app looking smooth in no
                    time.
                </Text>
            </>

            <View style={{marginTop: 44}} />

            <Pressable onPress={onPress} style={({ pressed }) => ([globalstyles.button, pressed && { opacity: 0.6 }])}>
                <Text style={globalstyles.buttonText}>Start Here</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    illustration: {
        width: 206,
        height: 194,
    }
});
