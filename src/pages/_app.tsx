import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
      <Analytics />
      <Head>
        <title>
          Yassin Eldeeb - Senior Software Engineer & Consultant | Empowering
          Developers & Innovating Products
        </title>
        <meta
          name='description'
          content='Yassin Eldeeb: Senior Software Engineer and Consultant specializing in developer tooling and innovative product development. Offering expert consulting services for businesses seeking to leverage technology for growth and success.'
        ></meta>
        <meta
          name='keywords'
          content='Yassin Eldeeb, Software Engineer, Consultant, Developer Tools, DevTools, OSS, Open Source, JavaScript, JavaScript, Rust, React, Python, GraphQL, Innovation, Product Development, Consulting Services'
        ></meta>
        <meta
          property='og:title'
          content='Yassin Eldeeb - Senior Software Engineer & Consultant'
        />
        <meta
          property='og:description'
          content='Empowering developers and envisioning products for innovative impact. Join Yassin Eldeeb in exploring developer tooling and customer-focused product development.'
        />
        <meta property='og:url' content='https://yassineldeeb.codes' />
        <meta property='og:image' content='https://yassineldeeb.codes/og.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image'
          content='https://yassineldeeb.codes/og.jpg'
        />

        <meta
          name='twitter:title'
          content='Yassin Eldeeb - Senior Software Engineer & Consultant'
        ></meta>
        <meta
          name='twitter:description'
          content='Join Yassin Eldeeb in his mission to empower developers and innovate in product development. Discover insights into open-source contributions and software engineering excellence.'
        ></meta>

        <meta name='author' content='Yassin Eldeeb'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
      </Head>
    </main>
  )
}
