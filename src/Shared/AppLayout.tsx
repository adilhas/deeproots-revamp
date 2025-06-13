import FooterV2 from '@/components/footer/FooterV2';
import Navbar from '@/components/navbar/Navbar';
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-[70px] md:pt-[88px] lg:pt-[93px]">{children}</main>
      <FooterV2 />
    </div>
  );
};

export default AppLayout;
