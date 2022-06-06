import { Card, Grid, Row, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces';

type Props = {
  pokemon: SmallPokemon;
};

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
  const router = useRouter();

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Link href={`/pokemon/${id}`} prefetch={false}>
        <Card hoverable clickable>
          <Card.Body css={{ p: 1 }}>
            <Card.Image src={img} width="100%" height={140} />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{name}</Text>
              <Text># {id}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Link>
    </Grid>
  );
};
