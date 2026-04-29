# Рекомендації до покращення проєкту Neoma 2.0

Документ створено окремо від `README.md` і містить практичні рекомендації щодо архітектури, структури папок, неймінгу, якості коду, тестування та документації.

## 1) Аналіз проєкту та рекомендації по архітектурі

### Що видно зараз

- Проєкт на `Next.js` (App Router) + `TypeScript` + `Tailwind`.
- Більшість UI лежить у `src/component` як великий плоский список файлів.
- Є логіка локалізації через `translation/*.json` та `[locale]` роут.
- API-обробники знаходяться у `src/app/api/*`, але доменна логіка змішана з роутами.
- У `next.config.ts` увімкнено `typescript.ignoreBuildErrors: true` (ризик пропустити помилки в прод).

### Рекомендована цільова архітектура

Для зростання проєкту краще перейти на feature-based структуру:

```text
src/
  app/
    [locale]/
      page.tsx
    api/
      contact/
        email/route.ts
        telegram/route.ts
  features/
    home/
      components/
      sections/
      hooks/
      model/
    contact/
      components/
      model/
      api/
  shared/
    ui/
    lib/
    config/
    types/
    assets/
```

### Практичні кроки

1. Винести великі секції сторінки (`About`, `Price`, `Faq`, `FeedbackForm`) у `features/home/sections`.
2. Винести повторно використовувані елементи (`Button`, `SectionTitle`, `Carousel`) у `shared/ui`.
3. Перенести схеми (`contact.schema.ts`) у `features/contact/model`.
4. У API-роутах залишити лише HTTP-обгортку, а бізнес-логіку відправки email/telegram винести в `features/contact/api`.
5. Прибрати `ignoreBuildErrors: true` після стабілізації типізації.

---

## 2) Неймінг файлів і розділення по папках

### Поточні проблеми

- Змішання стилів: `ourProjects.tsx`, `feedbackForm.tsx`, `LanguageSwitcher.tsx`, `MenuItemsList.tsx`.
- Є різні формати даних (`.js` і `.ts`) в одній групі (`priceData.js` + `feedbackData.ts`).
- Папка названа `component` (однина), але містить багато різнорідних сутностей.

### Рекомендований стандарт

- Для React-компонентів: `PascalCase.tsx` (`FeedbackForm.tsx`, `OurProjects.tsx`).
- Для утиліт/конфігів/даних: `kebab-case.ts` або `camelCase.ts` (обрати один стиль і зафіксувати в docs).
- Для папок фіч: `kebab-case` (`home-page`, `contact-form`, `embla-carousel`).
- Уникати суфіксу `-mock` у production-файлах, замінити на `fixtures` або `mocks` у тестових директоріях.

### Мінімальний план перейменувань

- `src/component` -> `src/components` або краще рознести по `features/*/components`.
- `feedbackForm.tsx` -> `FeedbackForm.tsx`.
- `ourProjects.tsx` -> `OurProjects.tsx`.
- `animatedWaves.tsx` -> `AnimatedWaves.tsx`.
- `aos-init.tsx` -> `AosInit.tsx` (або `AOSInit.tsx`, але один стиль на весь репозиторій).
- `priceDataEN.js`/`priceData.js` -> єдиний формат імен, наприклад:
  - `price-data.en.ts`
  - `price-data.uk.ts`

---

## 3) Тести, CI, Husky, строгий форматтер/лінтер, контроль якості

### Що покращити першочергово

1. **Вибрати один стек форматування/лінтингу**:
   - зараз одночасно є `Biome`, `ESLint` і `Prettier`;
   - рекомендую або:
     - залишити тільки `Biome` (простий шлях), або
     - залишити `ESLint + Prettier`, а `Biome` прибрати.
2. **Додати тестування**:
   - unit/integration: `Vitest + Testing Library`;
   - e2e: `Playwright`.
3. **Увімкнути CI** (GitHub Actions):
   - `npm ci`
   - `npm run typecheck`
   - `npm run lint`
   - `npm run test`
   - `npm run build`
4. **Додати Husky + lint-staged**:
   - pre-commit: формат + lint по staged-файлах;
   - pre-push: тести (або мінімум typecheck + lint).

### Рекомендовані npm scripts

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  }
}
```

### Базовий контроль якості

- Coverage threshold (наприклад, 70%+ на critical-модулях).
- Обов'язковий status check у PR: lint + typecheck + test + build.
- Заборонити merge в `main` без green CI.

---

## 4) Більш детальна документація (бібліотеки, запуск, git flow)

### Що треба додати в основний `README.md`

1. **Опис проєкту**: призначення, для кого продукт.
2. **Стек і бібліотеки** (з коротким "навіщо"):
   - `next`, `react`, `tailwindcss`, `zod`, `nodemailer`, `@splinetool/react-spline`, `embla-carousel-react`, `aos`.
3. **Інструкції запуску**:
   - вимоги до Node/NPM;
   - `npm install`;
   - `npm run dev`;
   - `.env.example` + перелік змінних (`SMTP_USER`, `SMTP_PASS`, `BOT_TOKEN`, `CHAT_ID`).
4. **Скрипти**: що робить кожен (`dev`, `build`, `lint`, `format`, `test`).
5. **Архітектура**: коротка схема папок.
6. **Стандарти коду**: неймінг, імпорти, компоненти, правила PR.

### Неймінг гілок (рекомендація)

Єдиний шаблон:

- `feature/AB-NEO-123-add-contact-validation`
- `fix/AB-NEO-234-telegram-error-handling`
- `refactor/AB-NEO-345-split-home-sections`
- `chore/AB-NEO-456-update-ci-pipeline`
- `docs/AB-NEO-567-readme-architecture`

Де:

- `AB` - ініціали розробника (латиницею, 2-4 символи, наприклад `PY`, `AB`, `IVK`);
- `NEO-123` - ID задачі (Jira/Linear/інша система).

Навіщо ініціали в назві гілки:

- швидко зрозуміти відповідального за гілку без відкриття PR;
- зменшити ризик колізій однакових назв гілок у великій команді;
- спростити пошук у логах CI та локальних репозиторіях.

### Автоматичне версіонування після деплою (за назвою гілки)

Так, у `package.json` версія може оновлюватися автоматично в CI після успішного деплою.

Рекомендований підхід:

- Основна гілка:
  - `main` -> `patch` (`x.y.z` -> `x.y.z+1`)
- Типи гілок:
  - `feature/*` -> `minor`
  - `fix/*` -> `patch`
  - `refactor/*` -> `patch` (або `minor`, якщо є зміни API/поведінки)
  - `breaking/*` або `release/major/*` -> `major`
- Для нестабільних середовищ:
  - додавати prerelease-теги, наприклад `1.4.0-beta.3` для `develop`/`staging`.

Приклад реалізації в GitHub Actions:

1. Парсити назву гілки (`github.ref_name`).
2. Обрати тип bump (`major|minor|patch|prerelease`).
3. Виконати `npm version <type> --no-git-tag-version`.
4. Зберегти нову версію:
   - або комітом назад у гілку (якщо це дозволено процесом),
   - або як тег релізу без коміту (часто безпечніше для CI).
5. Використати цю версію в артефактах/реліз-нотах/образах.

Важливо:

- Не робити version bump у кожному PR-ранi.
- Робити bump тільки після успішного деплою в цільове середовище.
- Зафіксувати правила bump у `README.md`/`CONTRIBUTING.md`, щоб команда мала єдине джерело правил.

---

## 5) Неймінг папок

### Рекомендовані правила

- Папки доменів/фіч: `kebab-case` (`contact-form`, `home-page`).
- Технічні/shared папки: короткі й стабільні (`shared`, `features`, `app`, `lib`).
- Уникати загальних назв типу `component`, `utils` для всього проєкту без контексту.
- Для тестів:
  - або `__tests__` поруч з кодом;
  - або `tests/unit`, `tests/integration`, `tests/e2e`.

### Цільова структура (приклад)

```text
src/
  app/
  features/
    contact-form/
    home-page/
  shared/
    ui/
    lib/
    types/
    assets/
  tests/
    unit/
    integration/
    e2e/
```

---

## Пріоритетний roadmap (на 2-3 ітерації)

1. Уніфікувати неймінг файлів і папок + прибрати змішання `.js/.ts`.
2. Рознести код по `features/shared`, декомпозувати великі компоненти.
3. Налаштувати єдиний лінтер/форматер, додати `typecheck`.
4. Додати `Husky + lint-staged`.
5. Додати unit/e2e тести та CI pipeline.
6. Оновити `README.md` (документація, запуск, git flow, стандарти).
7. Зафіксувати TypeScript-правило: заборона `any` у кодовій базі.

---

## 6) SEO-рекомендації для цього проєкту (на основі Plan/Fact)

Нижче зібрані тільки ті SEO-пункти, які релевантні поточному сайту (Next.js лендинг/корпоративний сайт), без e-commerce-специфіки на кшталт PLP/PDP-фільтрів, cart/checkout або блоку відгуків товарів.

### Що впровадити першочергово

1. **Технічна індексація**
   - додати `src/app/robots.ts`;
   - додати `src/app/sitemap.ts`;
   - зафіксувати коректний `siteUrl` через env (наприклад, `NEXT_PUBLIC_SITE_URL`);
   - у sitemap включати лише indexable сторінки.

2. **Metadata та мультимовність (uk/en)**
   - реалізувати `generateMetadata` для `src/app/[locale]/page.tsx`;
   - додати `alternates` (`canonical`, `languages`) для `uk` та `en`;
   - додати Open Graph/Twitter metadata для поширень у соцмережах.

3. **Структуровані дані (JSON-LD)**
   - додати `Organization` + `WebSite` schema в layout/головну сторінку;
   - включити контакти, логотип, соцпосилання, мову/регіон обслуговування.

4. **Швидкість завантаження (Page Load Time)**
   - відкласти важкі візуальні блоки (`Spline`, анімації) через dynamic/lazy;
   - перевірити LCP/CLS/INP і зафіксувати performance budget;
   - оптимізувати зображення через `next/image` там, де це можливо.

5. **Контроль якості SEO у CI**
   - додати базову перевірку Lighthouse/PageSpeed у pipeline;
   - фіксувати мінімальні пороги для SEO/performance/accessibility.

### KPI 

- `Visibility`
- `Organic traffic`
- `Page Load Time`
- `Bounce rate`
- `CR` (якщо вимірюються заявки/ліди)

### Міні-roadmap SEO (2 спринти)

**Спринт 1**
- `robots.ts`, `sitemap.ts`, canonical/hreflang, базовий JSON-LD.

**Спринт 2**
- Performance-оптимізація важких компонентів, Lighthouse у CI, контроль KPI по місяцях.

---

## 6.1) TypeScript правило: заборона `any`

Для стабільності та прогнозованості коду зафіксувати правило: **`any` заборонений**.

### Стандарт команди

- Не використовувати `any` у компонентах, API-роутах, утилітах і типах.
- Замість `any` використовувати:
  - `unknown` + type guard;
  - конкретні інтерфейси/типи;
  - generics з обмеженнями.
- Тимчасовий виняток можливий тільки локально з коментарем причини та задачі на усунення.

### Технічне забезпечення

- Увімкнути відповідні лінт-правила:
  - для ESLint: `@typescript-eslint/no-explicit-any: "error"`;
  - для Biome: заборона explicit any через TypeScript lint rule (або через ESLint-шар, якщо Biome використовується тільки для форматування).
- Додати перевірку в CI (`lint` + `typecheck`) як обов'язковий PR check.

### Критерій готовності

- Новий код не містить `any`.
- Існуючі `any` поступово випалюються по зонах відповідальності (API, форми, shared-utils).

---

## 6.2) GitHub: обов'язкове підтвердження Pull Request

Для контрольованого релізного процесу додати обов'язкові підтвердження PR через branch protection rules.

### Рекомендовані налаштування

- Увімкнути `Require a pull request before merging` для `main` (і `develop`, якщо використовується).
- Встановити мінімум `1-2 approvals` перед merge.
- Увімкнути `Dismiss stale pull request approvals when new commits are pushed`.
- Увімкнути `Require review from Code Owners` (після додавання `CODEOWNERS`).
- Заборонити прямі push у protected-гілки.

### Разом з цим обов'язково

- Додати required status checks:
  - `lint`
  - `typecheck`
  - `test`
  - `build`
- Увімкнути `Require branches to be up to date before merging` (щоб уникати merge "в сліпу" при зеленому, але застарілому CI).

### Очікуваний результат

- Жоден PR не потрапляє в `main` без рев'ю та зелених перевірок.
- Зменшення регресій і стабільніший процес релізу.

---

## 6.3) Фіксація версії Node.js у проєкті

Щоб уникнути різниці між локальним оточенням і CI/CD, зафіксувати Node.js версію на рівні репозиторію.

### Рекомендований підхід

- Додати в `package.json` поле `engines`:

```json
{
  "engines": {
    "node": ">=20.11 <21"
  }
}
```

- Додати файл `.nvmrc` з конкретною версією (наприклад, `20.11.1`).
- У GitHub Actions явно вказати ту саму версію через `actions/setup-node`.
- За потреби ввімкнути strict-поведінку для engines (`engine-strict=true` у `.npmrc`), щоб невідповідна Node-версія падала одразу.

### Очікуваний результат

- Відтворювані білдів і тести.
- Менше "працює у мене локально, але падає в CI".

---

## 7) Структура JSON-файлів перекладів (1 файл на мову)

Поточна модель з плоскими `translation/uk.json` і `translation/en.json` з часом стає важкою в підтримці. Рекомендовано залишити **один файл на мову**, але перейти на вкладені секції-об'єкти.

### Цільова структура

```text
translation/
  uk.json
  en.json
```

Приклад структури всередині файлу:

```json
{
  "common": {
    "language": "Мова"
  },
  "header": {
    "menu": {
      "about": "Про нас",
      "services": "Послуги",
      "contacts": "Контакти"
    }
  },
  "form": {
    "contact": {
      "submit": "Надіслати"
    },
    "validation": {
      "emailInvalid": "Некоректний email"
    }
  },
  "faq": {
    "title": "Поширені запитання"
  },
  "seo": {
    "homeTitle": "Neoma WebStudio"
  }
}
```

### Правила неймінгу ключів

- Використовувати ієрархічні ключі, прив'язані до секції:
  - `header.menu.about`
  - `form.contact.submit`
  - `faq.items.q1.question`
- Не використовувати загальні короткі ключі без контексту (`title`, `text1`, `btn`).
- Технічні повідомлення API/валідації тримати окремо (`common.errors.*`, `form.validation.*`).

### Як підключати в коді

- Завантажувати один JSON за локаллю (`uk.json`/`en.json`).
- У компонентах використовувати вкладені ключі по секціях (`header.menu.about`, `form.contact.submit`).
- Звести доступ у helper, наприклад `src/lib/i18n/load-translations.ts` + утиліта `t('header.menu.about')`.

### План міграції без ризику

1. Залишити `translation/uk.json` і `translation/en.json` як єдині файли.
2. Перенести ключі у вкладені секції (`header`, `form`, `faq`, `seo`) без зміни текстів.
3. Додати тимчасовий adapter для старих плоских ключів, щоб не ламати компоненти одразу.
4. Поступово оновити компоненти на нові ієрархічні ключі.
5. Після міграції прибрати legacy-ключі з кореня JSON.

### Додатково (для якості)

- Додати перевірку консистентності ключів між мовами в CI (щоб в `en`/`uk` був однаковий набір ключів).
- Додати fallback-логіку (наприклад, `uk` -> `en`) для відсутніх ключів.
