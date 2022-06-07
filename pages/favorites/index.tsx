import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavoritePokemon, NoFavorites } from '../../components/ui';
import localFavorites from '../../utils/localFavorites';

const FavoritesPage = () => {
  const [favoritePokemon, setfavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemon(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemon.length === 0 ? <NoFavorites /> : <FavoritePokemon pokemons={favoritePokemon} />}
    </Layout>
  );
};

export default FavoritesPage;
