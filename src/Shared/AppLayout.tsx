import FooterV2 from '@/components/footer/FooterV2';
import Navbar from '@/components/navbar/Navbar';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

const AppLayout = ({ children, className }: AppLayoutProps) => {
  return (
    <div className={clsx('overflow-x-hidden', className)}>
      <Navbar />
      <main className="pt-[70px] md:pt-[88px] lg:pt-[93px]">{children}</main>
      <FooterV2 />
    </div>
  );
};

export default AppLayout;
