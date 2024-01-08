import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return (key: string) => {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
