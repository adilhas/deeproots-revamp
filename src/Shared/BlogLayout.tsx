import ShareBlog from '@/components/blogs/ShareBlog';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { FaShare } from 'react-icons/fa6';

interface IBlogLayout {
  title: string;
  subtitle: string;
  children: ReactNode;
  date: string;
  slug: string;
}

const BlogLayout = ({ title, subtitle, children, date, slug }: IBlogLayout) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex text-md font-sans items-center font-semibold flex-row justify-start gap-1 w-full max-w-[1199px] mx-auto px-2 py-8">
        <Link
          href={'/blogs'}
          className="font-normal flex flex-row items-center gap-2 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" /> Blog
        </Link>
      </div>
      <div className="w-full max-w-[800px] mx-auto px-2">
        <div className="text-center pb-8 relative  border-2 border-[#d5d5d5] dark:border-[#343434] rounded-4xl">
          <div className="w-full h-[27px] bg-gradient-to-r from-[#AD1AAF] to-[#0085A8] rounded-t-[36px] mt-[0.1px]"></div>
          <div className="px-8">
            <h1 className="text-[#303030] dark:text-[#F8FAFC] my-5 font-semibold text-2xl md:text-5xl">
              {title}
            </h1>
            <h2 className="font-normal text-xl md:text-3xl max-w-[618px] mx-auto">
              {subtitle}
            </h2>
            <div className="flex mt-6 flex-row justify-between items-center  gap-x-3  dark:text-[#F8FAFC] text-lg font-medium">
              <div>{date}</div>
              <button onClick={() => setShowModal(true)}>
                <FaShare className="w-6 h-6" />
              </button>
            </div>
          </div>
          <ShareBlog
            shareUrl={`https://deeproots.earth/blog/${slug}`}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
        <div className="mt-20">{children}</div>
      </div>
      <SocialLinks />
    </>
  );
};

export default BlogLayout;
