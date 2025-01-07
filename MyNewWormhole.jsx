//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react MyNewWormhole.jsx -o MyNewWormhole.js
// 2. add, commit, push to main

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyNewWormhole() {
    const [cards, setCards] = useState([]);

    // Function to load cards from local storage
    const loadCardsFromLocalStorage = async () => {
        try {
            const storedCards = await AsyncStorage.getItem('cards');
            if (storedCards) {
                setCards(JSON.parse(storedCards));
            } else {
                console.warn('No cards found in local storage');
            }
        } catch (error) {
            console.error('Error loading cards from local storage:', error);
        }
    };

    useEffect(() => {
        loadCardsFromLocalStorage();
    }, []);

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.properties.title}</Text>
            <Text style={styles.description}>{item.properties.description}</Text>
            <Text style={styles.price}>Base Price: ${item.properties.basePricePerNight}</Text>
            <Text style={styles.location}>
                Location: {item.properties.location?.address?.city}, {item.properties.location?.address?.state}
            </Text>
            <Text style={styles.type}>Type: {item.header.type}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {cards && cards.length > 0 ? (
                <FlatList
                    data={cards}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCard}
                />
            ) : (
                <Text>No cards available</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 10,
    },
    card: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 5,
    },
    location: {
        fontSize: 14,
        color: '#555',
    },
    type: {
        fontSize: 18,
        color: '#777',
    },
});
