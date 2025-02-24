import { Category, Banner, MovieSelection, Event } from '@/containers/Home';
import { cn } from '@/libs/utils';

const HomePage = () => {
  return (
    <div className={cn('home-container')}>
      <Category />
      <Banner />
      <MovieSelection />
      <Event />
      <div className='sperator h-[2px] bg-black my-6' />
    </div>
  );
};

export default HomePage;
