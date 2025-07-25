import Head from 'next/head';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
};

const defaultMeta = {
  title: 'DEEPROOTS | We Are the DeWorld — A Movement from the Roots',
  description:
    'DEEPROOTS blockchain powers DeWorld with 20+ Web3 tools for DeFi, NFTs, AI, education, business, GameFi, and nonprofits — built for freedom and global impact',
  image: 'https://deeproots.earth/landing/logo.png',
  url: 'https://deeproots.earth/',
};

const Seo = ({ title, description, image, url, noIndex }: SeoProps) => {
  const meta = {
    ...defaultMeta,
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    image: image || defaultMeta.image,
    url: url || defaultMeta.url,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow'}
      />
      <link rel="canonical" href={meta.url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta
        property="og:image"
        content="https://www.deeproots.earth/landing/logo.png"
      />

      <meta name="twitter:card" content={meta.description} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
};

export default Seo;
