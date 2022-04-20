import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Context } from './Context'


const Tab = createBottomTabNavigator();


/**
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */

export default function WalletScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Account" component={AccountSection} />
            <Tab.Screen name="Partners" component={PartnersSection} />
        </Tab.Navigator>
    );
}

function AccountSection() {

    const { name } = useContext(Context)


    return (
        <View style={styles.container}>
            <Image style={styles.illustration} source={require('../assets/finish-illustration.png')} />
            <Text style={styles.title}>Hello, {name}</Text>
            <Text>Glad you are here,</Text>
            <Text>hope to see you soon.</Text>
        </View>
    );
}

function PartnersSection() {
    const partnerList = [
        { name: 'App1', url: '#', comments: 'Description of the application and what you did.' },
        { name: 'App2', url: '#', comments: 'Description of the application and what you did.' },
        { name: 'App3', url: '#', comments: 'Description of the application and what you did.' },
    ];

    const ListItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
                <Text>{item.comments}</Text>
                <Text>URL: {item.url}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Partners</Text>
            <Text>Some apps I was involved:</Text>
            
            {partnerList && partnerList.length > 0 ?
                <ScrollView>
                    {partnerList.map((item) => (
                        <ListItem key={item.name} item={item} />
                    ))}
                </ScrollView>
                : 
                <Text>No Apps 🙈</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  illustration: {
    width: 256,
    height: 160,
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 8,
  },
});
