import { ReactNode } from 'react';

export interface IFooterLinks {
  label: string;
  href: string;
}

export interface IFooter {
  title: string;
  icon: ReactNode;
  links: IFooterLinks[];
  hoverColor: string;
}
