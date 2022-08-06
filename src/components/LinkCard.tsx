import { Clipboard, Trash } from "phosphor-react";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "usehooks-ts";
import { ISusLink } from "./CreateLinkForm";

type Props = {
  data: ISusLink;
  onRemoveLink: (linkId: string) => void;
};

export const LinkCard = ({ data, onRemoveLink }: Props) => {
  const [_, copy] = useCopyToClipboard();

  const createdAt = new Date(data.created_at);
  const createAtFormatted = createdAt.toLocaleDateString();

  const handleCopyToClipboard = () => {
    copy(data.sus_url);
    toast.success('Link foi copiado!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className='flex flex-col justify-between gap-2 p-4 border border-zinc-400 rounded-md sm:flex-row sm:items-center'>
      <div className='flex flex-col gap-1 overflow-clip'>
        <time dateTime={createdAt.toString()} className='text-xs text-zinc-600'>{ createAtFormatted }</time>
        <span className='text-sm truncate'>{ data.original_url }</span>
        <span className='font-semibold truncate'>{ data.sus_url }</span>
      </div>

      <div className='flex w-full gap-1 sm:flex-col sm:items-center sm:w-auto'>
        <button
          onClick={handleCopyToClipboard}
          title='Copiar link'
          className='flex-1 flex justify-center p-2 border border-zinc-400 rounded-md transition-colors hover:bg-zinc-300 sm:h-fit'
        >
          <Clipboard size={24} />
        </button>
        <button
          onClick={() => onRemoveLink(data.id)}
          title='Remover dos meus links'
          className='flex-1 flex justify-center p-2 border border-zinc-400 rounded-md text-zinc-100 bg-red-600 transition-colors hover:bg-red-500 sm:h-fit'
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
};