import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Fontisto, Ionicons, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm-sharp",
        gradient: ["#108dc7", "#ef8e38"],
        iconClass: "Ionicons"
    },
    Drizzle: {
        iconName: "cloud-drizzle",
        gradient: ["#00b09b", "#96c93d"],
        iconClass: "Feather"
    },
    Rain: {
        iconName: "rains",
        gradient: ["#a8c0ff", "#3f2b96"],
        iconClass: "Fontisto"
    },
    Snow: {
        iconName: "snows",
        gradient: ["#91EAE4", "#86A8E7"],
        iconClass: "Fontisto"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#D3CCE3", "#E9E4F0"],
        iconClass: "MaterialCommunityIcons"
    },
    Smoke: {
        iconName: "smog",
        gradient: ["#654ea3", "#eaafc8"],
        iconClass: "FontAwesome5"
    },
    Haze: {
        iconName: "day-haze",
        gradient: ["#0082c8", "#0082c8"],
        iconClass: "Fontisto"
    },
    Dust: {
        iconName: "cloudversify",
        gradient: ["#636363", "#a2ab58"],
        iconClass: "FontAwesome5"
    },
    Fog: {
        iconName: "fog",
        gradient: ["#FFFDE4", "#005AA7"],
        iconClass: "Fontisto"
    },
    Sand: {
        iconName: "wind",
        gradient: ["#CAC531", "#F3F9A7"],
        iconClass: "Feather"
    },
    Ash: {
        iconName: "campfire",
        gradient: ["#4e54c8", "#8f94fb"],
        iconClass: "MaterialCommunityIcons"
    },
    Squall: {
        iconName: "rain",
        gradient: ["#11998e", "#38ef7d"],
        iconClass: "Fontisto"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#74ebd5", "#ACB6E5"],
        iconClass: "MaterialCommunityIcons"
    },
    Clear: {
        iconName: "sun",
        gradient: ["#fc4a1a", "#f7b733"],
        iconClass: "Feather"
    },
    Clouds: {
        iconName: "cloudy",
        gradient: ["#DBDBDB", "#EAEAEA"],
        iconClass: "Fontisto",
        title: "Cloud",
        subtitle: "cloudkasdfjaskld"
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
        <StatusBar style="inverted" />
        <View style={styles.halfContainer}>
            {
                weatherOptions[condition].iconClass == "Feather" ? 
                    <Feather name={weatherOptions[condition].iconName} size={80} color="white" /> :
                    weatherOptions[condition].iconClass == "Fontisto" ?
                        <Fontisto name={weatherOptions[condition].iconName} size={80} color="white" /> :
                        weatherOptions[condition].iconClass == "Ionicons" ?
                            <Ionicons name={weatherOptions[condition].iconName} size={80} color="white" /> :
                            weatherOptions[condition].iconClass == "FontAwesome5" ?
                                <FontAwesome5 name={weatherOptions[condition].iconName} size={80} color="white" /> :
                                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={80} color="white" />
            }
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer }}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
    );
};

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Mist", 
        "Smoke", 
        "Haze", 
        "Dust", 
        "Fog", 
        "Sand", 
        "Ash", 
        "Squall", 
        "Tornado", 
        "Clear", 
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 50,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20,
        textAlign: "left"
    },
    textContainer: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 40,
    }
});