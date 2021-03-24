import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, List, Button } from 'native-base';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import TunerScreen from '../Tools/AllToolScreen/TunerScreen'
import MetroMonScreen from './AllToolScreen/MetroMonScreen';
import SoundRecorderScreen from './AllToolScreen/SoundRecorderScreen';
const HomeTunerScreen = ({ navigation }) => {
    return (
        <Container >
            <Content >
                <View style={{ paddingTop: 50 }}>
                    <View >
                        <Button onPress={() => navigation.navigate('Tuner')}
                            style={styles.button}>
                            <LinearGradient
                                colors={['#4c669f', '#3b5998', '#192f6a']}
                                style={styles.background}>
                                <MaterialCommunityIcons name="tune-vertical" size={30} color="white" />
                                <Text style={styles.text}>Tuner</Text>
                            </LinearGradient>
                        </Button>
                    </View>
                    <View>
                        <Button onPress={() => navigation.navigate('Metromono')}
                            style={styles.button}>
                            <LinearGradient
                                colors={['#4c669f', '#3b5998', '#192f6a']}
                                style={styles.background}>
                                <MaterialCommunityIcons name="metronome" size={30} color="white" />
                                <Text style={styles.text}>Metromono</Text>
                            </LinearGradient>
                        </Button>
                    </View>
                    <View>
                        <Button onPress={() => navigation.navigate('Sound Recorder')}
                            style={styles.button}>
                            <LinearGradient
                                colors={['#4c669f', '#3b5998', '#192f6a']}
                                style={styles.background}>
                                <SimpleLineIcons name="camrecorder" size={30} color="white" />
                                <Text style={styles.text}>Sound Recorder</Text>
                            </LinearGradient>
                        </Button>
                    </View>
                </View>
            </Content>
        </Container>
    )
}

const TunerNav = ({ navigation }) => {
    return (
        <TunerScreen />
    );
}
const MetromonoNav = ({ navigation }) => {
    return (
        <MetroMonScreen />
    );
}
const SoundRecorder = ({ navigation }) => {
    return (
        <SoundRecorderScreen />
    );
}
const Stack = createStackNavigator()

const TunerApp = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeTuner' component={HomeTunerScreen} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='Tuner' component={TunerNav} ></Stack.Screen>
            <Stack.Screen name='Metromono' component={MetromonoNav} ></Stack.Screen>
            <Stack.Screen name='Sound Recorder' component={SoundRecorder} ></Stack.Screen>
        </Stack.Navigator>
    );
}

export default Tools = () => {
    return (
        <TunerApp />
    );
}

const styles = StyleSheet.create({
    button: {
        height: 120,
        margin: 20,
        marginBottom: 0,
        borderRadius: 5,
    },
    background: {
        // position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 5,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',

    },
});

