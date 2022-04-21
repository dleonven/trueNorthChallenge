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
            <Tab.Screen 
                name="Account" 
                component={AccountSection} 
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Partners" 
                component={PartnersSection} 
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

function AccountSection() {

    const { name } = useContext(Context)


    return (
        <View style={styles.container}>
            <Image style={styles.illustration} source={require('../assets/finish-illustration.png')} />
            <Text style={styles.title}>Hello, {name}</Text>
            <Text style={styles.info}>Glad you are here, hope to see you soon.</Text>
        </View>
    );
}






type appItem = {
    item: {
        name: string,
        url: string,
        comments: string,
    }
}

function PartnersSection() {
    const partnerList = [
        { name: 'App1', url: '#', comments: 'Description of the application and what you did.' },
        { name: 'App2', url: '#', comments: 'Description of the application and what you did.' },
        { name: 'App3', url: '#', comments: 'Description of the application and what you did.' },
    ];

    const ListItem = ({ item }: appItem) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.appName}>{item.name}</Text>
                <View style={{marginTop: 12}}/>
                <Text style={styles.appInfo}>{item.comments}</Text>
                <View style={{marginTop: 24}}/>
                <View style={styles.urlContainer}>
                    <Text style={styles.appInfo}>URL: </Text>
                    <Text style={styles.url}>{item.url}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{marginTop: 24}}/>
            <Text style={styles.title}>Partners</Text>
            <View style={{marginTop: 24}}/>
            <Text style={styles.subtitle}>Some apps I was involved:</Text>
            <View style={{marginTop: 18}}/>

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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
    },
    subtitle: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
    },
    info: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
    },
    illustration: {
        width: 256,
        height: 160,
    },
    itemContainer: {
        display: 'flex',
        backgroundColor: '#fff',
        marginVertical: 6,
        padding: 20,
        borderRadius: 8
    },
    appName: {
        color: '#019FB5',
        fontFamily: 'Inter-Bold',
        fontSize: 16
    },
    appInfo: {
        fontSize: 16,
        fontFamily: 'Inter-Regular'
    },
    urlContainer: {
        flexDirection: 'row'
    },
    url: {
        color: '#6B7280',
        fontSize: 16,
        fontFamily: 'Inter-Regular'
    }
});
