import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/libs/utils';

import './Banner.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    srcImg: './imgs/980x448_13_.png',
  },
  {
    id: 2,
    srcImg: './imgs/980x448_68_.jpg',
  },
  {
    id: 3,
    srcImg: './imgs/980x448_286.jpg',
  },
  {
    id: 3,
    srcImg: './imgs/b_n_sao_c_a_980x448_3.jpg',
  },
];

function Banner() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    let timmer: string | number | NodeJS.Timeout | undefined;
    const startAutoplay = () => {
      clearInterval(timmer);
      timmer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === data.length - 1) return 0;
          return prev + 1;
        });
        api?.scrollNext();
      }, 5000);
    };

    const stopAutoplay = () => {
      if (api) clearInterval(timmer);
    };

    api?.on('select', () => {
      setCurrentIndex(api?.selectedScrollSnap());
    });

    api?.on('pointerDown', stopAutoplay);
    api?.on('pointerUp', startAutoplay);
    api?.on('scroll', startAutoplay);
    api?.on('slideFocus', stopAutoplay);
    api?.on('slidesChanged', stopAutoplay);
    startAutoplay();

    return () => clearInterval(timmer);
  }, [api]);

  return (
    <div className={cn('banner')}>
      <div className={cn('banner-container relative')}>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            duration: 30,
            startIndex: 0,
          }}
          setApi={setApi}>
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className={cn('carousel-item')}>
                <div className={cn('carousel-item-img')}>
                  <Link to='#' className={cn('inline-block w-full h-full')}>
                    <img src={item.srcImg} alt={`img-banner + ${index}`} className={cn('w-full h-full object-cover')} />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <ul className={cn('dot-container flex space-x-1 absolute bottom-6 left-[50%] translate-x-[-50%]')}>
          {data.map((_, index) => (
            <li key={index} className={cn('dot-item', index === currentIndex && 'dot-item--active')} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Banner;
