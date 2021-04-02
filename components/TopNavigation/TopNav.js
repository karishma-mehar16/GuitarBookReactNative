import React from 'react'
import { View, Text } from 'react-native'
import { Tab, Tabs, ScrollableTab } from 'native-base';

//import { NavigationContainer } from '@react-navigation/native';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Mashupsongs from './Mashupsongs';
import Allsongs from './Allsongs';
import Chords from '../TopNavigation/Chords';
import Pattern from './Pattern';
import Bottomfab from '../Fab/Bottomfab';
//import Bottomfab from '../Fab/bottomfab';


//const Tab = createMaterialTopTabNavigator();
export default function TopNav() {
    return (
        <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="All Songs">
                <Allsongs />
            </Tab>
            <Tab heading="Mashup Songs">
                <Mashupsongs />
            </Tab>
            <Tab heading="Chords">
                <Chords />
            </Tab>
            <Tab heading="Pattern">
                <Pattern />
            </Tab>

        </Tabs>

        // <Tab.Navigator>

        //     <Tab.Screen name="All Songs" component={Allsongs}
        //     />
        //     <Tab.Screen name="Mashup Songs" component={Mashupsongs} />
        //     <Tab.Screen name="Chords" component={Chords} />
        //     <Tab.Screen name="Pattern" component={Pattern} />
        // </Tab.Navigator>
    )
}


