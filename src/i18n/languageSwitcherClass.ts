import { i18n } from ".";

/**
 * Переключение языков.
 */
export class languageSwitcher {
  /**
   * Название STORAGE LOCAL, где хранится обозначение
   * выбранного языка 
   */
  private static LOCAL_STORAGE_USER_LOCALE = "user-locale";

  /**
   * Возвращает какой язык сейчас актуален.
   */
  public static get actualLocale(): string {
    return i18n.global.locale.value;
  }

  /**
   * Задаёт актуальное значение языка
   */
  public static set actualLocale(newLocale:string) {
    // Переключаем язык на сайте
    i18n.global.locale.value = newLocale;

    // Меняем языковое обозначение в коде сайта
    document.querySelector("html")?.setAttribute("lang", newLocale);

    // Сохраняем обозначение выбранного языка в памяти браузера
    localStorage.setItem(this.LOCAL_STORAGE_USER_LOCALE, newLocale);
  }

  /**
   * Вызывается при изменении значения переключателя языка.
   * @param newLocale строчка с кодом языка
   */
  public static switchLocale(newLocale: string):void {
    // Задаёт новое значение для актуального языка
    this.actualLocale = newLocale;
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

  /**
   * Считывает обозначение выбранного языка из памяти браузера.
   * @returns Возвращает строчку с прочитанным обозначением языка,
   * если такой язык поддерживается.
   * Если проверка провалилась или данных не было сохранено,
   * возвращается null
   */
  private static getStoragedLocale(): string | null {
    // Считываем значение
    const storagedLocale: string | null = localStorage.getItem(this.LOCAL_STORAGE_USER_LOCALE);

    // Поддерживается ли прочитанный язык
    if (this.isLocaleAvailable(storagedLocale as string))
      return storagedLocale;

    // Прочитанное значение не прошло проверку или было пустым
    return null;
  }

  /**
   * Пытается узнать предпочитаемый язык пользователя
   * от его браузера.
   * @returns строчка с обозначением языка ("en", "ru"),
   *          или null, если не было считано.
   */
  private static getUserLocale(): string | null {
    // Считываем данные из браузера
    let locale = window.navigator.language ||
      // @ts-ignore
      window.navigator.userLanguage;

    /* Данные могут прийти в виде "en" или "en-US",
     * но нам интересна лишь первая часть.
     */
    locale = locale.split("-")[0];

    // Поддерживается ли прочитанный язык
    if (this.isLocaleAvailable(locale))
      return locale;

    // Прочитанное значение не прошло проверку или было пустым
    return null;
  }

  /**
   * Проверяет входит ли передоваемое обозначение языка
   * в список, которые доступны в приложении.
   * @param locale string обозначение языка ("en", "ru")
   * @returns true, если язык поддерживается,
   * false в противном случае.
   */
  private static isLocaleAvailable(locale: string): boolean {
    return this.availableLocales.includes(locale);
  }

  /**
   * Предлагает какой из языков сделать "по умолчанию".
   * @returns строчка с обозначением языка ("en", "ru")
   */
  private static suggestDefaultLanguage(): string {
    // Вначале считываем данные из "хранилища"
    const storagedLocale = this.getStoragedLocale();
    if (storagedLocale) {
      // Если в данных что-то было, то мы закончили
      return storagedLocale;
    }

    // Попробуем считать данные из браузера пользователя
    const userLocale = this.getUserLocale();
    if (userLocale) {
      // Если в данных что-то было, то мы закончили
      return userLocale;
    }

    // На самый крайний случай остаётся вернуть значение из настроек.
    return this.defaultLocales;
  }

  /**
   * Инициализирует значение для языка по умолчанию
   */
  public static initDefaultLocale(): void {
    // Задаёт значение для языка по умолчанию
    this.actualLocale = this.suggestDefaultLanguage();
  }
}
