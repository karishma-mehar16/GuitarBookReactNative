import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, List, Text, } from 'native-base';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView } from 'react-native-safe-area-context';
import AnsweredWaitingTab from './AnsweredWaitingTab';
import AddNewScree from './AddNewScree';
import { FloatingAction } from 'react-native-floating-action';
import { NavigationContainer } from '@react-navigation/native';

const AddItem = () => {
    return (
        <AddNewScree />
    )
}

const HomeCompSugg = (props, { navigation }) => {


    const gotoAddSongStackScreen = () => {
        props.navigation.navigate('Add Item');
    };
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 2 }}>
            <Content >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <AnsweredWaitingTab />
                    </View>

                </View>
            </Content>
            <FloatingAction onPressMain={gotoAddSongStackScreen}>
            </FloatingAction>
        </SafeAreaView>

    )
}


// const Stack = new createStackNavigator()

// const AppCompSugg = ({ navigation }) => {
//     return (
//         <Stack.Navigator >
//             <Stack.Screen name="HomeCompSugg" component={HomeCompSugg} options={{ headerShown: false }} />
//         </Stack.Navigator>
//     )
// }

function AddSontStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeCompSugg} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const Stack = createStackNavigator();

export default function ComplaintsSuggestion() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Add Item" component={AddItem} />
                <Stack.Screen name="Tabs" component={AddSontStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
// export default ComplaintsSuggestion = () => {
//     return (
//         <AppCompSugg />
//     )
// }


const styles = StyleSheet.create({
    screenContainer: {
        paddingHorizontal: 10
    },
    background: {
        height: 50,
        marginTop: 10,
        margin: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 25,
        color: 'white',

    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginRight: 10,
    },
});


