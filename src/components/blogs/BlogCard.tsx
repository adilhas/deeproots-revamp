import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  subtitle: string;
  image?: string;
  slug?: string;
}

const BlogCard = ({
  title,
  description,
  date,
  image,
  subtitle,
  slug,
}: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-[#EEEEEE] dark:bg-[#1C1D20] dark:text-[#F1F5F9] rounded-4xl overflow-hidden  border border-[#D4D4D4] dark:border-[#737373] w-full max-w-[383px] h-[390px]"
    >
      {image && (
        <div className="w-full h-[102px] relative overflow-hidden ">
          <Image
            src={image}
            alt="blog"
            fill
            className="object-cover scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="flex-1 flex flex-col justify-between">
          <h3 className="font-semibold text-2xl min-h-[96px] text-[#303030] dark:text-[#F8FAFC] mb-1 line-clamp-3">
            {title} {subtitle}
          </h3>
          <p className="text-md line-clamp-4">{description}</p>
        </div>
        <p className="text-lg mt-4">{date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
