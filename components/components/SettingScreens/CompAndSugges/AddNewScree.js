import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Textarea, ListItem, List, Button, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
export default class FixedLabelExample extends Component {
    render() {
        this.state = {
            MeshuSong: 'type'
        }
        return (
            <Container>

                <Content>
                    <Form style={{ paddingHorizontal: 10, paddingTop: 20, borderWidth: 1, borderColor: 'gray', marginHorizontal: 10, marginVertical: 20 }}>
                        <List style={{ marginBottom: 30 }}>
                            <DropDownPicker
                                items={[
                                    { label: 'Type', value: 'type', hidden: true },
                                    { label: 'Old Songs', value: 'oldsong' },
                                    { label: 'New Songs', value: 'newsongs' },
                                    { label: 'Mashup Songs', value: 'mashupsongs' },

                                ]}

                                dropDownMaxHeight={450}
                                defaultValue={this.state.MeshuSong}
                                style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                    height: 70
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa', }}
                                onChangeItem={item => this.setState({
                                    MeshuSong: item.value
                                })}
                                placeholder={this.state.MeshuSong}
                            />
                        </List>
                        <List style={{ marginBottom: 30 }}>
                            <Label style={styles.label}>Description</Label>
                            <Textarea rowSpan={5} bordered />
                        </List>
                        <List style={{ marginBottom: 30 }}>
                            <Label style={styles.label}>Whats App No</Label>
                            <Input
                                style={styles.input}
                                keyboardType="numeric"
                            />
                        </List>
                        <List style={{ marginBottom: 30 }}>
                            <Button style={{ width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text>Submit</Text>
                            </Button>
                        </List>
                        <List style={{ marginBottom: 30, flex: 1, flexDirection: 'row' }}>
                            <Label style={{ paddingRight: 30, fontSize: 20, fontFamily: 'bold' }}>Service:</Label>
                            <View>
                                <Text>10:00-17:00, Monday-Friday</Text>
                                <Text>About 1-5 Business Days </Text>
                            </View>
                        </List>
                    </Form>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    label: {
        paddingTop: 10,
        fontSize: 15,
        color: 'black',
        paddingHorizontal: 10,
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
