import * as React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Fontisto, Foundation, Ionicons, Entypo } from '@expo/vector-icons'
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Button, Title } from 'native-base';
import HomeScreenFab from '../Fab/HomeScreenFab';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserSettingScreen from '../SettingScreens/UserSettingScreen'
import ThemeSettingScreen from '../SettingScreens/ThemeSettingScreen';
import AboutUsScreen from '../SettingScreens/AboutUsScreen';
import ContactUsScreen from '../SettingScreens/ContactUsScreen';
import InviteScreen from '../SettingScreens/InviteScreen';
import MyPromotionScreen from '../SettingScreens/MyPromotionScreen';
import ComplaintsSuggestion from '../SettingScreens/CompAndSugges/ComplaintsSuggestion';
import SocialMediaScreen from '../SettingScreens/SocialMediaScreen';
import { Share } from 'react-native';
//import ComplaintsSuggestion from '../SettingScreens/ComplaintsSuggestion';

const HomeCompSetting = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem thumbnail onPress={() => navigation.navigate('User Setting')} >
                        <Left>
                            <MaterialCommunityIcons name="account-settings" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>User Settings</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('Theme Setting')} >
                        <Left>
                            <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>Theme Settings</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('About Us')}>
                        <Left>
                            <Fontisto name="persons" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>About Us</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('Contact Us')}>
                        <Left>
                            <MaterialIcons name="phone-in-talk" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>Contact Us</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('Complaints And Suggestions')} >
                        <Left>
                            <MaterialCommunityIcons name="card-account-phone" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>complaints and suggestions</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={onShare} >
                        <Left>
                            <MaterialIcons name="share" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>Share App</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('Social Media')}>
                        <Left>
                            <Foundation name="social-skillshare" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>Social Media Link</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>

                    <ListItem thumbnail onPress={() => navigation.navigate('My Promotion')}>
                        <Left>
                            <Entypo name="sound" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>Promotion</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail onPress={() => navigation.navigate('Invite')}>
                        <Left>
                            <Ionicons name="md-share" size={24} color="black" style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>Invite</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <MaterialCommunityIcons name="logout" size={24} style={{ paddingHorizontal: 15 }} />
                        </Left>
                        <Body>
                            <Text>Logout</Text>
                        </Body>
                        <Right>
                            <MaterialIcons name="arrow-forward" size={24} color="black" />
                        </Right>
                    </ListItem>
                </List>
            </Content>
            <HomeScreenFab />
        </Container>
    );
}

const UserSetting = ({ navigation }) => {
    return (
        <UserSettingScreen />
    );
}
const ThemeSetting = ({ navigation }) => {
    return (
        <ThemeSettingScreen />
    );
}
const AboutUs = ({ navigation }) => {
    return (
        <AboutUsScreen />
    );
}
const ContactUs = ({ navigation }) => {
    return (
        <ContactUsScreen />
    );
}
const CompSugges = ({ navigation }) => {
    return (
        <ComplaintsSuggestion />
    );
}
const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'Share Now',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
};
const SocialMedia = ({ navigation }) => {
    return (
        <SocialMediaScreen />
    );
}
const Promotion = ({ navigation }) => {
    return (
        <MyPromotionScreen />
    );
}
const Invite = ({ navigation }) => {
    return (
        <InviteScreen />
    );
}
const Stack = createStackNavigator();

const AppSettingScreen = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeCompSetting} options={{ headerShown: false }} />
            <Stack.Screen name="User Setting" component={UserSetting} />
            <Stack.Screen name="Theme Setting" component={ThemeSetting} />
            <Stack.Screen name="About Us" component={AboutUs} />
            <Stack.Screen name="Contact Us" component={ContactUs} />
            <Stack.Screen name="Complaints And Suggestions" component={CompSugges} />
            <Stack.Screen name="Social Media" component={SocialMedia} />
            <Stack.Screen name="My Promotion" component={Promotion} />
            <Stack.Screen name="Invite" component={Invite} />
        </Stack.Navigator>
    );
}

export default SettingsScreen = () => {
    return (
        <AppSettingScreen />
    )
}
