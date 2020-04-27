import React, { Component } from 'react';
import Canvas from './Canvas/Canvas';
import { Container, Header, Content, Item, Input, Text } from 'native-base';

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <Container>
                <Header />
                <Content style={{padding:10}}>
                    <Item regular>
                        <Input onChangeText={text => {
                            this.setState({ text: text })

                        }}
                            placeholder='Введите текст' />
                    </Item>
                    <Text note>
                        Приложение поддерживает только русские буквы и пробел. Остальные символы будут игнорироваться
                    </Text>
                    <Canvas text={this.state.text} />
                </Content>
            </Container>
        )
    }
}