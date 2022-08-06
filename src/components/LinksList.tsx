import { useLocalStorage } from "usehooks-ts";
import { ISusLink, GENERATED_LINKS_KEY } from "./CreateLinkForm";
import { LinkCard } from "./LinkCard";

export const LinksList = () => {
  const [generatedLinks, setGeneratedLinks] = useLocalStorage<ISusLink[]>(GENERATED_LINKS_KEY, []);
  const sortedGeneratedLinks = generatedLinks?.sort((a, b) => a.created_at < b.created_at ? 0 : -1)

  const handleRemoveFromMyLinks = (linkId: string) => {
    setGeneratedLinks(old => old.filter(link => link.id !== linkId));
  };

  return (
    <div>
      <h2>Meus links gerados:</h2>

      { !generatedLinks || !generatedLinks.length && <span className='text-sm'>Não há links gerados no momento.</span> }
      { generatedLinks && (
        <div className='flex flex-col gap-2 mt-2'>
          { sortedGeneratedLinks!.map((susLink, i) => (
            <LinkCard key={i} data={susLink} onRemoveLink={handleRemoveFromMyLinks} />
          )) }
        </div>
      ) }
    </div>
  )
};