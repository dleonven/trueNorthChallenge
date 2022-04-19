import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { item, appScreens } from '../globalTypes'
/**
 * 💯 Handle loading and error scenarios, always
*/

export default function ListScreen({ route }) {
    const navigation = useNavigation<appScreens>()

    const { id } = route.params

    const [item, setItem] = useState<item>(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`)
                setItem(response.data.data)
            } 
            catch (error) {
                console.log('error: ', error)
            }
        }

        getData()
    }, [])

    const onPress = () => navigation.navigate('Wallet')

    return (
        <View style={styles.container}>
            {item ?
                <View>
                    <Text>itemId: {JSON.stringify(id)}</Text>
                    <Text>#{item.rank}</Text>
                    <Text>{item.symbol}</Text>
                    <Text>{item.name}</Text>
                    <Text>USD {item.priceUsd}</Text>
                    <Text>Last24 {item.changePercent24Hr}</Text>
                    <Text>Supply {item.supply}</Text>
                    <Text>Max Supply {item.maxSupply}</Text>
                    <Text>Market Cap Usd {item.marketCapUsd}</Text>

                    <Button title="My Wallet" onPress={onPress} />
                </View>
                : 
                <Text>Loading</Text>
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
});

const mockData = {
  data: {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: '17193925.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '119179791817.6740161068269075',
    volumeUsd24Hr: '2928356777.6066665425687196',
    priceUsd: '6931.5058555666618359',
    changePercent24Hr: '-0.8101417214350335',
    vwap24Hr: '7175.0663247679233209',
  },
};
