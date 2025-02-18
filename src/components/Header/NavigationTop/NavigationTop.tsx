import { Link } from 'react-router-dom';

import IconNewsOffer from '@/assets/images/icons/icon_promotion25.png';
import IconTicket from '@/assets/images/icons/icon_ticket25.png';
import IconLogin from '@/assets/images/icons/icon_login25.png';
import { Button } from '../../ui/button';
import { cn } from '@/lib/utils';
import './NavigationTop.scss';

const navigationTopList = [
  {
    icon: IconNewsOffer,
    label: 'Tin mới & Ưu đãi',
    to: '/newsoffer',
  },
  {
    icon: IconTicket,
    label: 'Vé Của Tôi',
    to: '/myticket',
  },
  {
    icon: IconLogin,
    label: 'Đăng nhập và đăng ký',
    to: '/login',
  },
];

function NavigationTop() {
  return (
    <div className={cn('flex justify-end items-center header-top')}>
      <div className={cn('flex justify-between nav-top-list')}>
        {navigationTopList.map((item, index) => {
          return (
            <div key={index} className={cn('last:mr-0 mx-2 nav-top-item')}>
              <Link to={item.to} className={cn('flex items-center nav-top-link')}>
                <img src={item.icon} alt={item.label} />
                <span className={cn('ml-1 uppercase text-sm')}>{item.label}</span>
              </Link>
            </div>
          );
        })}
        <div>
          <Button className={cn('h-[22px] bg-red-600 w-[40px] rounded-r-none cursor-pointer')}>VN</Button>
          <Button className={cn('h-[22px] w-[40px] rounded-l-none bg-[#898987] text-white cursor-pointer')}>EN</Button>
        </div>
      </div>
    </div>
  );
}

export default NavigationTop;
