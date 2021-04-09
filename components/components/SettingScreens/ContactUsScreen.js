import { Body, Container, Content, Label, Left, ListItem, List, Form, Input, Textarea, View, Button } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, } from "react-native";
import DatePicker from 'react-native-datepicker';
const UserSettingScreen = () => {
    const [number, onChangeNumber] = React.useState(null);

    return (
        <Container style={{}}>
            <Content style={{ marginHorizontal: 10, paddingBottom: 30, top: 20 }}>
                <View style={{
                    paddingHorizontal: 15,
                    marginBottom: 25
                }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Please fill out this form to CONTACT US, we'll get back to you right way.</Text>
                </View>


                <Form >
                    <List style={styles.list}>
                        <Label style={styles.label}>Name</Label>
                        <Input
                            style={styles.input}
                            placeholder="Your Name"
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
                        <Label style={styles.label}>Subject</Label>
                        <Input
                            style={styles.input}
                            placeholder="Subject"
                        />
                    </List>
                    <List style={styles.list}>
                        <Label style={styles.label}>Massage</Label>
                        <Textarea style={styles.textarea} rowSpan={5} bordered placeholder="Your Massage" />
                    </List>
                    <List style={styles.list}>
                        <Button style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white' }}>Submit</Text>
                        </Button>
                    </List>
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

    list: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    input: {
        height: 35,
        borderWidth: 0.98,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#C0C0C1'
    },
});

export default UserSettingScreen;

