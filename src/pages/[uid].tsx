import { GetServerSideProps } from 'next';

import { supabase } from 'src/lib/supabaseConfig';

type Params = {
  uid: string,
}

export default function redirectOriginalUrl() {
  return (
    <h1>O que está fazendo aqui?</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { uid } = params as Params;
  
  const { data, error } = await supabase
    .from('urls')
    .select('original_url')
    .eq('suspect_url', uid)

  if(error || (data && !(data.length > 0))) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    redirect: {
      destination: data![0].original_url,
      permanent: true,
    }
  }
}