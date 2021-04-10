import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Container, Content, } from 'native-base';
import { StyleSheet } from 'react-native';
import Input from 'react-native-input-style';
import MultiSelect from 'react-native-multiple-select';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
const YOUR_InputChangeHandler = () => {

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

});


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
            MeshuSong: 'Select-Songs'
        }
        return (
            <Container>
                <Content >
                    <View style={styles.container}>
                        <Input

                            label="Song Name"
                            onInputChange={YOUR_InputChangeHandler}
                        />
                        <Input

                            label="Song Key"
                            onInputChange={YOUR_InputChangeHandler}


                        />
                        <Input

                            label="Song Strumming"
                            onInputChange={YOUR_InputChangeHandler}


                        />
                        <View style={{ marginHorizontal: 10 }}>
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
                                dropDownMaxHeight={250}
                                defaultValue={this.state.MeshuSong}
                                containerStyle={{ height: 30 }}
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
                        <View style={{ marginHorizontal: 10 }}>
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
                                altFontFamily="ProximaNova-Light"
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="#CCC"
                                tagTextColor="#CCC"
                                selectedItemTextColor="#CCC"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                searchInputStyle={{ color: '#CCC' }}
                                submitButtonColor="#CCC"
                                submitButtonText="Submit"

                            />
                            <View>
                                {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
                            </View>
                        </View>

                        <Input

                            label="Lyrics"
                            onInputChange={YOUR_InputChangeHandler}


                        />

                    </View>

                </Content>
            </Container>

        );
    }
}

export default AddMashupSong