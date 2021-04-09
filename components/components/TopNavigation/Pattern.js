import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, Item, CardItem, Left, Body, Right, Button, Input, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Bottomfab from '../Fab/Bottomfab';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AchordScreen from './ChordsScreens/A_Chords_Screens/AchordScreen';
import BchordScreen from './ChordsScreens/B_Chords_Screens/BchordsScreen';
import CchordScreen from './ChordsScreens/C_Chords_Screens/CchordsScreen';
import DchordScreen from './ChordsScreens/D_Chords_Screens/DchordsScreen';
import EchordScreen from './ChordsScreens/E_Chords_Screens/EcordsScreen';
import FchordScreen from './ChordsScreens/F_Chords_Screens/FchordScreen';
import GchordScreen from './ChordsScreens/G_Chords_Screens/GchordScreen';
import PatternScreenOne from './ChordsScreens/PatternScreens/PatternScreenOne';
import PatternScreenTwo from './ChordsScreens/PatternScreens/PatternScreenTwo';
import Buttons from './ChordsScreens/PatternScreens/Buttons';
import PatternScreenThree from './ChordsScreens/PatternScreens/PatternScreenThree';
import PatternScreenFour from './ChordsScreens/PatternScreens/PatternScreenFour';
import PatternScreenFive from './ChordsScreens/PatternScreens/PatternScreenFive';
import PatternScreenSix from './ChordsScreens/PatternScreens/PatternScreenSix';
import PatternScreenSeven from './ChordsScreens/PatternScreens/PatternScreenSeven';


const ChordsHome = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', }}>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('Pattern1')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    1
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('Pattern2')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    2
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('Pattern3')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    3
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('Pattern4')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    4
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('Pattern5')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    5
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('Pattern6')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    6
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('Pattern7')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    7
                                </Text>
                            </Button>
                        </View>
                    </View>


                </View>
            </Content>
            <Bottomfab />
        </Container>
    );
}

const Pattern1 = ({ navigation }) => {
    return (
        <PatternScreenOne />
    )
}
const Pattern2 = ({ navigation }) => {
    return (
        <PatternScreenTwo />
    )
}
const Pattern3 = ({ navigation }) => {
    return (
        <PatternScreenThree />
    )
}
const Pattern4 = ({ navigation }) => {
    return (
        <PatternScreenFour />
    )
}
const Pattern5 = ({ navigation }) => {
    return (
        <PatternScreenFive />
    )
}
const Pattern6 = ({ navigation }) => {
    return (
        <PatternScreenSix />
    )
}
const Pattern7 = ({ navigation }) => {
    return (
        <PatternScreenSeven />
    )
}
const ChordStack = createStackNavigator();

const StackChordStack = () => {
    return (
        <NavigationContainer independent={true}>
            <ChordStack.Navigator>
                <ChordStack.Screen name="Home" component={ChordsHome} options={{ headerShown: false }} />
                <ChordStack.Screen name="Pattern1" component={Pattern1} />
                <ChordStack.Screen name="Pattern2" component={Pattern2} />
                <ChordStack.Screen name="Pattern3" component={Pattern3} />
                <ChordStack.Screen name="Pattern4" component={Pattern4} />
                <ChordStack.Screen name="Pattern5" component={Pattern5} />
                <ChordStack.Screen name="Pattern6" component={Pattern6} />
                <ChordStack.Screen name="Pattern7" component={Pattern7} />
            </ChordStack.Navigator>
        </NavigationContainer>
    )

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


export default Chords = () => {
    return (
        <StackChordStack />
    )
}