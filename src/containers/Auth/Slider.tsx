import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui';
import { cn } from '@/libs/utils';
import { useEffect, useState } from 'react';

type SliderProps = {
  className?: string;
};
function Slider(props: SliderProps) {
  const { className } = props;
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    let timmer: string | number | NodeJS.Timeout | undefined;
    const startAutoplay = () => {
      clearInterval(timmer);
      timmer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === 2) return 0;
          return prev + 1;
        });
        api?.scrollNext();
      }, 3000);
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
    <aside className={cn('endow', className)}>
      <Carousel
        className='w-ful'
        opts={{
          align: 'start',
          loop: true,
          duration: 30,
          startIndex: 0,
        }}
        setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <div>
              <img src='/imgs/chuongtrinhkhuyenmai_banner.jpg' className={cn('w-full')} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src='/imgs/chuongtrinhtichdiem_banner.jpg' className={cn('w-full')} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src='/imgs/quatangsinhnhat_banner.jpg' className={cn('w-full')} />
            </div>
          </CarouselItem>
        </CarouselContent>
        <ul className={cn('dot-container flex space-x-1 absolute bottom-[-24px] left-[50%] translate-x-[-50%] ')}>
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index} className={cn('dot-item', index === currentIndex && 'dot-item--active')} />
          ))}
        </ul>
      </Carousel>
    </aside>
  );
}

export default Slider;
