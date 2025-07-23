import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';

interface IBlogLayout {
  title: 'What Is Deep Roots?';
  subtitle: 'The Movement Behind DeWorld and the Future of the Decentralized Internet';
  children: ReactNode;
  date: string;
}

const BlogLayout = ({ title, subtitle, children, date }: IBlogLayout) => {
  return (
    <>
      <div className="flex text-md font-sans items-center font-semibold flex-row justify-start gap-1 w-full max-w-[1199px] mx-auto px-2 py-8">
        <Link href={'/blogs'} className="font-normal">
          Blog
        </Link>
        <div>
          <ChevronRight className="w-[18px] h-[18px]" />
        </div>
        <div className="text-[#A855F7]">{title}</div>
      </div>
      <div className="w-full max-w-[800px] mx-auto px-2">
        <div className="text-center pb-8 relative  border-2 border-[#d5d5d5] rounded-4xl">
          <div className="w-full h-[27px] bg-gradient-to-r from-[#AD1AAF] to-[#0085A8] rounded-t-[36px] mt-[0.1px]"></div>
          <div className="px-8">
            <h1 className="text-[#303030] dark:text-[#F8FAFC] my-5 font-semibold text-2xl md:text-5xl">
              {title}
            </h1>
            <h2 className="font-normal text-xl md:text-3xl max-w-[618px] mx-auto">
              {subtitle}
            </h2>
          </div>
          <div className="absolute text-[#303030] flex flex-row justify-between items-center bg-[#E9E9E9] gap-x-3 p-0 m-0 dark:bg-[#1C1D20] dark:text-[#F8FAFC] text-lg font-medium bottom-[-15px] left-1/2 -translate-x-1/2">
            <FaCaretLeft className="w-4 h-4 text-[#d5d5d5] translate-x-[-10px]" />
            <div>{date}</div>
            <FaCaretRight className="w-4 h-4 text-[#d5d5d5] translate-x-[10px]" />
          </div>
        </div>
        <div className="mt-20">{children}</div>
      </div>
      <SocialLinks />
    </>
  );
};

export default BlogLayout;
