import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Weather({ temp }) {
    return (
        <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfcontainer}>
            <Fontisto name="day-haze" size={96} color="black" />
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={styles.halfcontainer}>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 50
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});