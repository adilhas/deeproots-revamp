import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  name: string;
  url: string;
  description: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

const TopicCard: React.FC<Props> = ({
  name,
  url,
  description,
  image,
  className,
  style,
}) => {
  return (
    <div
      className={clsx(
        'w-full flex flex-col rounded-2xl overflow-hidden',
        className
      )}
      style={{ height: '100%', ...style }}
    >
      <div className="p-3">
        <div className="h-44 md:h-40 w-full relative overflow-hidden rounded-xl">
          <Image
            src={image}
            fill
            alt={`${name} Header`}
            className="object-cover rounded-2xl object-center"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 px-3 pb-2 ">
        <div className="flex-1">
          <h2 className="text-[16px] text-xl font-bold tracking-wider text-[#0F172A]">
            {name}
          </h2>
          <p className="text-[#4B5563] text-md my-2">{description}</p>
        </div>

        <div className="h-4" />

        <Link
          href={url}
          className="bg-white text-[#4B5563] text-center py-2 rounded-md"
        >
          Learn
        </Link>
      </div>
    </div>
  );
};

export default TopicCard;
