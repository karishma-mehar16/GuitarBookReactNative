import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Tab, Tabs, ScrollableTab, Container, Content } from 'native-base';
import AddNewFAB from './AddNewFAB';

const AnsweredTAb = () => {
    return (
        <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Content style={{ flex: 1, }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>AnsweredTAb</Text>
                    {/* <AddNewFAB /> */}
                </View>
            </Content>
        </Container>
    )
}
const WaitingTAb = () => {
    return (
        <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Content style={{ flex: 1, }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>WaitingTAb</Text>
                    {/* <AddNewFAB /> */}
                </View>
            </Content>
        </Container>
    )
}
export default function TopNav() {
    return (
        <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="Answered">
                <AnsweredTAb />
            </Tab>
            <Tab heading="Waiting">
                <WaitingTAb />
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




const styles = StyleSheet.create({})
