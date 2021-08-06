import { supabase } from "src/lib/supabaseConfig";

interface NewUrl {
  originalUrl: string;
  suspectUrl: string;
}

export function dbAddNew(
  { originalUrl, suspectUrl }: NewUrl,
  isDebug?: boolean,
  callback?: (data: any) => void, 
) {
  if(isDebug) {
    callback?.([{
      id: 55,
      original_url: originalUrl,
      suspect_url: suspectUrl,
    }]);

    return;
  }

  supabase
      .from('urls')
      .insert({
        original_url: originalUrl,
        suspect_url: suspectUrl,
      })
      .then(({ data, error }) => {
        if(error) {
          console.error(error);
          return;
        }
        
        callback?.(data);
      })
}