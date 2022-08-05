import Image from 'next/image';

import SkullImage from '@public/assets/skull1.png';

export const Header = () => {
  return (
    <header className='pt-6 pb-2'>
      <Image src={SkullImage} alt='imagem de caveira' />

      <button>

      </button>
    </header>
  )
};