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

### Вимоги до коментарів (повідомлень) у комітах

Рекомендовано зафіксувати єдиний стандарт commit message (Conventional Commits без обов'язкового ID задачі).

Базовий формат:

`<type>(<scope>): <короткий опис>`

Приклади:

- `feat(form): add telegram delivery fallback`
- `fix(api): handle smtp timeout response`
- `refactor(i18n): split keys by sections`
- `docs(readme): add deployment and branch rules`

Де:

- `type`: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `ci`;
- `scope`: коротка зона змін (`api`, `form`, `seo`, `i18n`, `ci`);
- опис: в наказовій формі, до 72 символів.

Обов'язкові правила:

- Один коміт = одна логічна зміна (без змішування різних задач).
- Не комітити зламаний стан: перед комітом мають проходити мінімум `lint` і `typecheck`.
- Для виправлень багів за потреби додавати футер `Refs: <card-name>` або `Closes: <card-name>`.
- Заборонено комітити секрети (`.env`, токени, ключі) навіть у тимчасові гілки.

Технічна фіксація:

- додати `commitlint` + `husky` (`commit-msg` hook);
- перевіряти формат commit messages у CI для PR.

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

SEO-пункти, які релевантні поточному сайту (Next.js лендинг/корпоративний сайт).

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

### Чекліст оптимізації Next.js + Spline (практичний)

1. **Відкладене завантаження Spline**
   - Підключати Spline-компоненти через `next/dynamic` з `ssr: false`.
   - Рендерити сцену тільки коли блок потрапив у viewport (Intersection Observer).
   - Для першого екрана використовувати статичний preview/poster і запускати 3D після `idle`.

2. **Зменшення ваги сцен**
   - Прибрати зайві об'єкти, hidden-елементи, дублікати геометрій.
   - Зменшити роздільну здатність текстур і використовувати стиснення.
   - Уникати одночасного рендеру кількох важких Spline-сцен на одній сторінці.

3. **Мобільна адаптація продуктивності**
   - На мобільних завантажувати спрощену сцену або fallback-банер.
   - Зменшити кількість анімацій і постпроцесів для small screens.
   - Додати feature-flag/умову для відключення важких ефектів на слабких девайсах.

4. **Контроль Core Web Vitals**
   - Заміряти `LCP`, `INP`, `CLS` до і після кожної оптимізації.
   - Винести Spline нижче fold, якщо сцена не критична для першого екрана.
   - Встановити performance budget (наприклад, LCP < 2.5s на mobile).

5. **Технічні практики Next.js**
   - Використовувати `loading`-стани/skeleton для блоку зі сценою.
   - Не блокувати main thread важкими ініціалізаціями під час першого paint.
   - Перевіряти production-бандл через Lighthouse + WebPageTest (mobile profile).

6. **Операційний контроль у CI**
   - Додати Lighthouse CI для ключових сторінок (`home`, `contact`).
   - Зафіксувати мінімальні пороги для `performance` та `seo`.
   - Падати CI при деградації метрик відносно погодженого baseline.

Швидкий порядок впровадження:

1. Dynamic import + `ssr: false` + viewport-based mount.
2. Mobile fallback для Spline.
3. Lighthouse baseline і пороги в CI.
4. Оптимізація сцен за результатами метрик.

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

## 6.4) Покращення API-сповіщень (Telegram + Email)

Поточна реалізація робоча, але її варто посилити з точки зору надійності, безпеки та підтримки.

### Що покращити першочергово

1. **Валідація env і fail-fast**
   - Перевіряти `BOT_TOKEN`, `CHAT_ID`, `SMTP_USER`, `SMTP_PASS` при старті.
   - Якщо змінні відсутні/невалідні - повертати контрольовану помилку сервісу.

2. **Єдиний сервіс для нотифікацій**
   - Винести бізнес-логіку з `route.ts` у окремі функції (наприклад, `sendTelegram`, `sendEmail`).
   - У API-роутах залишити лише HTTP-обгортку (валідація запиту, response-коди).

3. **Таймаути, retry і fallback**
   - Додати timeout для Telegram/SMTP запитів (`AbortController` або аналог).
   - Додати 1-2 повторні спроби для тимчасових збоїв мережі.
   - Налаштувати fallback-ланцюжок: якщо Telegram недоступний, пробувати Email (або навпаки).

4. **Єдина схема помилок і статусів**
   - Уніфікувати API-відповіді: `{ ok, message, code }`.
   - Для зовнішніх збоїв використовувати серверні статуси (`502/503`), а не лише `400`.
   - Логувати технічну причину окремо, без витоку чутливих даних у response.

5. **Антиспам і захист форми**
   - Додати rate limit по IP для `contact` endpoint.
   - Додати honeypot-поле або мінімальну перевірку "час до submit".
   - Обмежити частоту повторних відправок з одного джерела.

6. **Гігієна залежностей і моніторинг**
   - Якщо `node-telegram-bot-api` не використовується, видалити його з залежностей.
   - Додати базові метрики: кількість успішних/помилкових відправок, середній час відповіді.
   - Зробити алерт при серії помилок від Telegram/SMTP.

### Мінімальний план впровадження (1-2 ітерації)

**Ітерація 1**
- env-валидація, timeout, уніфікований формат відповідей.
- Базовий rate limit для форми.

**Ітерація 2**
- fallback Telegram/Email.
- Метрики та сповіщення про деградацію каналу.

### 6.4.1) Окремо по Email API (`src/app/api/emailApi/route.ts`)

#### Як працює зараз

- Endpoint приймає POST із форми, валідуючи payload через `contactSchema`.
- Лист надсилається через `nodemailer` на Gmail SMTP (`smtp.gmail.com:465`).
- Відправник і отримувач - `SMTP_USER` (внутрішнє сповіщення на ту ж пошту).

#### Що покращити

1. **Гарантована відповідь у `catch`**
   - Зараз у блоці `catch` немає `return Response.json(...)`.
   - Додати явну відповідь із `status: 500`, щоб endpoint не "зависав" без коректного результату.

2. **Валідація SMTP-конфігурації**
   - Перед відправкою перевіряти наявність `SMTP_USER` і `SMTP_PASS`.
   - Якщо змінні відсутні, повертати контрольовану помилку сервісу (`503`).

3. **Безпечне формування HTML-листа**
   - Екранувати значення полів (`name`, `email`, `description`) перед вставкою в HTML.
   - Не вставляти сирі значення напряму в шаблон, щоб уникати HTML injection у поштовому клієнті.

4. **Надійність відправки**
   - Додати timeout для SMTP-операції та обробку тимчасових помилок.
   - Для транзієнтних збоїв передбачити обмежений retry (1-2 спроби).

5. **Коди помилок і контракт API**
   - `400` лишити тільки для валідації вхідних даних.
   - Для проблем SMTP/провайдера повертати `502/503`.
   - Уніфікувати відповідь: `{ ok, message, code }`.

6. **Фронтенд-обробка результату**
   - На клієнті перевіряти `response.ok` після `fetch('api/emailApi')`.
   - Показувати користувачу статус: успіх, частковий успіх (тільки один канал), помилка.

7. **Логи і персональні дані**
   - Логувати лише технічну помилку (без email/телефону у відкритому вигляді).
   - Додати request-id для трасування інцидентів у продакшені.

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

---

## 8) GA4 події для лідів і аналітики форми

Щоб керовано покращувати конверсію, потрібно фіксувати ключові кроки користувача у GA4.

### Мінімальний набір подій (must-have)

- `page_view` - перегляд сторінки.
- `view_contact_section` - користувач дійшов до блоку контактів/форми.
- `form_start` - початок заповнення форми.
- `form_submit` - натискання кнопки відправки.
- `form_submit_success` - успішна відправка форми.
- `form_submit_error` - помилка відправки (`validation`, `api_error`, `timeout`).
- `click_phone` - клік по телефону.
- `click_email` - клік по email.
- `click_telegram` - клік по Telegram-контакту.
- `book_call_click` - клік по кнопці бронювання дзвінка (якщо додано).

### Рекомендовані параметри подій

- `locale` (`uk`/`en`).
- `page_path`.
- `form_id` (наприклад, `feedback_form`).
- `channel` (`email`, `telegram`, `both`).
- `error_type` (для `form_submit_error`).
- `device_type` (`mobile`, `desktop`).
- `utm_source`, `utm_medium`, `utm_campaign`.

### Події, які варто позначити як conversion у GA4

- Основна: `form_submit_success`.
- Додаткові: `book_call_click`, `click_phone`, `click_telegram`.

### Базова воронка (funnel)

1. `view_contact_section`
2. `form_start`
3. `form_submit`
4. `form_submit_success`

### Де зберігати і як відправляти події

Рекомендований підхід для цього проєкту:

1. Клієнт відправляє події в GA4 (`gtag`) для маркетингової аналітики.
2. Критичні бізнес-події дублюються на свій backend endpoint (server-side).
3. Backend зберігає агрегати/журнал подій у БД (для звітів і audit), без персональних даних у відкритому вигляді.

Що не рекомендується:

- Пряме підключення клієнта до БД для запису подій (ризики безпеки, спаму, підміни даних, складність контролю доступу).

### Практичне рішення для старту

- **Етап 1:** тільки GA4 + conversion events.
- **Етап 2:** додати свій endpoint `api/analytics/events` для дублювання ключових подій (`form_submit_success`, `form_submit_error`).
- **Етап 3:** підключити БД для server-side журналу подій та дешборду конверсій.
