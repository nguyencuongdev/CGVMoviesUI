import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui';
import { cn } from '@/libs/utils';

function ListMovieDate() {
  const currentDate = new Date();

  return (
    <div className={cn('movie-date-list')}>
      <div className={cn('movie-date-list-container relative py-1 border-t-2 border-b-2 border-black')}>
        <Carousel
          opts={{
            align: 'start',
            duration: 30,
            startIndex: 0,
          }}>
          <CarouselContent className={cn('-ml-1')}>
            <CarouselItem className={cn('movie-date-list-itemd basis-1/10 pl-1')}>
              <div className={cn('flex items-center rounded-lg p-1 bg-[#eeee]')}>
                <div>
                  <p className={cn('text-[12px]')}>{String(currentDate.getMonth() + 1).padStart(2, '0')}</p>
                  <p className={cn('text-[12px]')}>
                    {currentDate.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}
                  </p>
                </div>
                <p className={cn('text-[32px] ml-2')}>{String(currentDate.getDate()).padStart(2, '0')}</p>
              </div>
            </CarouselItem>
            {Array.from({ length: 29 }).map((_, index) => {
              const nextDate = new Date();
              nextDate.setDate(currentDate.getDate() + index + 1);
              return (
                <CarouselItem key={index} className={cn('movie-date-list-item basis-1/10 pl-1')}>
                  <div className={cn('flex items-center rounded-lg p-1 bg-[#eeee]')}>
                    <div>
                      <p className={cn('text-[12px]')}>{String(nextDate.getMonth() + 1).padStart(2, '0')}</p>
                      <p className={cn('text-[12px]')}>
                        {nextDate.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}
                      </p>
                    </div>
                    <p className={cn('text-[32px] ml-2')}>{String(nextDate.getDate()).padStart(2, '0')}</p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default ListMovieDate;
