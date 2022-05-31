import Head from 'next/head';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Jan Pierre Sanchez" />
        <meta name="description" content="Informacion sobre el pokemon xxxx" />
        <meta name="keywords" content="xxxx, pokemon, pokedex" />
      </Head>

      {<main>{children}</main>}
    </>
  );
};
