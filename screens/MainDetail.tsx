import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from './Context'
import Icon from 'react-native-vector-icons/Ionicons';

export default function MainDetail(props: { item: any }) {

    const { amountFormatter } = useContext(Context)

    const percentageNegative = parseFloat(props.item.changePercent24Hr) < 0

    return(
        <View>
            <View style={styles.cryptoRankContainer}>
                <View style={styles.cryptoContainer}>
                    <Text style={styles.ticker}>{props.item?.symbol}</Text>
                    <Text> - </Text>
                    <Text>{props.item?.name}</Text>
                </View>

                <Text style={styles.rank}>#{props.item?.rank}</Text>
            </View>

            <View style={{marginTop: 5}}/>

            <View style={styles.pricePercContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{amountFormatter.format(parseFloat(props.item?.priceUsd))}</Text>
                    <Text style={styles.currency}> USD</Text>
                </View>
                
                <View style={[styles.percentageContainer, percentageNegative ? {backgroundColor: '#FDDCDC'} : {backgroundColor: '#D1FAE5'}]}>
                    {percentageNegative ? 
                        <Icon name="arrow-down" size={18} color="#A50606" />   
                        :
                        <Icon name="arrow-up" size={18} color="#065F46" />
                    }
                    <Text style={[styles.percentageText, percentageNegative ? {color: '#A50606'} : {color: '#065F46'}]}>{Number(parseFloat(props.item?.changePercent24Hr)/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1})}</Text>
                </View>
            </View>
        </View>
    )
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
        //width: 73,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 10
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