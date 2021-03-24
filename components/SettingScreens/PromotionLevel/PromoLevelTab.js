import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LevelOneTab from './LevelTabsScreen/LevelOneTab';
import LevelTwoTab from './LevelTabsScreen/LevelTwoTab';
import LevelThreeTab from './LevelTabsScreen/LevelThreeTab';

function Level1() {
    return (
        <LevelOneTab />
    );
}

function Level2() {
    return (
        <LevelTwoTab />
    );
}

function Level3() {
    return (
        <LevelThreeTab />
    );
}

const Tab = createMaterialTopTabNavigator();

function LevelTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Level1"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                labelStyle: { fontSize: 12 },
                style: {},
            }}
        >
            <Tab.Screen
                name="Level 1"
                component={Level1}
                options={{ tabBarLabel: 'Level 1' }}
            />
            <Tab.Screen
                name="Level 2"
                component={Level2}
                options={{ tabBarLabel: 'Level 2' }}
            />
            <Tab.Screen
                name="Level 3"
                component={Level3}
                options={{ tabBarLabel: 'Level 3' }}
            />
        </Tab.Navigator>
    );
}
export default function PromoLevelTab() {
    return (
        <LevelTabs />
    );
}
