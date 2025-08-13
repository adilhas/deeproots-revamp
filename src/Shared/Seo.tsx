import Head from 'next/head';
import { generateSeoMeta, SeoProps } from '@/lib/seo';

const Seo = (props: SeoProps) => {
  const meta = generateSeoMeta(props);

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={meta.robots} />
      <link rel="canonical" href={meta.canonical} />

      <meta property="og:type" content={meta.og.type} />
      <meta property="og:title" content={meta.og.title} />
      <meta property="og:description" content={meta.og.description} />
      <meta property="og:url" content={meta.og.url} />
      <meta property="og:image" content={meta.og.image} />

      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:title" content={meta.twitter.title} />
      <meta name="twitter:description" content={meta.twitter.description} />
      <meta name="twitter:image" content={meta.twitter.image} />
    </Head>
  );
};

export default Seo;
