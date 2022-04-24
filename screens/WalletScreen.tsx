import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Context } from './Context'

const Tab = createBottomTabNavigator();

export default function WalletScreen() {
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen 
                name="Account" 
                component={AccountSection} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabBarContainer, focused && {borderTopColor: '#1FC4DB',}]}>
                            <Text style={[styles.tabBarText, focused && {color: '#1FC4DB'}]}>Account</Text>
                        </View>       
                    )
                }}
            />
            <Tab.Screen 
                name="Partners" 
                component={PartnersSection} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabBarContainer, focused && {borderTopColor: '#1FC4DB',}]}>
                            <Text style={[styles.tabBarText, focused && {color: '#1FC4DB'}]}>Partners</Text>
                        </View>      
                    )
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
        { name: 'Caballo Chileno', url: 'https://apps.apple.com/py/app/caballo-chileno/id1522141567', comments: 'Currently in the App Store and Google Play. Its an app for chilean horses that are registered in the Chilean Horse Breeders Federation. The user can navigate through the horses and breeders info, and can buy or sell horses as well. Its like a Facebook for horses and breeders where the user can buy and sell horses as well. It was my first project. We used AWS services on the backend. Disposed the data in Elasticsearch and DynamoDB, and with used an Appsync Graphql API. The client was built with React Native, Expo and Native Base UI. I was a solo developer Fullstack on that project, so basically built everything until my boss witched me to a new project. Amazing experience.' },
        { name: 'Rentapp', url: 'Not yet on production.', comments: 'Web app to manage property leases. All the process of leasing a property is covered by the app, for the leaser and the leasee. The stack used was ReactJs on the frontend with Material UI and a Django graphene (graphql API) on the backend. I was on both frontend and backend. We also used microservices with AWS, CodePipeline to deploy with CI/CD, and CDK infra as code.' },
        { name: 'Strive', url: 'Not yet on production', comments: 'Side project I was building with a friend. Users could find sports coaches (all sports) and see their content, and work with them basically. We built a frontend MVP with Expo React Native. We never built the backend as we had no time tbh. Its uncertain if we will carry on with it.' },
        { name: 'Pace', url: 'Not yet on production', comments: 'The current project I am working on. Its a Fintech built for Chile where the user can buy and sell stocks, see the portfolio, stocks info, and much more. I`m purely frontend with Expo React Native, and calling REST endpoints.' },
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
        backgroundColor: '#fff',
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
    },
    tabBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%', 
        height: '100%', 
        borderTopColor: '#fff',
        borderTopWidth: 3
    },
    tabBarText: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: 'black'
    }
});
