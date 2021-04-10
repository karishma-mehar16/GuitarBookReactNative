import React, { Component, useEffect, useState } from 'react'
import { Text, View, Image, FlatList, StyleSheet } from 'react-native'
import { Card, CardItem, Icon, Right, Thumbnail, Button, Item, Input, } from 'native-base';
import { AntDesign, Foundation } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';
import ViewScreen from './ViewScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';



const url = 'http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json'

const RecommendedSongs1 = ({ navigation }, props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json')
            .then((response) => response.json())
            .then((json) => setData(json.songs))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <View style={{ flex: 1 }}>

            <Item style={{
                justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20, borderRadius: 5, borderColor: 'gray', borderTopColor: 'gray', borderLeftColor: 'gray', borderRightColor: 'gray', borderRightWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, marginTop: 10,
                paddingHorizontal: 10
            }}>
                <Icon name="search" />
                <Input placeholder="Search" />
            </Item>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <CardItem>
                            <View>
                                <Thumbnail style={{ borderRadius: 5 }} source={{ uri: 'https://picsum.photos/200/301' }} />
                            </View>
                            <Right style={{ flex: 1, alignItems: 'flex-start', paddingLeft: 10, }}>
                                <Text style={{ fontSize: 17 }}>{item.title}</Text>
                                <Text style={{ fontSize: 12, color: 'gray', }}>{item.artist}</Text>
                            </Right>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Song Details')}>
                                <Text style={{ backgroundColor: '#fff', }} >View</Text>
                                <Icon name="arrow-forward" />
                            </TouchableOpacity>
                        </CardItem>

                    )}
                />
            )}

        </View>
    )
}
const MashupDetails = ({ navigation }) => {
    return (
        <ViewScreen />
    )
}
const MashupStack = createStackNavigator();

const MashupStackContainer = (item) => {
    return (
        <MashupStack.Navigator>
            <MashupStack.Screen name='Home' component={RecommendedSongs1} options={{ headerShown: false }} />
            <MashupStack.Screen name="Song Details" component={MashupDetails} options={{
                // headerTitle: <View><Text>{item.title}</Text></View>,
                headerRight: () => (
                    <Text style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, letterSpacing: 10 }}>
                        <Foundation name="page-edit" size={30} color="black" />
                        <AntDesign name="delete" size={30} color="black" />
                    </Text>
                ),
            }} />
        </MashupStack.Navigator>
    )
}
export default RecommendedSongs = () => {
    return (
        <MashupStackContainer />
    )
}





// class RecommendedSongs extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             dataSource: []
//         }
//     }

//     renderItem = ({ item, navigation }) => {
//         return (

//             <CardItem key={item.id}>
//                 <View>
//                     <View>
//                         <Thumbnail style={{ borderRadius: 0 }} source={{ uri: this.props.ImgUri }} />
//                     </View>
//                 </View>
//                 <Right style={{ flex: 1, alignItems: 'flex-start', paddingLeft: 10, }}>
//                     <Text style={{ fontSize: 17 }}>{item.title}</Text>
//                     <Text style={{ fontSize: 12, color: 'gray', }}> {item.artist}</Text>
//                 </Right>
//                 <Text style={{ alignItems: 'flex-end', }}>
//                     <Text style={{ backgroundColor: '#fff', }} onPress={() => this.props.navigation.navigate('Mashup Details')}>View</Text>
//                     <Icon name="arrow-forward" />
//                 </Text>
//             </CardItem>
//         )
//     }

//     componentDidMount() {
//         const url = 'http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json'
//         fetch(url)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     dataSource: responseJson.songs
//                 })
//             }).catch((error) => {
//                 console.log(error)
//             })
//     }
//     render() {
//         return (
//             <View>
//                 <FlatList
//                     data={this.state.dataSource}
//                     renderItem={this.renderItem}
//                     keyExtractor={(item) => item.id}
//                 // extraData={selectedId}
//                 />
//             </View>

//             // <CardItem>
//             //     <View>
//             //         <Thumbnail style={{ borderRadius: 0 }} source={{ uri: this.props.ImgUri }} />
//             //     </View>
//             //     <Right style={{ flex: 1, alignItems: 'flex-start', paddingLeft: 10, }}>
//             //         <Text style={{ fontSize: 17 }}>{this.props.SongName}</Text>
//             //         <Text style={{ fontSize: 12, color: 'gray', }}> {this.props.SingerName}</Text>
//             //     </Right>
//             //     <Text style={{ alignItems: 'flex-end', }}>
//             //         <Text style={{ backgroundColor: '#fff', }} onPress={() => alert("This is Card Header")}>View</Text>
//             //         <Icon name="arrow-forward" />
//             //     </Text>
//             // </CardItem>


//         )
//     }
// }
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