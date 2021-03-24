import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Card, Item, CardItem, Left, Body, Right, Button, Input, Icon } from 'native-base';
import Bottomfab from '../Fab/Bottomfab';
//import RecommendedSongs from './Recommended';

const Pattern = () => {
    return (
        <Container>
            <Content>
                <Item style={{
                    justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20, borderRadius: 5, borderColor: 'gray', borderTopColor: 'gray', borderLeftColor: 'gray', borderRightColor: 'gray', borderRightWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, marginTop: 10,
                    paddingHorizontal: 10
                }}>
                    <Icon name="search" />
                    <Input placeholder="Search" />
                </Item>
                <Card>
                    <CardItem Header>
                        <Text>Your Recommended Songs</Text>

                    </CardItem>

                </Card>
            </Content>
            <Bottomfab />
        </Container>
    );
}

export default Pattern
