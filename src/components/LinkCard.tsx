import { Clipboard } from "phosphor-react";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "usehooks-ts";
import { ISusLink } from "./CreateLinkForm";

type Props = {
  data: ISusLink;
};

export const LinkCard = ({ data }: Props) => {
  const [value, copy] = useCopyToClipboard();

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
    <div className='flex items-center justify-between p-4 border border-zinc-400 rounded-md'>
      <div className='flex flex-col gap-1'>
        <time dateTime={createdAt.toString()} className='text-xs text-zinc-600'>{ createAtFormatted }</time>
        <span className='text-sm'>{ data.original_url }</span>
        <span className='font-semibold'>{ data.sus_url }</span>
      </div>

      <button
        onClick={handleCopyToClipboard}
        className='h-fit p-2 border border-zinc-400 rounded-md transition-colors hover:bg-zinc-300'
      >
        <Clipboard size={24} />
      </button>
    </div>
  )
};