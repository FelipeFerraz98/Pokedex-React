import React, { useState, useEffect } from 'react';
import { fetchPokemonList } from '../../services/api';
import { PokemonCard } from '../PokemonCard';
import { Loading } from '../Loading';
import { Container } from './styles';


// Define o componente funcional PokemonList que recebe props limit e offset
const PokemonList = ({ limit, offset }) => {

    // Declara um estado pokemonList para armazenar a lista de Pokémon, inicializado como um array vazio
    const [pokemonList, setPokemonList] = useState([]);

    // Declara um estado loading para controlar o estado de carregamento, inicializado como true
    const [loading, setLoading] = useState(true);

    // Declara um estado error para armazenar possíveis erros, inicializado como null
    const [error, setError] = useState(null);

    // useEffect para carregar a lista de Pokémon quando o componente monta ou quando limit ou offset mudam
    useEffect(() => {

        // Função assíncrona para carregar a lista de Pokémon
        const loadPokemonList = async () => {
            try {
                // Chama a função fetchPokemonList com limit e offset, aguardando a resposta
                const data = await fetchPokemonList(limit, offset);

                // Atualiza o estado pokemonList com os resultados da API
                setPokemonList(data.results);

            } catch (error) {
                // Em caso de erro, atualiza o estado error com a mensagem de erro
                setError(error.message);

            } finally {
                // Independentemente do resultado, define loading como false
                setLoading(false);
            }
        };

        // Chama a função loadPokemonList para iniciar o carregamento
        loadPokemonList();

    }, [limit, offset]); // Dependências do useEffect - reexecuta o efeito se limit ou offset mudarem

    // Se loading for true, retorna o componente Loading
    if (loading) return <Loading />;

    // Se houver um erro, retorna um div exibindo a mensagem de erro
    if (error) return <div>Error: {error}</div>;

    return (
        <Container>
            {pokemonList.map((pokemon) => (
            // Mapeia cada Pokémon da lista para um componente PokemonCard
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
                // Define uma chave única para cada PokemonCard usando o nome do Pokémon
            ))}
        </Container>
    );
};

export { PokemonList };
