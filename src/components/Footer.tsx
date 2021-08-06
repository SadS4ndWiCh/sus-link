import styles from '@styles/components/Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>
        O objetivo desse site é apenas por entreterimento. Não nos responsabilizamos caso alguém
        vincule a um endereço malicioso, logo vai por sua conta e risco.
      </p>
    </footer>
  )
}