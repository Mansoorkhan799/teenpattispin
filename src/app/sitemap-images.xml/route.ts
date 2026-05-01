import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://teenpattispingame.com.pk';
  
  // Define all images used across the site (paths must match files in /public)
  const images = [
    {
      loc: `${baseUrl}/`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin.webp`,
          title: 'Teen Patti Spin Logo',
          caption: 'Teen Patti Spin - Pakistan Premier Card Gaming Platform',
        },
        {
          loc: `${baseUrl}/Teen-Patti-Spin-logo.webp`,
          title: 'Teen Patti Spin Logo Alternative',
          caption: 'Teen Patti Spin App Logo',
        },
        {
          loc: `${baseUrl}/Teen-Patti-Spin-Game.webp`,
          title: 'Teen Patti Spin Game Screenshot 1',
          caption: 'Teen Patti Spin Gaming Interface',
        },
        {
          loc: `${baseUrl}/Teen-Patti-Spin-Games.webp`,
          title: 'Teen Patti Spin Game Screenshot 2',
          caption: 'Teen Patti Spin Games Collection',
        },
        {
          loc: `${baseUrl}/Teen-Patti-Spin-Free-Bonus.webp`,
          title: 'Teen Patti Spin Bonuses',
          caption: 'Teen Patti Spin Bonus System',
        },
        {
          loc: `${baseUrl}/Teen-Patti-Spin-Deposit.webp`,
          title: 'Teen Patti Spin Add Money',
          caption: 'Teen Patti Spin Deposit System',
        },
        {
          loc: `${baseUrl}/Teen-Patti-Spin-Referral-Bonus.webp`,
          title: 'Teen Patti Spin Referral Bonus',
          caption: 'Teen Patti Spin Referral Program',
        },
        {
          loc: `${baseUrl}/Teen-Patti-Spin-Dragon-Tiger.webp`,
          title: 'Teen Patti Spin Dragon Tiger',
          caption: 'Teen Patti Spin Dragon vs Tiger Game',
        },
      ],
    },
    {
      loc: `${baseUrl}/download-teen-patti-spin`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin.webp`,
          title: 'Teen Patti Spin Download Page',
          caption: 'Download Teen Patti Spin APK for Android',
        },
      ],
    },
    {
      loc: `${baseUrl}/deposit-money-in-teen-patti-spin`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin-Deposit.webp`,
          title: 'Teen Patti Spin Deposit Guide',
          caption: 'How to Deposit Money in Teen Patti Spin',
        },
      ],
    },
    {
      loc: `${baseUrl}/withdraw-money-from-teen-patti-spin`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin.webp`,
          title: 'Teen Patti Spin Withdrawal Guide',
          caption: 'How to Withdraw Money from Teen Patti Spin',
        },
      ],
    },
    {
      loc: `${baseUrl}/teen-patti-spin-for-pc`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin.webp`,
          title: 'Teen Patti Spin for PC',
          caption: 'Download Teen Patti Spin for PC with Emulator',
        },
      ],
    },
    {
      loc: `${baseUrl}/teen-patti-spin-for-ios`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin.webp`,
          title: 'Teen Patti Spin for iOS',
          caption: 'Download Teen Patti Spin for iPhone and iPad',
        },
      ],
    },
    {
      loc: `${baseUrl}/about-us`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin.webp`,
          title: 'Teen Patti Spin About Us',
          caption: 'About Teen Patti Spin Gaming Platform',
        },
      ],
    },
    {
      loc: `${baseUrl}/blog`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin.webp`,
          title: 'Teen Patti Spin Blog',
          caption: 'Teen Patti Spin Gaming News and Guides',
        },
      ],
    },
    {
      loc: `${baseUrl}/blog/is-teen-patti-spin-real-or-fake`,
      images: [
        {
          loc: `${baseUrl}/Teen-Patti-Spin.webp`,
          title: 'Is Teen Patti Spin Real or Fake',
          caption: 'Complete Guide: Teen Patti Spin Legitimacy Review',
        },
      ],
    },
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(page => `  <url>
    <loc>${page.loc}</loc>
${page.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

