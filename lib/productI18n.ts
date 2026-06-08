import type { OnboardingLocale } from "@/lib/onboardingI18n";

export type ProductLocale = OnboardingLocale;
export type GroupId = "group_1" | "group_2" | "group_3" | "group_4";
export type ClassId = "10" | "11" | "graduate";
export type GoalId = "repeat" | "score" | "exam" | "mock" | "weak";

const common = {
  brand: "Lumio",
  user: "Tural",
  demo: "Demo",
  percent: "%",
};

export const productCopy = {
  az: {
    ...common,
    langName: "AZ",
    nav: {
      dashboard: "Ana səhifə", subjects: "Mənim fənlərim", tests: "Testlər", review: "Təkrar",
      progress: "Progress", pro: "Analitika PRO", profile: "Profil", settings: "Ayarlar",
    },
    actions: {
      back: "Geri", continue: "Davam et →", start: "Başla", open: "Aç", next: "Növbəti",
      skip: "Burax", retry: "Yenidən keç", learn: "Mövzunu öyrən", solve: "Sualları həll et",
      test: "Test keç", upgrade: "PRO-ya keç",
    },
    onboarding: {
      group: {
        progress: "Addım 2 / 4", title: "İmtahan qrupunuzu seçin",
        subtitle: "Seçilmiş bölməyə uyğun fənləri göstərəcəyik",
      },
      class: {
        progress: "Addım 3 / 4", title: "Sinfinizi seçin",
        subtitle: "Tövsiyələri hazırlıq mərhələnizə uyğunlaşdıraq",
        options: { "10": "10-cu sinif", "11": "11-ci sinif", graduate: "Artıq məzunam" },
      },
      goals: {
        progress: "Addım 4 / 4", title: "Məqsədiniz nədir?", subtitle: "Bir neçə seçim edə bilərsiniz",
        submit: "Hazırlığa başla",
      },
    },
    groups: {
      group_1: { title: "I qrup", desc: "Texniki istiqamət, mühəndislik, IT" },
      group_2: { title: "II qrup", desc: "İqtisadiyyat, biznes, turizm, coğrafiya" },
      group_3: { title: "III qrup", desc: "Hüquq, tarix, filologiya" },
      group_4: { title: "IV qrup", desc: "Tibb, biologiya, kimya" },
    },
    subjects: {
      math: "Riyaziyyat", english: "İngilis dili", physics: "Fizika", chemistry: "Kimya",
      russian: "Rus dili", russianLit: "Rus dili və ədəbiyyatı", azerbaijani: "Azərbaycan dili",
      azerbaijaniLit: "Azərbaycan dili və ədəbiyyatı", geography: "Coğrafiya",
      azHistory: "Azərbaycan tarixi", worldHistory: "Ümumi tarix", biology: "Biologiya",
    },
    goals: {
      repeat: ["Materialı təkrar etmək", "Bilikləri sistemləşdirmək və vacib mövzuları unutmayın"],
      score: ["Balı artırmaq", "İmtahan nəticəsini yaxşılaşdırmaq"],
      exam: ["İmtahana hazırlaşmaq", "Universitetə qəbul üçün sistemli hazırlaşmaq"],
      mock: ["Sınaq testləri keçmək", "Hazırlıq səviyyəsini yoxlamaq"],
      weak: ["Zəif mövzuları tapmaq", "Ən çox səhv etdiyiniz mövzuları müəyyənləşdirmək"],
    },
    profileLine: "Rus bölməsi · II qrup · 11-ci sinif",
    dashboard: {
      hello: "Salam, Tural", subtitle: "Hazırlığa davam edək", subjectsTitle: "Mənim fənlərim",
      recommended: "Bu gün tövsiyə olunur", startTest: "Testə başla", reviewTopics: "Mövzuları təkrar et",
      proTitle: "PRO analitika", proText: "Bal proqnozu, digər şagirdlərlə müqayisə və zəif mövzuların prioriteti.",
      proButton: "PRO analitikaya bax",
      stats: ["Ümumi progress", "Testlər keçilib", "Orta nəticə", "Zəif mövzular", "İmtahana qalan günlər"],
    },
    subjectsPage: {
      title: "Mənim fənlərim", subtitle: "II qrup üzrə hazırlıq fənləri",
      progress: "Progress", average: "Orta bal", tests: "Testlər",
      descriptions: {
        math: "Algebra, həndəsə, funksiyalar və s.", english: "Qrammatika, oxu, leksika və s.",
        geography: "İqlim, əhali, təbii zonalar və s.", azHistory: "Qədim dövr, yeni dövr və s.",
        russian: "Qrammatika, leksika, mətnlər və s.",
      },
    },
    geography: {
      title: "Coğrafiya", subtitle: "Mövzular üzrə hazırlıq və nəticələriniz",
      tabs: ["Mövzular", "Testlər", "Səhvlər", "Konspektlər", "Statistika"],
      selected: "Seçilmiş mövzu", studied: "Öyrəndikləriniz", startTopic: "Mövzuya başla", takeTest: "Test keç",
      topics: ["Coğrafiyaya giriş", "Materiklər və okeanlar", "İqlim və hava", "Daxili sular", "Əhali coğrafiyası", "Təbii zonalar", "Ölkələr və regionlar", "İqtisadi coğrafiya"],
      studiedItems: ["İqlimi formalaşdıran amillər", "İqlim qurşaqları", "Hava və iqlim", "Praktiki tapşırıqlar"],
    },
    testPage: {
      title: "Test: İqlim və hava", progress: "Sual 7 / 20", timer: "24:35",
      question: "Aşağıdakılardan hansı iqlimin formalaşmasına təsir edən amildir?",
      options: ["Coğrafi enlik", "Relyef", "Atmosfer təzyiqi", "Okean cərəyanları"],
      currentTopic: "Cari mövzu", currentScore: "Cari nəticə", overview: "Suallar", timeLeft: "Qalan vaxt",
      finish: "Nəticəyə bax",
    },
    results: {
      title: "Test nəticələri", correct: "14 / 20 doğru", time: "Vaxt: 25:30",
      friends: "Dostlar arasında yer: 3 / 12", best: "Ən yaxşı nəticə: 90%",
      performance: "Mövzular üzrə nəticə", mistakes: "Səhvlər", retry: "Yenidən keç",
      weak: "Zəif mövzulara bax", topics: "Mövzulara qayıt",
    },
    weak: {
      title: "Zəif mövzular", subtitle: "Bu mövzular balınızı artırmaq üçün ən vacibdir",
      high: "Yüksək prioritet", medium: "Orta prioritet", frequent: "Bu mövzu imtahan tipli suallarda tez-tez rast gəlinir.",
    },
    reviewPage: {
      title: "İqlim və hava", high: "Yüksək prioritet", score: "Sizin nəticəniz: 40%",
      tabs: ["Qısa izah", "Əsas faktlar", "Tipik suallar", "Praktika"],
      summary: "İqlim müəyyən ərazidə uzun müddət ərzində müşahidə olunan hava şəraitinin ümumi xarakteridir.",
      facts: ["İqlimə coğrafi enlik, relyef, okeanlara yaxınlıq və hava kütlələri təsir edir.", "Ekvatorial iqlim ilboyu isti və rütubətli olur.", "Qütb iqlimi soyuq və quru olur.", "Sahilyanı ərazilərdə iqlim daha mülayim olur."],
      questions: ["İqlim qurşaqlarını fərqləndirmək", "İqlimə təsir edən amilləri tanımaq", "Xəritə və cədvəl əsasında nəticə çıxarmaq"],
      test: "Bu mövzudan test keç", back: "Zəif mövzulara qayıt",
    },
    pro: {
      title: "PRO analitika", subtitle: "Nəticələrinizi, bal proqnozunuzu və digər şagirdlərlə müqayisəni izləyin",
      demo: "Demo məlumatlar", forecast: "Cari proqnoz", range: "Diapazon", average: "Orta nəticə",
      solved: "Həll edilmiş suallar", correct: "Düzgün cavablar", compare: "Digər şagirdlərlə müqayisə",
      better: "Siz şagirdlərin 67%-dən yaxşısınız", place: "Sizin yeriniz", groupAvg: "Qrup üzrə orta",
      top10: "Top 10%", top25: "Top 25%", below: "Ortadan aşağı", scoreForecast: "Bal proqnozu",
      today: "Əgər imtahan bu gün olsa", improved: "Zəif mövzular yaxşılaşsa", affects: "Proqnoza nə təsir edir",
      factors: ["Orta nəticə", "Dinamika", "Həll edilmiş testlər", "Düzgün cavab faizi", "Zəif mövzular"],
      risks: "Riskli mövzular", filters: ["II qrup", "11-ci sinif", "Rus bölməsi"],
    },
    profile: {
      title: "Profil", name: "Ad", language: "İnterfeys dili", sector: "Təhsil bölməsi",
      group: "İmtahan qrupu", class: "Sinif", goals: "Məqsədlər", plan: "Plan",
      values: ["Tural", "AZ", "Rus bölməsi", "II qrup", "11-ci sinif", "Free"],
      actions: ["Dili dəyiş", "Qrupu dəyiş", "Məqsədləri dəyiş", "Çıxış"],
    },
    disclaimer: "Lumio rəsmi DİM məhsulu deyil. Məqsəd hazırlığı daha sistemli etməkdir.",
  },
  ru: {
    ...common,
    langName: "RU",
    nav: { dashboard: "Главная", subjects: "Мои предметы", tests: "Тесты", review: "Повторение", progress: "Прогресс", pro: "Аналитика PRO", profile: "Профиль", settings: "Настройки" },
    actions: { back: "Назад", continue: "Продолжить →", start: "Начать", open: "Открыть", next: "Далее", skip: "Пропустить", retry: "Пройти снова", learn: "Изучить тему", solve: "Решать вопросы", test: "Пройти тест", upgrade: "Перейти на PRO" },
    onboarding: {
      group: { progress: "Шаг 2 / 4", title: "Выберите экзаменационную группу", subtitle: "Покажем предметы для выбранного сектора" },
      class: { progress: "Шаг 3 / 4", title: "Выберите класс", subtitle: "Настроим рекомендации под ваш этап подготовки", options: { "10": "10 класс", "11": "11 класс", graduate: "Я уже выпускник" } },
      goals: { progress: "Шаг 4 / 4", title: "Какова ваша цель?", subtitle: "Можно выбрать несколько вариантов", submit: "Начать подготовку" },
    },
    groups: {
      group_1: { title: "I группа", desc: "Техническое направление, инженерия, IT" }, group_2: { title: "II группа", desc: "Экономика, бизнес, туризм, география" },
      group_3: { title: "III группа", desc: "Право, история, филология" }, group_4: { title: "IV группа", desc: "Медицина, биология, химия" },
    },
    subjects: { math: "Математика", english: "Английский язык", physics: "Физика", chemistry: "Химия", russian: "Русский язык", russianLit: "Русский язык и литература", azerbaijani: "Азербайджанский язык", azerbaijaniLit: "Азербайджанский язык и литература", geography: "География", azHistory: "История Азербайджана", worldHistory: "Всемирная история", biology: "Биология" },
    goals: {
      repeat: ["Повторить материал", "Систематизировать знания и не забыть важные темы"], score: ["Повысить балл", "Улучшить результат экзамена"],
      exam: ["Подготовиться к экзамену", "Системно готовиться к поступлению"], mock: ["Проходить пробные тесты", "Проверять уровень подготовки"],
      weak: ["Найти слабые темы", "Определить темы, где вы ошибаетесь чаще всего"],
    },
    profileLine: "Русский сектор · II группа · 11 класс",
    dashboard: {
      hello: "Привет, Tural", subtitle: "Продолжим подготовку", subjectsTitle: "Мои предметы", recommended: "Рекомендуем сегодня",
      startTest: "Начать тест", reviewTopics: "Повторить темы", proTitle: "PRO аналитика",
      proText: "Прогноз балла, сравнение с другими учениками и приоритет слабых тем.", proButton: "Открыть PRO аналитику",
      stats: ["Общий прогресс", "Тестов пройдено", "Средний результат", "Слабые темы", "Дней до экзамена"],
    },
    subjectsPage: {
      title: "Мои предметы", subtitle: "Предметы подготовки для II группы", progress: "Прогресс", average: "Средний балл", tests: "Тесты",
      descriptions: { math: "Алгебра, геометрия, функции и др.", english: "Грамматика, чтение, лексика и др.", geography: "Климат, население, природные зоны и др.", azHistory: "Древний и новый периоды и др.", russian: "Грамматика, лексика, тексты и др." },
    },
    geography: {
      title: "География", subtitle: "Ваша подготовка и результаты по темам", tabs: ["Темы", "Тесты", "Ошибки", "Конспекты", "Статистика"],
      selected: "Выбранная тема", studied: "Что вы изучили", startTopic: "Начать тему", takeTest: "Пройти тест",
      topics: ["Введение в географию", "Материки и океаны", "Климат и погода", "Внутренние воды", "География населения", "Природные зоны", "Страны и регионы", "Экономическая география"],
      studiedItems: ["Факторы формирования климата", "Климатические пояса", "Погода и климат", "Практические задания"],
    },
    testPage: {
      title: "Тест: Климат и погода", progress: "Вопрос 7 / 20", timer: "24:35", question: "Что из перечисленного является фактором формирования климата?",
      options: ["Географическая широта", "Рельеф", "Атмосферное давление", "Океанические течения"],
      currentTopic: "Текущая тема", currentScore: "Текущий результат", overview: "Вопросы", timeLeft: "Осталось времени", finish: "Посмотреть результат",
    },
    results: {
      title: "Результаты теста", correct: "14 / 20 верно", time: "Время: 25:30", friends: "Место среди друзей: 3 / 12", best: "Лучший результат: 90%",
      performance: "Результат по темам", mistakes: "Ошибки", retry: "Пройти снова", weak: "Посмотреть слабые темы", topics: "Вернуться к темам",
    },
    weak: { title: "Слабые темы", subtitle: "Эти темы важнее всего для повышения вашего балла", high: "Высокий приоритет", medium: "Средний приоритет", frequent: "Эта тема часто встречается в экзаменационных вопросах." },
    reviewPage: {
      title: "Климат и погода", high: "Высокий приоритет", score: "Ваш результат: 40%", tabs: ["Краткое объяснение", "Основные факты", "Типичные вопросы", "Практика"],
      summary: "Климат — это общий характер погодных условий, наблюдаемых на определённой территории в течение длительного времени.",
      facts: ["На климат влияют географическая широта, рельеф, близость океанов и воздушные массы.", "Экваториальный климат круглый год жаркий и влажный.", "Полярный климат холодный и сухой.", "На побережьях климат обычно мягче."],
      questions: ["Различать климатические пояса", "Определять факторы, влияющие на климат", "Делать выводы по картам и таблицам"],
      test: "Пройти тест по теме", back: "Вернуться к слабым темам",
    },
    pro: {
      title: "PRO аналитика", subtitle: "Отслеживайте результаты, прогноз балла и сравнение с другими учениками", demo: "Демонстрационные данные",
      forecast: "Текущий прогноз", range: "Диапазон", average: "Средний результат", solved: "Решено вопросов", correct: "Верные ответы",
      compare: "Сравнение с другими учениками", better: "Вы лучше 67% учеников", place: "Ваше место", groupAvg: "Среднее по группе",
      top10: "Топ 10%", top25: "Топ 25%", below: "Ниже среднего", scoreForecast: "Прогноз балла", today: "Если экзамен будет сегодня",
      improved: "Если улучшить слабые темы", affects: "Что влияет на прогноз", factors: ["Средний результат", "Динамика", "Пройденные тесты", "Процент верных ответов", "Слабые темы"],
      risks: "Темы риска", filters: ["II группа", "11 класс", "Русский сектор"],
    },
    profile: {
      title: "Профиль", name: "Имя", language: "Язык интерфейса", sector: "Сектор обучения", group: "Экзаменационная группа", class: "Класс", goals: "Цели", plan: "План",
      values: ["Tural", "RU", "Русский сектор", "II группа", "11 класс", "Free"], actions: ["Изменить язык", "Изменить группу", "Изменить цели", "Выйти"],
    },
    disclaimer: "Lumio не является официальным продуктом DİM. Цель платформы — сделать подготовку более системной.",
  },
  en: {
    ...common,
    langName: "EN",
    nav: { dashboard: "Home", subjects: "My subjects", tests: "Tests", review: "Review", progress: "Progress", pro: "PRO analytics", profile: "Profile", settings: "Settings" },
    actions: { back: "Back", continue: "Continue →", start: "Start", open: "Open", next: "Next", skip: "Skip", retry: "Retake", learn: "Study topic", solve: "Solve questions", test: "Take test", upgrade: "Upgrade to PRO" },
    onboarding: {
      group: { progress: "Step 2 / 4", title: "Choose your exam group", subtitle: "We will show subjects for your selected sector" },
      class: { progress: "Step 3 / 4", title: "Choose your grade", subtitle: "We will tailor recommendations to your preparation stage", options: { "10": "10th grade", "11": "11th grade", graduate: "I have graduated" } },
      goals: { progress: "Step 4 / 4", title: "What is your goal?", subtitle: "You can choose several options", submit: "Start preparing" },
    },
    groups: {
      group_1: { title: "Group I", desc: "Engineering, technology, and IT" }, group_2: { title: "Group II", desc: "Economics, business, tourism, and geography" },
      group_3: { title: "Group III", desc: "Law, history, and philology" }, group_4: { title: "Group IV", desc: "Medicine, biology, and chemistry" },
    },
    subjects: { math: "Mathematics", english: "English", physics: "Physics", chemistry: "Chemistry", russian: "Russian", russianLit: "Russian language and literature", azerbaijani: "Azerbaijani", azerbaijaniLit: "Azerbaijani language and literature", geography: "Geography", azHistory: "History of Azerbaijan", worldHistory: "World history", biology: "Biology" },
    goals: {
      repeat: ["Review material", "Organize knowledge and retain important topics"], score: ["Improve score", "Improve your exam result"],
      exam: ["Prepare for the exam", "Prepare systematically for university admission"], mock: ["Take mock tests", "Check your preparation level"],
      weak: ["Find weak topics", "Identify the topics where you make the most mistakes"],
    },
    profileLine: "Russian sector · Group II · 11th grade",
    dashboard: {
      hello: "Hello, Tural", subtitle: "Let’s continue preparing", subjectsTitle: "My subjects", recommended: "Recommended today",
      startTest: "Start test", reviewTopics: "Review topics", proTitle: "PRO analytics",
      proText: "Score forecast, peer comparison, and weak-topic priorities.", proButton: "View PRO analytics",
      stats: ["Overall progress", "Tests completed", "Average result", "Weak topics", "Days until exam"],
    },
    subjectsPage: {
      title: "My subjects", subtitle: "Preparation subjects for Group II", progress: "Progress", average: "Average score", tests: "Tests",
      descriptions: { math: "Algebra, geometry, functions, and more.", english: "Grammar, reading, vocabulary, and more.", geography: "Climate, population, natural zones, and more.", azHistory: "Ancient and modern periods, and more.", russian: "Grammar, vocabulary, texts, and more." },
    },
    geography: {
      title: "Geography", subtitle: "Your topic preparation and results", tabs: ["Topics", "Tests", "Mistakes", "Notes", "Statistics"],
      selected: "Selected topic", studied: "What you studied", startTopic: "Start topic", takeTest: "Take test",
      topics: ["Introduction to geography", "Continents and oceans", "Climate and weather", "Inland waters", "Population geography", "Natural zones", "Countries and regions", "Economic geography"],
      studiedItems: ["Climate-forming factors", "Climate zones", "Weather and climate", "Practical exercises"],
    },
    testPage: {
      title: "Test: Climate and weather", progress: "Question 7 / 20", timer: "24:35", question: "Which of the following is a factor that influences climate formation?",
      options: ["Geographic latitude", "Relief", "Atmospheric pressure", "Ocean currents"],
      currentTopic: "Current topic", currentScore: "Current score", overview: "Questions", timeLeft: "Time remaining", finish: "View results",
    },
    results: {
      title: "Test results", correct: "14 / 20 correct", time: "Time: 25:30", friends: "Rank among friends: 3 / 12", best: "Best result: 90%",
      performance: "Topic performance", mistakes: "Mistakes", retry: "Retake", weak: "View weak topics", topics: "Back to topics",
    },
    weak: { title: "Weak topics", subtitle: "These topics matter most for improving your score", high: "High priority", medium: "Medium priority", frequent: "This topic appears frequently in exam-style questions." },
    reviewPage: {
      title: "Climate and weather", high: "High priority", score: "Your result: 40%", tabs: ["Quick explanation", "Key facts", "Typical questions", "Practice"],
      summary: "Climate is the general pattern of weather conditions observed in a specific area over a long period.",
      facts: ["Climate is affected by latitude, relief, proximity to oceans, and air masses.", "Equatorial climate is warm and humid year-round.", "Polar climate is cold and dry.", "Coastal areas usually have milder climates."],
      questions: ["Distinguish climate zones", "Recognize factors affecting climate", "Draw conclusions from maps and tables"],
      test: "Take a test on this topic", back: "Back to weak topics",
    },
    pro: {
      title: "PRO analytics", subtitle: "Track your results, score forecast, and comparison with other students", demo: "Demo data",
      forecast: "Current forecast", range: "Range", average: "Average result", solved: "Questions solved", correct: "Correct answers",
      compare: "Comparison with other students", better: "You outperform 67% of students", place: "Your rank", groupAvg: "Group average",
      top10: "Top 10%", top25: "Top 25%", below: "Below average", scoreForecast: "Score forecast", today: "If the exam were today",
      improved: "If weak topics improve", affects: "What affects the forecast", factors: ["Average result", "Trend", "Completed tests", "Correct answer rate", "Weak topics"],
      risks: "Risk topics", filters: ["Group II", "11th grade", "Russian sector"],
    },
    profile: {
      title: "Profile", name: "Name", language: "Interface language", sector: "Education sector", group: "Exam group", class: "Grade", goals: "Goals", plan: "Plan",
      values: ["Tural", "EN", "Russian sector", "Group II", "11th grade", "Free"], actions: ["Change language", "Change group", "Change goals", "Log out"],
    },
    disclaimer: "Lumio is not an official DİM product. Its purpose is to make preparation more systematic.",
  },
} as const;

export const groupSubjectKeys: Record<GroupId, readonly string[]> = {
  group_1: ["math", "english", "physics", "chemistry", "sectorLanguage"],
  group_2: ["math", "english", "geography", "azHistory", "sectorLanguage"],
  group_3: ["math", "english", "azHistory", "worldHistory", "sectorLiterature"],
  group_4: ["math", "physics", "chemistry", "biology", "sectorLanguage"],
};

export const subjectStats = [
  ["math", 15, 512, 47], ["english", 20, 452, 39], ["geography", 25, 472, 42],
  ["azHistory", 10, 535, 51], ["russian", 0, 438, 33],
] as const;

export const topicProgress = [100, 70, 45, 0, 0, 0, 0, 0] as const;
export const resultPerformance = [80, 60, 100, 40] as const;
export const riskScores = [40, 42, 61] as const;
