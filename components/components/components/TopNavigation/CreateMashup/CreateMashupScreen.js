import React, { Component, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { Container, Content, } from 'native-base';
import { StyleSheet } from 'react-native';
import Input from 'react-native-input-style';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';



export class CreateMashupScreen extends Component {

    render() {

        return (

            this.state = {
                MeshuSong: 'Select-Songs'
            },
            <Container>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', marginBottom: 10 }}>
                        <View style={{ width: '70%' }}>
                            <DropDownPicker
                                items={[
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                ]}
                                multiple={true}
                                dropDownMaxHeight={500}
                                defaultValue={this.state.MeshuSong}
                                containerStyle={{ height: 40 }}
                                style={{ backgroundColor: '#fafafa', }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa', flex: 1 }}
                                onChangeItem={item => this.setState({
                                    MeshuSong: item.value
                                })}
                                placeholder={this.state.MeshuSong}
                                searchable={true}
                                searchablePlaceholder="Search for Songs"
                            />
                        </View>
                        <TouchableOpacity style={{ height: 38, width: 110, backgroundColor: '#3b5998', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} >
                            <Text>Add Song</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', marginBottom: 10 }}>
                        <View style={{ width: '70%' }}>
                            <DropDownPicker
                                items={[
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                ]}
                                multiple={true}
                                dropDownMaxHeight={500}
                                defaultValue={this.state.MeshuSong}
                                containerStyle={{ height: 40 }}
                                style={{ backgroundColor: '#fafafa', }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa', flex: 1 }}
                                onChangeItem={item => this.setState({
                                    MeshuSong: item.value
                                })}
                                placeholder={this.state.MeshuSong}
                                searchable={true}
                                searchablePlaceholder="Search for Songs"
                            />
                        </View>
                        <View style={{ width: '30%', marginLeft: 2 }}>
                            <TouchableOpacity style={{ height: 38, width: 110, backgroundColor: 'red', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} >
                                <Text>Remove Song</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', marginBottom: 10 }}>
                        <View style={{ width: '70%' }}>
                            <DropDownPicker
                                items={[
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'Select Songs', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                ]}
                                multiple={true}
                                dropDownMaxHeight={500}
                                defaultValue={this.state.MeshuSong}
                                containerStyle={{ height: 40 }}
                                style={{ backgroundColor: '#fafafa', }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa', flex: 1 }}
                                onChangeItem={item => this.setState({
                                    MeshuSong: item.value
                                })}
                                placeholder={this.state.MeshuSong}
                                searchable={true}
                                searchablePlaceholder="Search for Songs"
                            />
                        </View>
                        <View style={{ width: '30%', marginLeft: 2 }}>
                            <TouchableOpacity style={{ height: 38, width: 110, backgroundColor: 'red', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} >
                                <Text>Remove Song</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Container>

        )
    }
}

export default CreateMashupScreen


// const YOUR_InputChangeHandler = () => {

// }
// const CreateMashupScreen = () => {

//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([]);
//     let controller;

//     return (
//         <Container style={{ flex: 1 }}>
//             <Content style={{ flex: 1 }}>


//                 <View style={styles.container}>

//                     <DropDownPicker
//                         items={[
//                             { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
//                             { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
//                             { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
//                             { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, },
//                             { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
//                             { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
//                         ] }
//                         controller={instance => controller = instance}
//                         onChangeList={(items, callback) => {
//                             new Promise((resolve, reject) => resolve(setItems(items)))
//                                 .then(() => callback())
//                                 .catch(() => { });
//                         }}

//                         defaultValue={value}
//                         onChangeItem={item => setValue(item.value)}
//                         searchable={true}
//                         searchablePlaceholder="Search for an item"
//                         searchablePlaceholderTextColor="gray"

//                     />

//                 </View>
//             </Content>
//         </Container >
//     )
// }

// export default CreateMashupScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

});
