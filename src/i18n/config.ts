export const locales = ['vi', 'en'];
export const defaultLocale = 'en';

async function __getMessagesLocale(locale: string) {
  switch (locale) {
    case 'en':
      return (await import('./en.json')).default;
    case 'vi':
      return (await import('./vi.json')).default;
    default:
      return (await import('./vi.json')).default;
  }
}

async function loadLocale(locale: string) {
  return __getMessagesLocale(locale);
}

export const getConfigInt18 = async (locale: string) => {
  return {
    locale: locale,
    messages: await loadLocale(locale),
  };
};
