import en from '@/assets/lang/en.json';
import es from '@/assets/lang/es.json';
// import fr from '@/assets/lang/fr.json';

const messagesMap: { [key: string]: any } = {
  en,
  es,
  // fr,
};

export function getLocaleMessages(locale: string) {
  return messagesMap[locale] || messagesMap['en']; // Default to 'en' if the locale is not found
}
