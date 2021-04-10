import React, { Component, useState } from 'react'
import { View, Text, Button, Animated } from 'react-native'
import { Container, Content, } from 'native-base';
import { StyleSheet } from 'react-native';
import Input from 'react-native-input-style';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

export class CreateMashupScreen extends Component {
    constructor() {
        super();
        this.state = {
            valueArray: [],

        }

        this.index = 1;

    }


    addMore = () => {

        let newlyAddedValue = { index: this.index }

        this.setState({ valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {

        });
    }
    deleteNote(key) {
        this.state.valueArray.splice(key);
        this.setState({ valueArray: this.state.valueArray });
    }
    render() {


        let newArray = this.state.valueArray.map((item, key) => {

            if ((key) == this.index) {
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '90%', marginBottom: 10 }}>
                            <DropDownPicker
                                items={[
                                    { label: 'Select Song', value: 'selectsongs', hidden: true },
                                    { label: 'Ghungroo', value: 'ghungroo', },
                                    { label: 'Pyaar Ki Baarish', value: 'pyarkibarish', },
                                    { label: 'Kya Karu', value: 'kyakaru', },
                                    { label: 'Teri AnkhonMein', value: 'teriankhonmai', },
                                    { label: 'Phoonk Phoonk', value: 'phoonk', },
                                    { label: 'Sunn Zara', value: 'sunzara', },
                                    { label: 'Leh Le Meri Jaan', value: 'lehlemerijaan', },
                                    { label: 'Baby Girl', value: 'babygirl', },
                                    { label: 'Hai Kya Ye Mera Kasoor ', value: 'haikyaye', },
                                    { label: 'Ishq Tera', value: 'ishqtera', },
                                    { label: 'Phir Chala', value: 'phirchala', },
                                    { label: 'Bham Bhole', value: 'bhambhole', },
                                    { label: 'Ek Baat Hai', value: 'ekbaathai', },
                                    { label: 'Pachtaoge', value: 'pachtaoge', },
                                    { label: 'Tu Zaheen Hai', value: 'tuzaheenhai', },
                                ]}
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
                        <View>
                            <TouchableOpacity style={{}} onPress={() => this.deleteNote(key)}>
                                <MaterialIcons name="delete-forever" size={40} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }
            else {
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '90%', marginBottom: 10 }}>
                            <DropDownPicker
                                items={[
                                    { label: 'Select Song', value: 'selectsongs', hidden: true },
                                    { label: 'Ghungroo', value: 'ghungroo', },
                                    { label: 'Pyaar Ki Baarish', value: 'pyarkibarish', },
                                    { label: 'Kya Karu', value: 'kyakaru', },
                                    { label: 'Teri AnkhonMein', value: 'teriankhonmai', },
                                    { label: 'Phoonk Phoonk', value: 'phoonk', },
                                    { label: 'Sunn Zara', value: 'sunzara', },
                                    { label: 'Leh Le Meri Jaan', value: 'lehlemerijaan', },
                                    { label: 'Baby Girl', value: 'babygirl', },
                                    { label: 'Hai Kya Ye Mera Kasoor ', value: 'haikyaye', },
                                    { label: 'Ishq Tera', value: 'ishqtera', },
                                    { label: 'Phir Chala', value: 'phirchala', },
                                    { label: 'Bham Bhole', value: 'bhambhole', },
                                    { label: 'Ek Baat Hai', value: 'ekbaathai', },
                                    { label: 'Pachtaoge', value: 'pachtaoge', },
                                    { label: 'Tu Zaheen Hai', value: 'tuzaheenhai', },
                                ]}
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
                        <View>
                            <TouchableOpacity style={{}} onPress={() => this.deleteNote(key)}>
                                <MaterialIcons name="delete-forever" size={40} color="red" />
                            </TouchableOpacity>

                        </View>
                    </View>
                );
            }
        });
        return (

            <Container>
                <View style={styles.container}>
                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>

                        <View style={{ flex: 1, padding: 4 }}>
                            <View style={{ width: '90%', marginBottom: 10 }}>
                                <DropDownPicker
                                    items={[
                                        { label: 'Select Song', value: 'selectsongs', hidden: true },
                                        { label: 'Ghungroo', value: 'ghungroo', },
                                        { label: 'Pyaar Ki Baarish', value: 'pyarkibarish', },
                                        { label: 'Kya Karu', value: 'kyakaru', },
                                        { label: 'Teri AnkhonMein', value: 'teriankhonmai', },
                                        { label: 'Phoonk Phoonk', value: 'phoonk', },
                                        { label: 'Sunn Zara', value: 'sunzara', },
                                        { label: 'Leh Le Meri Jaan', value: 'lehlemerijaan', },
                                        { label: 'Baby Girl', value: 'babygirl', },
                                        { label: 'Hai Kya Ye Mera Kasoor ', value: 'haikyaye', },
                                        { label: 'Ishq Tera', value: 'ishqtera', },
                                        { label: 'Phir Chala', value: 'phirchala', },
                                        { label: 'Bham Bhole', value: 'bhambhole', },
                                        { label: 'Ek Baat Hai', value: 'ekbaathai', },
                                        { label: 'Pachtaoge', value: 'pachtaoge', },
                                        { label: 'Tu Zaheen Hai', value: 'tuzaheenhai', },
                                    ]}
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
                            {
                                newArray
                            }
                        </View>

                        <View>
                            <TouchableOpacity style={{}} onPress={this.addMore} >
                                <Ionicons name="add-circle" size={40} color="green" style={{}} />
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
