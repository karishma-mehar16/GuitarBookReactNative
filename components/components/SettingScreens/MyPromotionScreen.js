import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, List, Text, } from 'native-base';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import PromoLevelTab from './PromotionLevel/PromoLevelTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import BonusRecordScreen from './PromotionLevel/BonusRecordScreen';
import RedeemHistoryScreen from './PromotionLevel/RedeemHistoryScreen';



const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={() => alert("This is Card Header")} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);
const HomeMyPromotionScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 2 }}>
            <Content >
                <View style={{ flex: 1 }}>
                    <View style={styles.box}>
                        <LinearGradient
                            colors={['#4c669f', '#3b5998', '#192f6a']}
                            style={styles.background}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.text} >0.00 Points</Text>
                                <View style={styles.screenContainer}>
                                    <AppButton title="Redeem Bonus" size="sm" />
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20 }}>
                            <View style={styles.screenContainer}>
                                <TouchableOpacity onPress={() => alert("This is Card Header")} >
                                    <Text>Bonus History</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.screenContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate('Redeem History')} >
                                    <Text>Redeem History</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <PromoLevelTab />
                    </View>
                </View>
            </Content>
        </SafeAreaView>

    )
}

const RedeemHistory = ({ navigation }) => {
    return (
        <View>
            <Text>Hi</Text>
        </View>
    )
}
const Stack = new createStackNavigator()

const AppPromotionScreen = ({ navigation }) => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="HomeMyPromotionScreen" component={HomeMyPromotionScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Redeem History" component={RedeemHistory} />
        </Stack.Navigator>
    )
}

export default MyPromotionScreen = () => {
    return (
        <AppPromotionScreen />
    )
}


const styles = StyleSheet.create({
    screenContainer: {
        // flex: 1,
        // justifyContent: "center",
        paddingHorizontal: 10
    },
    box: {
        height: 75,
        margin: 20,
        marginBottom: 0,
        borderRadius: 5,
    },
    background: {
        // position: 'absolute',
        left: 0,
        right: 0,
        // top: 0,
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
        marginRight: 10,
        flex: 1,
        justifyContent: "center",
        // fontWeight: "bold",
    },

    appButtonContainer: {
        // elevation: 8,
        backgroundColor: "transparent",
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 13,
        borderWidth: 1,
        borderColor: 'white'
    },
    appButtonText: {
        fontSize: 20,
        color: "#fff",
        // fontWeight: "bold",
        alignSelf: "center",
    }
});


