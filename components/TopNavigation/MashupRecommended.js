import React, { Component } from 'react'
import { Text, View, Image, FlatList, StyleSheet } from 'react-native'
import { Card, CardItem, Icon, Right, Thumbnail, Button, Body, Left } from 'native-base';
import data from '../../Data/data.json'
const newdata = data.map((data) => {
    return (
        <CardItem>
            <View>
                <Thumbnail style={{ borderRadius: 0 }} source={{ uri: data.ImgUri }} />
            </View>

            <Body style={{ flex: 1, alignItems: 'flex-start', flexWrap: 'wrap', width: 250, paddingLeft: 10, }}>
                <Text style={{ fontSize: 17 }}>{data.name}</Text>
                <Text style={{ fontSize: 12, color: 'gray', }}>{data.desc}</Text>
            </Body>
            <Left style={{}}>
                <Text style={{ backgroundColor: '#fff', }} onPress={() => alert("This is Card Header")}>View</Text>
                <Icon name="arrow-forward" />
            </Left>
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

export default MashupRecommended
