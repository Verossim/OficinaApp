import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Description = ({ navigation }) => <Text style={styles.textDescription}>{navigation.state.params.product.description}</Text>;

Description.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.customer
});

export default Description;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#332E2B'
    },

    textDescription: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#18A360',
        padding: 20,
    }
});
