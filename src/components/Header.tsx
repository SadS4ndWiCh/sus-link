import Image from 'next/image';

import SkullImage from '../../public/assets/skull.png';

import styles from '@styles/components/Header.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Image src={SkullImage} alt="Crânio de perigo" />

      <div>
        <h1>Gerador de <span>Links Suspeitos</span></h1>
        <p>Não são gerados links curtos, apenas um link de aparência suspeita</p>
      </div>
      
      <Image src={SkullImage} alt="Crânio de perigo" />
    </header>
  )
}