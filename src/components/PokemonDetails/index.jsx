import React, { useState, useEffect } from 'react'; 
import { fetchPokemonDetails } from '../../services/api'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import { 
    BackgroundPokedex, BackgroundPokemon, Image, TextContent, Title, Grid, TypeBox, Container, ButtonBox, 
    TextContentLight, BarWrapper, GridContainer, GridType, SubTitle, TextContentLightAnimated, CopyMessage 
} from './styles'; 
import { Button } from '../Button'; 
import { StatsBar } from '../StatsBar'; 
import { Loading } from '../Loading'; 

// Função auxiliar para obter a URL da imagem do Pokémon
const getOfficialArtworkUrl = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

// Componente funcional principal PokemonDetails
const PokemonDetails = () => {
    const navigate = useNavigate(); // Hook para navegação
    const { name } = useParams(); // Hook para obter parâmetros da URL
    const [pokemon, setPokemon] = useState(null); // Estado para armazenar detalhes do Pokémon
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros
    const [copyMessageVisible, setCopyMessageVisible] = useState(false); // Estado para controlar a visibilidade da mensagem de cópia

    // useEffect para carregar detalhes do Pokémon ao montar o componente ou mudar o nome do Pokémon
    useEffect(() => {
        const loadPokemonDetails = async () => {
            try {
                const data = await fetchPokemonDetails(name); // Faz a requisição para buscar os detalhes do Pokémon
                setPokemon(data); // Define o estado com os dados do Pokémon
            } catch (error) {
                setError(error.message); // Define o estado de erro se a requisição falhar
            } finally {
                setLoading(false); // Define o estado de carregamento como falso
            }
        };

        loadPokemonDetails(); // Chama a função para carregar os detalhes do Pokémon
    }, [name]); // O efeito depende da variável name

    // Se estiver carregando, retorna o componente de carregamento
    if (loading) return <Loading />; 
    // Se houver erro, retorna uma mensagem de erro
    if (error) return <div>Error: {error}</div>;

    const primaryType = pokemon.types[0].type.name; // Obtém o tipo principal do Pokémon

    const officialArtworkUrl = getOfficialArtworkUrl(pokemon.id); // Obtém a URL da imagem do Pokémon
    
    // Foi usado multiplicação para a "divisão" devido a questões de eficiencia.
    const heightInMeters = (pokemon.height * 0.1).toFixed(2); // Converte a altura para metros e formata com duas casas decimais
    const weightInKg = (pokemon.weight * 0.1).toFixed(2); // Converte o peso para quilogramas e formata com duas casas decimais

    // Obtém os valores base de HP, Ataque e Defesa do Pokémon
    const hp = pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const attack = pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat;
    const defense = pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat;

    // Função para navegar de volta para a página inicial
    const handleClickGoBack = () => {
        navigate('/');
    };

    // Função para copiar o link atual para a área de transferência
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href); // Copia o link atual
            setCopyMessageVisible(true); // Mostra a mensagem de cópia
            setTimeout(() => {
                setCopyMessageVisible(false); // Esconde a mensagem após 2 segundos
            }, 2000); 
        } catch (error) {
            console.error("Failed to copy the link: ", error); // Exibe um erro no console se a cópia falhar
        }
    };

    // Renderização do componente
    return (
        <Container>
            <BackgroundPokedex>
                {/* Título do Pokémon, clicável para voltar */}
                <Title onClick={handleClickGoBack}>&lt; {pokemon.name}</Title>
                <BackgroundPokemon type={primaryType}>
                    <GridType>
                        {/* Mapeia e exibe os tipos do Pokémon */}
                        {pokemon.types.map((type) => (
                            <TypeBox key={type.type.name} type={type.type.name}>
                                <TextContentLight>{type.type.name}</TextContentLight>
                            </TypeBox>
                        ))}
                    </GridType>
                    {/* Imagem do Pokémon */}
                    <Image src={officialArtworkUrl} alt={pokemon.name} />
                </BackgroundPokemon>
                <GridContainer>
                    <Grid>
                        {/* Altura do Pokémon */}
                        <SubTitle>{heightInMeters}m</SubTitle>
                        <TextContentLightAnimated>Height</TextContentLightAnimated>
                    </Grid>
                    <BarWrapper />
                    <Grid>
                        {/* Peso do Pokémon */}
                        <SubTitle>{weightInKg}kg</SubTitle>
                        <TextContentLightAnimated>Weight</TextContentLightAnimated>
                    </Grid>
                </GridContainer>
                <TextContent>Base Stats:</TextContent>
                {/* Barras de status do Pokémon */}
                <StatsBar label="HP" value={hp} color={primaryType} />
                <StatsBar label="Attack" value={attack} color={primaryType} />
                <StatsBar label="Defense" value={defense} color={primaryType} />
                <ButtonBox>
                    {/* Botão para compartilhar o link, ele copia o link da página atual */}
                    <Button title='Share' onClick={handleCopyLink} color={primaryType}></Button>
                </ButtonBox>
                {/* Mensagem de cópia visível */}
                {copyMessageVisible && <CopyMessage>Link Copied!</CopyMessage>}
            </BackgroundPokedex>
        </Container>
    );
};

export { PokemonDetails };
