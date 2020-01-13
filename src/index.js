import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

// Import components
import { SpellCard } from './components/SpellCard';

// Import data
import Spells from "./data/Spells"

const SpellBook = styled.div`
    display: flex;
    flex-wrap: wrap;
`

ReactDOM.render(
    <SpellBook>
    {Spells.spells.map((spell) => {
        return <SpellCard spell={spell}>

        </SpellCard>
    })}
    </SpellBook>,
    document.getElementById('root')
  );