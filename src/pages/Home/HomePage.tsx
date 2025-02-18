import { Category, Banner } from '@/containers/Home';
import { cn } from '@/lib/utils';

const HomePage = () => {
  return (
    <div className={cn('home-container')}>
      <Category />
      <Banner />
    </div>
  );
};

export default HomePage;
