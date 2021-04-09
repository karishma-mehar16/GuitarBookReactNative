import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Card, CardItem, Container, Content } from 'native-base';

const ViewScreen = () => {
    return (
        <Container>
            <Content>
                <View style={{ flex: 1, padding: 20 }}>

                    <View style={{ flexDirection: 'row', }}>
                        <FontAwesome5 name="music" size={24} color="#e4104e" />
                        <Text style={{ color: '#e4104e', fontSize: 17, fontWeight: 'bold', marginTop: -3, paddingLeft: 5 }}>CHORDS:</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>

                        <View>
                            <Text style={styles.text}>AM</Text>
                            <View style={styles.box}>
                                <Image style={styles.img} source={{ uri: 'https://www.chordbank.com/media/am-chord.jpg' }} />
                            </View>

                        </View>
                        <View>
                            <Text style={styles.text}>B</Text>
                            <View style={styles.box}>
                                <Image style={styles.img} source={{ uri: 'https://www.chordbank.com/media/dm-hero-750.jpg' }} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>C</Text>
                            <View style={styles.box}>
                                <Image style={styles.img} source={{ uri: 'https://www.chordbank.com/media/am-chord.jpg' }} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>D</Text>
                            <View style={styles.box}>
                                <Image style={styles.img} source={{ uri: 'https://www.chordbank.com/media/dm-hero-750.jpg' }} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>E</Text>
                            <View style={styles.box}>
                                <Image style={styles.img} source={{ uri: 'https://www.chordbank.com/media/am-chord.jpg' }} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>AM</Text>
                            <View style={styles.box}>
                                <Image style={styles.img} source={{ uri: 'https://www.chordbank.com/media/dm-hero-750.jpg' }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 20, }}>
                        <FontAwesome5 name="music" size={24} color="#e4104e" />
                        <Text style={{ color: '#e4104e', fontSize: 17, fontWeight: 'bold', marginTop: -3, paddingLeft: 5 }}>PATTERN:</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingRight: 5, paddingLeft: 5 }}>
                            <Text style={{ color: 'black', letterSpacing: 5, fontSize: 17 }}>D U DUU DU DU </Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                        <FontAwesome5 name="music" size={24} color="#e4104e" />
                        <Text style={{ color: '#e4104e', fontSize: 17, fontWeight: 'bold', marginTop: -3, paddingLeft: 5 }}>LYRICS:</Text>

                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10 }}>
                        <View >
                            <Text style={styles.ChordsText}>Am</Text >
                            <Text>Maine jab dekha tha </Text>
                        </View>
                        <View style={{ paddingLeft: 3 }}>
                            <Text style={styles.ChordsText}> G</Text>
                            <Text>Raat bhi wo yaad hai mujhko</Text>
                        </View>

                        <View>
                            <Text style={styles.ChordsText}> F</Text>
                            <Text>Taare ginte ginte so gaya</Text>
                        </View>


                        <View style={{ paddingLeft: 3 }}>
                            <Text style={styles.ChordsText}> E</Text>
                            <Text>Dil mera dhadka tha kaske</Text>
                        </View>
                        <View >
                            <Text style={styles.ChordsText}>Am</Text >
                            <Text>Maine jab dekha tha </Text>
                        </View>
                        <View style={{ paddingLeft: 3 }}>
                            <Text style={styles.ChordsText}> G</Text>
                            <Text>Raat bhi wo yaad hai mujhko</Text>
                        </View>

                        <View>
                            <Text style={styles.ChordsText}> F</Text>
                            <Text>Taare ginte ginte so gaya</Text>
                        </View>


                        <View style={{ paddingLeft: 3 }}>
                            <Text style={styles.ChordsText}> E</Text>
                            <Text>Dil mera dhadka tha kaske</Text>
                        </View>

                    </View>
                </View>
            </Content>
        </Container>
    )
}

export default ViewScreen

const styles = StyleSheet.create({
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row', flexWrap: 'wrap',
        width: 120,
        height: 120,
    },
    img: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        textAlign: 'center',
        color: "#ac1340",
        fontSize: 15,
        fontWeight: 'bold'
    },
    ChordsText: {
        fontSize: 15,
        paddingLeft: 20,
        fontWeight: 'bold'
    },


})
