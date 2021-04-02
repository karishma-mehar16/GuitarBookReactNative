import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Container, Header, ScrollableTab, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs } from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TopNav from './components/TopNavigation/TopNav';
import BottomNavigation from './components/BottomNavigation/BottomNavigation'
import Tool from './components/BottomNavigation/Tool';
import Sidebar from './components/Drawer/Sidebar';
import DrawerScre from './components/Drawer/DrawerScre';

function HomeScreen({ navigation }) {

  return (
    <Container>
      <Header hasTabs>
        <Body>
          <Title style={{ marginLeft: 15 }}>Gitar Book</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          </Button>
        </Right>
      </Header>
      <BottomNavigation />
    </Container>
  );
}
function TrendingScreen({ navigation }) {
  return (
    <Container>
      <DrawerScre />
    </Container>
  );
}

function LatestScreen({ navigation }) {

  return (

    <Sidebar />
  );
}
function DrawerHeader({ navigation }) {

  return (
    <DrawerScre />
  );
}

const Drawer = createDrawerNavigator();


const DrawerOptions = () => {
  return (
    <Container>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Trending Songs" component={TrendingScreen} />
        <Drawer.Screen name="Latest Songs" component={LatestScreen} />
        <Drawer.Screen name="Drawerheader" component={DrawerHeader} />
      </Drawer.Navigator>
    </Container>

  );
}
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <DrawerOptions />
    </NavigationContainer>
  );
}
