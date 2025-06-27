'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface ImageBannerProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
  childClassName?: string;
}

const ImageBanner: React.FC<ImageBannerProps> = ({
  src = '/lab/rootopia-bg-frame.png',
  alt = 'Rootopia Reward',
  width = 800,
  height = 400,
  className = '',
  children,
  childClassName,
}) => {
  const containsJustify = (className?: string) =>
    className?.includes('justify-');

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        className="w-full h-full object-fill"
      />
      {children && (
        <div
          className={clsx(
            'absolute inset-0 flex flex-col items-center text-center',
            !containsJustify(childClassName) && 'justify-center',
            childClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageBanner;
