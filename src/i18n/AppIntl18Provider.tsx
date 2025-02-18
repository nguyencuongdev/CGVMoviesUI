import { IntlProvider } from 'react-intl';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStateType } from '@/store';
import { localeActions } from '@/store/localeSlice';
import { getConfigInt18 } from './config';

function AppIntl18Provider({ children }: { children: React.ReactNode }) {
  const dispath = useDispatch();
  const { locale } = useSelector((state: RootStateType) => state.locale);
  const [messages, setMessages] = useState<Record<string, string> | undefined>(undefined);

  if (!localStorage.getItem('locale')) {
    dispath(localeActions.initLocale());
  }

  useEffect(() => {
    const handleInitLanguagePage = async () => {
      const { messages } = await getConfigInt18(locale);
      setMessages(messages);
    };
    handleInitLanguagePage();
  }, [locale]);

  if (!messages) return <p>Loading...!</p>;

  return (
    <IntlProvider key={locale} locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}

export default AppIntl18Provider;
