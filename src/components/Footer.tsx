export const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 py-4 border-t text-sm border-zinc-400'>
      <p>
        O objetivo desse site é apenas entreterimento, os links gerados não contém nada de malicioso. Mas não nos 
        responsabilizamos se alguém vincular a link realmente malicioso.
      </p>

      <div className='flex items-center justify-between text-zinc-700'>
        <span>© 2021 - 2022 </span>
        <span>
          Desenvolvido por {' '}
          <a className='text-zinc-900 underline underline-offset-2 hover:text-zinc-700' href="https://caiovinicius.vercel.app">Caio Vinícius</a>
        </span>
      </div>
    </footer>
  )
};