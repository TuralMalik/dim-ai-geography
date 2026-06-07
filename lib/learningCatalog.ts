import type { EducationSector } from "@/lib/onboardingI18n";
import type { GroupId, ProductLocale } from "@/lib/productI18n";

export type SubjectId =
  | "math" | "physics" | "chemistry" | "english" | "geography"
  | "az-history" | "world-history" | "biology"
  | "russian" | "azerbaijani" | "russian-literature" | "azerbaijani-literature";

type LocalText = Record<ProductLocale, string>;
type TopicDefinition = { slug: string; name: LocalText };
type SubjectDefinition = {
  id: SubjectId;
  icon: string;
  name: LocalText;
  description: LocalText;
  progress: number;
  completed: number;
  estimated: number;
  topics: TopicDefinition[];
};

const t = (az: string, ru: string, en: string): LocalText => ({ az, ru, en });
const topic = (slug: string, az: string, ru: string, en: string): TopicDefinition => ({ slug, name: t(az, ru, en) });

export const learningUi = {
  az: {
    groupSubjects: "qrup üzrə hazırlıq fənləri", completed: "Tamamlanan mövzular", estimated: "Təxmini bal",
    overview: "Ümumi baxış", topics: "Mövzular", notes: "Konspektlər", tests: "Testlər", statistics: "Statistika",
    subjectIntro: "Bu fənn üzrə hazırlıq strukturunuz və progressiniz.", recent: "Son fəaliyyət",
    placeholder: "Bu bölmə növbəti mərhələdə əlavə olunacaq.", topicProgress: "Mövzu progressi",
    comingSoon: "Tədris məzmunu tezliklə əlavə olunacaq.", topicDescription: "Bu səhifə gələcək dərs materialları, izahlar və praktika üçün hazırlanıb.",
    learn: "Mövzunu öyrən", disabledTest: "Test tezliklə", selectedGoals: "Seçilmiş məqsədlər",
    profile: "Hazırlıq profili", sector: "Bölmə", group: "Qrup", class: "Sinif",
  },
  ru: {
    groupSubjects: "предметы подготовки", completed: "Завершено тем", estimated: "Прогноз балла",
    overview: "Обзор", topics: "Темы", notes: "Конспекты", tests: "Тесты", statistics: "Статистика",
    subjectIntro: "Структура подготовки и прогресс по этому предмету.", recent: "Последняя активность",
    placeholder: "Этот раздел будет добавлен на следующем этапе.", topicProgress: "Прогресс темы",
    comingSoon: "Учебные материалы скоро появятся.", topicDescription: "Страница подготовлена для будущих материалов, объяснений и практики.",
    learn: "Изучить тему", disabledTest: "Тест скоро", selectedGoals: "Выбранные цели",
    profile: "Профиль подготовки", sector: "Сектор", group: "Группа", class: "Класс",
  },
  en: {
    groupSubjects: "preparation subjects", completed: "Topics completed", estimated: "Estimated score",
    overview: "Overview", topics: "Topics", notes: "Notes", tests: "Tests", statistics: "Statistics",
    subjectIntro: "Your preparation structure and progress for this subject.", recent: "Recent activity",
    placeholder: "This section will be added in the next phase.", topicProgress: "Topic progress",
    comingSoon: "Learning content is coming soon.", topicDescription: "This page is ready for future lessons, explanations, and practice.",
    learn: "Study topic", disabledTest: "Test coming soon", selectedGoals: "Selected goals",
    profile: "Preparation profile", sector: "Sector", group: "Group", class: "Class",
  },
} as const;

const commonTopics = {
  math: [
    topic("numbers", "Ədədlər", "Числа", "Numbers"), topic("equations", "Tənliklər", "Уравнения", "Equations"),
    topic("functions", "Funksiyalar", "Функции", "Functions"), topic("geometry", "Həndəsə", "Геометрия", "Geometry"),
    topic("trigonometry", "Triqonometriya", "Тригонометрия", "Trigonometry"), topic("probability", "Ehtimal", "Вероятность", "Probability"),
    topic("statistics", "Statistika", "Статистика", "Statistics"), topic("logic", "Məntiq", "Логика", "Logic"),
  ],
  physics: [
    topic("mechanics", "Mexanika", "Механика", "Mechanics"), topic("molecular", "Molekulyar fizika", "Молекулярная физика", "Molecular physics"),
    topic("electricity", "Elektrik", "Электричество", "Electricity"), topic("magnetism", "Maqnetizm", "Магнетизм", "Magnetism"),
    topic("optics", "Optika", "Оптика", "Optics"), topic("atomic", "Atom fizikası", "Атомная физика", "Atomic physics"),
  ],
  chemistry: [
    topic("atoms", "Atom və molekul", "Атомы и молекулы", "Atoms and molecules"), topic("periodic", "Dövri sistem", "Периодическая система", "Periodic table"),
    topic("bonds", "Kimyəvi rabitə", "Химическая связь", "Chemical bonds"), topic("reactions", "Kimyəvi reaksiyalar", "Химические реакции", "Chemical reactions"),
    topic("inorganic", "Qeyri-üzvi kimya", "Неорганическая химия", "Inorganic chemistry"), topic("organic", "Üzvi kimya", "Органическая химия", "Organic chemistry"),
  ],
  english: [
    topic("grammar", "Qrammatika", "Грамматика", "Grammar"), topic("vocabulary", "Leksika", "Лексика", "Vocabulary"),
    topic("reading", "Oxu", "Чтение", "Reading"), topic("listening", "Dinləmə", "Аудирование", "Listening"),
    topic("writing", "Yazı", "Письмо", "Writing"), topic("exam-strategies", "İmtahan strategiyaları", "Экзаменационные стратегии", "Exam strategies"),
  ],
  geography: [
    topic("introduction-geography", "Coğrafiyaya giriş", "Введение в географию", "Introduction to geography"),
    topic("continents-oceans", "Materiklər və okeanlar", "Материки и океаны", "Continents and oceans"),
    topic("climate-weather", "İqlim və hava", "Климат и погода", "Climate and weather"),
    topic("inland-waters", "Daxili sular", "Внутренние воды", "Inland waters"),
    topic("population-geography", "Əhali coğrafiyası", "География населения", "Population geography"),
    topic("natural-zones", "Təbii zonalar", "Природные зоны", "Natural zones"),
    topic("countries-regions", "Ölkələr və regionlar", "Страны и регионы", "Countries and regions"),
    topic("economic-geography", "İqtisadi coğrafiya", "Экономическая география", "Economic geography"),
  ],
  history: [
    topic("ancient", "Qədim dövr", "Древний период", "Ancient period"), topic("middle-ages", "Orta əsrlər", "Средние века", "Middle Ages"),
    topic("modern", "Yeni dövr", "Новое время", "Modern period"), topic("independence", "Müstəqillik dövrü", "Период независимости", "Independence period"),
    topic("adr", "Azərbaycan Xalq Cümhuriyyəti", "Азербайджанская Демократическая Республика", "Azerbaijan Democratic Republic"),
    topic("ussr", "SSRİ dövrü", "Период СССР", "Soviet period"),
  ],
  worldHistory: [
    topic("ancient-world", "Qədim dünya", "Древний мир", "Ancient world"), topic("medieval-world", "Orta əsrlər", "Средние века", "Middle Ages"),
    topic("renaissance", "İntibah və islahatlar", "Возрождение и реформы", "Renaissance and reforms"),
    topic("industrial", "Sənaye inqilabı", "Промышленная революция", "Industrial revolution"),
    topic("world-wars", "Dünya müharibələri", "Мировые войны", "World wars"), topic("modern-world", "Müasir dünya", "Современный мир", "Modern world"),
  ],
  biology: [
    topic("cell", "Hüceyrə", "Клетка", "Cell"), topic("genetics", "Genetika", "Генетика", "Genetics"),
    topic("human", "İnsan anatomiyası", "Анатомия человека", "Human anatomy"), topic("plants", "Bitkilər", "Растения", "Plants"),
    topic("animals", "Heyvanlar", "Животные", "Animals"), topic("ecology", "Ekologiya", "Экология", "Ecology"),
  ],
  language: [
    topic("phonetics", "Fonetika", "Фонетика", "Phonetics"), topic("vocabulary-language", "Leksika", "Лексика", "Vocabulary"),
    topic("morphology", "Morfologiya", "Морфология", "Morphology"), topic("syntax", "Sintaksis", "Синтаксис", "Syntax"),
    topic("spelling", "Orfoqrafiya", "Орфография", "Spelling"), topic("text-analysis", "Mətn təhlili", "Анализ текста", "Text analysis"),
  ],
  literature: [
    topic("literary-theory", "Ədəbiyyat nəzəriyyəsi", "Теория литературы", "Literary theory"),
    topic("folklore", "Folklor", "Фольклор", "Folklore"), topic("classics", "Klassik ədəbiyyat", "Классическая литература", "Classical literature"),
    topic("modern-literature", "Müasir ədəbiyyat", "Современная литература", "Modern literature"),
    topic("authors", "Müəlliflər və əsərlər", "Авторы и произведения", "Authors and works"),
  ],
};

export const subjects: Record<SubjectId, SubjectDefinition> = {
  math: { id: "math", icon: "∑", name: t("Riyaziyyat", "Математика", "Mathematics"), description: t("Ədədlər, tənliklər, funksiyalar və həndəsə", "Числа, уравнения, функции и геометрия", "Numbers, equations, functions, and geometry"), progress: 15, completed: 2, estimated: 512, topics: commonTopics.math },
  physics: { id: "physics", icon: "⚡", name: t("Fizika", "Физика", "Physics"), description: t("Mexanika, elektrik, optika və atom fizikası", "Механика, электричество, оптика и атомная физика", "Mechanics, electricity, optics, and atomic physics"), progress: 8, completed: 1, estimated: 465, topics: commonTopics.physics },
  chemistry: { id: "chemistry", icon: "◇", name: t("Kimya", "Химия", "Chemistry"), description: t("Maddələr, reaksiyalar və kimyəvi rabitə", "Вещества, реакции и химические связи", "Substances, reactions, and chemical bonds"), progress: 12, completed: 1, estimated: 478, topics: commonTopics.chemistry },
  english: { id: "english", icon: "A", name: t("İngilis dili", "Английский язык", "English"), description: t("Qrammatika, oxu, leksika və imtahan strategiyası", "Грамматика, чтение, лексика и стратегия экзамена", "Grammar, reading, vocabulary, and exam strategy"), progress: 20, completed: 2, estimated: 452, topics: commonTopics.english },
  geography: { id: "geography", icon: "◎", name: t("Coğrafiya", "География", "Geography"), description: t("İqlim, əhali, təbii zonalar və iqtisadi coğrafiya", "Климат, население, природные зоны и экономика", "Climate, population, natural zones, and economy"), progress: 25, completed: 2, estimated: 472, topics: commonTopics.geography },
  "az-history": { id: "az-history", icon: "⌛", name: t("Azərbaycan tarixi", "История Азербайджана", "History of Azerbaijan"), description: t("Qədim dövrdən müstəqilliyə qədər", "От древности до независимости", "From ancient times to independence"), progress: 10, completed: 1, estimated: 535, topics: commonTopics.history },
  "world-history": { id: "world-history", icon: "◫", name: t("Ümumi tarix", "Всемирная история", "World history"), description: t("Qədim dünyadan müasir dövrə qədər", "От древнего мира до современности", "From the ancient world to modern times"), progress: 5, completed: 0, estimated: 446, topics: commonTopics.worldHistory },
  biology: { id: "biology", icon: "⌘", name: t("Biologiya", "Биология", "Biology"), description: t("Hüceyrə, genetika, anatomiya və ekologiya", "Клетка, генетика, анатомия и экология", "Cells, genetics, anatomy, and ecology"), progress: 9, completed: 1, estimated: 486, topics: commonTopics.biology },
  russian: { id: "russian", icon: "Я", name: t("Rus dili", "Русский язык", "Russian"), description: t("Qrammatika, leksika və mətn təhlili", "Грамматика, лексика и анализ текста", "Grammar, vocabulary, and text analysis"), progress: 0, completed: 0, estimated: 438, topics: commonTopics.language },
  azerbaijani: { id: "azerbaijani", icon: "Ə", name: t("Azərbaycan dili", "Азербайджанский язык", "Azerbaijani"), description: t("Qrammatika, leksika və mətn təhlili", "Грамматика, лексика и анализ текста", "Grammar, vocabulary, and text analysis"), progress: 0, completed: 0, estimated: 445, topics: commonTopics.language },
  "russian-literature": { id: "russian-literature", icon: "Я", name: t("Rus dili və ədəbiyyatı", "Русский язык и литература", "Russian language and literature"), description: t("Dil qaydaları, müəlliflər və əsərlər", "Язык, авторы и произведения", "Language, authors, and literary works"), progress: 4, completed: 0, estimated: 450, topics: [...commonTopics.language, ...commonTopics.literature] },
  "azerbaijani-literature": { id: "azerbaijani-literature", icon: "Ə", name: t("Azərbaycan dili və ədəbiyyatı", "Азербайджанский язык и литература", "Azerbaijani language and literature"), description: t("Dil qaydaları, müəlliflər və əsərlər", "Язык, авторы и произведения", "Language, authors, and literary works"), progress: 4, completed: 0, estimated: 450, topics: [...commonTopics.language, ...commonTopics.literature] },
};

const groupBase: Record<GroupId, SubjectId[]> = {
  group_1: ["math", "physics", "chemistry", "english", "russian"],
  group_2: ["math", "geography", "az-history", "english", "russian"],
  group_3: ["math", "world-history", "az-history", "english", "russian-literature"],
  group_4: ["math", "physics", "chemistry", "biology", "russian"],
};

export function getSubjectsForProfile(group: GroupId, sector: EducationSector): SubjectDefinition[] {
  return groupBase[group].map((id) => {
    if (sector === "az_sector" && id === "russian") return subjects.azerbaijani;
    if (sector === "az_sector" && id === "russian-literature") return subjects["azerbaijani-literature"];
    return subjects[id];
  });
}

export function findTopic(subject: SubjectDefinition, slug: string) {
  return subject.topics.find((item) => item.slug === slug);
}
