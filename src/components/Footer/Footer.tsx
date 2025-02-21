import './Footer.scss';
import { FormattedMessage } from 'react-intl';
import LogoCGVCompany from '@/assets/images/logo_cgv_footer.png';
import { cn } from '@/lib/utils';

function Footer() {
  return (
    <footer>
      <div className={cn('flex footer-compary')}>
        <div className={cn('footer-company-img')}>
          <img src={LogoCGVCompany} alt='logo cgv' />
        </div>
        <div className={cn('footer-compary-info')}>
          <h4 className={cn('text-sm font-bold')}>
            <FormattedMessage id='name-company' />
          </h4>
          <p className={cn('text-[13px] infor-item')}>
            <FormattedMessage id='description-summary' />
          </p>
          <p className={cn('text-[13px] infor-item')}>
            <FormattedMessage id='address-company' />
          </p>
          <p className={cn('text-[13px] infor-item')}>
            <FormattedMessage id='hotline-company' />
          </p>
          <p className={cn('text-[13px] infor-item')}>
            <FormattedMessage id='copyright' />
          </p>
        </div>
      </div>
      <div className={cn('footer-background mt-6')} />
    </footer>
  );
}

export default Footer;
