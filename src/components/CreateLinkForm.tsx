import { FormEvent } from "react";
import { useLocalStorage } from "usehooks-ts";

import { generateSusLink } from "@utils/urls";

interface CreateLinkFormEvent extends FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    url: HTMLInputElement,
  }
};

export interface ISusLink {
  original_url: string;
  sus_url: string;
  created_at: number;
};

export const GENERATED_LINKS_KEY = '@suslink:generated_links';

export const CreateLinkForm = () => {
  const [generatedLinks, setGeneratedLinks] = useLocalStorage<ISusLink[]>(GENERATED_LINKS_KEY, []);

  const handleCreateLink = (e: CreateLinkFormEvent) => {
    e.preventDefault();

    const original_url = e.target.url.value;
    const sus_url = `https://suslink.vercel.app/${generateSusLink()}`;

    setGeneratedLinks([
      ...generatedLinks,
      {
        original_url,
        sus_url,
        created_at: Date.now(),
      }
    ])

    e.target.url.value = '';
  };

  return (
    <form onSubmit={handleCreateLink} className='flex items-end justify-between gap-2 py-6'>
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
        className='py-3 px-5 h-full rounded-md text-sm text-zinc-100 font-bold bg-red-500 transition-colors hover:bg-red-600'
      >
        Gerar Link
      </button>
    </form>
  )
};