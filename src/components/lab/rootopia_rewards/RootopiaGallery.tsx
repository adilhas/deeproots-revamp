'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RootopiaGallery = () => {
  const galleryImages = [
    '/lab/rootopia-gallery-1.png',
    '/lab/rootopia-gallery-2.png',
    '/lab/rootopia-gallery-3.png',
    '/lab/rootopia-gallery-4.png',
    '/lab/rootopia-gallery-5.png',
    '/lab/rootopia-gallery-6.png',
    '/lab/rootopia-gallery-7.png',
    '/lab/rootopia-gallery-8.png',
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = galleryImages[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="py-16 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-2">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold w-fit">Rootopia Gallery</h2>
          <p className="text-white w-fit mt-2 text-lg">
            Get emersed in the experience of becoming a Hero
          </p>
        </div>

        {/* Image + Arrows */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {/* Left Arrow (outside only on md+) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex bg-white/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Large Image */}
          <div className="relative w-[600px] h-[600px] rounded-md overflow-hidden">
            <Image
              src={selectedImage}
              alt="Selected Rootopia"
              fill
              className="object-cover"
            />

            {/* Arrows inside on small screens */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 text-white p-2 rounded-full hover:bg-black/70 transition md:hidden"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 text-white p-2 rounded-full hover:bg-black/70 transition md:hidden"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Right Arrow (outside only on md+) */}
          <button
            onClick={handleNext}
            className="hidden md:flex bg-white/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-8 gap-2">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-full aspect-[10/7] cursor-pointer rounded-md overflow-hidden border-2 ${
                selectedIndex === index
                  ? 'border-yellow-500'
                  : 'border-transparent'
              } hover:border-yellow-500 transition`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RootopiaGallery;
