import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#000C40", "#F0F2F0"]
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#000C40", "#F0F2F0"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#000C40", "#F0F2F0"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#8e9eab", "#eef2f3"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#f46b45", "#eea849"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#000C40", "#F0F2F0"]
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#536976", "#BBD2C5"]
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#536976", "#BBD2C5"]
    },
    "Haze": {
        iconName: "weather-fog",
        gradient: ["#536976", "#BBD2C5"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#536976", "#BBD2C5"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#536976", "#BBD2C5"]
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#536976", "#BBD2C5"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#536976", "#BBD2C5"]
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#536976", "#BBD2C5"]
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#acb6e5", "#86fde8"]
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#292E49", "#BBD2C5", "#536976"]
    }
};

export default function Weather({ temp, condition, description }) {
    console.log(condition, description);
    return (
        <LinearGradient style={styles.container}
        // Button Linear Gradient
        colors={ weatherOptions[condition].gradient }>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfcontainer}>
            <MaterialCommunityIcons
                name={ weatherOptions[condition].iconName }
                size={96}
                color="white"
            />
            <Text style={ styles.temp }>{temp}℃</Text>
        </View>
        <View style={ [styles.halfcontainer, styles.textcontainer] }>
            <Text style={styles.title}>{ condition }</Text>
            <Text style={styles.subtitle}>{ description }</Text>
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
        fontSize: 50,
        color: "white"
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 50,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 25,
        fontWeight: "300"
    },
    textcontainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});