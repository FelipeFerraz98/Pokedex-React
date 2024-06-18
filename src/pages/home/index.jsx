import React, { useState } from 'react';
import { PokemonList } from '../../components/PokemonList';
import { Container, Title, ButtonBox} from './styles';
import { Button } from '../../components/Button';

const Home = () => {
    const [offset, setOffset] = useState(0);
    const limit = 18;

    const handlePrevious = () => {
        if (offset >= limit) {
            setOffset(offset - limit);
        }
    };

    const handleNext = () => {
        setOffset(offset + limit);
    };

    return (
        <Container>
            <Title>Pokedex</Title>
            <PokemonList limit={limit} offset={offset} />
            <ButtonBox>
                <Button onClick={handlePrevious} disabled={offset === 0} title={'Previous'}></Button>
                <Button onClick={handleNext} title={'Next'}></Button>
            </ButtonBox>
        </Container>
    );
}

export { Home }
