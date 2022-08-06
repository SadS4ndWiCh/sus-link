import { supabase } from "src/lib/supabaseConfig";
import { ISusLink } from "@components/CreateLinkForm";

export const addNewLink = async (data: ISusLink, isDebug: boolean = false) => {
  if (isDebug) {
    return wait<ISusLink>(2000, data);
  }

  return wait<ISusLink>(2000, data);
};

function wait<T>(ms: number, value: T): Promise<T> {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}