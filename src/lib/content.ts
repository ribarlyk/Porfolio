/* ============================================================
   Typed bilingual content (EN / BG).
   Edit text freely — tech names are shared proper nouns.
   ============================================================ */

export type Lang = "en" | "bg";
export type Theme = "dark" | "light";

export interface Stat { value: number; suffix: string; label: string; }
export interface Metric { v: string; l: string; }
export interface Principle { n: string; h: string; p: string; }
export interface Experience {
  period: string; now?: boolean; role: string; company: string;
  desc: string; metrics: Metric[]; stack: string[];
}
export interface Skill { icon: string; title: string; tags: string[]; }
export interface Project {
  cats: string[]; name: string; tag: string; shot: string;
  problem: string; solution: string; impact: Metric[]; stack: string[];
  url?: string;
  image?: string;
  imageMobile?: string;
}
export interface TechStat { n: number; suf: string; l: string; d: string; meter: number; }
export interface Post { date: string; read: string; tag: string; title: string; excerpt: string; }

export interface Dict {
  profile: {
    name: string; first: string; monogram: string;
    title: string; title2: string; location: string; status: string;
    github: string; githubHandle: string; linkedin: string; x: string;
    domain: string; email: string;
    greeting: string; headline: string[]; lede: string;
  };
  stats: Stat[];
  marquee: string[];
  about: { lead: string; body: string[]; principles: Principle[] };
  experience: Experience[];
  skills: Skill[];
  filters: string[];
  projects: Project[];
  technical: TechStat[];
  blog: Post[];
  t: {
    nav: { about: string; experience: string; projects: string; writing: string; contact: string; search: string; skip: string };
    cta: { view: string; connect: string };
    marqueeLabel: string;
    codeComment: string;
    sec: {
      aboutEy: string; expEy: string; expH: string;
      skillsEy: string; skillsH: string; skillsP: string;
      projEy: string; projH: string; projP: string;
      techEy: string; techH: string;
      writeEy: string; writeH: string; writeP: string;
      contactEy: string;
    };
    proj: { problem: string; solution: string; viewSource: string; liveDemo: string; desktopView: string; mobileView: string };
    writing: { read: string };
    contact: {
      h: string; p: string; name: string; email: string; message: string;
      namePh: string; emailPh: string; messagePh: string;
      send: string; sending: string; sentTitle: string; sentBody: (n: string) => string; sendAnother: string;
      errReq: string; errEmail: string; errMsg: string; errSend: string;
      linkEmail: string; linkGithub: string; linkLinkedin: string; linkX: string;
    };
    footer: { site: string; connect: string; tagline: (t: string, l: string) => string; press: string; craft: string };
    cmd: {
      ph: string; esc: string; navigate: string; actions: string;
      home: string; about: string; experience: string; projects: string; writing: string; contact: string;
      toLight: string; toDark: string; copyEmail: string; openGithub: string; openLinkedin: string; openX: string;
      lang: string; noResults: string;
    };
  };
}

const LINKS = {
  github: "https://github.com/ribarlyk",
  githubHandle: "ribarlyk",
  linkedin: "https://www.linkedin.com/in/pavel-hristov-1bb75822b",
  x: "https://x.com/pavelhristov",
  domain: "pavelhristov.dev",
  email: "hristov.pavel@zohomail.eu",
};

const EN: Dict = {
  profile: {
    name: "Pavel Hristov", first: "Pavel", monogram: "PH",
    title: "Experienced Frontend Engineer", title2: "Full-Stack Product Developer",
    location: "Sofia, Bulgaria", status: "Available for select work", ...LINKS,
    greeting: "Hello, I\u2019m Pavel",
    headline: ["Building fast, scalable web", "products that drive real", "business impact."],
    lede: "Experienced Frontend Engineer with 5+ years building production-ready web applications in React, Next.js, Vue and Nuxt — from crafting design systems and user interfaces to integrating backend services and databases.",
  },
  stats: [
    { value: 5, suffix: "+", label: "Years shipping production" },
    { value: 40, suffix: "+", label: "Projects delivered" },
    { value: 15, suffix: "", label: "Core technologies" },
    { value: 99, suffix: "%", label: "Avg. Lighthouse score" },
  ],
  marquee: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "Node.js", "Tailwind", "GraphQL", "PostgreSQL", "MongoDB", "Docker", "Vercel", "CI/CD", "REST"],
  about: {
    lead: "I build digital products end-to-end — owning the work from a blank Figma file and an empty database to a fast, accessible interface that thousands of people use every day.",
    body: [
      "I started my journey in software development at SoftUni, then deepened my skills at IT Talents. Soon after, I joined a team building a SaaS platform for the insurance industry, where I turned what I had learned into real product solutions.",
      "Working on complex business software gave me valuable experience building scalable applications, working across different technologies, and shipping features used every day by real customers. That's where I developed my approach to development — a focus on quality, performance, and the long-term maintainability of the product.",
    ],
    principles: [
      { n: "01", h: "I deliver value, not features", p: "I focus on how the product solves real customer problems — not just on adding new screens or technical features." },
      { n: "02", h: "Speed is part of the experience", p: "Every millisecond matters — I optimize interfaces and systems to reduce friction for the end user." },
      { n: "03", h: "I build products, not isolated pieces", p: "I think about the whole journey — from the first click to the customer's final action — not just individual UI components." },
      { n: "04", h: "I own the real outcome", p: "I track how my decisions play out in production — usability, stability, and business results, not just technical delivery." },
    ],
  },
  experience: [
    { period: "2023 — Now", now: true, role: "Experienced Frontend Engineer", company: "Omekoitel",
      desc: "Lead the frontend architecture for a B2B SaaS platform — owning the design system, performance budget, and developer experience for a team of six engineers.",
      metrics: [{ v: "45%", l: "Faster page loads" }, { v: "30%", l: "Smaller bundle" }, { v: "6", l: "Engineers enabled" }],
      stack: ["Next.js", "TypeScript", "Tailwind", "GraphQL", "Vercel"] },
    { period: "2021 — 2023", role: "Full-Stack Engineer", company: "Northwind Labs",
      desc: "Built and scaled a multi-tenant analytics product from MVP to thousands of active users. Designed the component library and shipped the real-time dashboard.",
      metrics: [{ v: "12k+", l: "Active users served" }, { v: "60+", l: "Reusable components" }, { v: "99.9%", l: "Uptime maintained" }],
      stack: ["Vue", "Nuxt", "Node.js", "PostgreSQL", "Docker"] },
    { period: "2020 — 2021", role: "Frontend Engineer", company: "Brightpath Studio",
      desc: "Delivered marketing sites and product interfaces for early-stage startups. Established the studio's reusable Next.js starter and CI workflow.",
      metrics: [{ v: "18", l: "Products shipped" }, { v: "98", l: "Avg. Lighthouse" }],
      stack: ["React", "Next.js", "Tailwind", "CI/CD"] },
  ],
  skills: [
    { icon: "layout", title: "Frontend Engineering", tags: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "Tailwind CSS"] },
    { icon: "server", title: "Backend & APIs", tags: ["Node.js", "REST", "GraphQL", "Edge Functions"] },
    { icon: "cloud", title: "Cloud & Deployment", tags: ["Vercel", "Docker", "CI/CD", "GitHub Actions"] },
    { icon: "database", title: "Databases", tags: ["PostgreSQL", "MongoDB", "Prisma", "Redis"] },
    { icon: "grid", title: "Architecture", tags: ["Design Systems", "Scalability", "Performance", "Monorepos"] },
    { icon: "spark", title: "Craft", tags: ["Accessibility", "Motion", "DX", "Testing"] },
  ],
  filters: ["E-commerce", "Blog"],
  projects: [
    { cats: ["E-commerce"], name: "Omekotitel.bg", tag: "E-commerce", shot: "online store", url: "https://omekotitel.bg", image: "/projects/omekotitel-desk.webp", imageMobile: "/projects/omekotitel-mob.webp",
      problem: "The client had an existing Magento online store, but the frontend was significantly slow, with an outdated design and a degraded user experience that hurt conversions and SEO performance.",
      solution: "We optimized the store's frontend layer — substantially improving load speed, UX and visual structure — without touching the stable Magento backend. We carried out SEO optimizations for better search visibility and integrated Revolut payments for a smoother checkout. The result is a faster, more modern and higher-converting online store on the same core infrastructure.",
      impact: [{ v: "Live", l: "In production" }, { v: "Fast", l: "Optimized UX" }], stack: ["Next.js", "React", "TypeScript", "Tailwind", "Magento", "Vercel"] },
  ],
  technical: [
    { n: 99, suf: "", l: "Performance", d: "Lighthouse performance on shipped products", meter: 99 },
    { n: 100, suf: "", l: "Accessibility", d: "WCAG-conscious, keyboard-first interfaces", meter: 100 },
    { n: 30, suf: "%", l: "Smaller bundles", d: "Average reduction via code-splitting & audits", meter: 70 },
    { n: 90, suf: "%", l: "Test coverage", d: "On critical paths with unit + e2e suites", meter: 90 },
  ],
  blog: [
    { date: "May 2026", read: "8 min", tag: "Architecture", title: "Designing component APIs that scale across teams", excerpt: "What I learned shipping a design system to five product teams without slowing any of them down." },
    { date: "Mar 2026", read: "6 min", tag: "Performance", title: "Shaving 45% off load time without a rewrite", excerpt: "A pragmatic performance audit playbook — measure, budget, and delete your way to fast." },
    { date: "Jan 2026", read: "5 min", tag: "Next.js", title: "Streaming UI: when React Server Components actually help", excerpt: "Where server components earned their keep in production — and where they didn't." },
  ],
  t: {
    nav: { about: "About", experience: "Experience", projects: "Projects", writing: "Writing", contact: "Contact", search: "Search", skip: "Skip to content" },
    cta: { view: "View projects", connect: "Let\u2019s connect" },
    marqueeLabel: "Trusted tools \u00b7 daily drivers",
    codeComment: "// shipping production since 2020",
    sec: {
      aboutEy: "About",
      expEy: "Experience", expH: "Five years of shipping, measured in outcomes.",
      skillsEy: "Capabilities", skillsH: "A full-stack toolkit, with a frontend specialty.", skillsP: "Deep where it counts — frontend architecture and design systems — and fluent everywhere else, from the API to the deploy pipeline.",
      projEy: "Selected work", projH: "Products, not portfolios.", projP: "Case studies framed around the problem, the build, and the business impact — the way real teams evaluate engineers.",
      techEy: "Technical excellence", techH: "The invisible work that makes products feel fast.",
      writeEy: "Writing", writeH: "Notes on building for the web.", writeP: "Occasional essays on architecture, performance, and the craft of shipping product.",
      contactEy: "Contact",
    },
    proj: { problem: "Problem.", solution: "Solution.", viewSource: "View source on GitHub", liveDemo: "Open live demo", desktopView: "Desktop view", mobileView: "Mobile view" },
    writing: { read: "Read article" },
    contact: {
      h: "Let\u2019s build exceptional digital experiences.",
      p: "Open to senior frontend and full-stack roles, product collaborations, and the occasional ambitious freelance build.",
      name: "Name", email: "Email", message: "Message",
      namePh: "Jane Doe", emailPh: "jane@company.com", messagePh: "Tell me about your project, role, or idea…",
      send: "Send message", sending: "Sending…", sentTitle: "Message sent",
      sentBody: (n: string) => `Thanks ${n} — I\u2019ll get back to you within a day or two.`, sendAnother: "Send another",
      errReq: "Required", errEmail: "Enter a valid email", errMsg: "A little more detail, please",
      errSend: "Something went wrong. Please try again or email me directly.",
      linkEmail: "Email", linkGithub: "GitHub", linkLinkedin: "LinkedIn", linkX: "X",
    },
    footer: { site: "Site", connect: "Connect", tagline: (t: string, l: string) => `${t} building fast, scalable web products from ${l}.`, press: "Press ⌘K", craft: "Built with care" },
    cmd: {
      ph: "Jump to a section or run a command…", esc: "ESC", navigate: "Navigate", actions: "Actions",
      home: "Home", about: "About", experience: "Experience", projects: "Projects", writing: "Writing", contact: "Contact",
      toLight: "Switch to light mode", toDark: "Switch to dark mode", copyEmail: "Copy email address",
      openGithub: "Open GitHub", openLinkedin: "Open LinkedIn", openX: "Open X",
      lang: "Switch to Bulgarian", noResults: "No results for",
    },
  },
};

const BG: Dict = {
  profile: {
    name: "Pavel Hristov", first: "Павел", monogram: "PH",
    title: "Опитен Frontend инженер", title2: "Full-Stack продуктов разработчик",
    location: "София, България", status: "Свободен за избрани проекти", ...LINKS,
    greeting: "Здравейте, аз съм Павел",
    headline: ["Изграждам бързи, мащабируеми", "уеб продукти с реално", "бизнес въздействие."],
    lede: "Опитен Frontend инженер с над 5 години опит в разработката на production-ready уеб приложения с React, Next.js, Vue и Nuxt – от изграждане на дизайн системи и потребителски интерфейси до интеграция с бекенд услуги и бази данни.",
  },
  stats: [
    { value: 5, suffix: "+", label: "Години в production" },
    { value: 40, suffix: "+", label: "Реализирани проекта" },
    { value: 15, suffix: "", label: "Основни технологии" },
    { value: 99, suffix: "%", label: "Среден Lighthouse резултат" },
  ],
  marquee: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "Node.js", "Tailwind", "GraphQL", "PostgreSQL", "MongoDB", "Docker", "Vercel", "CI/CD", "REST"],
  about: {
    lead: "Изграждам дигитални продукти от край до край — поемам работата от празен Figma файл и празна база данни до бърз, достъпен интерфейс, който хиляди хора използват всеки ден.",
    body: [
      "Започнах своя път в софтуерната разработка със SoftUni, а по-късно надградих знанията си в IT Talents. Скоро след това се присъединих към екип, разработващ SaaS платформа за застрахователната индустрия, където превърнах наученото в реални продуктови решения.",
      "Работата по сложен бизнес софтуер ми даде ценен опит в изграждането на мащабируеми приложения, работа с различни технологии и създаване на функционалности, които ежедневно се използват от реални клиенти. Именно там развих подхода си към разработката – фокус върху качеството, производителността и дългосрочната поддръжка на продукта.",
    ],
    principles: [
      { n: "01", h: "Доставям стойност, не функционалности", p: "Фокусирам се върху това как продуктът решава реални проблеми на клиентите, не просто върху добавяне на нови екранни или технически функции." },
      { n: "02", h: "Бързината е част от потребителското изживяване", p: "Всяка милисекунда има значение – оптимизирам интерфейси и системи, за да намаля триенето за крайния потребител." },
      { n: "03", h: "Изграждам продукти, не отделни части", p: "Мисля за цялото преживяване – от първия клик до финалното действие на клиента, не само за отделни UI компоненти." },
      { n: "04", h: "Поемам отговорност за реалния резултат", p: "Следя как решенията ми се отразяват в production – използваемост, стабилност и бизнес резултати, не само техническо изпълнение." },
    ],
  },
  experience: [
    { period: "2023 — сега", now: true, role: "Опитен Frontend инженер", company: "Omekoitel",
      desc: "Водя frontend архитектурата на B2B SaaS платформа — отговарям за дизайн системата, бюджета за производителност и developer experience за екип от шестима инженери.",
      metrics: [{ v: "45%", l: "По-бързо зареждане" }, { v: "30%", l: "По-малък bundle" }, { v: "6", l: "Подпомогнати инженери" }],
      stack: ["Next.js", "TypeScript", "Tailwind", "GraphQL", "Vercel"] },
    { period: "2021 — 2023", role: "Full-Stack инженер", company: "Northwind Labs",
      desc: "Изградих и мащабирах multi-tenant аналитичен продукт от MVP до хиляди активни потребители. Проектирах компонентната библиотека и доставих real-time таблото.",
      metrics: [{ v: "12k+", l: "Активни потребители" }, { v: "60+", l: "Преизползваеми компоненти" }, { v: "99.9%", l: "Поддържана наличност" }],
      stack: ["Vue", "Nuxt", "Node.js", "PostgreSQL", "Docker"] },
    { period: "2020 — 2021", role: "Frontend инженер", company: "Brightpath Studio",
      desc: "Доставих маркетингови сайтове и продуктови интерфейси за ранни стартъпи. Създадох преизползваемия Next.js starter и CI процеса на студиото.",
      metrics: [{ v: "18", l: "Доставени продукта" }, { v: "98", l: "Среден Lighthouse" }],
      stack: ["React", "Next.js", "Tailwind", "CI/CD"] },
  ],
  skills: [
    { icon: "layout", title: "Frontend инженерство", tags: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "Tailwind CSS"] },
    { icon: "server", title: "Backend и API-та", tags: ["Node.js", "REST", "GraphQL", "Edge Functions"] },
    { icon: "cloud", title: "Облак и deployment", tags: ["Vercel", "Docker", "CI/CD", "GitHub Actions"] },
    { icon: "database", title: "Бази данни", tags: ["PostgreSQL", "MongoDB", "Prisma", "Redis"] },
    { icon: "grid", title: "Архитектура", tags: ["Дизайн системи", "Мащабируемост", "Производителност", "Monorepos"] },
    { icon: "spark", title: "Майсторство", tags: ["Достъпност", "Анимации", "DX", "Тестване"] },
  ],
  filters: ["Онлайн търговия", "Блог"],
  projects: [
    { cats: ["Онлайн търговия"], name: "Omekotitel.bg", tag: "Онлайн търговия", shot: "онлайн магазин", url: "https://omekotitel.bg", image: "/projects/omekotitel-desk.webp", imageMobile: "/projects/omekotitel-mob.webp",
      problem: "Клиентът имаше съществуващ онлайн магазин на Magento, но frontend-ът беше значително забавен, с остарял дизайн и влошено потребителско изживяване, което влияеше негативно на конверсиите и SEO представянето.",
      solution: "Оптимизирахме front-end слоя на магазина, като подобрихме значително скоростта на зареждане, UX и визуалната структура, без да променяме стабилния Magento backend. Извършихме SEO оптимизации за по-добра видимост в търсачките и интегрирахме плащания чрез Revolut за по-гладък checkout процес. Резултатът е по-бърз, по-модерен и по-конвертиращ онлайн магазин при запазена основна инфраструктура.",
      impact: [{ v: "Live", l: "В production" }, { v: "Бърз", l: "Оптимизиран UX" }], stack: ["Next.js", "React", "TypeScript", "Tailwind", "Magento", "Vercel"] },
  ],
  technical: [
    { n: 99, suf: "", l: "Производителност", d: "Lighthouse производителност на доставени продукти", meter: 99 },
    { n: 100, suf: "", l: "Достъпност", d: "WCAG-съобразени, keyboard-first интерфейси", meter: 100 },
    { n: 30, suf: "%", l: "По-малки bundle-и", d: "Средно намаление чрез code-splitting и одити", meter: 70 },
    { n: 90, suf: "%", l: "Покритие с тестове", d: "По критичните пътища с unit + e2e тестове", meter: 90 },
  ],
  blog: [
    { date: "Май 2026", read: "8 мин", tag: "Архитектура", title: "Проектиране на компонентни API-та, които мащабират между екипи", excerpt: "Какво научих, доставяйки дизайн система на пет продуктови екипа, без да забавя нито един." },
    { date: "Март 2026", read: "6 мин", tag: "Производителност", title: "Как смъкнах 45% от времето за зареждане без пренаписване", excerpt: "Прагматичен наръчник за одит на производителност — измервай, бюджетирай и трий, докато стане бързо." },
    { date: "Яну 2026", read: "5 мин", tag: "Next.js", title: "Streaming UI: кога React Server Components наистина помагат", excerpt: "Къде server компонентите се отплатиха в production — и къде не." },
  ],
  t: {
    nav: { about: "За мен", experience: "Опит", projects: "Проекти", writing: "Статии", contact: "Контакт", search: "Търсене", skip: "Към съдържанието" },
    cta: { view: "Виж проектите", connect: "Свържи се" },
    marqueeLabel: "Доверени инструменти \u00b7 ежедневие",
    codeComment: "// в production от 2020",
    sec: {
      aboutEy: "За мен",
      expEy: "Опит", expH: "Пет години доставяне на продукти, измерени в резултати.",
      skillsEy: "Възможности", skillsH: "Full-stack арсенал с frontend специалност.", skillsP: "Дълбоко там, където има значение — frontend архитектура и дизайн системи — и уверено навсякъде другаде, от API-то до deploy pipeline-а.",
      projEy: "Избрани проекти", projH: "Продукти, не портфолио.", projP: "Казуси, изградени около проблема, реализацията и бизнес въздействието — така, както реалните екипи оценяват инженери.",
      techEy: "Техническо съвършенство", techH: "Невидимата работа, която прави продуктите бързи.",
      writeEy: "Статии", writeH: "Бележки за изграждане за уеб.", writeP: "Случайни есета за архитектура, производителност и занаята на доставяне на продукт.",
      contactEy: "Контакт",
    },
    proj: { problem: "Проблем.", solution: "Решение.", viewSource: "Виж кода в GitHub", liveDemo: "Отвори демо", desktopView: "Десктоп изглед", mobileView: "Мобилен изглед" },
    writing: { read: "Прочети статията" },
    contact: {
      h: "Нека изградим изключителни дигитални преживявания.",
      p: "Отворен съм за старши frontend и full-stack роли, продуктови сътрудничества и амбициозни freelance проекти.",
      name: "Име", email: "Имейл", message: "Съобщение",
      namePh: "Иван Иванов", emailPh: "ivan@company.com", messagePh: "Разкажете ми за вашия проект, роля или идея…",
      send: "Изпрати съобщение", sending: "Изпращане…", sentTitle: "Съобщението е изпратено",
      sentBody: (n: string) => `Благодаря, ${n} — ще се свържа с теб до ден-два.`, sendAnother: "Изпрати друго",
      errReq: "Задължително", errEmail: "Въведете валиден имейл", errMsg: "Малко повече детайли, моля",
      errSend: "Нещо се обърка. Опитайте отново или ми пишете директно на имейл.",
      linkEmail: "Имейл", linkGithub: "GitHub", linkLinkedin: "LinkedIn", linkX: "X",
    },
    footer: { site: "Сайт", connect: "Връзки", tagline: (t: string, l: string) => `${t}, изграждащ бързи, мащабируеми уеб продукти от ${l}.`, press: "Натисни ⌘K", craft: "Изградено с грижа" },
    cmd: {
      ph: "Отиди до секция или изпълни команда…", esc: "ESC", navigate: "Навигация", actions: "Действия",
      home: "Начало", about: "За мен", experience: "Опит", projects: "Проекти", writing: "Статии", contact: "Контакт",
      toLight: "Светъл режим", toDark: "Тъмен режим", copyEmail: "Копирай имейл адреса",
      openGithub: "Отвори GitHub", openLinkedin: "Отвори LinkedIn", openX: "Отвори X",
      lang: "Switch to English", noResults: "Няма резултати за",
    },
  },
};

export const dictionaries: Record<Lang, Dict> = { en: EN, bg: BG };
