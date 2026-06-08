import type { ProductLocale } from "@/lib/productI18n";

type Copy = {
  title: string; subtitle: string; demo: string; demoNote: string;
  forecast: { current: string; currentSub: string; target: string; targetSub: string; gap: string; potential: string; potentialSub: string; gain: string; graduation: string; block: string };
  impactTitle: string; impactSub: string; level: string; priority: string; gain: string; time: string; start: string; high: string; medium: string;
  roiTitle: string; roiSub: string; topic: string; efficiency: string; veryHigh: string; highEfficiency: string; mediumEfficiency: string; low: string;
  compareTitle: string; yourForecast: string; average: string; top25: string; top10: string; percentile: string; position: string; compareMessage: string;
  subjectsTitle: string; weakness: string; stageImpact: string; graduationImpact: string; blockImpact: string;
  planTitle: string; planSub: string; day: string; expected: string; validation: string; startPlan: string;
  universityTitle: string; future: string; selectedTarget: string; previousScore: string; yourScore: string; status: string; goodChance: string; gapLabel: string; fit: string; universityNote: string;
  riskTitle: string; lastStudied: string; daysAgo: string; risk: string; repeat: string; riskHigh: string; riskMedium: string; riskLow: string;
  structureTitle: string; total: string; taskTypes: string; closed: string; coded: string; writtenBeta: string; writtenNote: string;
  valueTitle: string; free: string; pro: string; upgrade: string;
};

export const proAnalyticsCopy: Record<ProductLocale, Copy> = {
  az: {
    title: "PRO analitika", subtitle: "Bal proqnozunuzu, zəif mövzuları və digər şagirdlərlə müqayisəni izləyin.", demo: "Demo məlumatlar", demoNote: "Bu səhifədəki rəqəmlər nümunə məlumatlardır.",
    forecast: { current: "Cari proqnoz", currentSub: "Əgər imtahan bu gün olsa", target: "Hədəf bal", targetSub: "Seçilmiş məqsəd", gap: "46 bal qalıb", potential: "Potensial", potentialSub: "Top mövzular bağlanarsa", gain: "+32 bal potensial", graduation: "Buraxılış", block: "Blok" },
    impactTitle: "Ən çox bal artımı verə biləcək mövzular", impactSub: "Bu mövzular balınıza ən çox təsir edə bilər.", level: "Cari səviyyə", priority: "İmtahan prioriteti", gain: "Potensial artım", time: "Tövsiyə olunan vaxt", start: "Başla", high: "Yüksək", medium: "Orta",
    roiTitle: "Vaxtınızı hara sərf etmək daha faydalıdır?", roiSub: "Hər mövzu üzrə təxmini vaxt və bal artımı.", topic: "Mövzu", efficiency: "Səmərəlilik", veryHigh: "Çox yüksək", highEfficiency: "Yüksək", mediumEfficiency: "Orta", low: "Aşağı",
    compareTitle: "Oxşar şagirdlərlə müqayisə", yourForecast: "Sizin proqnoz", average: "Orta", top25: "Top 25%", top10: "Top 10%", percentile: "Persentil", position: "Mövqe", compareMessage: "Siz oxşar şagirdlərin 67%-dən yaxşı nəticə göstərirsiniz.",
    subjectsTitle: "Fənlər üzrə proqnoz", weakness: "Zəif mövzu", stageImpact: "Mərhələyə təsir", graduationImpact: "Buraxılış", blockImpact: "Blok",
    planTitle: "Bu həftə üçün şəxsi plan", planSub: "550 bala yaxınlaşmaq üçün tövsiyə olunan plan.", day: "Gün", expected: "Gözlənilən artım", validation: "progress yoxlaması", startPlan: "Planı başlat",
    universityTitle: "Universitet hədəfi", future: "Gələcək PRO funksiyası · Demo", selectedTarget: "Seçilmiş hədəf", previousScore: "Əvvəlki keçid balı", yourScore: "Sizin proqnoz", status: "Təxmini uyğunluq", goodChance: "Yaxşı şans", gapLabel: "Fərq", fit: "İlkin göstərici", universityNote: "Keçmiş illərin məlumatlarına əsaslanan ilkin göstəricidir. Qəbul zəmanəti deyil.",
    riskTitle: "Unutma riski və təkrar ehtiyacı", lastStudied: "Son təkrar", daysAgo: "gün əvvəl", risk: "Unutma riski", repeat: "5 dəqiqəlik təkrar", riskHigh: "Yüksək", riskMedium: "Orta", riskLow: "Aşağı",
    structureTitle: "İmtahan strukturu", total: "Ümumi", taskTypes: "Tapşırıq növləri", closed: "Qapalı suallar", coded: "Kodlaşdırılan açıq suallar", writtenBeta: "Yazılı cavablar · Beta", writtenNote: "Yazılı cavablar üzrə qiymətləndirmə rəsmi bal kimi göstərilmir.",
    valueTitle: "Free və PRO fərqi", free: "Free: baza nəticəsi, zəif mövzular və məhdud testlər.", pro: "PRO: bal proqnozu, mövzu təsiri, şəxsi plan, müqayisə və universitet hədəfi.", upgrade: "PRO-ya keç",
  },
  ru: {
    title: "PRO аналитика", subtitle: "Следите за прогнозом балла, слабыми темами и сравнением с другими учениками.", demo: "Демо-данные", demoNote: "Все цифры на этой странице являются примером.",
    forecast: { current: "Текущий прогноз", currentSub: "Если экзамен будет сегодня", target: "Целевой балл", targetSub: "Выбранная цель", gap: "Осталось 46 баллов", potential: "Потенциал", potentialSub: "Если закрыть главные темы", gain: "Потенциал +32 балла", graduation: "Выпускной", block: "Блок" },
    impactTitle: "Темы с наибольшим влиянием на балл", impactSub: "Работа над ними может сильнее всего повысить результат.", level: "Текущий уровень", priority: "Приоритет экзамена", gain: "Потенциальный рост", time: "Рекомендуемое время", start: "Начать", high: "Высокий", medium: "Средний",
    roiTitle: "Куда выгоднее потратить время?", roiSub: "Примерное время и рост балла по каждой теме.", topic: "Тема", efficiency: "Эффективность", veryHigh: "Очень высокая", highEfficiency: "Высокая", mediumEfficiency: "Средняя", low: "Низкая",
    compareTitle: "Сравнение с похожими учениками", yourForecast: "Ваш прогноз", average: "Средний", top25: "Топ 25%", top10: "Топ 10%", percentile: "Процентиль", position: "Позиция", compareMessage: "Ваш результат выше, чем у 67% похожих учеников.",
    subjectsTitle: "Прогноз по предметам", weakness: "Слабая тема", stageImpact: "Влияние на этап", graduationImpact: "Выпускной", blockImpact: "Блок",
    planTitle: "Личный план на эту неделю", planSub: "Рекомендуемый план, чтобы приблизиться к 550 баллам.", day: "День", expected: "Ожидаемый рост", validation: "проверка прогресса", startPlan: "Начать план",
    universityTitle: "Цель по университету", future: "Будущая PRO-функция · Демо", selectedTarget: "Выбранная цель", previousScore: "Проходной балл ранее", yourScore: "Ваш прогноз", status: "Примерное соответствие", goodChance: "Хорошие шансы", gapLabel: "Разница", fit: "Предварительный показатель", universityNote: "Предварительная оценка на основе прошлых лет. Она не гарантирует поступление.",
    riskTitle: "Риск забывания и необходимость повторения", lastStudied: "Последнее изучение", daysAgo: "дней назад", risk: "Риск забывания", repeat: "Повторить за 5 минут", riskHigh: "Высокий", riskMedium: "Средний", riskLow: "Низкий",
    structureTitle: "Структура экзамена", total: "Итого", taskTypes: "Типы заданий", closed: "Закрытые вопросы", coded: "Кодируемые открытые вопросы", writtenBeta: "Письменные ответы · Бета", writtenNote: "Оценка письменных ответов не отображается как официальный балл.",
    valueTitle: "Разница Free и PRO", free: "Free: базовый результат, слабые темы и ограниченные тесты.", pro: "PRO: прогноз балла, влияние тем, личный план, сравнение и цель по университету.", upgrade: "Перейти на PRO",
  },
  en: {
    title: "PRO analytics", subtitle: "Track your score forecast, weak topics, and comparison with other students.", demo: "Demo data", demoNote: "All figures on this page are sample data.",
    forecast: { current: "Current forecast", currentSub: "If the exam were today", target: "Target score", targetSub: "Selected goal", gap: "46 points remaining", potential: "Potential", potentialSub: "If top topics are closed", gain: "+32 point potential", graduation: "Graduation", block: "Block" },
    impactTitle: "Topics with the highest score impact", impactSub: "These topics can have the greatest effect on your score.", level: "Current level", priority: "Exam priority", gain: "Potential gain", time: "Recommended time", start: "Start", high: "High", medium: "Medium",
    roiTitle: "Where is your study time most valuable?", roiSub: "Estimated time and score gain by topic.", topic: "Topic", efficiency: "Efficiency", veryHigh: "Very high", highEfficiency: "High", mediumEfficiency: "Medium", low: "Low",
    compareTitle: "Comparison with similar students", yourForecast: "Your forecast", average: "Average", top25: "Top 25%", top10: "Top 10%", percentile: "Percentile", position: "Position", compareMessage: "You score higher than 67% of similar students.",
    subjectsTitle: "Subject-level forecast", weakness: "Weak topic", stageImpact: "Stage impact", graduationImpact: "Graduation", blockImpact: "Block",
    planTitle: "Your personal plan for this week", planSub: "A recommended plan to move closer to 550 points.", day: "Day", expected: "Expected gain", validation: "progress validation", startPlan: "Start plan",
    universityTitle: "University target", future: "Future PRO feature · Demo", selectedTarget: "Selected target", previousScore: "Previous passing score", yourScore: "Your forecast", status: "Estimated fit", goodChance: "Good chance", gapLabel: "Gap", fit: "Initial indicator", universityNote: "An initial estimate based on previous years. It does not guarantee admission.",
    riskTitle: "Forgetting risk and review need", lastStudied: "Last studied", daysAgo: "days ago", risk: "Forgetting risk", repeat: "5-minute review", riskHigh: "High", riskMedium: "Medium", riskLow: "Low",
    structureTitle: "Exam structure", total: "Total", taskTypes: "Task types", closed: "Closed questions", coded: "Coded open questions", writtenBeta: "Written responses · Beta", writtenNote: "Written-response evaluation is not shown as an official score.",
    valueTitle: "Free vs PRO", free: "Free: basic result, weak topics, and limited tests.", pro: "PRO: score forecast, topic impact, personal plan, comparison, and university target.", upgrade: "Upgrade to PRO",
  },
};

export const proAnalyticsData = {
  az: {
    impact: [["İqlim və hava", "Coğrafiya", 40, "high", 12, "35 dəq"], ["İqtisadi coğrafiya", "Coğrafiya", 42, "high", 8, "45 dəq"], ["Faizlər və nisbətlər", "Riyaziyyat", 55, "medium", 6, "40 dəq"], ["Qrammatika", "Rus dili", 62, "medium", 4, "30 dəq"]] as const,
    roi: [["İqlim və hava", "35 dəq", 12, "veryHigh"], ["İqtisadi coğrafiya", "45 dəq", 8, "high"], ["Faizlər və nisbətlər", "40 dəq", 6, "medium"], ["Fonetik analiz", "90 dəq", 2, "low"]] as const,
    subjects: [["Riyaziyyat", 58, "Faizlər və nisbətlər", "both"], ["Coğrafiya", 82, "İqlim və hava", "block"], ["Azərbaycan tarixi", 61, "XIX əsr", "block"], ["İngilis dili", 74, "Qrammatika", "graduation"], ["Rus dili", 63, "Fonetik analiz", "graduation"]] as const,
    plan: [["İqlim və hava", "35 dəq", "+4 bal"], ["İqtisadi coğrafiya", "45 dəq", "+3 bal"], ["Faizlər və nisbətlər", "40 dəq", "+3 bal"], ["Qrammatika", "30 dəq", "+2 bal"], ["Mini sınaq", "20 sual", "validation"]] as const,
    risks: [["İqlim və hava", 14, "high"], ["Azərbaycan tarixi · XIX əsr", 9, "medium"], ["Rus dili · Qrammatika", 3, "low"]] as const,
  },
  ru: {
    impact: [["Климат и погода", "География", 40, "high", 12, "35 мин"], ["Экономическая география", "География", 42, "high", 8, "45 мин"], ["Проценты и пропорции", "Математика", 55, "medium", 6, "40 мин"], ["Грамматика", "Русский язык", 62, "medium", 4, "30 мин"]] as const,
    roi: [["Климат и погода", "35 мин", 12, "veryHigh"], ["Экономическая география", "45 мин", 8, "high"], ["Проценты и пропорции", "40 мин", 6, "medium"], ["Фонетический анализ", "90 мин", 2, "low"]] as const,
    subjects: [["Математика", 58, "Проценты и пропорции", "both"], ["География", 82, "Климат и погода", "block"], ["История Азербайджана", 61, "XIX век", "block"], ["Английский язык", 74, "Грамматика", "graduation"], ["Русский язык", 63, "Фонетический анализ", "graduation"]] as const,
    plan: [["Климат и погода", "35 мин", "+4 балла"], ["Экономическая география", "45 мин", "+3 балла"], ["Проценты и пропорции", "40 мин", "+3 балла"], ["Грамматика", "30 мин", "+2 балла"], ["Мини-тест", "20 вопросов", "validation"]] as const,
    risks: [["Климат и погода", 14, "high"], ["История Азербайджана · XIX век", 9, "medium"], ["Русский язык · Грамматика", 3, "low"]] as const,
  },
  en: {
    impact: [["Climate and weather", "Geography", 40, "high", 12, "35 min"], ["Economic geography", "Geography", 42, "high", 8, "45 min"], ["Percentages and ratios", "Mathematics", 55, "medium", 6, "40 min"], ["Grammar", "Russian", 62, "medium", 4, "30 min"]] as const,
    roi: [["Climate and weather", "35 min", 12, "veryHigh"], ["Economic geography", "45 min", 8, "high"], ["Percentages and ratios", "40 min", 6, "medium"], ["Phonetic analysis", "90 min", 2, "low"]] as const,
    subjects: [["Mathematics", 58, "Percentages and ratios", "both"], ["Geography", 82, "Climate and weather", "block"], ["History of Azerbaijan", 61, "19th century", "block"], ["English", 74, "Grammar", "graduation"], ["Russian", 63, "Phonetic analysis", "graduation"]] as const,
    plan: [["Climate and weather", "35 min", "+4 points"], ["Economic geography", "45 min", "+3 points"], ["Percentages and ratios", "40 min", "+3 points"], ["Grammar", "30 min", "+2 points"], ["Mini mock", "20 questions", "validation"]] as const,
    risks: [["Climate and weather", 14, "high"], ["History of Azerbaijan · 19th century", 9, "medium"], ["Russian · Grammar", 3, "low"]] as const,
  },
} as const;
