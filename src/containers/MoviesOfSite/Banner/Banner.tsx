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
    srcImg: '/imgs/hinh_anh_cgv_aeon_hadong1.png',
  },
  {
    id: 2,
    srcImg: '/imgs/hinh_anh_cgv_aeon_hadong4.png',
  },
  {
    id: 3,
    srcImg: '/imgs/hinh_anh_cgv_aeon_hadong5.png',
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
        <div className={cn('banner-info-site p-6')}>
          <p className={cn('text-white text-[12px] font-thin')}>
            Tầng 3 & 4 – TTTM AEON MALL HÀ ĐÔNG, P. Dương Nội, Q. Hà Đông, Hà Nội
          </p>
          <p className={cn('text-white text-[12px] font-thin')}>Fax: +84 4 6 275 5240</p>
          <p className={cn('text-white text-[12px] font-thin')}>Hotline: 1900 6017</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
