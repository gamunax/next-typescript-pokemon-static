import { Grid } from '@nextui-org/react';
import type { NextPage } from 'next';
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListDto, SmallPokemon } from '../interfaces';

type Props = {
  pokemons: SmallPokemon[];
};

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemos">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListDto>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map(({ name, url }, id) => {
    const pokemonId = id + 1;
    return {
      name,
      url,
      id: pokemonId,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
