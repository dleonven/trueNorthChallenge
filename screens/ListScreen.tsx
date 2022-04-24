import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { item, appScreens } from '../globalTypes'
import MainDetail from './MainDetail'


export default function ListScreen() {
    const navigation = useNavigation<appScreens>()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://api.coincap.io/v2/assets')
                setData(response.data.data)
            } 
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getData()

    }, [])


    const onPressItem = (item: item) => {
        navigation.navigate('Detail', {
            id: item?.id
        })
    }

    const ListItem = (props: {item: item}) => {
        return (
            <View style={styles.itemContainer}>
                <Pressable onPress={() => onPressItem(props.item)}>
                    <MainDetail item={props.item}/>
                </Pressable>
            </View>
        );
    };

    if(loading) return <Text>Loading</Text>
    if(error || !data) return <Text>Error</Text>
    return(
        <View>
            {data.length > 0 &&
                <ScrollView style={styles.container}>
                    <View style={{marginTop: 24}}/>
                    {data.map((item: item) => (
                        <ListItem 
                            key={item?.id} 
                            item={item} 
                        />
                    ))}
                </ScrollView>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30
    },
    itemContainer: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 18,
        paddingTop: 20,
        paddingBottom: 18,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 8
    },
    cryptoContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    ticker: {
        fontFamily: 'Inter-Bold',
        fontSize: 16
    },
    name: {
        fontFamily: 'Inter-Regular',
        fontSize: 16 
    },
    rank: {
        fontFamily: 'Inter-Medium',
        fontSize: 14,
        color: '#6B7280',
        paddingRight: 12
    },
    pricePercContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    priceContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-end'
    },
    price: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 24,
        color: '#019FB5'    
    },
    currency: {
        fontFamily: 'Inter-Medium',
        fontSize: 14,
        color: '#6B7280',
    },
    percentageContainer: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        width: 73
    },
    percentageText: {
        fontFamily: 'Inter-Medium',
        fontSize: 14
    },
    cryptoRankContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
});

