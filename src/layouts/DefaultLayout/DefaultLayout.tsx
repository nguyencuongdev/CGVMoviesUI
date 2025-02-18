import { Header } from '@/components';
import { cn } from '@/lib/utils';
import './DefaultLayout.scss';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('wrapper container-fluid')}>
      <Header />
      <div className={cn('main')}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
