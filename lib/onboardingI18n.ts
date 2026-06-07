export type OnboardingLocale = "az" | "ru" | "en";
export type EducationSector = "az_sector" | "ru_sector";

export const onboardingLocales: OnboardingLocale[] = ["az", "ru", "en"];

export const onboardingCopy = {
  az: {
    brand: "DİM AI",
    logoLabel: "DİM AI ana səhifə",
    progress: "Addım 1 / 4",
    title: "Təhsil bölmənizi seçin",
    subtitle: "Sizə uyğun hazırlıq proqramı quraq",
    continueInactive: "Davam et",
    continueActive: "Davam et →",
    accountPrompt: "Artıq hesabınız var?",
    login: "Daxil olun",
    sectorGroupLabel: "Təhsil bölməsini seçin",
    selectedLabel: "Seçilib",
    sectors: {
      az_sector: {
        badge: "AZ",
        title: "Azərbaycan bölməsi",
        bullets: ["Azərbaycan dilində təhsil", "DİM proqramına uyğun hazırlıq"],
      },
      ru_sector: {
        badge: "RU",
        title: "Rus bölməsi",
        bullets: ["Rus dilində təhsil", "DİM proqramına uyğun hazırlıq"],
      },
    },
  },
  ru: {
    brand: "DİM AI",
    logoLabel: "DİM AI — главная",
    progress: "Шаг 1 / 4",
    title: "Выберите сектор обучения",
    subtitle: "Настроим программу подготовки под вас",
    continueInactive: "Продолжить",
    continueActive: "Продолжить →",
    accountPrompt: "Уже есть аккаунт?",
    login: "Войти",
    sectorGroupLabel: "Выберите сектор обучения",
    selectedLabel: "Выбрано",
    sectors: {
      az_sector: {
        badge: "AZ",
        title: "Азербайджанский сектор",
        bullets: ["Обучение на азербайджанском языке", "Подготовка по программе DİM"],
      },
      ru_sector: {
        badge: "RU",
        title: "Русский сектор",
        bullets: ["Обучение на русском языке", "Подготовка по программе DİM"],
      },
    },
  },
  en: {
    brand: "DİM AI",
    logoLabel: "DİM AI home",
    progress: "Step 1 / 4",
    title: "Choose your education sector",
    subtitle: "We will personalize your preparation program",
    continueInactive: "Continue",
    continueActive: "Continue →",
    accountPrompt: "Already have an account?",
    login: "Log in",
    sectorGroupLabel: "Choose your education sector",
    selectedLabel: "Selected",
    sectors: {
      az_sector: {
        badge: "AZ",
        title: "Azerbaijani sector",
        bullets: ["Education in Azerbaijani", "Preparation based on the DİM program"],
      },
      ru_sector: {
        badge: "RU",
        title: "Russian sector",
        bullets: ["Education in Russian", "Preparation based on the DİM program"],
      },
    },
  },
} as const;

