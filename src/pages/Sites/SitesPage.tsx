import { cn } from '@/libs/utils';
import { FormattedMessage } from 'react-intl';
import { Site } from '@/types';
import './SitesPage.scss';

type SiteListProp = {
  data: Site[];
  className?: string;
};

const siteData: Site[] = [
  {
    id: '1',
    name: 'CGV Vincom Center Bà Triệu',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '2',
    name: 'CGV Indochina Plaza Hà Nội',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '3',
    name: 'CGV Vincom Times City',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '4',
    name: 'CGV Tràng Tiền Plaza',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '5',
    name: 'CGV Vincom Metropolis Liễu Giai',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '6',
    name: 'CGV Aeon Hà Đông',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '7',
    name: 'CGV Hồ Gươm Plaza',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '8',
    name: 'CGV Rice City',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '9',
    name: 'CGV Vincom Long Biên',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
  {
    id: '10',
    name: 'CGV Sun Grand Thụy Khuê',
    address: '123 Lô B, Phư��ng 12, Quận 1, TP. HCM',
    status: true,
  },
];

const SiteList = (props: SiteListProp) => {
  const { data, className } = props;
  return (
    <div className={cn('sitelist-container grid grid-cols-4 gap-3', className)}>
      {data.map(item => {
        return (
          <p key={item.id} className={cn('text-[12px]')}>
            {item.name}
          </p>
        );
      })}
    </div>
  );
};
const Sites = () => {
  return (
    <div className={cn('sites-container p-6')}>
      <div className={cn('sites-content')}>
        <h1 className={cn('sites-title')}>
          <FormattedMessage id='sites-title' />
        </h1>
        <div className='sperator h-[2px] bg-[#686767]' />
        <div className={cn('sites-list my-6')}>
          <SiteList data={siteData} />
        </div>
        <div className='sperator h-[2px] bg-[#686767]' />
      </div>
      <div className='sites-content-bg-bottom h-[43px]' />
    </div>
  );
};

export default Sites;
