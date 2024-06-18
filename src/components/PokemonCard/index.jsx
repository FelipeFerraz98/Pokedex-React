import React, { useState, useEffect } from 'react';
import { fetchPokemonDetails } from '../../services/api';
import { Card, Sprite, Title } from './styles';
import { Loading } from '../Loading';

/**
 * Componente funcional PokemonCard
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.pokemon - Objeto Pokémon contendo dados básicos.
 */
const PokemonCard = ({ pokemon }) => {
    // Definindo um estado local chamado 'details' com valor inicial null
    const [details, setDetails] = useState(null);

    // useEffect para carregar detalhes do Pokémon quando o componente for montado ou quando pokemon.name mudar
    useEffect(() => {
        // Função assíncrona para buscar detalhes do Pokémon
        const loadPokemonDetails = async () => {
            try {
                // Chamando a função fetchPokemonDetails e armazenando os dados no estado 'details'
                const data = await fetchPokemonDetails(pokemon.name);
                setDetails(data);
            } catch (error) {
                // Exibindo erro no console caso a requisição falhe
                console.error(error);
            }
        };

        // Chamando a função para carregar detalhes do Pokémon
        loadPokemonDetails();
    }, [pokemon.name]); // Dependência do useEffect é pokemon.name

    // Se 'details' ainda não estiver carregado, retorna Loading (Componente que exibe tela de carregando)
    if (!details) return <Loading />;

    // Extraindo o tipo primário do Pokémon
    const primaryType = details.types[0].type.name;

    // Renderizando o componente Card com um link para a página de detalhes do Pokémon
    return (
         // Cria um link para a página de detalhes do Pokémon
        <Card to={`/pokemon/${pokemon.name}`} type={primaryType}>
            {/* Renderizando o nome do Pokémon */}
            <Title>{pokemon.name}</Title>
            {/* Renderizando a sprite (imagem) do Pokémon */}
            <Sprite src={details.sprites.front_default} alt={pokemon.name} />
        </Card>
    );
};

export { PokemonCard };
