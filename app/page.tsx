import Link from "next/link";
import type { ReactNode } from "react";

const steps = [
  ["01", "Выберите сектор и группу", "Русский или азербайджанский сектор, I–IV группа."],
  ["02", "Пройдите короткий тест", "Система проверит текущий уровень по предметам."],
  ["03", "Получите аналитику", "Слабые темы, прогноз балла, сравнение с другими учениками."],
  ["04", "Повторяйте умнее", "Учите только то, что сильнее всего влияет на результат."],
];

const features = [
  ["↗", "Прогноз балла", "Понимай, какой результат можешь получить, если экзамен будет завтра.", "bg-soft-purple text-primary"],
  ["!", "Слабые темы", "Видишь, какие темы мешают поднять балл.", "bg-red-50 text-error"],
  ["%", "Сравнение с другими", "Узнай, выше или ниже ты среднего уровня своей группы.", "bg-emerald-50 text-success"],
  ["≡", "Краткое повторение", "Получай короткие материалы по темам вместо перечитывания всего учебника.", "bg-amber-50 text-warning"],
];

const proMetrics = [
  ["Ваш прогноз", "472"],
  ["Средний по группе", "438"],
  ["Топ 10%", "560+"],
  ["Ваш процентиль", "67%"],
  ["Темы высокого риска", "2"],
];

const faq = [
  ["Можно ли пользоваться бесплатно?", "Да. Бесплатный тариф позволяет начать подготовку, проходить ежедневные тесты и получать базовый результат."],
  ["Есть ли русский сектор?", "Да. Интерфейс, тесты и материалы доступны для учеников русского сектора."],
  ["Есть ли азербайджанский сектор?", "Да. Платформа также поддерживает азербайджанский сектор."],
  ["Какие группы поддерживаются?", "Планируется поддержка I–IV групп. В текущем MVP первым предметом представлена география."],
  ["AI отвечает по интернету или по материалам?", "AI использует только утверждённые учебные материалы, загруженные в систему, и не ищет ответы в интернете."],
  ["Насколько точен прогноз балла?", "Прогноз ориентировочный и становится точнее по мере прохождения тестов. Он не гарантирует официальный результат DİM."],
];

const freeFeatures = ["10 вопросов в день", "Базовый результат", "1 повторение темы в день", "Ограниченная аналитика"];
const paidFeatures = ["Больше тестов", "Полная аналитика", "Сравнение с другими учениками", "Прогноз балла", "Персональный план повторения"];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="DİM AI — главная">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-black text-white shadow-[0_8px_24px_rgba(91,92,246,0.28)]">D</span>
      <span className="text-xl font-black tracking-normal text-ink">DİM AI</span>
    </Link>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-ink md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{text}</p> : null}
    </div>
  );
}

function PrimaryLink({ children, href = "/geography-test", full = false }: { children: ReactNode; href?: string; full?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(91,92,246,0.25)] transition hover:bg-primary-dark ${full ? "w-full" : ""}`}
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#how" className="text-sm font-semibold text-muted transition hover:text-ink">Как работает</a>
            <a href="#features" className="text-sm font-semibold text-muted transition hover:text-ink">Возможности</a>
            <a href="#pro" className="text-sm font-semibold text-muted transition hover:text-ink">PRO аналитика</a>
            <Link href="/progress" className="text-sm font-semibold text-muted transition hover:text-ink">Войти</Link>
          </nav>
          <PrimaryLink>Начать бесплатно</PrimaryLink>
        </div>
      </header>

      <main>
        <section className="overflow-hidden border-b border-border bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F7FB_100%)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-soft-purple px-4 py-2 text-sm font-bold text-primary">
                <span className="h-2 w-2 rounded-full bg-success" />
                AI-наставник для подготовки к DİM
              </div>
              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] tracking-normal text-ink sm:text-5xl md:text-6xl">
                Узнай, сколько баллов ты можешь набрать на DİM
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                DİM AI помогает пройти тест, найти слабые темы, получить прогноз балла и понять, что учить дальше.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink>Начать бесплатно</PrimaryLink>
                <a href="#pro" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-primary hover:text-primary">
                  Посмотреть пример аналитики
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-muted">
                {["Русский сектор", "Азербайджанский сектор", "I–IV группы", "Бесплатный старт"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-50 text-xs font-black text-success">✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[40px] bg-soft-purple/70 blur-2xl" />
              <div className="relative rounded-3xl border border-border bg-white p-5 shadow-[0_28px_80px_rgba(17,24,39,0.12)] sm:p-7">
                <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <p className="text-sm font-bold text-primary">АНАЛИТИКА РЕЗУЛЬТАТА</p>
                    <h2 className="mt-1 text-xl font-black">Прогноз балла</h2>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-success">Хороший рост</span>
                </div>

                <div className="grid gap-4 py-6 sm:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-2xl bg-soft-purple p-5">
                    <p className="text-sm font-semibold text-muted">Ваш текущий прогноз</p>
                    <div className="mt-2 flex items-end gap-2">
                      <span className="text-6xl font-black leading-none text-primary">472</span>
                      <span className="pb-1 text-sm font-bold text-muted">балла</span>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between text-xs font-semibold text-muted"><span>Диапазон</span><span className="text-ink">450–495</span></div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white"><div className="h-full w-[67%] rounded-full bg-primary" /></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-border p-4">
                      <p className="text-xs font-semibold leading-5 text-muted">Средний по II группе</p>
                      <p className="mt-2 text-2xl font-black">438</p>
                    </div>
                    <div className="rounded-2xl border border-border p-4">
                      <p className="text-xs font-semibold leading-5 text-muted">Вы лучше</p>
                      <p className="mt-2 text-2xl font-black text-success">67%</p>
                      <p className="text-xs text-muted">учеников</p>
                    </div>
                    <div className="col-span-2 rounded-2xl border border-border p-4">
                      <div className="flex h-16 items-end gap-2">
                        {[34, 46, 41, 59, 52, 72, 67, 86].map((height, index) => (
                          <div key={index} className={`flex-1 rounded-t ${index === 7 ? "bg-primary" : "bg-primary/15"}`} style={{ height: `${height}%` }} />
                        ))}
                      </div>
                      <p className="mt-2 text-xs font-semibold text-muted">Динамика последних тестов</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-red-100 bg-red-50/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-error">Слабые темы</p>
                    <p className="mt-3 text-sm font-bold">Климат и погода</p>
                    <p className="mt-1 text-sm font-bold">Экономическая география</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-success">Потенциал после повторения</p>
                    <p className="mt-3 text-3xl font-black text-success">510 <span className="text-sm">баллов</span></p>
                    <p className="mt-1 text-xs font-semibold text-muted">+38 к текущему прогнозу</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="scroll-mt-24 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading eyebrow="4 простых шага" title="Как это работает" text="От первого теста до понятного плана подготовки — без лишней нагрузки." />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(([number, title, text]) => (
                <article key={number} className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_32px_rgba(17,24,39,0.05)]">
                  <span className="text-sm font-black text-primary">{number}</span>
                  <h3 className="mt-5 text-lg font-black leading-6">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 bg-page py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading eyebrow="Возможности" title="Что получает ученик" text="Не просто оценку за тест, а ясное понимание текущего уровня и следующего шага." />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {features.map(([icon, title, text, tone]) => (
                <article key={title} className="flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-[0_10px_32px_rgba(17,24,39,0.05)] md:p-7">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg font-black ${tone}`}>{icon}</span>
                  <div><h3 className="text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-muted">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pro" className="scroll-mt-24 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="overflow-hidden rounded-3xl bg-ink p-6 text-white shadow-[0_28px_80px_rgba(17,24,39,0.18)] md:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <span className="inline-flex rounded-full bg-primary px-3 py-1.5 text-xs font-black">PRO</span>
                  <h2 className="mt-5 text-3xl font-black tracking-normal md:text-4xl">PRO аналитика</h2>
                  <p className="mt-4 max-w-lg leading-7 text-slate-300">Для тех, кто хочет понимать не только результат, но и своё место среди других учеников.</p>
                  <div className="mt-8"><PrimaryLink href="/results">Открыть PRO аналитику</PrimaryLink></div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {proMetrics.map(([label, value], index) => (
                    <div key={label} className={`rounded-2xl border border-white/10 bg-white/5 p-5 ${index === 4 ? "sm:col-span-2" : ""}`}>
                      <p className="text-sm font-semibold text-slate-400">{label}</p>
                      <div className="mt-2 flex items-center justify-between gap-4">
                        <p className={`text-3xl font-black ${index === 4 ? "text-warning" : "text-white"}`}>{value}</p>
                        {index < 4 ? <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-primary" /></div> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-page py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <SectionHeading eyebrow="Тарифы" title="Начните бесплатно. Перейдите на PRO, когда будете готовы." />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-border bg-white p-7 shadow-[0_10px_32px_rgba(17,24,39,0.05)] md:p-9">
                <p className="text-sm font-black text-muted">БЕСПЛАТНО</p>
                <p className="mt-3 text-4xl font-black">0 ₼</p>
                <p className="mt-2 text-sm text-muted">Чтобы спокойно попробовать платформу</p>
                <ul className="mt-7 space-y-4">
                  {freeFeatures.map((item) => <li key={item} className="flex gap-3 text-sm font-semibold"><span className="text-success">✓</span>{item}</li>)}
                </ul>
                <div className="mt-8"><PrimaryLink full>Начать бесплатно</PrimaryLink></div>
              </article>
              <article className="relative rounded-3xl border-2 border-primary bg-white p-7 shadow-[0_20px_55px_rgba(91,92,246,0.16)] md:p-9">
                <span className="absolute right-6 top-6 rounded-full bg-soft-purple px-3 py-1 text-xs font-black text-primary">РЕКОМЕНДУЕМ</span>
                <p className="text-sm font-black text-primary">PRO</p>
                <p className="mt-3 text-3xl font-black">Полный доступ</p>
                <p className="mt-2 text-sm text-muted">Для системной подготовки к высокому баллу</p>
                <ul className="mt-7 space-y-4">
                  {paidFeatures.map((item) => <li key={item} className="flex gap-3 text-sm font-semibold"><span className="text-primary">✓</span>{item}</li>)}
                </ul>
                <Link href="/results" className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark">Попробовать PRO</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
            <div className="mt-10 divide-y divide-border border-y border-border">
              {faq.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-black">
                    {question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-page text-xl font-medium text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pt-3 text-sm leading-7 text-muted">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-page">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div><Logo /><p className="mt-3 text-sm text-muted">AI-наставник для подготовки к поступлению.</p></div>
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-muted">
            {["Telegram", "Instagram", "TikTok", "Contact"].map((item) => <a key={item} href="#" className="transition hover:text-primary">{item}</a>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
