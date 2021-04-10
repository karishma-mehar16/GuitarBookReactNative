import { Body, Container, Content, Label, Left, ListItem, List, Form, Input } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Picker } from "react-native";
import DatePicker from 'react-native-datepicker';
const UserSettingScreen = () => {
    //const [password, onChangeText] = React.useState("Useless Text");
    const [date, setDate] = useState('');
    const [selectedValue, setSelectedValue] = useState('Your Gender');
    const [number, onChangeNumber] = React.useState(null);

    return (
        <Container>
            <Content style={{ top: 50, }}>
                <Form style={{ marginHorizontal: 10, paddingBottom: 30 }}>
                    <List style={styles.list}>
                        <Label style={styles.label}>Name</Label>
                        <Input
                            style={styles.input}
                            placeholder="Your Name"
                        />
                    </List>
                    <List style={styles.list}>
                        <Label style={styles.label}>Password</Label>
                        <Input
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Your Password"
                        />
                    </List>
                    <List style={styles.list}>
                        <Label style={styles.label}>Email</Label>
                        <Input
                            style={styles.input}
                            placeholder="Your E-mail"
                        />
                    </List>
                    <List style={styles.list}>
                        <Label style={styles.label}>Phone</Label>
                        <Input
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Your Phone No."
                        />
                    </List>

                    <List style={styles.list}>
                        <Label style={styles.label}>Birthday</Label>
                        <DatePicker
                            style={styles.datePickerStyle}
                            date={date} // Initial date from state
                            mode="date" // The enum of date, datetime and time
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    //display: 'none',
                                    position: 'relative',
                                    right: 8,
                                    // top: 4,
                                    // marginLeft: 0,
                                },

                                dateInput: {
                                    borderTopWidth: 0,
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    alignItems: 'flex-start',

                                },
                            }}
                            onDateChange={(date) => {
                                setDate(date);
                            }}
                        />
                    </List>
                    <List style={styles.list}>
                        <Label style={styles.label}>Gender</Label>
                        <Picker
                            selectedValue={selectedValue}
                            style={{
                                marginLeft: 20,
                                height: 20,
                                top: -50,
                                width: '75%',

                            }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Your Gender" value="Select Gender" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                    </List>

                    {/* <Label>Name</Label>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                /> */}
                </Form>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    placeholder: {
        color: 'gray',
        fontSize: 10,
    },
    label: {
        paddingTop: 10,
        width: '25%'
    },
    list: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginBottom: 25
    },
    input: {
        height: 35,
        marginLeft: 20,
        borderWidth: 0.98,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '75%',
        borderColor: '#C0C0C1'
    },
    datePickerStyle: {
        width: '75%',
        height: 35,
        marginLeft: 20,
        // borderBottomWidth: 1
    },
});

export default UserSettingScreen;


// import React, { Component } from 'react'
// import { View, Text, StyleSheet, TextInput } from 'react-native'
// import { Container, Header, Content, Form, Item, Input, Label, Icon, DatePicker } from 'native-base';

// export default class UserSettingScreen extends Component {

//     render() {
//         return (
//             <Container style={{ flex: 1, paddingBottom: 10 }}>
//                 <Content>


//                     <Form style={{ paddingHorizontal: 20 }}>
//                         <Item floatingLabel style={{}}>
//                             <Label>Name</Label>
//                             <Input style={styles.Input} />
//                         </Item>
//                         <Item floatingLabel>
//                             <Label>Password</Label>
//                             <Input style={styles.Input} secureTextEntry={true} />
//                         </Item>
//                         <Item floatingLabel>
//                             <Label>Email</Label>
//                             <Input style={styles.Input}
//                             />
//                         </Item>
//                         <Item floatingLabel>
//                             <Label>Phone</Label>
//                             <Input style={styles.Input} />
//                         </Item>
//                         <Item floatingLabel>
//                             <Label>Gender</Label>
//                             <Input style={styles.Input} />
//                         </Item>
//                         <Item floatingLabel last>
//                             <Label>Birthday</Label>
//                             <Input><DatePicker /></Input>
//                         </Item>

//                     </Form>
//                 </Content>
//             </Container>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     Input: {
//         height: 60,
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//     },
// })


