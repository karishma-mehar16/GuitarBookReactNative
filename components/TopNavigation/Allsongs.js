import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Card, Item, CardItem, Left, Body, Right, Button, Input, Icon } from 'native-base';
import RecommendedSongs from './Recommended';
import Bottomfab from '../Fab/Bottomfab';

const Allsongs = () => {
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
                        <Text style={{ fontSize: 20 }}>This data is from fetch api</Text>

                    </CardItem>
                    <RecommendedSongs
                        ImgUri={('https://picsum.photos/200/301')}
                    />

                    {/* <RecommendedSongs
                        ImgUri={('https://picsum.photos/200/301')}
                        SongName='O Mere dil K Chain'
                        SingerName='Sanam Puri'
                    />
                    <RecommendedSongs
                        ImgUri={('https://picsum.photos/200/302')}
                        SongName='Jann Nisar'
                        SingerName='Old Hindi Songs'
                    />
                    <RecommendedSongs
                        ImgUri={('https://picsum.photos/200/303')}
                        SongName='Gulabi Ankhe'
                        SingerName='Old Hindi Songs'
                    />
                    <RecommendedSongs
                        ImgUri={('https://picsum.photos/200/304')}
                        SongName='Gulabi Ankhe'
                        SingerName='Old Hindi Songs'
                    />
                    <RecommendedSongs
                        ImgUri={('https://picsum.photos/200/305')}
                        SongName='Gulabi Ankhe'
                        SingerName='Old Hindi Songs'
                    />
                    <RecommendedSongs
                        ImgUri={('https://picsum.photos/200/306')}
                        SongName='Gulabi Ankhe'
                        SingerName='Old Hindi Songs'
                    />
                    <RecommendedSongs
                        ImgUri={('https://picsum.photos/200/307')}
                        SongName='Gulabi Ankhe'
                        SingerName='Old Hindi Songs'
                    /> */}
                </Card>
            </Content>
            <Bottomfab />
        </Container>
    )
}

export default Allsongs
