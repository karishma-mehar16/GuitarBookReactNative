import React, { Component } from 'react'
import { Text, View, Image, FlatList, StyleSheet } from 'react-native'
import { Card, CardItem, Icon, Right, Thumbnail, Button, } from 'native-base';

class RecommendedSongs extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({ item }) => {
        return (

            <CardItem key={item.id}>
                <View>
                    <View>
                        <Thumbnail style={{ borderRadius: 0 }} source={{ uri: this.props.ImgUri }} />
                    </View>
                </View>
                <Right style={{ flex: 1, alignItems: 'flex-start', paddingLeft: 10, }}>
                    <Text style={{ fontSize: 17 }}>{item.title}</Text>
                    <Text style={{ fontSize: 12, color: 'gray', }}> {item.artist}</Text>
                </Right>
                <Text style={{ alignItems: 'flex-end', }}>
                    <Text style={{ backgroundColor: '#fff', }} onPress={() => alert("This is Card Header")}>View</Text>
                    <Icon name="arrow-forward" />
                </Text>
            </CardItem>
        )
    }

    componentDidMount() {
        const url = 'http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.songs
                })
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                // extraData={selectedId}
                />
            </View>

            // <CardItem>
            //     <View>
            //         <Thumbnail style={{ borderRadius: 0 }} source={{ uri: this.props.ImgUri }} />
            //     </View>
            //     <Right style={{ flex: 1, alignItems: 'flex-start', paddingLeft: 10, }}>
            //         <Text style={{ fontSize: 17 }}>{this.props.SongName}</Text>
            //         <Text style={{ fontSize: 12, color: 'gray', }}> {this.props.SingerName}</Text>
            //     </Right>
            //     <Text style={{ alignItems: 'flex-end', }}>
            //         <Text style={{ backgroundColor: '#fff', }} onPress={() => alert("This is Card Header")}>View</Text>
            //         <Icon name="arrow-forward" />
            //     </Text>
            // </CardItem>


        )
    }
}

export default RecommendedSongs;
