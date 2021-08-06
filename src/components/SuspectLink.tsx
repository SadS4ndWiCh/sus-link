import { useState } from 'react';

import Image from 'next/image';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import CopySVG from '../../public/assets/copy.svg';

import styles from '@styles/components/SuspectLink.module.scss';

interface SuspectLinkProps {
  suspectLink: string;
}

export function SuspectLink({
    suspectLink,
  }: SuspectLinkProps) {
  const [copied, setCopied] = useState(false);

  function wasCopied() {
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={styles.suspectLinkContainer}>
      <div>
        <CopyToClipboard
          text={suspectLink}
          onCopy={wasCopied}
        >
          <button
            title="Copiar"
          >
            <Image
              src={CopySVG}
              alt="Copiar link suspeito"
            />
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </CopyToClipboard>
        <small>Clique no botão para copiar o novo link gerado!</small>
      </div>
    </div>
  )
}