/**
 * Класс для чтения низкоуровневых языковых настроек приложения.
 */
export class appLanguageConfig {
  /**
   * Возвращает массив с поддерживаемыми языками.
   * Список языков берётся из .env-файла.
   */
  public static availableLocales: Array<string> =
    // В .env хранится строка, а нам надо массив.
    import.meta.env.VITE_I18N_AVAILABLE_LOCALES.split(",");

  /**
   * Язык приложения по умолчанию.
   */
  private static DEFAULT_LOCALE: string =
    import.meta.env.VITE_I18N_DEFAULT_LOCALE;

  /**
   * Язык использовать, если для выбранного нет перевода.
   */
  public static FALLBACK_LOCALE: string =
    import.meta.env.VITE_I18N_FALLBACK_LOCALE;

  /**
   * Название STORAGE LOCAL, где хранится обозначение
   * выбранного языка 
   */
  private static LOCAL_STORAGE_USER_LOCALE = "user-locale";

  /**
   * Возвращает какой язык надо использовать по умолчанию.
   */
  private static get defaultLocales(): string {
    return this.DEFAULT_LOCALE;
  }

  /**
   * Считывает значение локали
   * из локального хранилища браузера пользователя
   */
  public static get localStorageLocale(): string | null {
    return localStorage.getItem(this.LOCAL_STORAGE_USER_LOCALE);
  }

  /**
   * Сохраняет значение локали
   * из локального хранилища браузера пользователя
   */
  public static set localStorageLocale( newLocale: string) {
    localStorage.setItem(this.LOCAL_STORAGE_USER_LOCALE, newLocale);
  }

  /**
   * Проверяет входит ли передоваемое обозначение языка
   * в список, которые доступны в приложении.
   * @param locale string обозначение языка ("en", "ru")
   * @returns true, если язык поддерживается,
   * false в противном случае.
   */
  public static isLocaleAvailable(locale: string): boolean {
    return this.availableLocales.includes(locale);
  }

  /**
   * Считывает обозначение выбранного языка из памяти браузера.
   * @returns Возвращает строчку с прочитанным обозначением языка,
   * если такой язык поддерживается.
   * Если проверка провалилась или данных не было сохранено,
   * возвращается null
   */
  private static get storagedLocale(): string | null {
    // Считываем значение
    const storagedLocale: string =
      this.localStorageLocale as string;

    // Поддерживается ли прочитанный язык
    if (this.isLocaleAvailable(storagedLocale))
      return storagedLocale;

    // Прочитанное значение не прошло проверку или было пустым
    return null;
  }

  /**
   * Предлагает какой из языков сделать "по умолчанию".
   * @returns строчка с обозначением языка ("en", "ru")
   */
  public static suggestDefaultLanguage(): string {
    // Начнём с проверки URI
    const storageURI = this.URILocale;
    if (storageURI) {
      return storageURI;
    }

    // Вначале считываем данные из "хранилища"
    const storagedLocale = this.storagedLocale;
    if (storagedLocale) {
      // Если в данных что-то было, то мы закончили
      return storagedLocale;
    }

    // Попробуем считать данные из браузера пользователя
    const userLocale = this.userLocale;
    if (userLocale) {
      // Если в данных что-то было, то мы закончили
      return userLocale;
    }

    // На самый крайний случай остаётся вернуть значение из настроек.
    return this.defaultLocales;
  }

  /**
   * Находим обозначение локалей в URI
   */
  private static get URILocale(): string | undefined {
    return (
      // Получаем URI страницы и
      window.location.pathname
        // разбиваем строчку на части.
        .split("/")
        // В списке ищем строчку,
        .find((localeCandidate) =>
          // которая может быть локалей 
          this.isLocaleAvailable(localeCandidate)
        )
    );
  }

  /**
   * Пытается узнать предпочитаемый язык пользователя
   * от его браузера.
   * @returns строчка с обозначением языка ("en", "ru"),
   *          или null, если не было считано.
   */
  private static get userLocale(): string | null {
    // Считываем данные из браузера
    let locale: string = window.navigator.language ||
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
   * Динамичная загрузка языкового пакета "по умолчанию"
   */
  public static async initializeDefaultMessage() {
    // Определяемся с языком по умолчанию для этого пользователя.
    const defaultLocale: string = this.suggestDefaultLanguage();

    // Загружаем нужный файл с переводами.
    const messagesJSON = await import(`./locales/${defaultLocale}.json`);

    // возвращаем лишь нужную языковую связку
    return {
      [defaultLocale]: messagesJSON.default
    };
  }
}