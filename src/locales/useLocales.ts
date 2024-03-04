import { useTranslation } from "react-i18next";

export function useTranslate() {
  const { t, i18n, ready } = useTranslation();

  // const settings = useSettingsContext();

  // const onChangeLang = useCallback(
  //   (newlang: string) => {
  //     i18n.changeLanguage(newlang);
  //     settings.onChangeDirectionByLang(newlang);
  //   },
  //   [i18n, settings]
  // );

  return {
    t,
    i18n,
    ready,
  };
}
