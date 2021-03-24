import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Card, Item, CardItem, Left, Body, Right, Button, Input, Icon } from 'native-base';
import RecommendedSongs from './Recommended';
import MashupRecommended from './MashupRecommended';
import Bottomfab from '../Fab/Bottomfab';

const Mashupsongs = () => {
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
                        <Text style={{ fontSize: 20 }}>This data is from local json file</Text>
                    </CardItem>
                    <MashupRecommended />
                </Card>
            </Content>
            <Bottomfab />
        </Container>
    );
}

export default Mashupsongs
