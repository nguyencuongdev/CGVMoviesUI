import { cn } from '@/libs/utils';
import './MovieDetail.scss';
import { FormattedMessage } from 'react-intl';
import { Button } from '@/components/ui';
import { useState } from 'react';
const movie = {
  name: 'Nhà gia tiên',
  director: 'Huỳnh Lập',
  cats: 'Huỳnh Lập, Phương Mỹ Chi, NSƯT Hạnh Thuý, NSƯT Huỳnh Đông, Puka, Đào Anh Tuấn, Trung Dân, Kiều Linh, Lê Nam, Chí Tâm, Thanh Thức, Trác Thuý Miêu, Mai Thế Hiệp, NS Mạnh Dung, NSƯT Thanh Dậu, NS Thanh Hiền, Nguyễn Anh Tú,…',
  typeMovie: {
    id: 1,
    name: 'Phim gia đình, hài',
  },
  descriptionMovie:
    'Nhà Gia Tiên xoay quanh câu chuyện đa góc nhìn về các thế hệ khác nhau trong một gia đình, có hai nhân vật chính là Gia Minh (Huỳnh Lập) và Mỹ Tiên (Phương Mỹ Chi). Trở về căn nhà gia tiên để quay các video “triệu view” trên mạng xã hội, Mỹ Tiên - một nhà sáng tạo nội dung thuộc thế hệ Z vốn không tin vào chuyện tâm linh, hoàn toàn mất kết nối với gia đình, bất ngờ nhìn thấy Gia Minh - người anh trai đã mất từ lâu. Để hồn ma của Gia Minh có thể siêu thoát và không tiếp tục làm phiền mình, Mỹ Tiên bắt tay cùng Gia Minh lên kế hoạch giữ lấy căn nhà gia tiên đang bị họ hàng tranh chấp, đòi ông nội chia tài sản. Đứng trước hàng loạt bí mật động trời trong căn nhà gia tiên, liệu Mỹ Tiên có vượt qua được tất cả để hoàn thành di nguyện của Gia Minh?',
  posterMovie: '/imgs/poster-movies/nha_gia_tien.jpg',
  releaseDate: '1997-08-22',
  timeMovie: '20:00',
  languages: 'English, Vietnamese',
  age: 18,
};

function MovieDetail() {
  const [isOpenDescription, setIsOpenDescription] = useState<boolean>(true);
  return (
    <div>
      <div className={cn('title-page my-3')}>
        <h1 className={cn('title-page-text text-[28px] text-[#222]')}>
          <FormattedMessage id='movie-title-detail-page' />
        </h1>
        <div className={cn('sperator h-[2px] my-3 bg-black')} />
      </div>
      <div className={cn('movie-content flex')}>
        <div className={cn('movie-poster mr-6')}>
          <div className={cn('movie-poster-img')}>
            <img src={movie.posterMovie} alt='movie poster' />
          </div>
          <div className={cn('movie-poster-img')}></div>
          <div className={cn('movie-btn mt-3 flex justify-between')}>
            <Button className={cn('movie-btn-item !bg-blue-500 btn-like')}>Like: 150</Button>
            <Button className={cn('movie-btn-item ml-2')}>Mua vé</Button>
          </div>
        </div>
        <div className={cn('movie-info flex-1')}>
          <h3 className={cn('movie-name text-[24px] text-[#222]')}>{movie.name}</h3>
          <div className={cn('h-[1px] bg-[#d9d6c8] mt-3 mb-6')} />
          <p className={cn('text-sm')}>
            <span className={cn('movie-info-label mr-2 text-black font-semibold text-sm')}>
              <FormattedMessage id='movie-director-label' />:
            </span>
            {movie.director}
          </p>
          <p className={cn('text-sm')}>
            <span className={cn('movie-info-label mr-2 text-black font-semibold text-sm')}>
              <FormattedMessage id='movie-cats-label' />:
            </span>
            {movie.cats}
          </p>
          <p className={cn('text-sm')}>
            <span className={cn('movie-info-label mr-2 text-black font-semibold text-sm')}>
              <FormattedMessage id='movie-types-label' />:
            </span>
            {movie.typeMovie.name}
          </p>
          <p className={cn('text-sm')}>
            <span className={cn('movie-info-label mr-2 text-black font-semibold text-sm')}>
              <FormattedMessage id='movie-release-date-label' />:
            </span>
            {movie.releaseDate}
          </p>
          <p className={cn('text-sm')}>
            <span className={cn('movie-info-label mr-2 text-black font-semibold text-sm')}>
              <FormattedMessage id='movie-running-time-label' />:
            </span>
            {movie.timeMovie}
          </p>
          <p className={cn('text-sm')}>
            <span className={cn('movie-info-label mr-2 text-black font-semibold text-sm')}>
              <FormattedMessage id='movie-language-label' />:
            </span>
            {movie.languages}
          </p>
          <p className={cn('text-sm')}>
            <span className={cn('movie-info-label mr-2 text-black font-semibold text-sm')}>
              <FormattedMessage id='movie-age-label' />:
            </span>
            {movie.age}
          </p>
        </div>
      </div>
      <div className={cn('movie-description my-6')}>
        <div className={cn('movie-toggle flex justify-center')}>
          <div className={cn('movie-toggle-bg flex')}>
            <Button
              className={cn(
                'text-white text-sm bg-transparent p-0 shadow-none border-none hover:bg-transparent focus:bg-transparent w-[120px]',
              )}
              onClick={() => setIsOpenDescription(true)}>
              <FormattedMessage id='movie-detail-descrition-label' />
            </Button>
            <div className={cn('w-[1px] h-full bg-white mx-3')} />
            <Button
              className={cn(
                'text-white text-sm bg-transparent p-0 shadow-none border-none hover:bg-transparent focus:bg-transparent w-[120px]',
              )}
              onClick={() => setIsOpenDescription(false)}>
              <FormattedMessage id='movie-detail-trailer-label' />
            </Button>
          </div>
        </div>
        {isOpenDescription && (
          <p className={cn('movie-description-text text-sm text-[#222] text-justify')}>{movie.descriptionMovie}</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
