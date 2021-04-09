import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Fontisto, Foundation, Ionicons, Entypo } from '@expo/vector-icons'
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Button, Title } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

const AboutUsNav = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem thumbnail onPress={() => navigation.navigate('Privacy Policy')} >
                        <Body>
                            <Text>Privacy Policy</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('Risk Disclosure Agree')} >

                        <Body>
                            <Text>Risk Disclosure Agree</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('App Statement')}>
                        <Body>
                            <Text>Contact Us</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('About Us')}>
                        <Body>
                            <Text>About Us</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>


                </List>
            </Content>
        </Container>
    )
}
const PrivacyPolicy = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Privacy Policy</Text>
        </View>
    );

}
// const RiskDisclosureAgreement = ({ navigation }) => {
//     <View style={{ flex: 1 }}>
//         <Text>Privacy Policy</Text>
//     </View>
// }
// const AppStatement = ({ navigation }) => {
//     <View style={{ flex: 1 }}>
//         <Text>Privacy Policy</Text>
//     </View>
// }

// const AboutUs = ({ navigation }) => {
//     return (
//         <AboutUsScreen />
//     );
// }

const AboutUsStack = createStackNavigator();

function AboutApp() {
    return (
        <AboutUsStack.Navigator >
            <AboutUsStack.Screen name="About" component={AboutUsNav} options={{ headerShown: false }} />
            <AboutUsStack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        </AboutUsStack.Navigator>
    );
}

export default AboutUsScreen = () => {
    return (
        <AboutApp />
    );
}


const styles = StyleSheet.create({})
