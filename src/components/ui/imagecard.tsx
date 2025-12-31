import { cn } from '@/lib/cn';
import Image from 'next/image';
import React, { forwardRef } from 'react';

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
}

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(
  ({ image, title, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn("group md:h-40 h-27 w-28 bg-cream text-center pb-3 px-2 pt-2", props.className)}>
        <div className='overflow-hidden h-[95%]'>
          <Image draggable="false" src={image} alt={title} width={200} height={200} className='w-full group-hover:scale-110 duration-100 transition-all ease-in-out h-full' />

        </div>
        <h3 className='text-xs font-semibold font-taylerSwift italic'>{title}</h3>
      </div>
    );
  }
);

ImageCard.displayName = 'ImageCard';

export default ImageCard;
