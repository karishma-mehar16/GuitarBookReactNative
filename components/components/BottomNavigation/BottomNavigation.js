import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import TopNav from '../TopNavigation/TopNav';
import { Icon } from 'native-base';
import SettingsScreen from '../BottomNavigation/SettingsScreen'
import Tools from '../Tools/Tools';
function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TopNav />
        </View>
    );
}

function Profile() {
    return (
        <Tools />

    );
}

function Setting() {
    return (
        <SettingsScreen />

    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Tools"
                component={Profile}
                options={{
                    tabBarLabel: 'Tool',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='tool' color={color} size={size} />
                        // <Feather name="tool" size={24} color="black" />
                    ),
                }}
            />

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='home' color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Setting}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='settings' color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default function BottomNavigation() {
    return (
        <MyTabs />
    );
}
