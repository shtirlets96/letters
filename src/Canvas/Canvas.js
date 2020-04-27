import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import { printLetter } from './Alphabet'
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;

export default class TextCanvas extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        var ctx = this.state.canvas.getContext('2d')
        var canvas = this.state.canvas

        if (ctx) {
            let x = 5
            let y = 30

           // if (this.props.text) {
                ctx.beginPath()

                ctx.moveTo(x, y)
                for (let letter of this.props.text) {
                    printLetter(ctx, letter, x, y)
                    x += 10
                    if (x > canvas.width - 5) {
                        x = 5
                        y = y + 18
                    }
                    ctx.moveTo(x, y)
                }               
                 ctx.clearRect(0, 0, canvas.width, canvas.height)

                ctx.stroke()
          //  }

        }
    }

    handleCanvas = (canvas) => {
        this.setState({ canvas: canvas })

        canvas.width = windowWidth-25
        canvas.height = 500
    }

    render() {
        return (
            <Canvas ref={this.handleCanvas} />
        )
    }
}