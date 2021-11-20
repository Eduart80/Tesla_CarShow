import React from "react";
import {View, Text, ImageBackground} from 'react-native'
import styles from "./styles"

export default function carItem(){

        return (
            <View style={styles.carContainer}>
                <ImageBackground
                    source={require('../../assets/images/ModelS.jpeg')}
                    style={styles.background}
                />
                <View style={styles.textContainer}>

                    <Text style={styles.title}>TESLA Models</Text>
                    <Text style={styles.subtitle}>Starting at $69.99</Text>
                </View>
            </View>
        );
};