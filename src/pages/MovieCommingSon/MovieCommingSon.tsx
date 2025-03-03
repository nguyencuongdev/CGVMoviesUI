import styles from './MovieCommingSon.module.scss';
import { Button } from '@/components/ui';
import { cn } from '@/libs/utils';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { LikeIcon, TicketIcon } from '@/assets/icons';

function MovieCommingSon() {
  return (
    <div className={cn(styles['movie-comming-son'])}>
      <h1 className={cn(styles['movie-comming-son-title'], 'text-[28px] text-[#222] my-3')}>
        <FormattedMessage id='movie-comming-son-title' />
      </h1>
      <div className={cn('flex justify-end', styles['movie-comming-son-title'])}>
        <Link to='/movies/now-showing'>
          <FormattedMessage id='movie-now-showing-title' />
        </Link>
      </div>
      <div className={cn('sperator h-[2px] mb-3 bg-black')} />
      <div className={cn(styles['movie-comming-son-list'], 'grid grid-cols-4 gap-x-16 gap-y-6')}>
        <div className={cn(styles['movie-comming-son-item'], 'relative')}>
          <div className={cn(styles['movie-comming-son-item__img'], 'p-1 bg-black')}>
            <img src='/imgs/poster-movies/nha_gia_tien.jpg' alt='poster phim nha gia tien' />
          </div>
          <div
            className={cn('movie-hot-age absolute top-3 left-3 uppercase p-1 bg-[#e8e109] rounded-[2px]', {
              'bg-[#e71a0f]': 18 >= 18,
              // 'bg-[#f3a001]': movie.age >= 16 && movie.age < 18,
            })}>
            <span className={cn('text-white')}>18+</span>
          </div>
          <div className={cn(styles['moviw-comming-son-item-info'])}>
            <h4
              className={cn(
                'movie-comming-son-name font-bold text-[#333] uppercase my-2 text-ellipsis text-nowrap overflow-hidden',
              )}>
              Nhà gia tiên
            </h4>
            <p className={cn('text-sm text-clip line-clamp-2 max-h-[40px]')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-types-label' />
              </span>
              : Gia đình, Hài
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-running-time-label' />
              </span>
              : 117 phút
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-release-date-label' />
              </span>
              : 21-02-2025
            </p>
          </div>
          <div className={cn(styles['movie-comming-son-item__btn'], 'flex mt-6 items-center')}>
            <Button className={cn(styles['movie-btn-item'], '!bg-blue-500 text-[10px] w-[90px] h-[28px]')}>
              <LikeIcon fill='white' />
              <FormattedMessage id='like-label' />: 115
            </Button>
            <Button className={cn(styles['movie-btn-item'], 'bg-red-500 ml-2 text-[10px]')}>
              <TicketIcon fill='white' />
              <FormattedMessage id='buy-ticket' />
            </Button>
          </div>
        </div>
        <div className={cn(styles['movie-comming-son-item'], 'relative')}>
          <div className={cn(styles['movie-comming-son-item__img'], 'p-1 bg-black')}>
            <img src='/imgs/poster-movies/nha_gia_tien.jpg' alt='poster phim nha gia tien' />
          </div>
          <div
            className={cn('movie-hot-age absolute top-3 left-3 uppercase p-1 bg-[#e8e109] rounded-[2px]', {
              'bg-[#e71a0f]': 18 >= 18,
              // 'bg-[#f3a001]': movie.age >= 16 && movie.age < 18,
            })}>
            <span className={cn('text-white')}>18+</span>
          </div>
          <div className={cn(styles['moviw-comming-son-item-info'])}>
            <h4
              className={cn(
                'movie-comming-son-name font-bold text-[#333] uppercase my-2 text-ellipsis text-nowrap overflow-hidden',
              )}>
              Nhà gia tiên
            </h4>
            <p className={cn('text-sm text-clip line-clamp-2 max-h-[40px]')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-types-label' />
              </span>
              : Gia đình, Hài
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-running-time-label' />
              </span>
              : 117 phút
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-release-date-label' />
              </span>
              : 21-02-2025
            </p>
          </div>
          <div className={cn(styles['movie-comming-son-item__btn'], 'flex mt-6 items-center')}>
            <Button className={cn(styles['movie-btn-item'], '!bg-blue-500 text-[10px] w-[90px] h-[28px]')}>
              <LikeIcon fill='white' />
              <FormattedMessage id='like-label' />: 115
            </Button>
            <Button className={cn(styles['movie-btn-item'], 'bg-red-500 ml-2 text-[10px]')}>
              <TicketIcon fill='white' />
              <FormattedMessage id='buy-ticket' />
            </Button>
          </div>
        </div>
        <div className={cn(styles['movie-comming-son-item'], 'relative')}>
          <div className={cn(styles['movie-comming-son-item__img'], 'p-1 bg-black')}>
            <img src='/imgs/poster-movies/nha_gia_tien.jpg' alt='poster phim nha gia tien' />
          </div>
          <div
            className={cn('movie-hot-age absolute top-3 left-3 uppercase p-1 bg-[#e8e109] rounded-[2px]', {
              'bg-[#e71a0f]': 18 >= 18,
              // 'bg-[#f3a001]': movie.age >= 16 && movie.age < 18,
            })}>
            <span className={cn('text-white')}>18+</span>
          </div>
          <div className={cn(styles['moviw-comming-son-item-info'])}>
            <h4
              className={cn(
                'movie-comming-son-name font-bold text-[#333] uppercase my-2 text-ellipsis text-nowrap overflow-hidden',
              )}>
              Nhà gia tiên
            </h4>
            <p className={cn('text-sm text-clip line-clamp-2 max-h-[40px]')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-types-label' />
              </span>
              : Gia đình, Hài
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-running-time-label' />
              </span>
              : 117 phút
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-release-date-label' />
              </span>
              : 21-02-2025
            </p>
          </div>
          <div className={cn(styles['movie-comming-son-item__btn'], 'flex mt-6 items-center')}>
            <Button className={cn(styles['movie-btn-item'], '!bg-blue-500 text-[10px] w-[90px] h-[28px]')}>
              <LikeIcon fill='white' />
              <FormattedMessage id='like-label' />: 115
            </Button>
            <Button className={cn(styles['movie-btn-item'], 'bg-red-500 ml-2 text-[10px]')}>
              <TicketIcon fill='white' />
              <FormattedMessage id='buy-ticket' />
            </Button>
          </div>
        </div>
        <div className={cn(styles['movie-comming-son-item'], 'relative')}>
          <div className={cn(styles['movie-comming-son-item__img'], 'p-1 bg-black')}>
            <img src='/imgs/poster-movies/nha_gia_tien.jpg' alt='poster phim nha gia tien' />
          </div>
          <div
            className={cn('movie-hot-age absolute top-3 left-3 uppercase p-1 bg-[#e8e109] rounded-[2px]', {
              'bg-[#e71a0f]': 18 >= 18,
              // 'bg-[#f3a001]': movie.age >= 16 && movie.age < 18,
            })}>
            <span className={cn('text-white')}>18+</span>
          </div>
          <div className={cn(styles['moviw-comming-son-item-info'])}>
            <h4
              className={cn(
                'movie-comming-son-name font-bold text-[#333] uppercase my-2 text-ellipsis text-nowrap overflow-hidden',
              )}>
              Nhà gia tiên
            </h4>
            <p className={cn('text-sm text-clip line-clamp-2 max-h-[40px]')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-types-label' />
              </span>
              : Gia đình, Hài
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-running-time-label' />
              </span>
              : 117 phút
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-release-date-label' />
              </span>
              : 21-02-2025
            </p>
          </div>
          <div className={cn(styles['movie-comming-son-item__btn'], 'flex mt-6 items-center')}>
            <Button className={cn(styles['movie-btn-item'], '!bg-blue-500 text-[10px] w-[90px] h-[28px]')}>
              <LikeIcon fill='white' />
              <FormattedMessage id='like-label' />: 115
            </Button>
            <Button className={cn(styles['movie-btn-item'], 'bg-red-500 ml-2 text-[10px]')}>
              <TicketIcon fill='white' />
              <FormattedMessage id='buy-ticket' />
            </Button>
          </div>
        </div>
        <div className={cn(styles['movie-comming-son-item'], 'relative')}>
          <div className={cn(styles['movie-comming-son-item__img'], 'p-1 bg-black')}>
            <img src='/imgs/poster-movies/nha_gia_tien.jpg' alt='poster phim nha gia tien' />
          </div>
          <div
            className={cn('movie-hot-age absolute top-3 left-3 uppercase p-1 bg-[#e8e109] rounded-[2px]', {
              'bg-[#e71a0f]': 18 >= 18,
              // 'bg-[#f3a001]': movie.age >= 16 && movie.age < 18,
            })}>
            <span className={cn('text-white')}>18+</span>
          </div>
          <div className={cn(styles['moviw-comming-son-item-info'])}>
            <h4
              className={cn(
                'movie-comming-son-name font-bold text-[#333] uppercase my-2 text-ellipsis text-nowrap overflow-hidden',
              )}>
              Nhà gia tiên
            </h4>
            <p className={cn('text-sm text-clip line-clamp-2 max-h-[40px]')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-types-label' />
              </span>
              : Gia đình, Hài
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-running-time-label' />
              </span>
              : 117 phút
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-release-date-label' />
              </span>
              : 21-02-2025
            </p>
          </div>
          <div className={cn(styles['movie-comming-son-item__btn'], 'flex mt-6 items-center')}>
            <Button className={cn(styles['movie-btn-item'], '!bg-blue-500 text-[10px] w-[90px] h-[28px]')}>
              <LikeIcon fill='white' />
              <FormattedMessage id='like-label' />: 115
            </Button>
            <Button className={cn(styles['movie-btn-item'], 'bg-red-500 ml-2 text-[10px]')}>
              <TicketIcon fill='white' />
              <FormattedMessage id='buy-ticket' />
            </Button>
          </div>
        </div>
        <div className={cn(styles['movie-comming-son-item'], 'relative')}>
          <div className={cn(styles['movie-comming-son-item__img'], 'p-1 bg-black')}>
            <img src='/imgs/poster-movies/nha_gia_tien.jpg' alt='poster phim nha gia tien' />
          </div>
          <div
            className={cn('movie-hot-age absolute top-3 left-3 uppercase p-1 bg-[#e8e109] rounded-[2px]', {
              'bg-[#e71a0f]': 18 >= 18,
              // 'bg-[#f3a001]': movie.age >= 16 && movie.age < 18,
            })}>
            <span className={cn('text-white')}>18+</span>
          </div>
          <div className={cn(styles['moviw-comming-son-item-info'])}>
            <h4
              className={cn(
                'movie-comming-son-name font-bold text-[#333] uppercase my-2 text-ellipsis text-nowrap overflow-hidden',
              )}>
              Nhà gia tiên
            </h4>
            <p className={cn('text-sm text-clip line-clamp-2 max-h-[40px]')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-types-label' />
              </span>
              : Gia đình, Hài
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-running-time-label' />
              </span>
              : 117 phút
            </p>
            <p className={cn('text-sm')}>
              <span className={cn('font-bold text-[#333]')}>
                <FormattedMessage id='movie-release-date-label' />
              </span>
              : 21-02-2025
            </p>
          </div>
          <div className={cn(styles['movie-comming-son-item__btn'], 'flex mt-6 items-center')}>
            <Button className={cn(styles['movie-btn-item'], '!bg-blue-500 text-[10px] w-[90px] h-[28px]')}>
              <LikeIcon fill='white' />
              <FormattedMessage id='like-label' />: 115
            </Button>
            <Button className={cn(styles['movie-btn-item'], 'bg-red-500 ml-2 text-[10px]')}>
              <TicketIcon fill='white' />
              <FormattedMessage id='buy-ticket' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCommingSon;
