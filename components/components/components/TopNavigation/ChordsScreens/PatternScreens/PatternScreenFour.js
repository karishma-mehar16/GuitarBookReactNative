import { Container, Content, } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import Buttons from './Buttons';

const PatternScreenFour = () => {
    return (
        <Container>
            <Content>
                <View style={styles.container}>
                    <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 5, borderWidth: 1, borderColor: 'gray', shadowColor: 'lightgray', }}>
                        <Image style={{ width: '100%', height: 200, resizeMode: 'stretch', }} source={{ uri: 'https://guitardomination.net/wp-content/uploads/2016/07/the-piano-strum.jpg' }} />
                    </View>
                    <View style={styles.buttonGroup}>
                        <Buttons />
                    </View>
                </View>
            </Content>
        </Container>

    )
}

export default PatternScreenFour


const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 5, paddingVertical: 20 },
    buttonGroup: { flex: 1, flexDirection: 'row', marginVertical: 10 },
    button: {
        marginTop: 0,
        borderRadius: 5,
        padding: 5,
        width: 120,

    },
    background: {

        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#192f6a',
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        marginTop: 0
    },
});


