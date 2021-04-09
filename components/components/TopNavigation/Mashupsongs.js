import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Card, Item, CardItem, Left, Body, Right, Button, Input, Icon } from 'native-base';
import { FloatingAction } from 'react-native-floating-action';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CreateMashupScreen from './CreateMashup/CreateMashupScreen';
import MashupRecommended from './MashupRecommended';




function AddSong() {
    return (
        <CreateMashupScreen />
    );
}
const HomeScreenMashupsongs = (props) => {
    const gotoAddSongStackScreen = () => {
        props.navigation.navigate('Create Mashup');
    };
    return (
        <Container>
            <Content>
                <Item style={{
                    justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20, borderRadius: 5, borderColor: 'gray', borderTopColor: 'gray', borderLeftColor: 'gray', borderRightColor: 'gray', borderRightWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, marginTop: 10,
                    paddingHorizontal: 10
                }}>
                    <Icon name="search" />
                    <Input placeholder="Search" />
                </Item>
                <Card>
                    <CardItem Header>
                        <Text style={{ fontSize: 20 }}>This data is from local json file</Text>
                    </CardItem>
                    <MashupRecommended />

                </Card>
            </Content>
            <FloatingAction onPressMain={gotoAddSongStackScreen}>
            </FloatingAction>
        </Container>
    );
}
function AddSontStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreenMashupsongs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const Stack = createStackNavigator();

export default function Mashupsongs() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Create Mashup" component={AddSong} />
                <Stack.Screen name="Tabs" component={AddSontStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

