import './MoviesOfSitePage.scss';
import { cn } from '@/libs/utils';
import { Banner, ListMovieDate } from '@/containers/MoviesOfSite';
import { FormattedMessage } from 'react-intl';
import { Button } from '@/components/ui';
import { useState } from 'react';

const MoviesOfSitePage = () => {
  const [isOpenSchedule, setIsOpenSchedule] = useState<boolean>(true);

  return (
    <div className={cn('movies-of-sites-container')}>
      <div className={cn('movies-of-site-title my-6')}>
        <div className={cn('flex items-center')}>
          <div className={cn('border-b border-t border-black h-2 flex-1')} />
          <div>
            <img src='/imgs/h3_theater.gif' alt='theater title' />
          </div>
          <div className={cn('border-b border-t border-black h-2 flex-1')} />
        </div>
        <h1 className={cn('movies-of-sites-name text-center text-[30px] my-6')}>CGV Aeon Hà Đông</h1>
      </div>
      <Banner />
      <div className={cn('movies-of-site-content')}>
        <div className={cn('movie-toggle flex justify-center')}>
          <div className={cn('movie-toggle-bg flex')}>
            <Button
              className={cn(
                'text-white text-sm bg-transparent p-0 shadow-none border-none hover:bg-transparent focus:bg-transparent w-[120px]',
                {
                  'font-bold': isOpenSchedule,
                },
              )}
              onClick={() => setIsOpenSchedule(true)}>
              <FormattedMessage id='movies-of-sites-schedule-label' />
            </Button>
            <div className={cn('w-[1px] h-full bg-white mx-3')} />
            <Button
              className={cn(
                'text-white text-sm bg-transparent p-0 shadow-none border-none hover:bg-transparent focus:bg-transparent w-[120px]',
                {
                  'font-bold': !isOpenSchedule,
                },
              )}
              onClick={() => setIsOpenSchedule(false)}>
              <FormattedMessage id='movies-of-sites-ticket-price-label' />
            </Button>
          </div>
        </div>
        {isOpenSchedule ? (
          <div className={cn('movie-site-schedule text-sm text-[#222] text-justify')}>
            <ListMovieDate />
            <div className={cn('movies-of-sites-list pt-4')}>
              <div className={cn('movies-of-sites-item mb-4')}>
                <div className={cn('movies-of-sites-item-name mb-4 flex')}>
                  <h4 className={cn('text-lg uppercase text-black mr-2')}>Nhà gia tiên</h4>
                  <div
                    className={cn('movie-hot-age uppercase p-1 bg-[#e8e109] rounded-[2px]', {
                      // 'bg-[#e71a0f]': movie.age >= 18,
                      // 'bg-[#f3a001]': movie.age >= 16 && movie.age < 18,
                    })}>
                    <span className={cn('text-white')}>18+</span>
                  </div>
                </div>
                <div className={cn('flex movies-of-sites-item-content')}>
                  <div className={cn('movies-of-sites-item-img w-[183px] mr-2')}>
                    <img src='/imgs/poster-movies/nha_gia_tien.jpg' alt='poster phim nha gia tien' />
                  </div>
                  <div className={cn('movies-of-sites-item-times')}>
                    <div>
                      <h6 className={cn('movies-of-sites-sub-name font-bold text-sm text-black mb-2')}>
                        2D Phụ Đề Tiếng Anh
                      </h6>
                      <div className={cn('grid grid-cols-7 space-x-1')}>
                        <div>
                          <Button variant='outline' className='w-full'>
                            15:30 PM
                          </Button>
                        </div>
                        <div>
                          <Button variant='outline' className='w-full'>
                            15:30 PM
                          </Button>
                        </div>
                        <div>
                          <Button variant='outline' className='w-full'>
                            15:30 PM
                          </Button>
                        </div>
                        <div>
                          <Button variant='outline' className='w-full'>
                            15:30 PM
                          </Button>
                        </div>
                        <div>
                          <Button variant='outline' className='w-full'>
                            15:30 PM
                          </Button>
                        </div>
                        <div>
                          <Button variant='outline' className='w-full'>
                            15:30 PM
                          </Button>
                        </div>
                        <div>
                          <Button variant='outline' className='w-full'>
                            15:30 PM
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className={cn('movie-description-text text-sm text-[#222] text-justify')}>Danh sách giá vé của site</p>
        )}
      </div>
    </div>
  );
};

export default MoviesOfSitePage;
