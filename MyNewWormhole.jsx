//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react MyNewWormhole.jsx -o MyNewWormhole.js
// 2. add, commit, push to main

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyNewWormhole({request, callback}) {
    const handlePress = () => {
        if (callback) {
          callback(); // Invoke the callback function passed from the app
        }
    }

    if (!request) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>No request available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container} onPress = {handlePress}>
            <View style={styles.card}>
                <Text style={styles.title}>{request.properties.title}</Text>
                <Text style={styles.description}>{request.properties.description}</Text>
                <Text style={styles.price}>Base Price: ${request.properties.basePricePerNight}</Text>
                <Text style={styles.location}>
                    Location: {request.properties.location?.address?.city}, {request.properties.location?.address?.state}
                </Text>
                <Text style={styles.type}>Type: {request.header.type}</Text>
            </View>
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
