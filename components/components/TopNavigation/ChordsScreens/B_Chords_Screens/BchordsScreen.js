import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Container, Content, Button, } from 'native-base';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function BChord() {
    return (
        <Container>
            <Content style={{ padding: 15 }}>
                <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 5, borderWidth: 1, borderColor: 'gray', shadowColor: 'lightgray', }}>
                    <Image style={{ width: '100%', height: 200, resizeMode: 'stretch' }} source={{ uri: 'https://fachordscdn-16d90.kxcdn.com/static/fachords3/images/guitar-strumming-patterns/strumming-pattern-6.jpg' }} />
                </View>
            </Content>
        </Container>

    );
}

function BMinorhChord() {
    return (
        <Container>
            <Content style={{ padding: 15 }}>
                <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 5, borderWidth: 1, borderColor: 'gray', shadowColor: 'lightgray', }}>
                    <Image style={{ width: '100%', height: 200, resizeMode: 'stretch' }} source={{ uri: 'https://fachordscdn-16d90.kxcdn.com/static/fachords3/images/guitar-strumming-patterns/strumming-pattern-6.jpg' }} />
                </View>
            </Content>
        </Container>

    );
}
function BMajorChord() {
    return (
        <Container>
            <Content style={{ padding: 15 }}>
                <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 5, borderWidth: 1, borderColor: 'gray', shadowColor: 'lightgray', }}>
                    <Image style={{ width: '100%', height: 200, resizeMode: 'stretch' }} source={{ uri: 'https://fachordscdn-16d90.kxcdn.com/static/fachords3/images/guitar-strumming-patterns/strumming-pattern-6.jpg' }} />
                </View>
            </Content>
        </Container>

    );
}

const BchordHomeScreen = (props) => {

    const gotoBScreen = () => {
        props.navigation.navigate('B');
    };
    const gotoBMinorScreen = () => {
        props.navigation.navigate('Bminor');
    };
    const gotoBMajorScreen = () => {
        props.navigation.navigate('Bmajor');
    };
    return (
        <Container>

            <Content>
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', }}>
                        <View style={styles.card}>
                            <Button onPress={gotoBScreen}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    B
                            </Text>
                            </Button>
                        </View>

                        <View style={styles.card}>
                            <Button onPress={gotoBMinorScreen}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    Bminor
                            </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={gotoBMajorScreen}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    bmajor
                            </Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Content>
        </Container>
    )
}
function BChordStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={BchordHomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const Stack = createStackNavigator();

export default function BchordScreen() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="B" component={BChord} />
                <Stack.Screen name="Bminor" component={BMinorhChord} />
                <Stack.Screen name="Bmajor" component={BMajorChord} />
                <Stack.Screen name="Tabs" component={BChordStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}




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

