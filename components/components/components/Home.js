import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TopNav from './components/TopNavigation/TopNav';

function TrendingScreen({ navigation }) {

    return (

        <Container>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Trending</Text>
            </View>
        </Container>
    );
}

export default function Home() {
    return (
        <TrendingScreen />
    );
}
