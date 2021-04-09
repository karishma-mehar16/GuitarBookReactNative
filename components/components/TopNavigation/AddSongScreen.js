import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Container, Content, Label, Left, ListItem, List, Form, Input } from 'native-base';
import { StyleSheet } from 'react-native';
//import Input from 'react-native-input-style';
import MultiSelect from 'react-native-multiple-select';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import LyricsCustomise from './LyricsCustomise';
const YOUR_InputChangeHandler = () => {

}


const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
}, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
}, {
    id: '16hbajsabsd',
    name: 'Calabar'
}, {
    id: 'nahs75a5sg',
    name: 'Lagos'
}, {
    id: '667atsas',
    name: 'Maiduguri'
}, {
    id: 'hsyasajs',
    name: 'Anambra'
}, {
    id: 'djsjudksjd',
    name: 'Benue'
}, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
}, {
    id: 'suudydjsjd',
    name: 'Abuja'
}
];

class AddMashupSong extends Component {

    state = {
        selectedItems: []
    };


    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    render() {
        const { selectedItems } = this.state;
        this.state = {
            MeshuSong: 'Select Songs'
        }
        return (
            <Container>
                <Content >
                    <View style={styles.container}>
                        <View style={styles.list}>
                            <Label style={styles.label}>Song Name</Label>
                            <Input
                                style={styles.input}
                            />
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <DropDownPicker
                                items={[
                                    { label: 'Select Songs', value: 'selectsongs', hidden: true },
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
                                multiple={true}
                                dropDownMaxHeight={250}
                                defaultValue={this.state.MeshuSong}
                                style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa', }}
                                onChangeItem={item => this.setState({
                                    MeshuSong: item.value
                                })}
                                placeholder={this.state.MeshuSong}
                                searchable={true}
                                searchablePlaceholder="Search for Songs"
                            />
                        </View>
                        <View style={styles.list}>
                            <Label style={styles.label}>Song Key</Label>
                            <Input
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.list}>
                            <Label style={styles.label}>Song Strumming</Label>
                            <Input
                                style={styles.input}
                            />
                        </View>


                        <View style={{ marginBottom: 20 }}>
                            <MultiSelect
                                hideTags
                                items={items}
                                uniqueKey="id"
                                ref={(component) => { this.multiSelect = component }}
                                onSelectedItemsChange={this.onSelectedItemsChange}
                                selectedItems={selectedItems}
                                selectText="Select Chord"
                                searchInputPlaceholderText="Search Chords..."
                                onChangeInput={(text) => console.log(text)}
                                tagRemoveIconColor="red"
                                tagBorderColor="#000"
                                tagTextColor="black"
                                selectedItemTextColor="green"
                                selectedItemIconColor="#000"
                                itemTextColor="#000"
                                displayKey="name"
                                searchInputStyle={{ color: '#CCC' }}
                                submitButtonColor="lightblue"
                                submitButtonText="Submit"
                                styleMainWrapper={{ paddingHorizontal: 8 }}
                            />
                            <View>
                                {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
                            </View>
                        </View>
                        <LyricsCustomise />

                    </View>

                </Content>
            </Container>

        );
    }
}

export default AddMashupSong



const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    label: {
        paddingTop: 10,
        paddingHorizontal: 10,
        fontSize: 15,
        color: 'gray',

    },
    list: {
        marginBottom: 20,
        paddingHorizontal: 5
    },
    input: {
        height: 25,
        borderWidth: 0.98,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#C0C0C1'
    },
});
