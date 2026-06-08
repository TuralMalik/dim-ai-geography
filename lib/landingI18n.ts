import type { ProductLocale } from "@/lib/productI18n";

type LandingGroup = {
  name: string;
  careers: string[];
  description: string;
  commonSubjects: string[];
  specificSubjects: string[];
};

type LandingCopy = {
  nav: string[];
  login: string;
  cta: string;
  secondaryCta: string;
  badges: string[];
  headline: string;
  supporting: string;
  trust: string[];
  groupLabels: {
    common: string;
    specific: string;
  };
  groups: LandingGroup[];
  analytics: {
    label: string;
    title: string;
    now: string;
    after: string;
    potential: string;
    range: string;
    average: string;
    topics: string;
    topicNames: string[];
    demo: string;
    methodology: string;
    disclaimer: string;
  };
  how: { eyebrow: string; title: string; items: string[] };
  benefits: { eyebrow: string; title: string; items: [string, string][] };
  dashboard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: [string, string][];
    subjectsTitle: string;
    subjects: [string, number][];
    recommendation: string;
    recommendationItems: string[];
  };
  proof: [string, string][];
  faqTitle: string;
  faq: [string, string][];
  footerLinks: string[];
  footerText: string;
  disclaimer: string;
};

export const landingCopy: Record<ProductLocale, LandingCopy> = {
  az: {
    nav: ["Necə işləyir", "Üstünlüklər", "Kabinet", "FAQ"],
    login: "Daxil ol",
    cta: "Pulsuz başla",
    secondaryCta: "Nümunə analitikaya bax",
    badges: ["I–IV qruplar üçün universitetə hazırlıq"],
    headline: "Bu gün imtahan olsa neçə bal toplayardınız?",
    supporting: "DİM hazırlığınızı ölçün, zəif mövzuları tapın və universitetə qəbul üçün balınızı necə artıra biləcəyinizi görün.",
    trust: ["İlk test pulsuzdur", "Qeydiyyat tələb olunmur", "Azərbaycan və Rus bölməsi", "I–IV qruplar"],
    groupLabels: { common: "Ümumi fənlər", specific: "İxtisas fənləri" },
    groups: [
      { name: "I qrup", careers: ["💻 İT", "🏗️ Mühəndislik", "⚙️ Texnologiyalar"], description: "İT, mühəndislik və texniki istiqamətlər üçün.", commonSubjects: ["📖 Tədris dili", "📐 Riyaziyyat", "🇬🇧 Xarici dil"], specificSubjects: ["📐 Riyaziyyat", "⚛️ Fizika", "🧪 Kimya / 💻 İnformatika"] },
      { name: "II qrup", careers: ["💰 İqtisadiyyat", "📈 Biznes", "✈️ Turizm"], description: "İqtisadiyyat, biznes və turizm istiqamətləri üçün.", commonSubjects: ["📖 Tədris dili", "📐 Riyaziyyat", "🇬🇧 Xarici dil"], specificSubjects: ["📐 Riyaziyyat", "🌍 Coğrafiya", "🏛️ Azərbaycan tarixi"] },
      { name: "III qrup", careers: ["⚖️ Hüquq", "🏛️ Tarix", "📚 Filologiya"], description: "Hüquq, tarix və humanitar istiqamətlər üçün.", commonSubjects: ["📖 Tədris dili", "📐 Riyaziyyat", "🇬🇧 Xarici dil"], specificSubjects: ["🏛️ Tarix", "📚 Ədəbiyyat / 🌍 Coğrafiya"] },
      { name: "IV qrup", careers: ["🩺 Tibb", "🧬 Biologiya", "💊 Əczaçılıq"], description: "Tibb, biologiya və səhiyyə istiqamətləri üçün.", commonSubjects: ["📖 Tədris dili", "📐 Riyaziyyat", "🇬🇧 Xarici dil"], specificSubjects: ["🧬 Biologiya", "🧪 Kimya", "⚛️ Fizika"] },
    ],
    analytics: {
      label: "Nəticə nümunəsi",
      title: "Bal proqnozu",
      now: "İndi",
      after: "Təkrardan sonra",
      potential: "+38 bal potensial",
      range: "Təxmini diapazon",
      average: "II qrup üzrə orta",
      topics: "Ən vacib mövzular",
      topicNames: ["İqlim və hava", "İqtisadi coğrafiya"],
      demo: "Nümunə analitika",
      methodology: "Analiz keçdiyiniz testlər və əvvəlki illərin DİM materialları əsasında hazırlanır.",
      disclaimer: "Bu nəticə təxmini proqnozdur.",
    },
    how: { eyebrow: "4 sadə addım", title: "Necə işləyir?", items: ["Qrupu seç", "Qısa test keç", "Zəif mövzuları tap", "Bal proqnozu əldə et"] },
    benefits: {
      eyebrow: "Hazırlığın nəticəsi",
      title: "Nə əldə edəcəksiniz?",
      items: [
        ["Bal proqnozu", "Cari səviyyənizə uyğun təxmini nəticə diapazonu."],
        ["Zəif mövzular", "Bal artımına ən çox mane olan mövzuların siyahısı."],
        ["Digər şagirdlərlə müqayisə", "Qrupunuzun orta səviyyəsinə nəzərən yeriniz."],
        ["Qısa təkrar materialları", "Vacib mövzular üzrə yığcam və məqsədli izahlar."],
        ["Şəxsi təkrar planı", "Nəticənizə uyğun tövsiyə olunan növbəti addımlar."],
      ],
    },
    dashboard: {
      eyebrow: "Şəxsi kabinet",
      title: "Bütün hazırlıq bir yerdə",
      subtitle: "Progress, testlər, zəif mövzular və gündəlik tövsiyələr bir ekranda.",
      stats: [["Ümumi progress", "12%"], ["Testlər keçilib", "4"], ["Orta nəticə", "68%"], ["Zəif mövzular", "2"]],
      subjectsTitle: "Fənlər üzrə progress",
      subjects: [["Riyaziyyat", 15], ["İngilis dili", 20], ["Coğrafiya", 25]],
      recommendation: "Bu gün tövsiyə olunur",
      recommendationItems: ["İqlim və hava", "İqtisadi coğrafiya"],
    },
    proof: [["1248+", "Sınaq nəticəsi təhlil edilib"], ["✓", "Məlumatlarınız təhlükəsizdir"], ["◎", "Universitetə hazırlıq fokusunda"], ["↻", "Daim yenilənən məzmun"]],
    faqTitle: "Tez-tez verilən suallar",
    faq: [
      ["Lumio rəsmi DİM məhsuludur?", "Xeyr. Lumio müstəqil hazırlıq platformasıdır və rəsmi DİM məhsulu deyil."],
      ["Pulsuz versiyada nə mövcuddur?", "İlk test, əsas nəticə və zəif mövzuların ilkin analizi pulsuzdur."],
      ["PRO versiya nə üstünlüklər verir?", "Daha ətraflı analitika, müqayisə, bal proqnozu və şəxsi təkrar planı təqdim edir."],
      ["Bal proqnozu necə hesablanır?", "Keçdiyiniz testlər, düzgün cavab faizi, dinamika və əvvəlki illərin materialları nəzərə alınır."],
    ],
    footerLinks: ["Haqqımızda", "İstifadəçi razılaşması", "Gizlilik siyasəti", "Əlaqə"],
    footerText: "Universitetə qəbul üçün sistemli DİM hazırlığı.",
    disclaimer: "Lumio rəsmi DİM məhsulu deyil. Məqsəd hazırlığı daha sistemli etməkdir.",
  },
  ru: {
    nav: ["Как работает", "Преимущества", "Кабинет", "FAQ"],
    login: "Войти",
    cta: "Начать бесплатно",
    secondaryCta: "Посмотреть пример аналитики",
    badges: ["Подготовка к поступлению для I–IV групп"],
    headline: "Сколько баллов вы набрали бы, если экзамен был сегодня?",
    supporting: "Оцените подготовку к DİM, найдите слабые темы и узнайте, как повысить балл для поступления в университет.",
    trust: ["Первый тест бесплатный", "Регистрация не требуется", "Азербайджанский и Русский сектор", "I–IV группы"],
    groupLabels: { common: "Общие предметы", specific: "Профильные предметы" },
    groups: [
      { name: "I группа", careers: ["💻 IT", "🏗️ Инженерия", "⚙️ Технологии"], description: "Для IT, инженерных и технических направлений.", commonSubjects: ["📖 Язык обучения", "📐 Математика", "🇬🇧 Иностранный язык"], specificSubjects: ["📐 Математика", "⚛️ Физика", "🧪 Химия / 💻 Информатика"] },
      { name: "II группа", careers: ["💰 Экономика", "📈 Бизнес", "✈️ Туризм"], description: "Для экономики, бизнеса и туристических направлений.", commonSubjects: ["📖 Язык обучения", "📐 Математика", "🇬🇧 Иностранный язык"], specificSubjects: ["📐 Математика", "🌍 География", "🏛️ История Азербайджана"] },
      { name: "III группа", careers: ["⚖️ Право", "🏛️ История", "📚 Филология"], description: "Для права, истории и гуманитарных направлений.", commonSubjects: ["📖 Язык обучения", "📐 Математика", "🇬🇧 Иностранный язык"], specificSubjects: ["🏛️ История", "📚 Литература / 🌍 География"] },
      { name: "IV группа", careers: ["🩺 Медицина", "🧬 Биология", "💊 Фармацевтика"], description: "Для медицины, биологии и здравоохранения.", commonSubjects: ["📖 Язык обучения", "📐 Математика", "🇬🇧 Иностранный язык"], specificSubjects: ["🧬 Биология", "🧪 Химия", "⚛️ Физика"] },
    ],
    analytics: {
      label: "Пример результата", title: "Прогноз балла", now: "Сейчас", after: "После повторения", potential: "Потенциал +38 баллов",
      range: "Ориентировочный диапазон", average: "Средний по II группе", topics: "Самые важные темы",
      topicNames: ["Климат и погода", "Экономическая география"], demo: "Пример аналитики",
      methodology: "Анализ основан на пройденных тестах и материалах DİM прошлых лет.", disclaimer: "Результат является ориентировочным прогнозом.",
    },
    how: { eyebrow: "4 простых шага", title: "Как это работает?", items: ["Выберите группу", "Пройдите короткий тест", "Найдите слабые темы", "Получите прогноз балла"] },
    benefits: {
      eyebrow: "Результат подготовки", title: "Что вы получите?",
      items: [["Прогноз балла", "Ориентировочный диапазон результата по текущему уровню."], ["Слабые темы", "Темы, сильнее всего мешающие повышению балла."], ["Сравнение с другими", "Ваше место относительно среднего уровня группы."], ["Краткие материалы", "Короткие объяснения по самым важным темам."], ["Личный план повторения", "Следующие шаги, подобранные по вашему результату."]],
    },
    dashboard: {
      eyebrow: "Личный кабинет", title: "Вся подготовка в одном месте", subtitle: "Прогресс, тесты, слабые темы и ежедневные рекомендации на одном экране.",
      stats: [["Общий прогресс", "12%"], ["Тестов пройдено", "4"], ["Средний результат", "68%"], ["Слабые темы", "2"]],
      subjectsTitle: "Прогресс по предметам", subjects: [["Математика", 15], ["Английский язык", 20], ["География", 25]],
      recommendation: "Рекомендуем сегодня", recommendationItems: ["Климат и погода", "Экономическая география"],
    },
    proof: [["1248+", "Результатов тестов проанализировано"], ["✓", "Ваши данные защищены"], ["◎", "Фокус на поступлении"], ["↻", "Регулярно обновляемый контент"]],
    faqTitle: "Частые вопросы",
    faq: [["Lumio — официальный продукт DİM?", "Нет. Lumio — независимая платформа подготовки."], ["Что доступно бесплатно?", "Первый тест, базовый результат и первичный анализ слабых тем."], ["Что даёт PRO?", "Расширенную аналитику, сравнение, прогноз и личный план."], ["Как считается прогноз?", "Учитываются тесты, процент верных ответов, динамика и материалы прошлых лет."]],
    footerLinks: ["О нас", "Пользовательское соглашение", "Политика конфиденциальности", "Контакты"],
    footerText: "Системная подготовка к DİM для поступления в университет.",
    disclaimer: "Lumio не является официальным продуктом DİM. Цель — сделать подготовку системнее.",
  },
  en: {
    nav: ["How it works", "Benefits", "Dashboard", "FAQ"],
    login: "Log in",
    cta: "Start for free",
    secondaryCta: "View analytics example",
    badges: ["University admission prep for Groups I–IV"],
    headline: "What score would you get if the exam were today?",
    supporting: "Measure your DİM preparation, find weak topics, and see how to improve your score for university admission.",
    trust: ["First test is free", "No registration required", "Azerbaijani and Russian sectors", "Groups I–IV"],
    groupLabels: { common: "Common subjects", specific: "Specialized subjects" },
    groups: [
      { name: "Group I", careers: ["💻 IT", "🏗️ Engineering", "⚙️ Technology"], description: "For IT, engineering, and technical fields.", commonSubjects: ["📖 Teaching language", "📐 Mathematics", "🇬🇧 Foreign language"], specificSubjects: ["📐 Mathematics", "⚛️ Physics", "🧪 Chemistry / 💻 Informatics"] },
      { name: "Group II", careers: ["💰 Economics", "📈 Business", "✈️ Tourism"], description: "For economics, business, and tourism fields.", commonSubjects: ["📖 Teaching language", "📐 Mathematics", "🇬🇧 Foreign language"], specificSubjects: ["📐 Mathematics", "🌍 Geography", "🏛️ History of Azerbaijan"] },
      { name: "Group III", careers: ["⚖️ Law", "🏛️ History", "📚 Philology"], description: "For law, history, and humanities fields.", commonSubjects: ["📖 Teaching language", "📐 Mathematics", "🇬🇧 Foreign language"], specificSubjects: ["🏛️ History", "📚 Literature / 🌍 Geography"] },
      { name: "Group IV", careers: ["🩺 Medicine", "🧬 Biology", "💊 Pharmacy"], description: "For medicine, biology, and healthcare fields.", commonSubjects: ["📖 Teaching language", "📐 Mathematics", "🇬🇧 Foreign language"], specificSubjects: ["🧬 Biology", "🧪 Chemistry", "⚛️ Physics"] },
    ],
    analytics: {
      label: "Result example", title: "Score forecast", now: "Now", after: "After review", potential: "+38 point potential",
      range: "Estimated range", average: "Group II average", topics: "Most important topics", topicNames: ["Climate and weather", "Economic geography"],
      demo: "Sample analytics", methodology: "Analysis is based on your tests and previous years' DİM materials.", disclaimer: "This result is an estimated forecast.",
    },
    how: { eyebrow: "4 simple steps", title: "How does it work?", items: ["Choose your group", "Take a short test", "Find weak topics", "Get a score forecast"] },
    benefits: {
      eyebrow: "Preparation outcomes", title: "What will you get?",
      items: [["Score forecast", "An estimated result range based on your current level."], ["Weak topics", "The topics holding your score back the most."], ["Peer comparison", "Your position relative to your group average."], ["Quick review materials", "Concise explanations for the most important topics."], ["Personal review plan", "Recommended next steps based on your result."]],
    },
    dashboard: {
      eyebrow: "Student dashboard", title: "All your preparation in one place", subtitle: "Progress, tests, weak topics, and daily recommendations on one screen.",
      stats: [["Overall progress", "12%"], ["Tests completed", "4"], ["Average result", "68%"], ["Weak topics", "2"]],
      subjectsTitle: "Subject progress", subjects: [["Mathematics", 15], ["English", 20], ["Geography", 25]],
      recommendation: "Recommended today", recommendationItems: ["Climate and weather", "Economic geography"],
    },
    proof: [["1248+", "Test results analyzed"], ["✓", "Your data is secure"], ["◎", "Focused on university admission"], ["↻", "Continuously updated content"]],
    faqTitle: "Frequently asked questions",
    faq: [["Is Lumio an official DİM product?", "No. Lumio is an independent preparation platform."], ["What is available for free?", "The first test, a basic result, and initial weak-topic analysis."], ["What does PRO include?", "Expanded analytics, comparison, forecasting, and a personal plan."], ["How is the forecast calculated?", "It uses tests, correct-answer rate, progress, and previous years' materials."]],
    footerLinks: ["About", "Terms of use", "Privacy policy", "Contact"],
    footerText: "Systematic DİM preparation for university admission.",
    disclaimer: "Lumio is not an official DİM product. Its purpose is to make preparation more systematic.",
  },
};
