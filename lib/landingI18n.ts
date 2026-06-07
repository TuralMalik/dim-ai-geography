import type { ProductLocale } from "@/lib/productI18n";

export const landingCopy: Record<ProductLocale, {
  nav: string[]; login: string; cta: string; ctaNote: string; badge: string; hero: string; subhero: string;
  groups: string[]; beta: string; analytics: Record<string, string>; stepsTitle: string; stepsSub: string;
  steps: [string, string][]; benefitsTitle: string; benefitsSub: string; benefits: [string, string][];
  finalTitle: string; finalText: string; footer: string;
}> = {
  az: {
    nav: ["Necə işləyir", "Üstünlüklər", "Nəticə nümunəsi"], login: "Daxil ol", cta: "Pulsuz başla",
    ctaNote: "İlk test pulsuzdur", badge: "I–IV qruplar üçün universitetə hazırlıq",
    hero: "Bu gün imtahan olsa neçə bal toplayardınız?",
    subhero: "DİM hazırlığınızı ölçün, zəif mövzuları tapın və universitetə qəbul üçün balınızı necə artıra biləcəyinizi görün.",
    groups: ["I qrup", "II qrup", "III qrup", "IV qrup"], beta: "İctimai beta",
    analytics: {
      label: "Nəticə nümunəsi", title: "Bal proqnozu", current: "Cari proqnoz", potential: "Zəif mövzular təkrarlansa",
      growth: "+38 bal potensial", range: "Təxmini diapazon", average: "II qrup üzrə orta", better: "Şagirdlərin 67%-dən yaxşı",
      weak: "Ən vacib mövzular", topic1: "İqlim və hava", topic2: "İqtisadi coğrafiya", now: "İndi", after: "Təkrardan sonra",
    },
    stepsTitle: "Hazırlığınızı 4 addımda ölçün", stepsSub: "Uzun anketlər yoxdur. Bir neçə dəqiqəyə haradan başlamalı olduğunuzu görün.",
    steps: [["Qrupu seç", "Sektorunuzu və imtahan qrupunuzu göstərin."], ["Qısa test keç", "Hazırkı bilik səviyyənizi yoxlayın."], ["Zəif mövzuları tap", "Balınıza ən çox təsir edən boşluqları görün."], ["Bal proqnozu əldə et", "Təxmini nəticənizi və inkişaf potensialınızı öyrənin."]],
    benefitsTitle: "Universitetə qəbul üçün nə əldə edəcəksiniz?", benefitsSub: "Daha çox oxumaq deyil, düzgün mövzulara fokuslanmaq üçün aydın istiqamət.",
    benefits: [["Bal proqnozu", "DİM nəticənizin təxmini diapazonunu görün."], ["Zəif mövzular", "Bal artımına mane olan mövzuları prioritetləşdirin."], ["Digər şagirdlərlə müqayisə", "Qrupunuzun orta səviyyəsinə nəzərən yerinizi anlayın."], ["Qısa təkrar materialları", "Bütün dərsliyi deyil, vacib hissələri təkrar edin."]],
    finalTitle: "Universitetə hazırlığa bu gün başlayın", finalText: "İlk qısa testi keçin və hansı mövzudan başlamalı olduğunuzu görün.", footer: "DİM imtahanına daha sistemli hazırlıq platforması.",
  },
  ru: {
    nav: ["Как работает", "Преимущества", "Пример результата"], login: "Войти", cta: "Начать бесплатно",
    ctaNote: "Первый тест бесплатный", badge: "Подготовка к поступлению для I–IV групп",
    hero: "Сколько баллов вы набрали бы, если экзамен был сегодня?",
    subhero: "Оцените подготовку к DİM, найдите слабые темы и узнайте, как повысить балл для поступления в университет.",
    groups: ["I группа", "II группа", "III группа", "IV группа"], beta: "Публичная бета",
    analytics: {
      label: "Пример результата", title: "Прогноз балла", current: "Текущий прогноз", potential: "После повторения слабых тем",
      growth: "Потенциал +38 баллов", range: "Ориентировочный диапазон", average: "Средний по II группе", better: "Лучше 67% учеников",
      weak: "Самые важные темы", topic1: "Климат и погода", topic2: "Экономическая география", now: "Сейчас", after: "После повторения",
    },
    stepsTitle: "Оцените подготовку за 4 шага", stepsSub: "Без длинных анкет. За несколько минут станет понятно, с чего начать.",
    steps: [["Выберите группу", "Укажите сектор и экзаменационную группу."], ["Пройдите короткий тест", "Проверьте текущий уровень знаний."], ["Найдите слабые темы", "Увидьте пробелы, сильнее всего влияющие на балл."], ["Получите прогноз", "Узнайте ориентировочный результат и потенциал роста."]],
    benefitsTitle: "Что вы получите для поступления?", benefitsSub: "Понятное направление, чтобы сосредоточиться на нужных темах.",
    benefits: [["Прогноз балла", "Увидьте ориентировочный диапазон результата DİM."], ["Слабые темы", "Расставьте приоритеты для повышения балла."], ["Сравнение с другими", "Поймите своё место относительно группы."], ["Краткие материалы", "Повторяйте важное вместо всего учебника."]],
    finalTitle: "Начните подготовку к поступлению сегодня", finalText: "Пройдите первый короткий тест и узнайте, с какой темы начать.", footer: "Платформа для системной подготовки к экзамену DİM.",
  },
  en: {
    nav: ["How it works", "Benefits", "Result example"], login: "Log in", cta: "Start for free",
    ctaNote: "Your first test is free", badge: "University admission prep for Groups I–IV",
    hero: "What score would you get if the exam were today?",
    subhero: "Measure your DİM preparation, find weak topics, and see how to improve your score for university admission.",
    groups: ["Group I", "Group II", "Group III", "Group IV"], beta: "Public beta",
    analytics: {
      label: "Result example", title: "Score forecast", current: "Current forecast", potential: "After reviewing weak topics",
      growth: "+38 point potential", range: "Estimated range", average: "Group II average", better: "Better than 67% of students",
      weak: "Most important topics", topic1: "Climate and weather", topic2: "Economic geography", now: "Now", after: "After review",
    },
    stepsTitle: "Measure your preparation in 4 steps", stepsSub: "No long forms. See where to start in just a few minutes.",
    steps: [["Choose your group", "Select your sector and exam group."], ["Take a short test", "Check your current knowledge level."], ["Find weak topics", "See the gaps with the biggest score impact."], ["Get a score forecast", "Learn your estimated result and growth potential."]],
    benefitsTitle: "What will you get for admission?", benefitsSub: "Clear direction to focus on the topics that matter.",
    benefits: [["Score forecast", "See your estimated DİM result range."], ["Weak topics", "Prioritize what is holding your score back."], ["Peer comparison", "Understand your position within your group."], ["Quick review materials", "Review key content instead of the whole textbook."]],
    finalTitle: "Start preparing for admission today", finalText: "Take the first short test and see which topic to begin with.", footer: "A platform for more systematic DİM exam preparation.",
  },
};
