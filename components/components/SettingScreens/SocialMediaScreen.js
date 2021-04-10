import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Body } from 'native-base';
import { Fontisto, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const SocialMediaScreen = () => {
    return (
        <Container>
            <Content style={{ paddingVertical: 20 }}>
                <Card>
                    <CardItem>
                        <FontAwesome5 name="twitter-square" size={24} color="black" />
                        <Body style={styles.body}><Text>Twitter</Text></Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Ionicons name="md-logo-linkedin" size={24} color="black" />
                        <Body style={styles.body}><Text>Linkedin</Text></Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <FontAwesome5 name="facebook-square" size={24} color="black" />
                        <Body style={styles.body}><Text>Facebook</Text></Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <FontAwesome5 name="reddit-square" size={28} color="black" />
                        <Body style={styles.body}><Text>reddit</Text></Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <FontAwesome5 name="telegram" size={24} color="black" />
                        <Body style={styles.body}><Text>Telegram</Text></Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>

                </Card>
            </Content>
        </Container>
    );
}

export default SocialMediaScreen

const styles = StyleSheet.create({
    body: { paddingLeft: 20 }
})
