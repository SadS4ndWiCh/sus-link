import Head from 'next/head';

import { CreateLink } from '@components/CreateLink';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import styles from '@styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>SusLink</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="SusLink" />
        <meta name="description" content="Não são gerados links curtos, apenas um link de aparência suspeita" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://suslink.vercel.app/" />
        <meta property="og:title" content="SusLink" />
        <meta property="og:description" content="Não são gerados links curtos, apenas um link de aparência suspeita" />
        <meta property="og:image" content="https://suslink.vercel.app/suslink_image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://suslink.vercel.app/" />
        <meta property="twitter:title" content="SusLink" />
        <meta property="twitter:description" content="Não são gerados links curtos, apenas um link de aparência suspeita" />
        <meta property="twitter:image" content="https://suslink.vercel.app/suslink_image.png" />
      </Head>

      <div className={styles.container}>
        <Header />

        <main>
          <CreateLink />
        </main>

        <Footer />
      </div>
    </>
  )
}
