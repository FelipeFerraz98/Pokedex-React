import React, { useState, useEffect } from 'react';
import { fetchPokemonDetails } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { BackgroundPokedex, BackgroundPokemon, Image, TextContent, Title, Grid, TypeBox, Container, ButtonBox, TextContentLight, 
    BarWrapper, GridContainer, GridType, SubTitle, TextContentLightAnimated, CopyMessage } from './styles';
import { Button } from '../Button';
import { StatsBar } from '../StatsBar';
import { Loading } from '../Loading';

const getOfficialArtworkUrl = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

const PokemonDetails = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copyMessageVisible, setCopyMessageVisible] = useState(false);

    useEffect(() => {
        const loadPokemonDetails = async () => {
            try {
                const data = await fetchPokemonDetails(name);
                setPokemon(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadPokemonDetails();
    }, [name]);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    const primaryType = pokemon.types[0].type.name

    const officialArtworkUrl = getOfficialArtworkUrl(pokemon.id);

    const heightInMeters = (pokemon.height * 0.1).toFixed(2);
    const weightInKg = (pokemon.weight * 0.1).toFixed(2);

    const hp = pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const attack = pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat;
    const defense = pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat;

    const handleClickGoBack = () => {
        navigate('/');
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopyMessageVisible(true);
            setTimeout(() => {
                setCopyMessageVisible(false);
            }, 2000); 
        } catch (error) {
            console.error("Failed to copy the link: ", error);
        }
    };

    return (
        <Container>
            <BackgroundPokedex>
                <Title onClick={handleClickGoBack}>&lt; {pokemon.name}</Title>
                <BackgroundPokemon type={primaryType}>
                    <GridType>
                        {pokemon.types.map((type) => (
                            <TypeBox key={type.type.name} type={type.type.name}>
                                <TextContentLight>{type.type.name}</TextContentLight>
                            </TypeBox>
                        ))}
                    </GridType>
                    <Image src={officialArtworkUrl} alt={pokemon.name} />
                </BackgroundPokemon>
                <GridContainer>
                    <Grid>
                        <SubTitle>{heightInMeters}m</SubTitle>
                        <TextContentLightAnimated>Height</TextContentLightAnimated>
                    </Grid>
                    <BarWrapper />
                    <Grid>
                        <SubTitle>{weightInKg}kg</SubTitle>
                        <TextContentLightAnimated>Weight</TextContentLightAnimated>
                    </Grid>
                </GridContainer>
                <TextContent>Base Stats:</TextContent>
                <StatsBar label="HP" value={hp} color={primaryType} />
                <StatsBar label="Attack" value={attack} color={primaryType} />
                <StatsBar label="Defense" value={defense} color={primaryType} />
                <ButtonBox>
                    <Button title='Share' onClick={handleCopyLink} color={primaryType}></Button>
                </ButtonBox>
                {copyMessageVisible && <CopyMessage>Link Copied!</CopyMessage>}
            </BackgroundPokedex>
        </Container>
    );
};

export { PokemonDetails };
