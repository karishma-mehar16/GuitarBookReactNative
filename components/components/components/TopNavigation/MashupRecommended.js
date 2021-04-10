import React, { Component } from 'react'
import { Text, View, Image, FlatList, StyleSheet } from 'react-native'
import { Card, CardItem, Icon, Right, Thumbnail, Button, Body, Left } from 'native-base';
import data from '../../Data/data.json'
import { createStackNavigator } from '@react-navigation/stack';
const newdata = data.map((data, { navigation }) => {
    return (
        <CardItem>
            <View>
                <Thumbnail style={{ borderRadius: 5 }} source={{ uri: data.ImgUri }} />
            </View>

            <Body style={{ flex: 1, alignItems: 'flex-start', flexWrap: 'wrap', width: 250, paddingLeft: 10, }}>
                <Text style={{ fontSize: 17 }}>{data.name}</Text>
                <Text style={{ fontSize: 12, color: 'gray', }}>{data.desc}</Text>
            </Body>

        </CardItem>
    )
}
)
export class MashupRecommended extends Component {
    render() {
        return (
            <View>
                <Text>{newdata}</Text>
            </View>
        )
    }
}

// const MashupDetails = ({ navigation }) => {
//     return (
//         <View style={{ justifyContent: 'center' }}>
//             <Text>Hi</Text>
//         </View>
//     )
// }
// const MashupStack = createStackNavigator();

// const MashupStackContainer = () => {
//     return (
//         <MashupStack.Navigator>
//             <MashupStack.Screen name='Mashup Details' component={MashupDetails} />
//         </MashupStack.Navigator>
//     )
// }


export default MashupRecommended
