import { CreateLink } from '@components/CreateLink';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import styles from '@styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <CreateLink />
      </main>

      <Footer />
    </div>
  )
}
