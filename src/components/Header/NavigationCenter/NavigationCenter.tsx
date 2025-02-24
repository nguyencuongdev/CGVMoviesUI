import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui';

import CGVLogo from '@/assets/images/cgvlogo.png';
import BuyTicket from '@/assets/images/mua-ve_ngay.png';
import './NavigationCenter.scss';
import { cn } from '@/libs/utils';

const navigationCenterList = [
  {
    icon: null,
    label: 'navigation-movies',
    to: null,
    childrens: [
      {
        icon: null,
        label: 'navigation-movies-now-showing',
        to: '/movies/now-showing',
        childrens: null,
      },
      {
        icon: null,
        label: 'navigation-movies-comming-son',
        to: '/movies/comming-soon',
        childrens: null,
      },
    ],
  },
  {
    icon: null,
    label: 'navigation-theaters',
    to: null,
    childrens: [
      {
        icon: null,
        label: 'navigation-theaters-all',
        to: '/raps',
        childrens: null,
      },
      {
        icon: null,
        label: 'navigation-theaters-special',
        to: '/raps/theaters-special',
        childrens: null,
      },
      {
        icon: null,
        label: 'navigation-theaters-3d',
        to: '/raps/3d',
        childrens: null,
      },
    ],
  },
  {
    icon: null,
    label: 'navigation-membership',
    to: null,
    childrens: [
      {
        icon: null,
        label: 'navigation-membership-account',
        to: '/accounts',
        childrens: null,
      },
      {
        icon: null,
        label: 'navigation-membership-benefit',
        to: '/accounts/cgv-membership',
        childrens: null,
      },
    ],
  },
  {
    icon: null,
    label: 'navigation-cultureplex',
    to: null,
    childrens: [
      {
        icon: null,
        label: 'navigation-cultureplex-store-online',
        to: '/online-store',
        childrens: null,
      },
      {
        icon: null,
        label: 'navigation-cultureplex-hall-rental',
        to: '/cinemas/sale',
        childrens: null,
      },
      {
        icon: null,
        label: 'navigation-cultureplex-e-cgv',
        to: 'cgv-online',
        childrens: null,
      },
      {
        icon: null,
        label: 'navigation-cultureplex-egiff',
        to: '/cgv-egiff',
        childrens: null,
      },
      {
        icon: null,
        label: 'navigation-cultureplex-rules',
        to: '/cgv-rules',
        childrens: null,
      },
    ],
  },
];

type NavigationMenuItemProps = {
  icon?: string | null;
  label: string;
  to: string | null;
  childrens?: NavigationMenuItemProps[] | null;
  className?: string;
};

type NavigationMenuProps = {
  listMenu: NavigationMenuItemProps[];
  className?: string;
};

type MenubarSubMenuProps = NavigationMenuItemProps;

function NavigationMenu(props: NavigationMenuProps) {
  const { listMenu, className } = props;
  return (
    <div className={cn('nav-container flex', className)}>
      {listMenu.map((item, index) => (
        <NavigationMenuItem
          label={item.label}
          to={item.to}
          childrens={item.childrens}
          key={index}
          className='mx-[2px]'
        />
      ))}
    </div>
  );
}

function NavigationMenuItem(props: NavigationMenuItemProps) {
  const { label, to, childrens, className, icon } = props;

  if (!to && childrens && childrens.length > 0) {
    return (
      <Menubar className={cn('nav-item nav-menu-item bg-transparent rounded-none border-0 shadow-none')}>
        <MenubarMenu>
          <MenubarTrigger className='text-sm uppercase cursor-pointer focus:bg-transparent focus:text-[#222] font-bold text-[#222] data-[state=open]:bg-transparent data-[state=open]:text-[#222]'>
            {icon && <img src={icon} alt='icon item' />}
            <FormattedMessage id={label} />
          </MenubarTrigger>
          <MenubarContent className='menu-content p-1 rounded-none border-none'>
            <div className='border-2 border-[#666]'>
              {childrens.map((item, index) => {
                return (
                  <MenubarSubMenu
                    key={index}
                    label={item.label}
                    to={item.to}
                    childrens={item.childrens}
                    className={item.className}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  }
  return (
    <div className={cn('nav-item')}>
      <Link
        to={to ?? ''}
        className={cn('font-bold text-white hover:text-[#e71a0f] text-sm px-2 py-[1.5] inline-block', className)}>
        {icon && <img src={icon} alt='icon item' />}
        <FormattedMessage id={label} />
      </Link>
    </div>
  );
}

function MenubarSubMenu(props: MenubarSubMenuProps) {
  const { label, to, childrens, className, icon } = props;

  if (!to && childrens && childrens.length > 0) {
    return (
      <div className={cn('nav-sub-menu nav-sub-item')}>
        <MenubarSub>
          <MenubarSubTrigger
            className={cn(
              'text-white hover:text-[#e71a0f] text-sm cursor-pointer font-bold data-[state=open]:bg-transparent focus:text-white focus:bg-transparent data-[state=open]:text-[#e71a0f]',
            )}>
            {icon && <img src={icon} alt='icon item' />}
            <FormattedMessage id={label} />
          </MenubarSubTrigger>
          <MenubarSubContent className={cn('menu-sub-content rounded-none border-none')}>
            <div className='border-2 border-[#666]'>
              {childrens.map((item, index) => {
                return (
                  <MenubarSubMenu
                    key={index}
                    label={item.label}
                    to={item.to}
                    childrens={item.childrens}
                    className={item.className}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </MenubarSubContent>
        </MenubarSub>
      </div>
    );
  }

  return (
    <div className={cn('nav-sub-item')}>
      <Link
        to={to ?? ''}
        className={cn(
          'text-white font-bold hover:text-[#e71a0f] text-sm px-2 py-1.5 inline-block w-full h-full',
          className,
        )}>
        {icon && <img src={icon} alt='icon item' />}
        <FormattedMessage id={label} />
      </Link>
    </div>
  );
}

function NavigationCenter() {
  return (
    <div className={cn('header-center flex justify-between')}>
      <div className={cn('header-center-wrapper flex justify-between items-center')}>
        <div className={cn('nav-menu-center flex items-center')}>
          <Link to='/'>
            <img src={CGVLogo} alt='CGV logo' />
          </Link>
          <NavigationMenu listMenu={navigationCenterList} className={cn('mt-[30px]')} />
        </div>
        <div>
          <Link to='/buy-ticket'>
            <img src={BuyTicket} alt='image buy ticket' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationCenter;
