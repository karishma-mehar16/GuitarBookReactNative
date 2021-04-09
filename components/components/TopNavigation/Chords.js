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


const ChordsHome = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', }}>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('A Chords')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    A
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('B Chords')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    B
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('C Chords')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    C
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('D Chords')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    D
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('E Chords')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    E
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('F Chords')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    F
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.card}>
                            <Button onPress={() => navigation.navigate('G Chords')}
                                style={styles.button}>
                                <Text style={styles.text}>
                                    G
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

const AChords = ({ navigation }) => {
    return (
        <AchordScreen />
    )
}
const BChords = ({ navigation }) => {
    return (
        <BchordScreen />
    )
}
const CChords = ({ navigation }) => {
    return (
        <CchordScreen />
    )
}
const DChords = ({ navigation }) => {
    return (
        <DchordScreen />
    )
}
const EChords = ({ navigation }) => {
    return (
        <EchordScreen />
    )
}
const FChords = ({ navigation }) => {
    return (
        <FchordScreen />
    )
}
const GChords = ({ navigation }) => {
    return (
        <GchordScreen />
    )
}
const ChordStack = createStackNavigator();

const StackChordStack = () => {
    return (
        <NavigationContainer independent={true}>
            <ChordStack.Navigator>
                <ChordStack.Screen name="Home" component={ChordsHome} options={{ headerShown: false }} />
                <ChordStack.Screen name="A Chords" component={AChords} />
                <ChordStack.Screen name="B Chords" component={BChords} />
                <ChordStack.Screen name="C Chords" component={CChords} />
                <ChordStack.Screen name="D Chords" component={DChords} />
                <ChordStack.Screen name="E Chords" component={EChords} />
                <ChordStack.Screen name="F Chords" component={FChords} />
                <ChordStack.Screen name="G Chords" component={GChords} />
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