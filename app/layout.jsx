import "./globals.css";
import { Poppins } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})


export const metadata = {
  title: "K.P. Interiors - Transforming Homes into Dream Spaces",
  description: "K.P. Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.",
  openGraph: {
    title: 'K.P. Interiors - Transforming Homes into Dream Spaces',
    description: 'K.P. Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.',
    siteName: 'K.P. Interiors',
    images: [
      // {
      //   url: 'https://nextjs.org/og.png',
      //   width: 800,
      //   height: 600,
      // },
      // {
      //   url: 'https://nextjs.org/og-alt.png',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
      // Add this asap
    ],
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.kpinteriors.com'
  },
  keywords: [
    'interior website', 'kp interiors', 'kp interior designer',
    'kp interior designer website', 'home interiors', 'kp home interiors'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  `}>
        <main className="max-w-[1600px] mx-auto">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}