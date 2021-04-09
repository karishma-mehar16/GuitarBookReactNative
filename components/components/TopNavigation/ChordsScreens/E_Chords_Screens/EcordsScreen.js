import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Content, Button, } from 'native-base';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

const EchordScreen = () => {
    return (
        <Container>

            <Content>
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', }}>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    E
                            </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    Eminor
                            </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    Emajor
                            </Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Content>
        </Container>
    )
}

export default EchordScreen




const styles = StyleSheet.create({
    card: {
        width: '50%'
    },
    button: {
        width: '70%',
        height: 120,
        margin: 20,
        marginBottom: 0,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        color: 'white',
    },
    background: {
        // position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 120,

        borderRadius: 5,
        color: '#fff',
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

