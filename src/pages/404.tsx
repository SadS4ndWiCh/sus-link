import Head from 'next/head';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div>
      <Head>
        <title>Suslink - Página não encontrada</title>
      </Head>

      <div>
        <div>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
        <h1>Página não encontrada</h1>
      </div>
      
      <div>
        <p>
          Aproveitando que está aqui, deseja criar algum link suspeito e trolar amiguinhos? 
          Vá para página inicial e crie um link :)
        </p>
        <Link href='/'><a>Quero criar</a></Link>
      </div>
    </div>
  )
}