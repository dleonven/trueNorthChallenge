import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { item, appScreens } from '../globalTypes'
import globalStyles from '../globalStyles'
import { Context } from './Context'
import MainDetail from './MainDetail'

const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
});

interface IdetailScreen {
    route: { 
        params: { 
            id: string 
        }
    }
}

export default function DetailScreen({ route }: IdetailScreen) {
    const navigation = useNavigation<appScreens>()
    const { amountFormatter } = useContext(Context)

    const { id } = route.params

    const [item, setItem] = useState<item>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`)
                setItem(response.data.data)
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

    const onPress = () => navigation.navigate('Wallet')

    if(loading) return <Text>Loading</Text>
    if(error || !item) return <Text>Error</Text>
    return(
        <View style={styles.container}>
            <View style={globalStyles.itemContainer}>
                
                <MainDetail item={item}/>

                <View style={{marginTop: 16}}/>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Supply</Text>
                    <Text style={styles.amount}>{numberFormatter.format(parseFloat(item.supply))}</Text>
                </View>

                {item.maxSupply &&
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Max Supply</Text>
                        <Text style={styles.amount}>{numberFormatter.format(parseFloat(item.maxSupply))}</Text>
                    </View>
                }

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Market Cap</Text>
                    <Text style={styles.amount}>{amountFormatter.format(parseFloat(item.marketCapUsd))}</Text>
                </View>

            </View>

            <Pressable onPress={onPress} style={({ pressed }) => ([globalStyles.button, pressed && { opacity: 0.6 }])}>
                <Text style={globalStyles.buttonText}>My Wallet</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 24
    },
    textContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },  
    text: {
        fontFamily: 'Inter-Medium',
        fontSize: 14,
        marginRight: 8
    },
    amount: {
        fontFamily: 'Inter-Regular',
        fontSize: 14
    }
});
