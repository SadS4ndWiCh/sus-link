import { supabase } from "src/lib/supabaseConfig";

interface NewUrl {
  originalUrl: string;
  suspectUrl: string;
}

export function dbAddNew(
  { originalUrl, suspectUrl }: NewUrl,
  isDebug?: number,
  callback?: (data: any, error: any) => void, 
) {
  if(isDebug) {
    setInterval(() => {
      callback?.([{
        id: 55,
        original_url: originalUrl,
        suspect_url: suspectUrl,
      }], null);
    }, 1500);

    return;
  }

  supabase
      .from('urls')
      .insert({
        original_url: originalUrl,
        suspect_url: suspectUrl,
      })
      .then(({ data, error }) => callback?.(data, error))
}