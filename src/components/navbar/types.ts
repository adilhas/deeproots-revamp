export type MenuItem = {
  title: string;
  description: string;
  icon: string;
};

export type MenuSection = {
  name: string;
  subitems: MenuItem[];
};
