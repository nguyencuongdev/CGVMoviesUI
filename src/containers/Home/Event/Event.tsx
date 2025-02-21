import { cn } from '@/lib/utils';
import './Event.scss';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui';
import ArrowLeftIcon from '@/assets/images/icons/angle-small-left.png';
import ArrowRightIcon from '@/assets/images/icons/angle-small-right.png';
import { FormattedMessage } from 'react-intl';

const eventList = [
  {
    id: 1,
    srcPoster: './imgs/poster_events/240x201_14_.png',
  },
  {
    id: 2,
    srcPoster: './imgs/poster_events/2024_dec_u22_n_o_240x201.png',
  },
  {
    id: 3,
    srcPoster: './imgs/poster_events/birthday_popcorn_box_240x201.png',
  },
  {
    id: 4,
    srcPoster: './imgs/poster_events/happy_day_oct_28_n_o_240x201.jpg',
  },
  {
    id: 5,
    srcPoster: './imgs/poster_events/t4vv_240x201.jpg',
  },
];

function Event() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  return (
    <div>
      <div className={cn('event-title')}>
        <h2 className={cn('flex items-center')}>
          <div className={cn('border-b border-t border-black h-2 flex-1')} />
          <div className={cn('mx-2')}>
            <img src='./imgs/h3_event.gif' alt='event-title' />
          </div>
          <div className={cn('border-b border-t border-black h-2 flex-1')} />
        </h2>
        <div className={cn('event-navigation flex justify-center')}>
          <div className={cn('event-navigation-bg flex')}>
            <Link to={'/membership'} className={cn('text-white text-sm')}>
              <FormattedMessage id='membership-cgv' />
            </Link>
            <div className={cn('w-[1px] h-full bg-white mx-3')} />
            <Link to={'/news-offer'} className={cn('text-white text-sm')}>
              <FormattedMessage id='news-offer' />
            </Link>
          </div>
        </div>
      </div>
      <div className={cn('event-content mt-3 relative')}>
        <Carousel
          opts={{
            align: 'start',
            duration: 30,
            startIndex: 0,
            slidesToScroll: 1,
          }}
          setApi={setApi}>
          <CarouselContent>
            {eventList.map(event => {
              return (
                <CarouselItem className={cn('carousel-item basis-1/4 h-[200px]')} key={event.id}>
                  <div className={cn('carousel-item-img event-item w-full h-full overflow-hidden relative')}>
                    <Link to={`/news-offer/${event.id}`} className={cn('block w-full h-full')}>
                      <img
                        src={event.srcPoster}
                        alt={event + ' ' + event.id}
                        className={cn('w-full h-full object-cover')}
                      />
                    </Link>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* Button next and prev carousel */}
          {currentIndex !== 3 && (
            <Button
              onClick={() => {
                if (api) {
                  setCurrentIndex(prev => prev - 1);
                  api.scrollPrev();
                }
              }}
              className={cn(
                'absolute carousel-btn rounded-l-full h-[60px] w-[32px] left-[-32px] p-0 top-[50%] translate-y-[-50%] overflow-hidden',
              )}>
              <img
                src={ArrowLeftIcon}
                alt='btn prev carousel'
                width={32}
                height={32}
                className={cn('relative left-[4px]')}
              />
            </Button>
          )}
          {currentIndex !== eventList.length - 1 && (
            <Button
              onClick={() => {
                if (api) {
                  setCurrentIndex(prev => prev + 1);
                  api.scrollNext();
                }
              }}
              className={cn(
                'absolute carousel-btn rounded-r-full h-[60px] w-[32px] right-[-32px] p-0 top-[50%] translate-y-[-50%] overflow-hidden',
              )}>
              <img
                src={ArrowRightIcon}
                alt='btn next carousel'
                width={32}
                height={32}
                className={cn('relative left-[-4px]')}
              />
            </Button>
          )}
        </Carousel>
      </div>
      <div className='sperator h-[2px] bg-black my-6' />
      <div className={cn('event-default grid grid-cols-4 gap-4')}>
        <div className={cn('event-default-item overflow-hidden relative')}>
          <Link to={`/news-offer/#`} className={cn('block w-full h-full')}>
            <img
              src='./imgs/poster_events/214x245.jpg'
              alt='event default 1'
              className={cn('event-item-img w-full h-full object-cover border border-black')}
            />
          </Link>
        </div>
        <div className={cn('event-default-item col-span-2 event-item-lg relative')}>
          <Link to={`/news-offer/#`} className={cn('block w-full h-full')}>
            <img
              src='./imgs/poster_events/2024_Dec_U22_N_O_496x267_1.png'
              alt='event default 1'
              className={cn('event-item-img w-full h-full border border-black')}
            />
          </Link>
        </div>
        <div className={cn('event-default-item overflow-hidden relative')}>
          <Link to={`/news-offer/#`} className={cn('block w-full h-full')}>
            <img
              src='./imgs/poster_events/thue-rap.png'
              alt='event default 1'
              className={cn('event-item-img w-full h-full border border-black object-cover')}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Event;
