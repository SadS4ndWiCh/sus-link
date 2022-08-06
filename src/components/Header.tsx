import Image from 'next/image';

import SkullImage from '@public/assets/skull.png';

export const Header = () => {
  return (
    <header className='pt-6 pb-2'>
      <Image
        src={SkullImage}
        width={40}
        height={40}
        alt='imagem de caveira'
      />

      <button>

      </button>
    </header>
  )
};