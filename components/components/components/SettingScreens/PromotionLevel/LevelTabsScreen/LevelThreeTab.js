import * as React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, List, Text, } from 'native-base';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

const TotalPeople = ({ onPress, title }) => (
    <Text style={styles.titleMain}>{title}</Text>
);
const TotalPoints = ({ onPress, title }) => (
    <Text>{title}</Text>
);
const LevelThreeTab = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
            <Content >
                <View style={{ flex: 1, }}>
                    <View style={styles.mainContainer}>
                        <View style={styles.total}>
                            <TotalPeople title="Total People" size="sm" />
                            <TotalPoints title="0" size="sm" />
                        </View>
                        <View style={styles.total}>
                            <TotalPeople title="Contribution (Rupees)" size="sm" />
                            <TotalPoints title="00 Points" size="sm" />
                        </View>
                    </View>
                </View>
            </Content>
        </SafeAreaView>
    )
}

export default LevelThreeTab

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    total: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleMain: {
        fontWeight: "bold",
        fontSize: 15
    }
})
