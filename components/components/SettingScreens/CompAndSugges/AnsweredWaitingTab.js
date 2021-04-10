import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function AnsweredTab() {
    return (
        <View>
            <Text>Answered</Text>
        </View>
    );
}

function WaitingTab() {
    return (
        <View>
            <Text>Waiting</Text>
        </View>
    );
}


const Tab = createMaterialTopTabNavigator();

function AnsweredWaitTabs() {
    return (
        <Tab.Navigator
            initialRouteName="AnsweredTab"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                labelStyle: { fontSize: 12 },
                style: {},
            }}
        >
            <Tab.Screen
                name="AnsweredTab"
                component={AnsweredTab}
                options={{ tabBarLabel: 'Answered' }}
            />
            <Tab.Screen
                name="WaitingTab"
                component={WaitingTab}
                options={{ tabBarLabel: 'Waiting' }}
            />
        </Tab.Navigator>
    );
}
export default function AnsweredWaitingTab() {
    return (
        <AnsweredWaitTabs />
    );
}
