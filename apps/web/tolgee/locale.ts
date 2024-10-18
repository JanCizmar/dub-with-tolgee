import { cookies, headers } from "next/headers";
import { ALL_LOCALES, DEFAULT_LOCALE } from "./shared.ts";

const COOKIE_NAME = "NEXT_LOCALE";

export function getUserLocale() {
  return (
    cookies().get(COOKIE_NAME)?.value || detectLanguage() || DEFAULT_LOCALE
  );
}

export async function setUserLocale(locale: string) {
  cookies().set(COOKIE_NAME, locale);
}

const detectLanguage = () => {
  const allPreferred = getAcceptedLanguages();

  for (const language of allPreferred) {
    const exactMatch = ALL_LOCALES.find((l) => l === language);
    if (exactMatch) {
      return exactMatch;
    }

    const getTwoLetters = (fullTag: string) =>
      fullTag.replace(/^(.+?)(-.*)?$/, "$1");

    const preferredTwoLetter = getTwoLetters(language);
    const twoLetterMatch = ALL_LOCALES.find(
      (l) => getTwoLetters(l) === preferredTwoLetter,
    );
    if (twoLetterMatch) {
      return twoLetterMatch;
    }
  }
};

function getAcceptedLanguages() {
  const acceptLanguageHeader = getAcceptLanguageHeader();
  if (!acceptLanguageHeader) {
    return [];
  }

  return acceptLanguageHeader.split(",").map((lang) => {
    const [language] = lang.split(";");
    return language.trim();
  });
}

function getAcceptLanguageHeader() {
  return headers().get("Accept-Language");
}
