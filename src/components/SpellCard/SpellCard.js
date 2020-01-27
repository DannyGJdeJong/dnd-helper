import React, { Component } from 'react';
import styled from 'styled-components';

export default class SpellCard extends Component {
    render () {
        const { spell: { name, castingTime, components, range, duration, description } } = this.props;

        const Container = styled.div`
        border-radius: 25px;
        background: #73AD21;
        padding: 10px;
        display: flex;
        flex-flow: column;
        width: 500px;
        min-height: 400px;
        margin: 5px;
        h2, h5, p {
            text-align: center;
            margin: 5px;
        }

        `

        const TextBox = styled.div`
        border-radius: 5px;
        background: #FFFFFF;
        margin: 5px;
        flex: 1;
        `

        const Row = styled.div`
        display: flex;
        `

        const TextBoxLarge = styled(TextBox)`
        flex: 99999;

        p {
            text-align: left;
        }
        `

        return (
            <Container>
                <TextBox>
                    <h2>{ name }</h2>
                </TextBox>
                <Row>
                    <TextBox>
                        <h5>Casting Time</h5>
                        <p>{ castingTime }</p>
                    </TextBox>
                    <TextBox>
                        <h5>Components</h5>
                        <p>{ components }</p>
                    </TextBox>
                </Row>
                <Row>
                    <TextBox>
                        <h5>Range</h5>
                        <p>{ range }</p>
                    </TextBox>
                    <TextBox>
                        <h5>Duration</h5>
                        <p>{ duration }</p>
                    </TextBox>
                </Row>
                <TextBoxLarge>
                    <p>{ description.split(/(?:\r\n|\r|\n)/g).map(s => {return <>{s} <br /></>}) }</p>
                </TextBoxLarge>
            </Container>
        )
    }
}