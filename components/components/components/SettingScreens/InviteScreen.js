
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Container, Content, Input, Label } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const onPressLearnMore = () => {
    return (
        alert('HI')
    );
}
const InviteScreen = () => {
    return (

        <Container>
            <Content style={{ flex: 1, padding: 15 }}>
                <Button
                    onPress={onPressLearnMore}
                    title="Copy And Share Link"
                    color="#841584"
                />
                <TouchableOpacity style={{ opacity: 0.9, marginTop: 20 }}>
                    <Button title="http://test3.mytecsys.in/abhishek/refer/?r=lgMcrh" />
                </TouchableOpacity>

                <Label style={{ alignSelf: 'center', paddingTop: 80 }}>Refaral Code</Label>
                <Button
                    title="LGMCRH"
                    color="#841584"
                />
            </Content>
        </Container>
    )
}

export default InviteScreen

const styles = StyleSheet.create({})
