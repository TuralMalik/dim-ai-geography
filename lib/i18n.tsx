"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "en" | "az" | "ru";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  az: "AZ",
  ru: "RU",
};

const dictionaries = {
  en: {
    meta: {
      title: "DİM AI Geography MVP",
      description: "AI-assisted Geography exam preparation MVP",
    },
    nav: {
      brand: "DİM AI Geography",
      home: "Home",
      test: "Geography test",
      weakTopics: "Weak topics",
      language: "Language",
    },
    home: {
      eyebrow: "Geography MVP",
      title: "DİM exam preparation focused on weak topics.",
      body: "Take a short Geography diagnostic test, see topic-level results, and review the areas that need attention first.",
      start: "Start Geography test",
      cards: {
        diagnostic: "Diagnostic test",
        questions: "5 questions",
        weakTopics: "Weak topics",
        prioritized: "Prioritized",
        reviewMode: "Review mode",
        sourceBound: "Source-bound",
      },
    },
    test: {
      fallbackSubject: "Geography",
      fallbackTitle: "Geography Diagnostic Test",
      minutes: "minutes",
      loading: "Loading test...",
      backendError: "Backend is not reachable. Start the FastAPI server and refresh this page.",
      submitError: "Could not submit the test. Check that the backend is running.",
      submitting: "Submitting...",
      submit: "Submit test",
    },
    results: {
      noResult: "No result yet",
      noResultBody: "Take the Geography test to generate results.",
      startTest: "Start test",
      diagnosticResult: "Diagnostic result",
      accuracy: "accuracy",
      correct: "correct",
      nextStep: "Recommended next step",
      noWeakTopics: "No weak topics detected in this sample test.",
    },
    weak: {
      eyebrow: "Personalized focus",
      title: "Weak topics",
      loading: "Loading weak topics...",
      backendError: "Backend is not reachable. Start the FastAPI server and refresh this page.",
      minutesRecommended: "minutes recommended",
      accuracy: "Accuracy",
    },
    review: {
      loading: "Loading review...",
      backendError: "Review topic could not be loaded. Check the backend server.",
      priority: "priority",
      notes: "Approved study material notes",
      retake: "Retake test",
      weakTopics: "Weak topics",
      sourceNotice: "Sample review based only on approved MVP study materials.",
    },
    priorities: {
      High: "High",
      Medium: "Medium",
      Low: "Low",
    },
    topics: {
      "map-skills": "Map Skills and Coordinates",
      climate: "Climate and Weather",
      population: "Population Geography",
    },
    reviewContent: {
      climate: {
        summary: "Climate questions focus on latitude, altitude, distance from seas, air masses, relief, temperature, and precipitation. Review how each factor changes temperature and moisture before practicing exam-style items.",
        materials: [
          "Climate is shaped by latitude, altitude, distance from seas and oceans, relief, ocean currents, and prevailing air masses.",
          "Altitude affects temperature: temperature generally decreases as elevation increases.",
          "Coastal locations usually have milder climates because large water bodies moderate temperature.",
        ],
      },
      population: {
        summary: "Population topics often test density calculations, migration, and urbanization. Practice formula questions and cause-effect reasoning for rural-to-urban movement.",
        materials: [
          "Population density is calculated by dividing total population by area.",
          "Movement from rural areas to cities is a form of urbanization.",
        ],
      },
      "map-skills": {
        summary: "Map questions usually test scale conversion, direction, and coordinate reading. Always convert map distance using the scale before choosing an answer.",
        materials: ["If the scale is 1:100000, 1 cm on the map equals 1 km on the ground."],
      },
    },
    questions: {
      q1: {
        text: "On a map with scale 1:100000, what real distance corresponds to 3 cm on the map?",
        options: { a: "300 m", b: "3 km", c: "30 km", d: "300 km" },
      },
      q2: {
        text: "Which factor usually causes air temperature to decrease with height?",
        options: { a: "Altitude", b: "Longitude", c: "Population density", d: "Political borders" },
      },
      q3: {
        text: "A country has 10,000,000 people and an area of 100,000 square km. What is its population density?",
        options: { a: "10 people per square km", b: "100 people per square km", c: "1,000 people per square km", d: "10,000 people per square km" },
      },
      q4: {
        text: "Which location usually has a milder climate?",
        options: { a: "Coastal lowland", b: "Interior desert", c: "High mountain summit", d: "Continental plateau far from sea" },
      },
      q5: {
        text: "Movement of people from rural areas to cities is called what?",
        options: { a: "Urbanization", b: "Deforestation", c: "Evaporation", d: "Plate tectonics" },
      },
    },
  },
  az: {
    meta: {
      title: "DİM AI Coğrafiya MVP",
      description: "AI dəstəkli coğrafiya imtahan hazırlığı MVP-si",
    },
    nav: {
      brand: "DİM AI Coğrafiya",
      home: "Ana səhifə",
      test: "Coğrafiya testi",
      weakTopics: "Zəif mövzular",
      language: "Dil",
    },
    home: {
      eyebrow: "Coğrafiya MVP",
      title: "DİM imtahanına hazırlıq zəif mövzulara fokuslanır.",
      body: "Qısa coğrafiya diaqnostik testini keçin, mövzular üzrə nəticələri görün və əvvəlcə diqqət tələb edən sahələri təkrar edin.",
      start: "Coğrafiya testinə başla",
      cards: {
        diagnostic: "Diaqnostik test",
        questions: "5 sual",
        weakTopics: "Zəif mövzular",
        prioritized: "Prioritetləşdirilmiş",
        reviewMode: "Təkrar rejimi",
        sourceBound: "Mənbəyə əsaslanan",
      },
    },
    test: {
      fallbackSubject: "Coğrafiya",
      fallbackTitle: "Coğrafiya Diaqnostik Testi",
      minutes: "dəqiqə",
      loading: "Test yüklənir...",
      backendError: "Backend əlçatan deyil. FastAPI serverini başladın və səhifəni yeniləyin.",
      submitError: "Test göndərilə bilmədi. Backend-in işlədiyini yoxlayın.",
      submitting: "Göndərilir...",
      submit: "Testi göndər",
    },
    results: {
      noResult: "Hələ nəticə yoxdur",
      noResultBody: "Nəticə yaratmaq üçün coğrafiya testini keçin.",
      startTest: "Testə başla",
      diagnosticResult: "Diaqnostik nəticə",
      accuracy: "dəqiqlik",
      correct: "düzgün",
      nextStep: "Tövsiyə olunan növbəti addım",
      noWeakTopics: "Bu nümunə testdə zəif mövzu aşkarlanmadı.",
    },
    weak: {
      eyebrow: "Fərdi fokus",
      title: "Zəif mövzular",
      loading: "Zəif mövzular yüklənir...",
      backendError: "Backend əlçatan deyil. FastAPI serverini başladın və səhifəni yeniləyin.",
      minutesRecommended: "dəqiqə tövsiyə olunur",
      accuracy: "Dəqiqlik",
    },
    review: {
      loading: "Təkrar materialı yüklənir...",
      backendError: "Mövzu təkrarı yüklənmədi. Backend serverini yoxlayın.",
      priority: "prioritet",
      notes: "Təsdiqlənmiş dərs materialı qeydləri",
      retake: "Testi yenidən keç",
      weakTopics: "Zəif mövzular",
      sourceNotice: "Nümunə təkrar yalnız təsdiqlənmiş MVP dərs materiallarına əsaslanır.",
    },
    priorities: {
      High: "Yüksək",
      Medium: "Orta",
      Low: "Aşağı",
    },
    topics: {
      "map-skills": "Xəritə bacarıqları və koordinatlar",
      climate: "İqlim və hava",
      population: "Əhali coğrafiyası",
    },
    reviewContent: {
      climate: {
        summary: "İqlim sualları enlik, hündürlük, dənizlərdən məsafə, hava kütlələri, relyef, temperatur və yağıntıya fokuslanır. Test suallarından əvvəl hər amilin temperatur və rütubətə təsirini təkrar edin.",
        materials: [
          "İqlim enlik, hündürlük, dəniz və okeanlardan məsafə, relyef, okean cərəyanları və hakim hava kütlələri ilə formalaşır.",
          "Hündürlük temperaturun azalmasına təsir edir: yüksəklik artdıqca temperatur adətən azalır.",
          "Sahil ərazilərində iqlim adətən daha mülayim olur, çünki böyük su hövzələri temperaturu tənzimləyir.",
        ],
      },
      population: {
        summary: "Əhali mövzuları tez-tez sıxlıq hesablamaları, miqrasiya və urbanizasiyanı yoxlayır. Formula tipli sualları və kənddən şəhərə köçün səbəb-nəticə əlaqələrini məşq edin.",
        materials: [
          "Əhali sıxlığı ümumi əhalinin sahəyə bölünməsi ilə hesablanır.",
          "İnsanların kənd yerlərindən şəhərlərə köçməsi urbanizasiyanın bir formasıdır.",
        ],
      },
      "map-skills": {
        summary: "Xəritə sualları əsasən miqyas çevirməsi, istiqamət və koordinat oxumağı yoxlayır. Cavabı seçməzdən əvvəl xəritə məsafəsini miqyasa görə çevirin.",
        materials: ["Miqyas 1:100000-dirsə, xəritədə 1 sm yerdə 1 km-ə bərabərdir."],
      },
    },
    questions: {
      q1: {
        text: "1:100000 miqyaslı xəritədə 3 sm xəritə məsafəsi realda hansı məsafəyə uyğundur?",
        options: { a: "300 m", b: "3 km", c: "30 km", d: "300 km" },
      },
      q2: {
        text: "Hündürlük artdıqca hava temperaturunun azalmasına adətən hansı amil səbəb olur?",
        options: { a: "Hündürlük", b: "Uzunluq dairəsi", c: "Əhali sıxlığı", d: "Siyasi sərhədlər" },
      },
      q3: {
        text: "Ölkənin əhalisi 10.000.000, sahəsi isə 100.000 kv. km-dir. Əhali sıxlığı nə qədərdir?",
        options: { a: "1 kv. km-ə 10 nəfər", b: "1 kv. km-ə 100 nəfər", c: "1 kv. km-ə 1.000 nəfər", d: "1 kv. km-ə 10.000 nəfər" },
      },
      q4: {
        text: "Hansı ərazidə iqlim adətən daha mülayim olur?",
        options: { a: "Sahil ovalığı", b: "Daxili səhra", c: "Yüksək dağ zirvəsi", d: "Dənizdən uzaq kontinental yayla" },
      },
      q5: {
        text: "İnsanların kənd yerlərindən şəhərlərə köçməsi necə adlanır?",
        options: { a: "Urbanizasiya", b: "Meşəsizləşmə", c: "Buxarlanma", d: "Plitə tektonikası" },
      },
    },
  },
  ru: {
    meta: {
      title: "DİM AI География MVP",
      description: "MVP подготовки к экзамену по географии с поддержкой AI",
    },
    nav: {
      brand: "DİM AI География",
      home: "Главная",
      test: "Тест по географии",
      weakTopics: "Слабые темы",
      language: "Язык",
    },
    home: {
      eyebrow: "MVP по географии",
      title: "Подготовка к DİM с фокусом на слабые темы.",
      body: "Пройдите короткий диагностический тест по географии, посмотрите результаты по темам и повторите сначала то, что требует внимания.",
      start: "Начать тест по географии",
      cards: {
        diagnostic: "Диагностический тест",
        questions: "5 вопросов",
        weakTopics: "Слабые темы",
        prioritized: "По приоритету",
        reviewMode: "Режим повторения",
        sourceBound: "По материалам",
      },
    },
    test: {
      fallbackSubject: "География",
      fallbackTitle: "Диагностический тест по географии",
      minutes: "минут",
      loading: "Загрузка теста...",
      backendError: "Backend недоступен. Запустите FastAPI сервер и обновите страницу.",
      submitError: "Не удалось отправить тест. Проверьте, что backend работает.",
      submitting: "Отправка...",
      submit: "Отправить тест",
    },
    results: {
      noResult: "Пока нет результата",
      noResultBody: "Пройдите тест по географии, чтобы получить результат.",
      startTest: "Начать тест",
      diagnosticResult: "Результат диагностики",
      accuracy: "точность",
      correct: "верно",
      nextStep: "Рекомендуемый следующий шаг",
      noWeakTopics: "В этом пробном тесте слабые темы не обнаружены.",
    },
    weak: {
      eyebrow: "Персональный фокус",
      title: "Слабые темы",
      loading: "Загрузка слабых тем...",
      backendError: "Backend недоступен. Запустите FastAPI сервер и обновите страницу.",
      minutesRecommended: "минут рекомендуется",
      accuracy: "Точность",
    },
    review: {
      loading: "Загрузка повторения...",
      backendError: "Не удалось загрузить повторение темы. Проверьте backend сервер.",
      priority: "приоритет",
      notes: "Заметки из утвержденных учебных материалов",
      retake: "Пройти тест снова",
      weakTopics: "Слабые темы",
      sourceNotice: "Пример повторения основан только на утвержденных материалах MVP.",
    },
    priorities: {
      High: "Высокий",
      Medium: "Средний",
      Low: "Низкий",
    },
    topics: {
      "map-skills": "Навыки работы с картой и координаты",
      climate: "Климат и погода",
      population: "География населения",
    },
    reviewContent: {
      climate: {
        summary: "Вопросы по климату проверяют широту, высоту, удаленность от морей, воздушные массы, рельеф, температуру и осадки. Перед практикой повторите, как каждый фактор влияет на температуру и влажность.",
        materials: [
          "Климат формируется под влиянием широты, высоты, удаленности от морей и океанов, рельефа, океанических течений и господствующих воздушных масс.",
          "Высота влияет на температуру: с увеличением высоты температура обычно снижается.",
          "На побережьях климат обычно мягче, потому что крупные водоемы сглаживают колебания температуры.",
        ],
      },
      population: {
        summary: "Темы по населению часто проверяют расчет плотности, миграцию и урбанизацию. Отработайте задачи с формулами и причинно-следственные связи переезда из села в город.",
        materials: [
          "Плотность населения рассчитывается делением общей численности населения на площадь.",
          "Перемещение людей из сельской местности в города является формой урбанизации.",
        ],
      },
      "map-skills": {
        summary: "Вопросы по картам обычно проверяют перевод масштаба, направление и чтение координат. Перед выбором ответа всегда переводите расстояние на карте по масштабу.",
        materials: ["Если масштаб 1:100000, то 1 см на карте соответствует 1 км на местности."],
      },
    },
    questions: {
      q1: {
        text: "На карте масштаба 1:100000 какому реальному расстоянию соответствуют 3 см на карте?",
        options: { a: "300 м", b: "3 км", c: "30 км", d: "300 км" },
      },
      q2: {
        text: "Какой фактор обычно вызывает снижение температуры воздуха с высотой?",
        options: { a: "Высота", b: "Долгота", c: "Плотность населения", d: "Политические границы" },
      },
      q3: {
        text: "В стране 10 000 000 жителей и площадь 100 000 кв. км. Какова плотность населения?",
        options: { a: "10 человек на кв. км", b: "100 человек на кв. км", c: "1 000 человек на кв. км", d: "10 000 человек на кв. км" },
      },
      q4: {
        text: "В каком месте климат обычно мягче?",
        options: { a: "Прибрежная низменность", b: "Внутренняя пустыня", c: "Высокая горная вершина", d: "Континентальное плато вдали от моря" },
      },
      q5: {
        text: "Как называется перемещение людей из сельской местности в города?",
        options: { a: "Урбанизация", b: "Вырубка лесов", c: "Испарение", d: "Тектоника плит" },
      },
    },
  },
} as const;

type Dictionary = (typeof dictionaries)[Locale];

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  localeLabels: Record<Locale, string>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem("dim-ai-locale") as Locale | null;
    if (saved && saved in dictionaries) {
      setLocaleState(saved);
    }
  }, []);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    window.localStorage.setItem("dim-ai-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  }

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
      localeLabels,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}

export function localizeTopic(topicId: string, fallback: string, t: Dictionary) {
  return t.topics[topicId as keyof typeof t.topics] ?? fallback;
}

export function localizeQuestion(questionId: string, fallback: string, t: Dictionary) {
  return t.questions[questionId as keyof typeof t.questions]?.text ?? fallback;
}

export function localizeOption(questionId: string, optionId: string, fallback: string, t: Dictionary) {
  const question = t.questions[questionId as keyof typeof t.questions];
  return question?.options[optionId as keyof typeof question.options] ?? fallback;
}

export function localizeReview(topicId: string, t: Dictionary) {
  return t.reviewContent[topicId as keyof typeof t.reviewContent];
}
