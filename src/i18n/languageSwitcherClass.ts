import { i18n } from ".";

/**
 * Переключение языков.
 */
export class languageSwitcher {
  /**
   * Возвращает какой язык сейчас актуален.
   * Позже добавим загрузку переменных из кеша
   * и настроек браузера.
   */
  public static get actualLocale(): string {
    return this.defaultLocales;
  }

  /**
   * Возвращает массив с поддерживаемыми языками.
   * Список языков берётся из .env-файла.
   */
  public static get availableLocales(): Array<string> {
    // В .env хранится строка, а нам надо массив.
    return import.meta.env.VITE_I18N_AVAILABLE_LOCALES.split(",");
  }

  /**
   * V-select от Vuetify требует подготовленного
   * списка для вводных данных,
   * чтобы значения списка отличались от надписей.
   */
  public static get availableLocalesForSelect() {
    /*
    Тип напрямую не используется,
    но можно представить, какой он будет.
    type SLFS = {
      itemValue: string,
      itemTitle: string
    };
    */

    return (
      // Берём обычный список, переделанный из строчки,
      this.availableLocales
        // проходимся по каждому элементу и
        .map((lang) => {
          // переделываем его в объект типа SLFS
          return {
            "itemValue": lang,
            "itemTitle": i18n.global.t("locales."+lang)
          }
      })
    );
  }

  /**
   * Возвращает какой язык надо использовать по умолчанию.
   */
  public static get defaultLocales(): string {
    return import.meta.env.VITE_I18N_DEFAULT_LOCALE
  }
}
