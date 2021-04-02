import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Textarea, ListItem, List, Button, Text, View } from 'native-base';
export default class FixedLabelExample extends Component {
    render() {
        return (
            <Container>

                <Content>
                    <Form style={{ paddingHorizontal: 20 }}>
                        <List style={{ marginBottom: 30 }}>
                            <Label>Type</Label>
                            <Input style={{ borderBottomColor: 'black', borderWidth: 1, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, height: 30 }} />
                        </List>
                        <List style={{ marginBottom: 30 }}>
                            <Label>Description</Label>
                            <Textarea rowSpan={5} bordered />
                        </List>
                        <List style={{ marginBottom: 30 }}>
                            <Label>Whats App no</Label>
                            <Input style={{ borderBottomColor: 'black', borderWidth: 1, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, height: 30 }} />
                        </List>
                        <List style={{ marginBottom: 30 }}>
                            <Button style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Submit</Text>
                            </Button>
                        </List>
                        <List >
                            <ListItem>
                                <Label style={{ paddingRight: 30 }}>Service:</Label>
                                <View>
                                    <Text>10:00-17:00, Monday-Friday</Text>
                                    <Text>About 1-5 Business Days </Text>
                                </View>
                            </ListItem>
                        </List>
                    </Form>
                </Content>
            </Container>
        );
    }
}