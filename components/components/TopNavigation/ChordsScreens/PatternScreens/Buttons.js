import { Container, Content, } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons, Fontisto } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Buttons = () => {
    return (
        <Container>
            <Content>
                <View style={styles.container}>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity style={styles.button}>
                            <LinearGradient
                                colors={['#4c669f', '#3b5998', '#192f6a']}
                                style={styles.background}>
                                <MaterialIcons name="play-circle-fill" size={20} color="white" />
                                <Text style={styles.text}>Play/Pause</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <LinearGradient
                                colors={['#4c669f', '#3b5998', '#192f6a']}
                                style={styles.background}>
                                <MaterialCommunityIcons name="stop-circle" size={20} color="white" />
                                <Text style={styles.text}>Stop</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <LinearGradient
                                colors={['#4c669f', '#3b5998', '#192f6a']}
                                style={styles.background}>
                                <Fontisto name="applemusic" size={17} color="white" />
                                <Text style={styles.text}>Tempo</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                </View>
            </Content>
        </Container>

    )
}

export default Buttons


const styles = StyleSheet.create({
    container: {
        flex: 1, paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
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
        flexDirection: 'row'
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 2
    },
});


