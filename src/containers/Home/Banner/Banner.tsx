import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    let timmer: string | number | NodeJS.Timeout | undefined;
    const startAutoplay = () => {
      clearInterval(timmer);
      timmer = setInterval(() => {
        api?.scrollNext();
      }, 5000);
    };

    const stopAutoplay = () => {
      if (api) clearInterval(timmer);
    };

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
      <div className={cn('banner-container')}>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            duration: 30,
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
      </div>
    </div>
  );
}

export default Banner;
