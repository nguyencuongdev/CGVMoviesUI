import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { cn } from '@/libs/utils';
import './MovieSelection.scss';
import { MovieHot } from '@/types';
import { Button } from '@/components/ui';

import ArrowLeftIcon from '@/assets/images/icons/angle-small-left.png';
import ArrowRightIcon from '@/assets/images/icons/angle-small-right.png';
import { ArrowRightBorderIcon } from '@/assets/icons';
const movieHotList: MovieHot[] = [
  {
    id: 1,
    name: 'Nhà gia tiên',
    posterMovie: './imgs/poster-movies/nha_gia_tien.jpg',
    age: 18,
  },
  {
    id: 2,
    name: 'Nữ tu bóng tối',
    posterMovie: './imgs/poster-movies/nu_tu_bong_toi.jpg',
    age: 18,
  },
  {
    id: 3,
    name: 'Captain America: Thế giới mới',
    posterMovie: './imgs/poster-movies/anh_hung_my_new.jpg',
    age: 16,
  },
  {
    id: 4,
    name: 'Rider: giao hàng cho ma',
    posterMovie: './imgs/poster-movies/rider_giao_hang_cho_ma.jpg',
    age: 18,
  },
  {
    id: 5,
    name: 'Đèn Âm Hồn',
    posterMovie: './imgs/poster-movies/den_am_hong.jpg',
    age: 18,
  },
  {
    id: 6,
    name: 'Đại chiến Titan khổng lồ',
    posterMovie: './imgs/poster-movies/dai_chien_titan.jpg',
    age: 13,
  },
];

function MovieSelection() {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  return (
    <div className={cn('movie-hot my-6')}>
      <h2 className={cn('movie-hot-title flex items-center')}>
        <div className={cn('border-b border-t border-black h-2 flex-1')} />
        <div className={cn('mx-2')}>
          <img src='./imgs/h3_movie_selection.gif' alt='movie-selection' />
        </div>
        <div className={cn('border-b border-t border-black h-2 flex-1')} />
      </h2>
      <div className={cn('movie-hot-content mt-3 relative')}>
        <Carousel
          opts={{
            align: 'start',
            duration: 30,
            startIndex: 0,
            slidesToScroll: 1,
          }}
          setApi={setApi}>
          <CarouselContent>
            {movieHotList.map((movie: MovieHot) => {
              return (
                <CarouselItem className={cn('carousel-item basis-1/4 h-[332px]')} key={movie.id}>
                  <div className={cn('carousel-item-img movie-hot-item w-full h-full overflow-hidden relative')}>
                    <Link to={`/movies/detail/${movie.id}`} className={cn('block w-full h-full')}>
                      <img src={movie.posterMovie} alt={movie.name} className={cn('w-full h-full object-cover')} />
                    </Link>
                    <div
                      className={cn('movie-hot-age absolute top-3 left-3 uppercase p-1 bg-[#e8e109] rounded-[2px]', {
                        'bg-[#e71a0f]': movie.age >= 18,
                        'bg-[#f3a001]': movie.age >= 16 && movie.age < 18,
                      })}>
                      <span className={cn('text-white')}>{movie.age}+</span>
                    </div>
                    <Button
                      className={cn(
                        'movie-hot-play-trailer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#e71a0f] hover:bg-[#df5750] flex-col box-content gap-0',
                      )}>
                      <div className={cn('w-6 h-6')}>
                        <ArrowRightBorderIcon fill='white' className='inline-block !w-full !h-full' />
                      </div>
                      <p className={cn('text-white')}>Play</p>
                    </Button>
                    <div className={cn('absolute bottom-0 right-0 left-0 movie-hot-info')}>
                      <h4
                        className={cn(
                          'text-center font-bold text-sm text-white p-2 text-nowrap text-ellipsis overflow-hidden',
                        )}>
                        {movie.name}
                      </h4>
                      <div className={cn('flex justify-between px-3 mb-2')}>
                        <Button
                          className={cn('bg-[#e71a0f] hover:bg-[#df5750]')}
                          onClick={() => {
                            navigate(`/movies/detail/${movie.id}`);
                          }}>
                          Xem chi tiết
                        </Button>
                        <Button
                          className={cn('bg-[#e71a0f] hover:bg-[#df5750]')}
                          onClick={() => {
                            navigate(`/movies/detail/${movie.id}`);
                          }}>
                          Mua vé
                        </Button>
                      </div>
                    </div>
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
          {currentIndex !== movieHotList.length - 1 && (
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
    </div>
  );
}

export default MovieSelection;
