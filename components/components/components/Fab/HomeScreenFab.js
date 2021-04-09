import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';


class HomeScreenFab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }
    render() {
        return (
            <View >
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <MaterialCommunityIcons name="music-note-plus" size={24} color="black"
                    />
                </Fab>
            </View>
        );
    }
}

export default HomeScreenFab