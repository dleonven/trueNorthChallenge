import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { item, appScreens } from '../globalTypes'
import globalstyles from "../globalStyles"


const amountFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
});

/*
 * 💯 Handle loading and error scenarios, always
 */

export default function ListScreen() {
    const navigation = useNavigation<appScreens>()

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://api.coincap.io/v2/assets')
                setData(response.data.data)
            } 
            catch (error) {
                console.log('error: ', error)
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
                <TouchableWithoutFeedback onPress={() => onPressItem(props.item)}>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.cryptoContainer}>
                                <Text style={styles.ticker}>{props.item?.symbol}</Text>
                                <Text> - </Text>
                                <Text>{props.item?.name}</Text>
                            </View>

                            <Text>#{props.item?.rank}</Text>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.price}>{amountFormatter.format(parseFloat(props.item?.priceUsd))}</Text>
                                <Text style={styles.currency}> USD</Text>
                            </View>
                            
                            <View style={styles.percentageContainer}>
                                <Text>{Number(parseFloat(props.item?.changePercent24Hr)/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1})}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    };

    return (
        <>
            {data && data.length > 0 ?
                <ScrollView>
                    {data.map((item: item) => (
                        <ListItem 
                            key={item?.id} 
                            item={item} 
                        />
                    ))}
                </ScrollView>
                : 
                <Text>Loading</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        width: '100%',
        paddingLeft: 16,
        padingRight: 18,
        paddingTop: 20,
        paddingBottom: 18,
        backgroundColor: '#fff',
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
        color: '#6B7280'   
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
    }
});

