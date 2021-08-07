import { useRef, useState } from 'react';

import { SuspectLink } from './SuspectLink';

import { generateSuspectUrl, convertUrl } from 'src/utils/urls';
import { dbAddNew } from 'src/utils/database';

import styles from '@styles/components/CreateLink.module.scss';

interface UrlGenerated {
  originalUrl: string;
  suspectUrl: string;
}

export function CreateLink() {
  const [urlGenerated, setUrlGenerated] = useState<UrlGenerated | null>(null);

  const urlInputRef = useRef<any>(null);

  function handleSubmit(event: any) {
    event.preventDefault();
    
    const urlInputEl = urlInputRef.current;

    if(!urlInputEl.value) return;

    const originalUrl = urlInputEl.value;
    const suspectUrl = generateSuspectUrl();
    
    dbAddNew(
      { originalUrl, suspectUrl },
      Boolean(process.env.NEXT_PUBLIC_IS_DEBUG),
      (data, error) => {      
        if(error) return;
        
        urlInputEl.value = '';
        
        setUrlGenerated({
          originalUrl,
          suspectUrl: convertUrl(suspectUrl),
        });

      }
    );
  }

  return (
    <div className={styles.createLinkContainer}>
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="url"
          className="sr-only"
        >Escreva uma URL https://</label>
        
        <input
          ref={urlInputRef}
          type="url"
          name="url"
          id="url"
          placeholder="https://example.com"
          autoComplete="off"
        />

        <div>
          <button
            type="submit"
          >Gerar</button>
        </div>
      </form>

      { urlGenerated && (
        <SuspectLink
          suspectLink={urlGenerated?.suspectUrl}
        />
      ) }
    </div>
  )
}