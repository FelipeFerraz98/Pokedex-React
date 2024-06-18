// Definindo a URL base da API
const API_BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * Função assíncrona para buscar a lista de Pokémons.
 * @param {number} limit - Número de Pokémons a serem buscados (default é 18).
 * @param {number} offset - Número de Pokémons a serem ignorados antes de começar a buscar (default é 18).
 * @returns {Promise<Object>} - Retorna uma promessa que resolve com os dados da lista de Pokémons.
 */
export const fetchPokemonList = async (limit = 18, offset = 0) => {
    // Fazendo uma requisição HTTP GET para a API usando fetch com os parâmetros limit e offset
    const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    
    // Verifica se a resposta não é ok (status diferente de 200-299), lança um erro
    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon list');
    }

    // Converte a resposta da API em JSON e retorna
    return response.json();
};

/**
 * Função assíncrona para buscar os detalhes de um Pokémon específico.
 * @param {string} name - Nome do Pokémon a ser buscado.
 * @returns {Promise<Object>} - Retorna uma promessa que resolve com os dados detalhados do Pokémon.
 */
export const fetchPokemonDetails = async (name) => {
    // Fazendo uma requisição HTTP GET para a API usando fetch com o nome do Pokémon
    const response = await fetch(`${API_BASE_URL}/pokemon/${name}`);
    
    // Verifica se a resposta não é ok (status diferente de 200-299), lança um erro
    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon details');
    }

    // Converte a resposta da API em JSON e retorna
    return response.json();
};
