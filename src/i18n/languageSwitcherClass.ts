import {
  type NavigationGuardNext,
  type RouteLocationNormalized
} from "vue-router";
import { i18n } from ".";
import { appLanguageConfig } from "./appLanguageConfigClass";
import { nextTick } from "vue";
import router from "@/router";

/**
 * Переключение языков.
 */
export class languageSwitcher {
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
    appLanguageConfig.localStorageLocale = newLocale;
  }

  /**
   * Загружаем перевод для выбранной локали
   */
  public static async loadLocaleMessages(locale: string) {
    // Вначале проверяем надо ли этот пакет переводов загружать.
    if(!i18n.global.availableLocales.includes(locale)) {
      // Этого перевода не нашлось в списке доступных.
      // Загружаем файл с переводами.
      const messages = await import(`@/i18n/locales/${locale}.json`);
      // Инициализируем загруженные переводы
      i18n.global.setLocaleMessage(locale, messages.default);
    }

    // даём знать, что выполнение завершено
    return nextTick();
  }

  /**
   * Вызывается при изменении значения переключателя языка.
   * @param newLocale строчка с кодом языка
   */
  public static async switchLocale(newLocale: string): Promise<void> {
    // Если надо, то подгружаем файл с переводом.
    await this.loadLocaleMessages(newLocale);

    // Задаёт новое значение для актуального языка
    this.actualLocale = newLocale;
  }

  /**
   * Предполагает на каком языке пользователь хочет увидеть страницу,
   * а потом загружает соответствующий файл.
   */
  public static async loadingFirstLocale(): Promise<boolean> {
    // Определяемся с языком по умолчанию для этого пользователя.
    const defaultLocale: string = appLanguageConfig.suggestDefaultLanguage();

    // Подгружаем файл с переводом.
    await this.loadLocaleMessages(defaultLocale);

    // Задаёт новое значение для актуального языка
    this.actualLocale = defaultLocale;

    // Пытаемся обновить локаль в адресе страницы
    try {
      router.replace({ params: { locale: defaultLocale }})
    } catch (error) {
      console.error(error);
      router.push("/");
    }

    return true;
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
      appLanguageConfig.availableLocales
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
   * Инициализирует значение для языка по умолчанию
   */
  public static initDefaultLocale(): void {
    // Задаёт значение для языка по умолчанию
    this.actualLocale = appLanguageConfig.suggestDefaultLanguage();
  }

  /**
   * Посредник для маршрутизатора,
   * считывает локаль из адреса,
   * и использует её, если та подходит.
   * 
   * Некоторые методы смогли запуститься,
   * лишь "снаружи" класса,
   * вот и пришлось сделать их публичными.
   * 
   * Кандидат на удаление.
   */
  public static routeMiddleware(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
    )
  {
    // Из адреса достаём локаль.
    const paramLocale = to.params.locale.toString();

    // Проверяем её.
    if (!appLanguageConfig.isLocaleAvailable(paramLocale)) {
      // Локаль не прошла проверку, делаем основные предположения,
      // подправляем адрес и переходим к следующему правилу.
      return next(appLanguageConfig.suggestDefaultLanguage());
    }

    // Изменяем язык приложения на тот, что указан в пути.
    languageSwitcher.switchLocale(paramLocale);

    // Переходим к следующему "охранному правилу".
    return next();
  }

  /**
   * Добавляет локаль к адресам
   */
  public static i18nRoute(to: object): RouteLocationNormalized {
    // Для облегчения было решено, чтобы локаль в эту функцию передовалась в виде строчки.
    // Но данные должны обрабатываться как RouteLocationNormalized
    const toRouteLocationNormalized = to as RouteLocationNormalized;

    const result: RouteLocationNormalized = {
      ...toRouteLocationNormalized,
      params: {
        locale: this.actualLocale,
        ...toRouteLocationNormalized.params
      }
    }
    return(result);
  }
}
