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
                {/* ToDo: Link to `DetailScreen` passing `id` as parameter */}
                <TouchableWithoutFeedback onPress={() => onPressItem(props.item)}>
                    <View>
                        <View>
                            <Text>{props.item?.symbol}</Text>
                            <Text>#{props.item?.rank}</Text>
                        </View>
                        <View>
                            <Text>{props.item?.name}</Text>
                            {/* 💯  In this execercise you can round numbers without a library */}
                            <Text>USD {props.item?.priceUsd}</Text>
                            <Text>Last24 {props.item?.changePercent24Hr}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    };

    return (
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  illustration: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 8,
  },
});

