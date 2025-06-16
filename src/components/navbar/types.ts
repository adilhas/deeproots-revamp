export type MenuItem = {
  title: string;
  description: string;
  link: string;
};

export type MenuSection = {
  name: string;
  link: string;
  subitems: MenuItem[];
};
