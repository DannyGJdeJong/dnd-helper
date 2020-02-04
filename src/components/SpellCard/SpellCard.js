import React, { Component } from 'react';
import styled from 'styled-components';

export default class SpellCard extends Component {
    render () {
        const { spell: { name, castingTime, componentV, componentS, componentM, components, range, duration, description } } = this.props;

        const Container = styled.div`
        border-radius: 25px;
        background: #73AD21;
        padding: 10px;
        display: flex;
        flex-flow: column;
        width: 300px;
        min-height: 302px;
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
        height: 100%;
        p {
            text-align: left;
        }
        `

        const SubText = styled.p`
        color: #002626;
        font-size: 12px;
        float: left;
        position: relative;
        font-style: italic;
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
                        <h5>Range</h5>
                        <p>{ range }</p>
                    </TextBox>
                </Row>
                <Row>
                    <TextBox>
                        <h5>Components</h5>
                        <p>{ [componentV ? 'V' : null, componentS ? 'S' : null, componentM ? 'M' : null].filter((e) => { return e != null }).join(", ") }</p>
                    </TextBox>
                    <TextBox>
                        <h5>Duration</h5>
                        <p>{ duration }</p>
                    </TextBox>
                </Row>
                <div>
                    <SubText>{ components }</SubText>
                </div>

                <TextBoxLarge>
                    <p>{ description.split(/(?:\r\n|\r|\n)/g).map(s => {return <>{s} <br /></>}) }</p>
                </TextBoxLarge>
            </Container>
        )
    }
}
