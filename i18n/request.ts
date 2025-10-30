import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale, defaultLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Use default locale if none provided or invalid
  const validLocale = (locale && locales.includes(locale as Locale)) 
    ? locale 
    : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
