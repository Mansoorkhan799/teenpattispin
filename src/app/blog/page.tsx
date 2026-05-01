import { Metadata } from 'next';
import BlogSearch from './BlogSearch';

export const metadata: Metadata = {
  title: 'Teen Patti Spin Blog – Guides, Tips & Earning Strategies',
  description: 'Read Teen Patti Spin guides on how to earn money, deposit via JazzCash, win at Teen Patti, and more. Updated tips for Pakistani players.',
  keywords: ['Teen Patti Spin blog', 'Teen Patti Spin real or fake', 'Teen Patti Spin legit', 'Teen Patti Spin Pakistan', 'Teen Patti Spin earning guide', 'Teen Patti Spin withdrawal'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://teenpattispingame.com.pk/blog',
  },
  openGraph: {
    title: 'Teen Patti Spin Blog – Guides, Tips & Earning Strategies',
    description: 'Read Teen Patti Spin guides on how to earn money, deposit via JazzCash, win at Teen Patti, and more. Updated tips for Pakistani players.',
    url: 'https://teenpattispingame.com.pk/blog',
    siteName: 'Teen Patti Spin',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://teenpattispingame.com.pk/Teen-Patti-Spin.webp',
        width: 1200,
        height: 630,
        alt: 'Teen Patti Spin Blog – Card Game Guides for Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Patti Spin Blog – Guides, Tips & Earning Strategies',
    description: 'Read Teen Patti Spin guides on how to earn money, deposit via JazzCash, win at Teen Patti, and more.',
    images: ['https://teenpattispingame.com.pk/Teen-Patti-Spin.webp'],
  },
};

const BLOG_POSTS = [
  { slug: 'is-teen-patti-spin-real-or-fake', title: 'Is Teen Patti Spin Real or Fake to Earn Money?', description: 'Discover the truth about Teen Patti Spin legitimacy, payment methods, and how to identify fake apps. Complete guide for 2026.', date: 'January 2026', readTime: '7 min read', featured: true },
  { slug: 'how-to-play-teen-patti-spin', title: 'How to Play Teen Patti Spin - Complete Beginner Guide', description: 'Learn how to play Teen Patti Spin step by step. Complete beginner guide with rules, gameplay, tips, and strategies for Teen Patti and more.', date: 'January 2026', readTime: '8 min read', featured: false },
  { slug: 'tips-to-win-teen-patti-spin', title: 'Tips and Strategies to Win in Teen Patti Spin', description: 'Learn proven tips and strategies to win in Teen Patti Spin. Expert guide on Teen Patti strategies, bankroll management, and winning techniques.', date: 'January 2026', readTime: '9 min read', featured: false },
  { slug: 'how-to-earn-money-teen-patti-spin', title: 'How to Earn Money in Teen Patti Spin', description: 'Learn how to earn real money in Teen Patti Spin. Complete guide on earning methods, bonuses, referral program, and withdrawal process.', date: 'January 2026', readTime: '10 min read', featured: false },
  { slug: 'payment-methods-jazzcash-easypaisa', title: 'Teen Patti Spin Payment Methods - JazzCash & EasyPaisa', description: 'Complete guide on using JazzCash and EasyPaisa for deposits and withdrawals in Teen Patti Spin. Step-by-step instructions for Pakistani players.', date: 'January 2026', readTime: '7 min read', featured: false },
  { slug: 'teen-patti-spin-features-benefits', title: 'Teen Patti Spin App Features and Benefits', description: 'Discover all the amazing features and benefits of Teen Patti Spin app. Learn about games, bonuses, security, and why it\'s the best platform.', date: 'January 2026', readTime: '8 min read', featured: false },
  { slug: 'how-to-create-account-login', title: 'How to Create Account and Login in Teen Patti Spin', description: 'Complete step-by-step guide on creating an account and logging in to Teen Patti Spin. Learn registration, verification, and login process.', date: 'January 2026', readTime: '6 min read', featured: false },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">Teen Patti Spin Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">Stay updated with the latest guides and information about Teen Patti Spin</p>
      <BlogSearch posts={BLOG_POSTS} />
    </div>
  );
} 