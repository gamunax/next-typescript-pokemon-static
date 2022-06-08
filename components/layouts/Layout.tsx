import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

type Props = {
  children: React.ReactNode;
  title: string;
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Jan Pierre Sanchez" />
        <meta name="description" content="Informacion sobre el pokemon xxxx" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Está es una página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/assets/images/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  );
};
