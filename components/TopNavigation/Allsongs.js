import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Content, Card, Item, CardItem, Left, Body, Right, Button, Input, Icon, Fab } from 'native-base';
import RecommendedSongs from './Recommended';
import { FloatingAction } from 'react-native-floating-action';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddSongScreen from './AddSongScreen';
function AddSong() {
    return (
        <AddSongScreen />
    );
}
const HomeScreen = (props) => {

    const gotoAddSongStackScreen = () => {
        props.navigation.navigate('Add Songs');
    };
    return (
        <View style={{ flex: 1 }}>

            <RecommendedSongs ImgUri={('https://picsum.photos/200/301')} />
            <FloatingAction onPressMain={gotoAddSongStackScreen}>
            </FloatingAction>
        </View>
    )
}
function AddSontStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const Stack = createStackNavigator();

export default function Allsongs() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Add Songs" component={AddSong} />
                <Stack.Screen name="Tabs" component={AddSontStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

