import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import IconNewsOffer from '@/assets/images/icons/icon_promotion25.png';
import IconTicket from '@/assets/images/icons/icon_ticket25.png';
import IconLogin from '@/assets/images/icons/icon_login25.png';
import { Button } from '../../ui/button';
import { cn } from '@/lib/utils';
import { localeActions } from '@/store/localeSlice';
import './NavigationTop.scss';
import { RootStateType } from '@/store';
import { FormattedMessage } from 'react-intl';

const navigationTopList = [
  {
    icon: IconNewsOffer,
    label: 'news-offer',
    to: '/newsoffer',
  },
  {
    icon: IconTicket,
    label: 'my-ticket',
    to: '/myticket',
  },
  {
    icon: IconLogin,
    label: 'account',
    to: '/login',
  },
];

function NavigationTop() {
  const dispath = useDispatch();
  const { locale } = useSelector((state: RootStateType) => state.locale);
  const handleChangeLanguage = (locale: string) => {
    dispath(localeActions.changeLocale(locale));
  };

  return (
    <div className={cn('flex justify-end items-center header-top')}>
      <div className={cn('flex justify-between nav-top-list')}>
        {navigationTopList.map((item, index) => {
          return (
            <div key={index} className={cn('last:mr-0 mx-2 nav-top-item')}>
              <Link to={item.to} className={cn('flex items-center nav-top-link')}>
                <img src={item.icon} alt={item.label} />
                <span className={cn('ml-1 uppercase text-sm')}>
                  <FormattedMessage id={item.label} />
                </span>
              </Link>
            </div>
          );
        })}
        <div>
          <Button
            className={cn('h-[22px] bg-[#898987] w-[40px] rounded-r-none cursor-pointer,', {
              'bg-red-600': locale === 'vi',
            })}
            onClick={() => handleChangeLanguage('vi')}>
            VN
          </Button>
          <Button
            className={cn('h-[22px] w-[40px] rounded-l-none bg-[#898987] text-white cursor-pointer', {
              'bg-red-600': locale === 'en',
            })}
            onClick={() => handleChangeLanguage('en')}>
            EN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavigationTop;
