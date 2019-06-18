import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  
    static navigationOptions = {
        title: 'Oficina App'
    };

    state = {
        proposals: [],
    };

    componentDidMount() {
        this.loadBudgets();
    }

    loadBudgets = async () => {
        const response = await api.get('/db');
        const { proposals } = response.data;

        this.setState({ proposals });
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
           
        
            <Text style={styles.productCustomer}>{item.customer}</Text>
            <Text style={styles.productValue}>{item.value}</Text>
            <Text style={styles.productSeller}>{item.seller}</Text>

            <TouchableOpacity style={styles.productButton} onPress={() => {
                this.props.navigation.navigate('Description', { product: item });
            }}>
                <Text style={styles.productButtonText}>Descrição</Text>
            </TouchableOpacity>

        </View>
    );

    render() {
        return( 
            <View style={StyleSheet.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.proposals}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
                
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#332E2B'
    },

    list: {
        padding: 10,
    },

    productContainer: {
        backgroundColor: '#18A360',
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 40,
        padding: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    productCustomer: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },

    productValue: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 5,
        lineHeight: 24,
    },

    productSeller: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 5,
        lineHeight: 24,
    },

    productButton: {
        height: 42,
        width: '100%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },

    productButtonText: {
        fontSize: 16,
        color: '#18A360',
        fontWeight: 'bold'
    }
});