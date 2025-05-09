import { ComponentType } from 'react';

export type MenuItem = {
  title: string;
  description: string;
  icon: string | ComponentType;
};

export type MenuSection = {
  name: string;
  subitems: MenuItem[];
};
