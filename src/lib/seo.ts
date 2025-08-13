export type SeoProps = {
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

export function generateSeoMeta({
  title,
  description,
  image,
  url,
  noIndex,
}: SeoProps) {
  const meta = {
    ...defaultMeta,
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    image: image || defaultMeta.image,
    url: url || defaultMeta.url,
    noIndex: noIndex || false,
  };

  return {
    title: meta.title,
    description: meta.description,
    canonical: meta.url,
    robots: meta.noIndex ? 'noindex, nofollow' : 'index, follow',
    og: {
      type: 'website',
      title: meta.title,
      description: meta.description,
      url: meta.url,
      image: meta.image,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      image: meta.image,
    },
  };
}
