import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Container, Content, Button, } from 'native-base';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function AChord() {
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
function AHashChord() {
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
function AMinorhChord() {
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
function AHashMajorChord() {
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

const AchordHomeScreen = (props) => {

    const gotoAScreen = () => {
        props.navigation.navigate('A');
    };
    const gotoAHashScreen = () => {
        props.navigation.navigate('AHash');
    };
    const gotoAMinorScreen = () => {
        props.navigation.navigate('A#major');
    };
    const gotoAHashMajorScreen = () => {
        props.navigation.navigate('A#major');
    };
    return (
        <Container>

            <Content>
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', }}>
                        <View style={styles.card}>
                            <Button onPress={gotoAScreen}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    A
                            </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={gotoAHashScreen}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    A#
                            </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={gotoAMinorScreen}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    Aminor
                            </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={gotoAHashMajorScreen}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    A#major
                            </Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Content>
        </Container>
    )
}
function AChordStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={AchordHomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const Stack = createStackNavigator();

export default function AchordScreen() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="A" component={AChord} />
                <Stack.Screen name="AHash" component={AHashChord} />
                <Stack.Screen name="Am" component={AMinorhChord} />
                <Stack.Screen name="A#major" component={AHashMajorChord} />
                <Stack.Screen name="Tabs" component={AChordStack} options={{ headerShown: false }} />
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

