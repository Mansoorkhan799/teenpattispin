import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://teenpattispingame.com.pk';

  // Paths must match files in /public
  const images = [
    {
      loc: `${baseUrl}/`,
      images: [
        {
          loc: `${baseUrl}/teen-patti-spin.webp`,
          title: 'Teen Patti Spin',
          caption: 'Teen Patti Spin – Pakistan card gaming platform',
        },
        {
          loc: `${baseUrl}/3-patti-spin-game.webp`,
          title: 'Teen Patti Spin Game',
          caption: 'Teen Patti Spin gaming interface',
        },
        {
          loc: `${baseUrl}/3-patti-spin-game-interface.webp`,
          title: 'Teen Patti Spin Games',
          caption: 'Teen Patti Spin games collection',
        },
        {
          loc: `${baseUrl}/3-patti-spin-bonuses.webp`,
          title: 'Teen Patti Spin Bonuses',
          caption: 'Teen Patti Spin bonus system',
        },
        {
          loc: `${baseUrl}/3-patti-spin-add-money.webp`,
          title: 'Teen Patti Spin Add Money',
          caption: 'Teen Patti Spin deposit flow',
        },
        {
          loc: `${baseUrl}/3-patti-spin-refer-and-earn.webp`,
          title: 'Teen Patti Spin Referral',
          caption: 'Teen Patti Spin refer and earn',
        },
        {
          loc: `${baseUrl}/3-patti-spin-spin-wheel.webp`,
          title: 'Teen Patti Spin Mini Games',
          caption: 'Teen Patti Spin wheel and mini games',
        },
      ],
    },
    {
      loc: `${baseUrl}/download-teen-patti-spin`,
      images: [
        {
          loc: `${baseUrl}/teen-patti-spin.webp`,
          title: 'Teen Patti Spin Download Page',
          caption: 'Download Teen Patti Spin APK for Android',
        },
      ],
    },
    {
      loc: `${baseUrl}/deposit-money-in-teen-patti-spin`,
      images: [
        {
          loc: `${baseUrl}/3-patti-spin-add-money.webp`,
          title: 'Teen Patti Spin Deposit Guide',
          caption: 'How to Deposit Money in Teen Patti Spin',
        },
      ],
    },
    {
      loc: `${baseUrl}/withdraw-money-from-teen-patti-spin`,
      images: [
        {
          loc: `${baseUrl}/teen-patti-spin.webp`,
          title: 'Teen Patti Spin Withdrawal Guide',
          caption: 'How to Withdraw Money from Teen Patti Spin',
        },
      ],
    },
    {
      loc: `${baseUrl}/teen-patti-spin-for-pc`,
      images: [
        {
          loc: `${baseUrl}/teen-patti-spin.webp`,
          title: 'Teen Patti Spin for PC',
          caption: 'Download Teen Patti Spin for PC with Emulator',
        },
      ],
    },
    {
      loc: `${baseUrl}/about-us`,
      images: [
        {
          loc: `${baseUrl}/teen-patti-spin.webp`,
          title: 'Teen Patti Spin About Us',
          caption: 'About Teen Patti Spin Gaming Platform',
        },
      ],
    },
    {
      loc: `${baseUrl}/blog`,
      images: [
        {
          loc: `${baseUrl}/teen-patti-spin.webp`,
          title: 'Teen Patti Spin Blog',
          caption: 'Teen Patti Spin Gaming News and Guides',
        },
      ],
    },
    {
      loc: `${baseUrl}/blog/is-teen-patti-spin-real-or-fake`,
      images: [
        {
          loc: `${baseUrl}/teen-patti-spin.webp`,
          title: 'Is Teen Patti Spin Real or Fake',
          caption: 'Complete Guide: Teen Patti Spin Legitimacy Review',
        },
      ],
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
${page.images
  .map(
    (img) => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
