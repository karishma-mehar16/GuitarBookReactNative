import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class AddNewFAB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }
    render() {
        return (
            <Container>

                <View >
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="share" />

                    </Fab>
                </View>
            </Container>
        );
    }
}