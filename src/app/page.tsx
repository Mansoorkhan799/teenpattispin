import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const sectionShell =
  'rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1229] via-[#06091F] to-[#0a1628] p-6 shadow-2xl shadow-black/40 md:p-10';

const featureCard =
  'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101b38]/85 to-[#06091F] p-5 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/35 hover:shadow-sky-500/10 md:p-6';

const stepPanel =
  'rounded-2xl border border-white/10 bg-[#06091F]/50 p-5 backdrop-blur-sm md:p-6';

/** App screenshots on the home page (hero uses /teen-patti-spin.webp only). */
const homeAppGallery: { src: string; alt: string; caption: string }[] = [
  { src: '/3-patti-spin-game.webp', alt: 'Teen Patti Spin card table gameplay', caption: 'Tables & Teen Patti modes' },
  { src: '/3-patti-spin-game-interface.webp', alt: 'Teen Patti Spin lobby and game selection', caption: 'Lobby & games' },
  { src: '/3-patti-spin-account.webp', alt: 'Teen Patti Spin account and profile screen', caption: 'Account & profile' },
  { src: '/3-patti-spin-add-money.webp', alt: 'Teen Patti Spin add money deposit screen', caption: 'Deposits' },
  { src: '/3-patti-spin-withdraw-money.webp', alt: 'Teen Patti Spin withdraw money screen', caption: 'Withdrawals' },
  { src: '/3-patti-spin-bonuses.webp', alt: 'Teen Patti Spin bonuses and promotions', caption: 'Bonuses' },
  { src: '/3-patti-spin-refer-and-earn.webp', alt: 'Teen Patti Spin refer and earn', caption: 'Refer & earn' },
  { src: '/3-patti-spin-spin-wheel.webp', alt: 'Teen Patti Spin lucky wheel mini game', caption: 'Wheel & mini games' },
  { src: '/teen-patti-spin-recharge-rebate.webp', alt: 'Teen Patti Spin recharge rebate', caption: 'Recharge rebates' },
];

function StepRow({ n, children }: { n: number; children: ReactNode }) {
  return (
    <li className="flex gap-4 rounded-2xl border border-white/10 bg-[#06091F]/70 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/40 hover:bg-[#0A1029]/80">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-700 text-sm font-bold text-white shadow-lg shadow-sky-500/30">
        {n}
      </span>
      <span className="pt-0.5 leading-relaxed text-gray-300">{children}</span>
    </li>
  );
}

function SectionHeading({ title, subtitle, id }: { title: string; subtitle?: string; id?: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 id={id} className="text-2xl font-bold tracking-tight text-[#FFA500] md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-gray-400">{subtitle}</p> : null}
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Teen Patti Spin | Pakistan's Most Trusted 3 Patti Gaming Platform 2026",
    template: "%s | Teen Patti Spin"
  },
  description:
    "Download Teen Patti Spin APK – play Teen Patti, Joker, Muflis, AK47, Rummy, Dragon Tiger and more. Win real cash via JazzCash & EasyPaisa. 500K+ downloads in Pakistan!",
  keywords: [
    "Teen Patti Spin",
    "3 Patti Spin",
    "Teen Patti Spin APK",
    "Teen Patti Spin download",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "real money games Pakistan",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan"
  ],
  openGraph: {
    title: "Teen Patti Spin | Pakistan's Most Trusted 3 Patti Gaming Platform 2026",
    description:
      "Join 500K+ players on Pakistan's premier card game platform. Play Teen Patti Spin – Classic, Joker, Muflis, AK47, Rummy & more. Earn real money with JazzCash & EasyPaisa.",
    images: [
      {
        url: 'https://teenpattispingame.com.pk/teen-patti-spin.webp',
        width: 1200,
        height: 630,
        alt: 'Teen Patti Spin – official app artwork'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Teen Patti Spin | Pakistan's Most Trusted 3 Patti Gaming Platform 2026",
    description:
      "Join 500K+ players on Pakistan's premier card game platform. Play Teen Patti Spin & earn real money with JazzCash & EasyPaisa.",
    images: ['https://teenpattispingame.com.pk/teen-patti-spin.webp']
  }
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://teenpattispingame.com.pk/#website",
        "url": "https://teenpattispingame.com.pk/",
        "name": "Teen Patti Spin",
        "description":
          "Pakistan's premier card game platform with Teen Patti Spin – Classic, Joker, Muflis, AK47, Rummy, Dragon Tiger and more.",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://teenpattispingame.com.pk/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://teenpattispingame.com.pk/#organization",
        "name": "Teen Patti Spin",
        "url": "https://teenpattispingame.com.pk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://teenpattispingame.com.pk/teen-patti-spin.webp",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@teenpattispingame.com.pk",
          "contactType": "Customer Support",
          "areaServed": "PK"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Teen Patti Spin",
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "ratingCount": "500000"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR"
        },
        "downloadUrl": "https://teenpattispingame.com.pk/download-teen-patti-spin",
        "softwareVersion": "v1.652(0)",
        "fileSize": "54MB",
        "description":
          "Play Teen Patti Spin – Classic, Joker, Muflis, AK47, Rummy, Dragon Tiger and more. Earn real money with JazzCash & EasyPaisa withdrawals.",
        "screenshot": [
          "https://teenpattispingame.com.pk/teen-patti-spin.webp",
          "https://teenpattispingame.com.pk/3-patti-spin-game.webp",
          "https://teenpattispingame.com.pk/3-patti-spin-game-interface.webp",
          "https://teenpattispingame.com.pk/3-patti-spin-account.webp",
          "https://teenpattispingame.com.pk/3-patti-spin-add-money.webp",
          "https://teenpattispingame.com.pk/3-patti-spin-withdraw-money.webp",
          "https://teenpattispingame.com.pk/3-patti-spin-bonuses.webp",
          "https://teenpattispingame.com.pk/3-patti-spin-refer-and-earn.webp",
          "https://teenpattispingame.com.pk/3-patti-spin-spin-wheel.webp",
          "https://teenpattispingame.com.pk/teen-patti-spin-recharge-rebate.webp"
        ],
        "author": {
          "@type": "Organization",
          "name": "Teen Patti Spin"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Teen Patti Spin?", "acceptedAnswer": { "@type": "Answer", "text": "Teen Patti Spin is an online earning and gaming platform where you can join high and low stakes tables to play and earn money. The app is lightweight and runs smoothly even on low-end devices." } },
      { "@type": "Question", "name": "Is Teen Patti Spin free to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, this gaming app is completely safe to use. The platform uses a strong security system to protect your personal information and transactions." } },
      { "@type": "Question", "name": "Which games does Teen Patti Spin offer?", "acceptedAnswer": { "@type": "Answer", "text": "Teen Patti Spin offers classic Teen Patti games with different modes and variations like Joker, Muflis, and AK47. You can also play beginner-friendly games like Dragon vs Tiger, Roulette, Poker, and mini slot games." } },
      { "@type": "Question", "name": "Can I make multiple accounts on Teen Patti Spin?", "acceptedAnswer": { "@type": "Answer", "text": "No, Teen Patti Spin allows one account per user. If you try to make multiple accounts, it may lead to suspension or a permanent ban." } },
      { "@type": "Question", "name": "Which bonuses are available on Teen Patti Spin?", "acceptedAnswer": { "@type": "Answer", "text": "Teen Patti Spin offers a Welcome Bonus, 111 Bonus, Recharge Rebate, Weekly Agent Bonus, Cashback Bonuses, and a Referral Bonus Program." } },
      { "@type": "Question", "name": "How can I recover my password?", "acceptedAnswer": { "@type": "Answer", "text": "If you forgot your password, tap on the forgot password option on the login page and follow the on-screen instructions to recover it." } },
      { "@type": "Question", "name": "Is Teen Patti Spin free to play?", "acceptedAnswer": { "@type": "Answer", "text": "You can use practice mode to play games for free, but to play real cash games, you need to add money and place bets." } },
      { "@type": "Question", "name": "How can I register an account on the Teen Patti Spin app?", "acceptedAnswer": { "@type": "Answer", "text": "Go to the login page and tap the register or sign up button. Enter your active email or phone number and complete OTP verification to make your account safe." } },
      { "@type": "Question", "name": "Can I download Teen Patti Spin on iOS?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can download Teen Patti Spin on iOS devices. Open Safari and search for the official Teen Patti Spin website to download it on your iPhone or iPad." } },
      { "@type": "Question", "name": "What should I do if my transactions fail?", "acceptedAnswer": { "@type": "Answer", "text": "Refresh the page or check that your internet connection is stable. You can also contact the Teen Patti Spin customer support team with transaction proofs to get help." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4 text-center sm:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <Link href="/" className="hover:text-[#FFA500] transition-colors">
                  <span className="text-white">Teen Patti Spin</span>
                </Link>
              </h1>
              <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                <span className="block text-[#FFA500]">Pakistan&apos;s Most Trusted</span>
                <span className="block text-white">3 Patti Gaming Platform 2026</span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline font-semibold">3 Patti Spin</Link> is a popular online card game that allows you to enjoy a wide variety of games with its smooth graphics, easy controls, and fast gameplay, which makes the gameplay more enjoyable. Click on the download button below to download this game.
            </p>

            <div className="flex justify-center my-8">
              <a
                href="https://teenpattispingame.com.pk/download-teen-patti-spin"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>DOWNLOAD NOW</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="mx-auto mt-8 mb-4 grid min-h-[120px] max-w-xl grid-cols-3 gap-3 sm:gap-4">
              {[
                {
                  label: 'Downloads',
                  value: '500K+',
                  icon: (
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  ),
                },
                {
                  label: 'Latest',
                  value: 'v1.652',
                  icon: <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />,
                },
                {
                  label: 'App size',
                  value: '54MB',
                  icon: (
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  ),
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="group relative flex min-h-[118px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f1a3a]/90 to-[#06091F] px-2 py-4 text-center shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:shadow-amber-500/10 sm:px-3"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <svg
                    className="mb-2 h-6 w-6 text-amber-400 transition-transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    {s.icon}
                  </svg>
                  <div className="text-lg font-bold leading-tight text-white sm:text-xl">{s.value}</div>
                  <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm text-center italic">*Available for Android 5.0+ devices</p>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block md:w-1/2 md:mt-8">
            <div className="relative ml-auto w-[320px] h-[320px] max-w-full">
              <Image
                src="/teen-patti-spin.webp"
                alt="Teen Patti Spin"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl w-full h-full"
                priority
                fetchPriority="high"
                quality={75}
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <div className={sectionShell}>
          <SectionHeading title="Teen Patti Spin – App Info" subtitle="Quick reference for version, size, and device requirements before you install." />
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">Teen Patti Spin</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Size</td>
                  <td className="py-4 px-6 text-left text-white">54 MB</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Version</td>
                  <td className="py-4 px-6 text-left text-white">v1.652(0)</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Last Update</td>
                  <td className="py-4 px-6 text-left text-white">06 February 2026</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">500K+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Language</td>
                  <td className="py-4 px-6 text-left text-white">Urdu, English</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Cards, Casino, Game</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="what-is-teen-patti-spin">
        <div className={sectionShell}>
          <SectionHeading
            title="Introduction to Teen Patti Spin"
            subtitle="A lightweight earning and card-game hub built for Pakistani players who want variety and smooth play."
          />
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Teen Patti Spin is one of the most popular online gaming platforms where you can play multiple games and earn money. You can enjoy real classic Teen Patti games, different modes and variations like Joker mode, AK47, Muflis and many more to play and earn. The multiple gaming options make the games more fun, and you never get bored while playing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This earning app also includes simple card games, which are easier for beginners to play and earn. With a simple and easy interface, you can enjoy this platform without any difficulty. Teen Patti Spin also has a 24/7 available customer support team, so if you have any issues, you can connect with them to get the solutions quickly.
            </p>
          </div>
        </div>
      </section>

      {/* App gallery — all /public webp assets except hero (teen-patti-spin.webp) */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="app-screenshots" aria-labelledby="app-screenshots-heading">
        <div className={sectionShell}>
          <SectionHeading
            id="app-screenshots-heading"
            title="Inside the app"
            subtitle="Real in-game screens—tables, wallet, bonuses, referrals, and more."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeAppGallery.map((item) => (
              <figure
                key={item.src}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#06091F]/60 shadow-lg shadow-black/25 transition-all duration-300 hover:border-sky-500/35 hover:shadow-sky-500/10"
              >
                <div className="relative aspect-[4/3] w-full bg-[#0a1029]/80">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                  />
                </div>
                <figcaption className="border-t border-white/10 px-4 py-3 text-center text-sm font-medium text-gray-300">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Teen Patti Spin Unique */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading
            title="What Makes Teen Patti Spin Unique?"
            subtitle="Performance, community, modes, fair play, and private tables in one polished experience."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                title: '01. Smooth Performance',
                body:
                  'This platform is designed with a simple layout, and even if you are new to the platform, you can easily understand it. You just need to download the game, register an account, find your favorite games, read the rules, and start playing without any worry. The deposit and withdrawal process is smooth, and you do not need any high skills to use this application.'
              },
              {
                title: '02. Large Active Community',
                body:
                  'Teen Patti Spin is a casino game app where you can join tables and start playing and betting with real players. This platform has a large community of players, which means you can always find new players and compete with them to earn more. This large community helps you play with real people and makes the games full of challenges.'
              },
              {
                title: '03. Game Modes & Variations',
                body:
                  'Teen Patti Spin Game not only offers classic Teen Patti games but also provides different modes to make the game more interesting: Classic Teen Patti, Joker Mode (one card acts as a joker), Muflis Mode (lowest hand wins), AK47 Mode (A, K, 4 and 7 act as jokers), and Tournament Mode where you can compete for bigger rewards.'
              },
              {
                title: '04. Fairplay Gaming Environment',
                body:
                  'Teen Patti Spin offers a fair play gaming environment, so every player gets an equal chance of playing. In the Teen Patti Spin Game, every player is given cards which are distributed by a random card system generator. So everyone gets an equal chance of winning according to their luck and strategies.'
              },
              {
                title: '05. Private Tables & VIP Rooms',
                body:
                  'One of the best features of Teen Patti Spin is private tables. You can create a table, give links or codes to your friends, and the people who have the code can join. This makes the game more fun, and you feel like a real card game at home. VIP rooms are given to experienced players where they can join high-stakes tables to earn big money rewards.'
              }
            ].map((f) => (
              <article key={f.title} className={featureCard}>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-60" />
                <h3 className="text-lg font-bold text-white md:text-xl">{f.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-300">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Gaming Features */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading
            title="Key Gaming Features"
            subtitle="Graphics, variations, support, rewards, payments, chat, practice mode, and fresh updates."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                heading: 'Smooth Graphics',
                body:
                  'One of the best features of this application is that it has smooth and interactive graphics. When you are playing games, the interface looks attractive, and the app does not freeze or lag. These smooth graphics offer you the best gaming experience and optimized performance. You can see smooth animations, card files, a clean design, and a realistic effect that enhances the gameplay experience, and you do not feel bored while playing.'
              },
              {
                heading: 'Multiple Teen Patti Variations',
                body:
                  'Teen Patti Spin offers a variety of game variations of Teen Patti games. When playing classic Teen Patti mode the rules are simple, with modes like Joker mode, Muflis mode, tournament modes, and AK47 modes making the gaming experience more exciting. All these modes have completely changed the rules, making it more challenging while playing. If you are a beginner, you can start with Classic Teen Patti mode and later switch to other modes.'
              },
              {
                heading: '24/7 Customer Support',
                body:
                  'Teen Patti Spin APK provides a reliable customer support team to help you whenever you need it. If you are having an issue like deposit and withdrawal delays, account recovery issues, bonus clarification, or any game technical problem, you can contact them and get help. You can contact the support team using Email or the in-chat option. This game also has a separate FAQs section where common problems and their solutions are given.'
              },
              {
                heading: 'Bonuses & Rewards',
                body:
                  'This earning app has bonuses and a reward system to help you play games for free. If you are new to the platform, you can get a welcome bonus to start your journey. You can use this bonus to play games without needing to add your own money. It also offers multiple rewards and promotions during special events and festivals.'
              },
              {
                heading: 'Local Payment Options',
                body:
                  'Teen Patti Spin supports local payment methods which are easy and reliable in Pakistan. You can use JazzCash and EasyPaisa to add or withdraw your money. These options are easy to use and have a secure encryption system to ensure safe transactions.'
              },
              {
                heading: 'In-Game Chat Options',
                body:
                  'Teen Patti Spin has a great feature of in-game chat options, which is exciting and enjoyable. When you are playing games, you can chat with real players, send short messages, and use exciting emojis. If you are playing with friends, the chat options become more interesting and enjoyable.'
              },
              {
                heading: 'Practice Mode',
                body:
                  'This gaming app has a practice mode feature, which means you can play games to practice without needing to bet. You can understand the games, betting structure, and card ranking without spending a single penny. Even if you are a regular player, you can use practice mode to improve your gaming and decision-making skills.'
              },
              {
                heading: 'Regular Updates and Content Additions',
                body:
                  'Regular updates help to give the best, lag-free experience of the games. Updates may include bug fixes, new promotional events, and new games. New themes are added so that when you are playing, you can get something new in the interface to avoid boredom.'
              }
            ].map((f) => (
              <article key={f.heading} className={featureCard}>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-70" />
                <h3 className="text-lg font-bold text-white md:text-xl">{f.heading}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-300">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to Download */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="how-to-download">
        <div className={sectionShell}>
          <SectionHeading
            title="How to Download the Latest Version of Teen Patti Spin?"
            subtitle="Choose your platform and follow the numbered steps—each path stays on the official site."
          />

          <div className="space-y-8 md:space-y-10">
            <div className={stepPanel}>
              <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">For Android</h3>
              <p className="mb-4 text-gray-400">Follow the step-by-step process to download the Teen Patti Spin application on your Android device:</p>
              <ul className="space-y-3">
                <StepRow n={1}>
                  Open your browser and search for the latest version on{' '}
                  <Link href="/download-teen-patti-spin" className="text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline">
                    teenpattispingame.com.pk
                  </Link>
                  .
                </StepRow>
                <StepRow n={2}>Make sure to visit a trusted site that is safe and secure.</StepRow>
                <StepRow n={3}>Locate the download button and tap on it to start the process.</StepRow>
                <StepRow n={4}>Wait until the file is downloaded and saved to your device.</StepRow>
                <StepRow n={5}>Go to your phone Settings &gt; Security and enable Installation from unknown sources.</StepRow>
                <StepRow n={6}>Open your download manager and look for the Teen Patti Spin APK file.</StepRow>
                <StepRow n={7}>Click on the downloaded file to start the installation and wait until it completes.</StepRow>
                <StepRow n={8}>Once installation is complete, launch the app to start playing and earning.</StepRow>
              </ul>
            </div>

            <div className={stepPanel}>
              <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">For iOS</h3>
              <p className="mb-4 text-gray-400">If you are using an iOS device, follow these simple steps:</p>
              <ul className="space-y-3">
                <StepRow n={1}>Open the Safari browser on your iOS device, such as an iPhone or iPad.</StepRow>
                <StepRow n={2}>Make sure your browser is updated for better and smoother performance.</StepRow>
                <StepRow n={3}>Search for the official website of Teen Patti Spin.</StepRow>
                <StepRow n={4}>Open the official website and find the download button.</StepRow>
                <StepRow n={5}>Tap on the download button and wait until the download completes.</StepRow>
                <StepRow n={6}>Once installed, allow permission if asked.</StepRow>
                <StepRow n={7}>Go to Settings &gt; General &gt; Device Management and tap “Trust this developer”.</StepRow>
                <StepRow n={8}>Launch the app on your device to start making money.</StepRow>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                Use only the official site{' '}
                <Link href="/" className="font-medium text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline">
                  teenpattispingame.com.pk
                </Link>{' '}
                in Safari—avoid unofficial installers.
              </p>
            </div>

            <div className={stepPanel}>
              <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">For PC</h3>
              <p className="mb-4 text-gray-400">If you want to install Teen Patti Spin on your PC, follow the steps below:</p>
              <ul className="space-y-3">
                <StepRow n={1}>Download an Android Emulator to create an Android setup on your PC.</StepRow>
                <StepRow n={2}>Install an emulator like BlueStacks, LD Player, or Nox Player from its official website.</StepRow>
                <StepRow n={3}>Open the emulator and sign in with your Google Account.</StepRow>
                <StepRow n={4}>Download the latest version of the Teen Patti Spin app from a trusted website.</StepRow>
                <StepRow n={5}>Tap on the Install APK option inside the emulator and allow unknown sources if asked.</StepRow>
                <StepRow n={6}>Once the game is successfully installed, you can start exploring games to earn real cash.</StepRow>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                See the full guide on the{' '}
                <Link href="/teen-patti-spin-for-pc" className="font-medium text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline">
                  Teen Patti Spin for PC
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading title="System Requirements" subtitle="Minimum specs so tables load smoothly on Android, iOS, and PC." />
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-[#0a1029]/80">
                  <tr>
                    <th className="py-3 px-6 text-left text-white font-semibold">System</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Android</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">iOS</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">PC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-[#06091F]/50">
                    <td className="py-3 px-6 text-white font-medium">Operating System</td>
                    <td className="py-3 px-6 text-gray-300">Android 7.0+</td>
                    <td className="py-3 px-6 text-gray-300">iOS 11.0+</td>
                    <td className="py-3 px-6 text-gray-300">Windows 10 or 11</td>
                  </tr>
                  <tr className="bg-[#0a1029]/50">
                    <td className="py-3 px-6 text-white font-medium">RAM</td>
                    <td className="py-3 px-6 text-gray-300">2 GB</td>
                    <td className="py-3 px-6 text-gray-300">4 GB</td>
                    <td className="py-3 px-6 text-gray-300">4 GB</td>
                  </tr>
                  <tr className="bg-[#06091F]/50">
                    <td className="py-3 px-6 text-white font-medium">Storage</td>
                    <td className="py-3 px-6 text-gray-300">500 MB</td>
                    <td className="py-3 px-6 text-gray-300">500 MB</td>
                    <td className="py-3 px-6 text-gray-300">2 GB</td>
                  </tr>
                  <tr className="bg-[#0a1029]/50">
                    <td className="py-3 px-6 text-white font-medium">Internet</td>
                    <td className="py-3 px-6 text-gray-300">Stable 4G</td>
                    <td className="py-3 px-6 text-gray-300">Strong 4G</td>
                    <td className="py-3 px-6 text-gray-300">Strong 5G</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How to Create an Account */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading
            title="How to create an Account on Teen Patti Spin?"
            subtitle="Register once, verify with OTP, then sign in securely from any device."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div className={stepPanel}>
              <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">Registration Process</h3>
              <ul className="space-y-3">
                <StepRow n={1}>Open the Teen Patti Spin app on your device and make sure you are using the official app.</StepRow>
                <StepRow n={2}>On the main screen, tap on the “Play as Guest” option to enter the game lobby.</StepRow>
                <StepRow n={3}>Inside the game, go to the Profile section and bind your active mobile number or Email address.</StepRow>
                <StepRow n={4}>You will receive an OTP for the verification process.</StepRow>
                <StepRow n={5}>Check your inbox and enter the OTP correctly.</StepRow>
                <StepRow n={6}>Create a strong password with a mix of letters, numbers, and symbols.</StepRow>
                <StepRow n={7}>Recheck all the details you entered and tap on Register.</StepRow>
                <StepRow n={8}>The account is successfully created – you can now explore the different games.</StepRow>
              </ul>
            </div>

            <div className={stepPanel}>
              <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">Login Process</h3>
              <ul className="space-y-3">
                <StepRow n={1}>Open the official Teen Patti Spin application on your device.</StepRow>
                <StepRow n={2}>On the main screen, tap on the Sign in or Log in button.</StepRow>
                <StepRow n={3}>Enter your registered mobile number or Email address.</StepRow>
                <StepRow n={4}>Type the password you used while registering your account.</StepRow>
                <StepRow n={5}>If you have forgotten your password, use the “Forgot Password” option to create a new one.</StepRow>
                <StepRow n={6}>Double-check all your login details and tap on the Login button.</StepRow>
                <StepRow n={7}>Your account is now logged in – start playing different games and earn money.</StepRow>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit / Withdraw */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading
            title="How to Deposit and Withdraw Earnings on Teen Patti Spin?"
            subtitle="Use JazzCash or EasyPaisa from the in-app wallet—confirm details before every transfer."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div className={stepPanel}>
              <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">Deposit Method</h3>
              <ul className="space-y-3">
                <StepRow n={1}>Open the Teen Patti Spin app and log in to your account.</StepRow>
                <StepRow n={2}>On the main menu, tap on the deposit button.</StepRow>
                <StepRow n={3}>Choose a payment method, like EasyPaisa or JazzCash.</StepRow>
                <StepRow n={4}>Enter the amount you want to add to your game wallet.</StepRow>
                <StepRow n={5}>Recheck all the details and tap on the deposit button.</StepRow>
                <StepRow n={6}>Enter your transaction PIN to confirm the payment request.</StepRow>
                <StepRow n={7}>Wait a few seconds – your money will be added to your app wallet.</StepRow>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                Read the full guide on the{' '}
                <Link href="/deposit-money-in-teen-patti-spin" className="font-medium text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline">
                  deposit page
                </Link>
                .
              </p>
            </div>

            <div className={stepPanel}>
              <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">Withdrawal Method</h3>
              <ul className="space-y-3">
                <StepRow n={1}>Open the official app and log in to your account.</StepRow>
                <StepRow n={2}>Go to the wallet section and tap on Withdraw.</StepRow>
                <StepRow n={3}>Select your payment method and enter the required details carefully.</StepRow>
                <StepRow n={4}>Enter the amount you want to withdraw from the game.</StepRow>
                <StepRow n={5}>Double-check all the details to avoid any errors.</StepRow>
                <StepRow n={6}>Click on Submit and wait for the request to complete.</StepRow>
                <StepRow n={7}>After a few minutes, your money will be transferred to your selected account.</StepRow>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                Read the full guide on the{' '}
                <Link href="/withdraw-money-from-teen-patti-spin" className="font-medium text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline">
                  withdraw page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading
            title="Teen Patti Spin Bonuses and Promotions"
            subtitle="New and returning players get chips, rebates, and referral rewards—always check in-app banners for live offers."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {[
              { t: '01. Welcome Bonus', d: 'New users on Teen Patti Spin can receive a welcome bonus. It can be free chips, cash balance, or rewards added directly to your game wallet so beginners can start playing without spending their own money.' },
              { t: '02. 111 Bonus', d: 'A special promotional reward given to both new and regular players. The 111 bonus adds extra chips depending on your activity. Check in-app promotions for current offers.' },
              { t: '03. Recharge Rebate', d: 'When you make a recharge to your game wallet, a percentage of the amount is given back as a bonus chip. The percentage depends on how much you have deposited.' },
              { t: '04. Weekly Agent Bonus', d: 'When an active referral deposits and plays games regularly, the game gives a small commission to your wallet. You can check your active referrals and track their activity.' },
              { t: '05. Cashback Bonuses', d: 'Cashback bonuses help reduce the risk of losses. When you play games and lose chips constantly, cashback bonuses help you recover some amount as bonus chips so you can play with confidence.' },
              { t: '06. Referral Bonus Program', d: 'Get a unique code or link that you can share with your friends. When someone joins the platform using your code, you receive a fixed amount of commission – no need to stay active to earn.' }
            ].map((b) => (
              <article key={b.t} className={featureCard}>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-70" />
                <h3 className="text-lg font-bold text-white md:text-xl">{b.t}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-300">{b.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Popular */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading
            title="Why is Teen Patti Spin Popular in Pakistan?"
            subtitle="Players stay for variety, local payments, rewards, and performance on everyday networks."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'This earning app not only offers one game – you can play multiple games according to your interests.',
              'Multiple beginner-friendly games depend largely on luck, like Dragon vs Tiger, Roulette, Poker, and slot games.',
              'The platform uses local payment methods for Pakistani users, such as JazzCash and EasyPaisa.',
              'Daily rewards and bonuses are given to maximize your earnings, which makes it trending among casino lovers.',
              'You do not need high-speed internet to use this app, which makes it useful for everyone to play smoothly.'
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-2xl border border-white/10 bg-[#06091F]/60 p-4 shadow-md transition-all hover:border-sky-500/30 md:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 text-sm font-bold text-white shadow-lg shadow-amber-600/25">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading title="Customer Support of Teen Patti Spin" subtitle="Three channels so you can pick speed or depth depending on your issue." />
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <article className={featureCard}>
              <div className="mb-3 inline-flex rounded-lg bg-sky-500/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-sky-300">Fastest</div>
              <h3 className="text-lg font-bold text-white md:text-xl">Live Chat Support</h3>
              <p className="mt-3 flex-1 leading-relaxed text-gray-300">
                The easiest and fastest way to contact the support team. Open the app, look for the Help or Support section, and start chatting. Use this for instant communication on issues like deposit/withdrawal delays or technical game problems.
              </p>
            </article>
            <article className={featureCard}>
              <div className="mb-3 inline-flex rounded-lg bg-violet-500/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-violet-300">Detailed</div>
              <h3 className="text-lg font-bold text-white md:text-xl">Email Support</h3>
              <p className="mt-3 flex-1 leading-relaxed text-gray-300">
                Teen Patti Spin provides an official email so you can write your issues and get help. Compose an email, describe your issue clearly and add screenshots if required. Email support may take time but it is reliable.
              </p>
            </article>
            <article className={featureCard}>
              <div className="mb-3 inline-flex rounded-lg bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">Self-serve</div>
              <h3 className="text-lg font-bold text-white md:text-xl">FAQs Section</h3>
              <p className="mt-3 flex-1 leading-relaxed text-gray-300">
                The game has a section where common problems and their solutions are given. If you are facing any problem, check the FAQs first to save time and find a quick solution.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Responsible Gaming Tips */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading
            title="Responsible Gaming Tips That You Should Follow"
            subtitle="Stay in control: official app only, healthy limits, and treating play as entertainment."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Make sure you are using the official app of Teen Patti Spin.',
              'Avoid clicking on random links claiming free chips and bonuses.',
              'Avoid playing when you feel angry or under emotional stress.',
              'Treat the games as entertainment, not a guaranteed income source.',
              'Do not share your login information with friends.',
              'Take regular breaks during longer sessions.'
            ].map((tip, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1835]/80 to-[#06091F] p-4 shadow-inner transition-all hover:border-emerald-500/35 md:p-5"
              >
                <p className="text-sm font-medium uppercase tracking-wider text-emerald-400/90">Tip {i + 1}</p>
                <p className="mt-2 leading-relaxed text-gray-300">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Tips */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading title="Smart Tips to Earn Maximum on Teen Patti Spin" subtitle="Small habits that protect your bankroll while you climb stakes." />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'If you are a beginner, start with games that have a low betting amount.',
              'Choose the games that are easy and according to your interests.',
              'Do not chase losses or try to recover them by betting higher amounts.',
              'Take advantage of daily rewards, cashbacks, and promotional offers.',
              'Observe your opponents before playing high bets.'
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-[#06091F]/70 px-4 py-3.5 text-gray-300 backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-xs font-bold text-amber-400">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={sectionShell}>
          <SectionHeading title="Pros & Cons" subtitle="A quick honest snapshot before you install or deposit." />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/35 bg-gradient-to-b from-emerald-950/40 to-[#06091F] p-6 shadow-lg shadow-emerald-900/20 md:p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />
              <h3 className="relative text-2xl font-bold text-emerald-400">Pros</h3>
              <ul className="relative mt-4 space-y-3 text-gray-300">
                {['Variety of exciting games', 'Real earning opportunities', 'Tournaments and special events', 'Regular updates', '24/7 customer support'].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-emerald-400" aria-hidden>
                      +
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-red-500/35 bg-gradient-to-b from-red-950/30 to-[#06091F] p-6 shadow-lg shadow-red-900/20 md:p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/10 blur-2xl" />
              <h3 className="relative text-2xl font-bold text-red-400">Cons</h3>
              <ul className="relative mt-4 space-y-3 text-gray-300">
                {['Needs an internet connection', 'Third-party application', 'No legal support', 'Gaming can be addictive', 'Risk of losing money'].map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-red-400" aria-hidden>
                      −
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={`${sectionShell} border-sky-500/20`}>
          <h2 className="text-2xl font-bold text-sky-400 md:text-3xl">Conclusion</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-gray-300">
            Teen Patti Spin has gained massive popularity due to its ease of use and earning opportunities. The platform offers a variety of games to play and earn without any worry. When you are playing on this platform you do not feel bored. This earning app is lightweight and needs only a stable internet connection for smooth performance. Teen Patti Spin regularly updates the game to add new features, making it the best gaming platform. You can get different rewards, bonuses and free chips to play games without spending your own money.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="faqs">
        <div className={sectionShell}>
          <SectionHeading title="Frequently Asked Questions" subtitle="Answers mirror our structured FAQ schema for consistency and clarity." />
          <div className="space-y-3">
            {[
              { q: 'What is Teen Patti Spin?', a: 'Teen Patti Spin Game is an online earning and gaming platform where you can join high and low stakes tables to play and earn money. The app is lightweight and runs smoothly even on low-end devices.' },
              { q: 'Is Teen Patti Spin free to use?', a: 'Yes, this gaming app is completely safe to use. The platform uses a strong security system to protect your personal information and transactions.' },
              { q: 'Which games does Teen Patti Spin offer?', a: 'Teen Patti Spin offers classic Teen Patti games with different modes and variations like Joker, Muflis, and AK47. You can also play beginner-friendly games like Dragon vs Tiger, Roulette, Poker, and mini slot games.' },
              { q: 'Can I make multiple accounts on Teen Patti Spin?', a: 'No, Teen Patti Spin allows one account per user. If you try to make multiple accounts, it may lead to suspension or a permanent ban.' },
              { q: 'Which bonuses are available on Teen Patti Spin?', a: 'Teen Patti Spin game offers different bonuses and rewards. You can get promotional events, recharge rebates, and VIP stakes rooms which offer bigger rewards.' },
              { q: 'How can I recover my password?', a: 'If you forgot your password, you can easily recover it. On the login page, tap on the forgot password option and follow the on-screen instructions to recover your password.' },
              { q: 'Is Teen Patti Spin free to play?', a: 'You can use practice mode to play games for free, but if you want to play real cash games you need to add money and place bets.' },
              { q: 'How can I register for an account on the Teen Patti Spin app?', a: 'Go to the login page and tap the register or sign up button. Enter your active email or phone number and complete OTP verification to make your account safe.' },
              { q: 'Can I download Teen Patti Spin on iOS?', a: 'Yes, you can easily download Teen Patti Spin on iOS devices. Go to the Safari browser and search for the Teen Patti Spin official app to download it on your iOS device.' },
              { q: 'What should I do if my transactions fail?', a: 'Refresh the page or check that your internet connection is stable. You can also contact the customer support team of Teen Patti Spin with transaction proofs to get help.' }
            ].map((item) => (
              <details
                key={item.q}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#06091F]/60 shadow-md transition-colors open:border-sky-500/30 open:bg-[#0A1029]/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 font-medium text-white marker:content-none [&::-webkit-details-marker]:hidden md:p-5">
                  <span>{item.q}</span>
                  <span className="shrink-0 text-sky-400 transition-transform duration-200 group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" aria-hidden>
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-white/5 px-4 pb-4 pt-3 leading-relaxed text-gray-300 md:px-5 md:pb-5">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
