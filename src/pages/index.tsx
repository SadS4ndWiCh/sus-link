import { useIsClient } from 'usehooks-ts';

import { Seo } from '@components/Seo';
import { Header } from '@components/Header';
import { CreateLinkForm } from '@components/CreateLinkForm';
import { LinksList } from '@components/LinksList';
import { Footer } from '@components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const isClient = useIsClient();

  if (!isClient) return

  return (
    <>
      <Seo />

      <div className='container flex flex-col h-screen'>
        <Header />

        <h1>
          Crie links de aparência suspeita para dar um sustinho em seu amiguinho ou apenas para ter links diferênciados
        </h1>

        <main className='flex-1 mb-6'>
          <CreateLinkForm />

          <LinksList />
        </main>

        <Footer />
        <ToastContainer />
      </div>
    </>
  )
}