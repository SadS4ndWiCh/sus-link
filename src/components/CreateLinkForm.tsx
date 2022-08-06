import { FormEvent } from "react";
import { useBoolean, useLocalStorage } from "usehooks-ts";
import ShortUniqueId from "short-unique-id";

import { generateSusLink } from "@utils/urls";
import { addNewLink } from "@utils/database";
import { SpinnerGap } from "phosphor-react";

interface CreateLinkFormEvent extends FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    url: HTMLInputElement,
  }
};

export interface ISusLink {
  id: string;
  original_url: string;
  sus_url: string;
  created_at: number;
};

export const GENERATED_LINKS_KEY = '@suslink:generated_links';

export const CreateLinkForm = () => {
  const [generatedLinks, setGeneratedLinks] = useLocalStorage<ISusLink[]>(GENERATED_LINKS_KEY, []);
  const { value: isLoading, setTrue: setLoadingStart, setFalse: setLoadingEnd } = useBoolean(false);

  const handleCreateLink = async (e: CreateLinkFormEvent) => {
    e.preventDefault();
    setLoadingStart();

    const original_url = e.target.url.value;
    const sus_url = `https://suslink.vercel.app/${generateSusLink()}`;
    const uid = new ShortUniqueId({ length: 10 });
    const newLinkData = {
      id: uid(),
      original_url,
      sus_url,
      created_at: Date.now(),
    };

    const result = await addNewLink(newLinkData, true);

    setGeneratedLinks([
      ...generatedLinks,
      newLinkData
    ])

    e.target.url.value = '';

    setLoadingEnd();
  };

  return (
    <form onSubmit={handleCreateLink}>
      <div className='flex flex-col justify-between gap-2 py-6 sm:flex-row sm:items-end'>
        <div className='flex-1 flex flex-col'>
          <label htmlFor='url'>url</label>
          <input
            id='url'
            type='url'
            name='url'
            placeholder='https://example.com'
            autoComplete='off'
            className='rounded-md border-zinc-400 bg-transparent focus:ring-zinc-900 focus:border-zinc-900'
            required
          />
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='flex items-center justify-center gap-2 py-3 px-5 h-full rounded-md text-sm text-zinc-100 font-bold bg-red-500 transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70'
        >
          { isLoading && <SpinnerGap size={20} className='animate-spin' /> }
          Gerar Link
        </button>
      </div>
    </form>
  )
};