import { useReadLocalStorage } from "usehooks-ts";
import { ISusLink, GENERATED_LINKS_KEY } from "./CreateLinkForm";
import { LinkCard } from "./LinkCard";

export const LinksList = () => {
  const generatedLinks = useReadLocalStorage<ISusLink[]>(GENERATED_LINKS_KEY);
  const sortedGeneratedLinks = generatedLinks?.sort((a, b) => a.created_at < b.created_at ? 0 : -1)

  return (
    <div>
      <h2>Meus links gerados:</h2>

      { !generatedLinks && <span className='text-sm'>Não há links gerados no momento.</span> }
      { generatedLinks && (
        <div className='flex flex-col gap-2 mt-2'>
          { sortedGeneratedLinks!.map((susLink, i) => (
            <LinkCard key={i} data={susLink} />
          )) }
        </div>
      ) }
    </div>
  )
};