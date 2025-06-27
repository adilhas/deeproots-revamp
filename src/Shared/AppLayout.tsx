import FooterV2 from '@/components/footer/FooterV2';
import Navbar from '@/components/navbar/Navbar';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
  navContainerClassName?: string;
  mainContainerClassName?: string;
}

const AppLayout = ({
  children,
  className,
  navContainerClassName,
  mainContainerClassName,
}: AppLayoutProps) => {
  return (
    <div className={clsx('overflow-x-hidden', className)}>
      <Navbar navContainerClassName={navContainerClassName} />
      <main
        className={clsx(
          mainContainerClassName,
          `pt-[70px] md:pt-[88px] lg:pt-[93px]`
        )}
      >
        {children}
      </main>
      <FooterV2 />
    </div>
  );
};

export default AppLayout;
