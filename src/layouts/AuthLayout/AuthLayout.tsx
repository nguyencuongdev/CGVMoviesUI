import { cn } from '@/libs/utils';
import { Header, Footer } from '@/components';
import { Slider } from '@/containers/Auth';
import './AuthLayout.scss';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('wrapper container-fluid')}>
      <Header />
      <div className={cn('main flex main-container py-6')}>
        <div className={cn('main-content w-[60%]')}>{children}</div>
        <Slider className={cn('flex-1 ml-6 border-l')} />
      </div>
      <div className={cn('seprator w-full h-[2px] bg-black my-6')} />
      <Footer />
    </div>
  );
}

export default AuthLayout;
