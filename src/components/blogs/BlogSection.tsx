'use client';

import React from 'react';
import { allBlogs } from './data';
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <section className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#696969] dark:text-[#8F8F8F] py-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-center text-xl text-[#303030] dark:text-[#F8FAFC] font-extrabold tracking-widest mb-6">
        BLOG
      </h1>

      {/* Tabs + Search */}
      {/* <div className="flex flex-wrap text-xl  justify-center items-center gap-2 mb-8">
        <div className="flex flex-row justify-start gap-3">
          {[
            'All Posts',
            'Community',
            'Company',
            'Campaigns',
            'Quest',
            'News',
            'Events',
          ].map((tab) => (
            <a key={tab} className={` text-[#696969] dark:text-[#8F8F8F]`}>
              {tab}
            </a>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search posts"
          className="input input-bordered input-sm w-full max-w-xs ml-auto"
        />
      </div> */}

      {/* Pinned Blogs */}
      {/* <div className="mb-8">
        <h2 className="text-3xl text-[#303030] dark:text-[#F8FAFC] font-semibold mb-4">
          Pinned Blogs
        </h2>
        <div className="flex flex-wrap gap-4">
          {pinnedBlogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div> */}

      {/* All News */}
      <div>
        {/* <h2 className="text-3xl text-[#303030] dark:text-[#F8FAFC] font-semibold mb-4">
          All news
        </h2> */}
        <div className="flex flex-wrap gap-4 w-fit">
          {allBlogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
