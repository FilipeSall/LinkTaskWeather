import React from 'react';
import Shortcut from '../components/shortcuts/Shortcut';

function index() {

  const shortcuts = [
    {
        title: 'Formik',
        href: 'https://formik.org/docs/overview',
        text: 'Uma pequena biblioteca que te ajuda na criação de formulários usando React.',
        img:'formik'
    },
    {
        title: 'Ícones React',
        href: 'https://react-icons.github.io/react-icons',
        text: 'Inclua ícones populares em seus projetos React facilmente com react-icons.',
        img:'reacticons'
    },
    {
        title: 'Toastify',
        href: 'https://fkhadra.github.io/react-toastify/introduction',
        text: 'Uma biblioteca popular para exibir notificações ou mensagens temporárias.',
        img:'toastify'
    },
    {
        title: 'Router',
        href: 'https://reactrouter.com/en/main',
        text: 'Uma biblioteca popular para gerenciamento de rotas em aplicações web React',
        img:'router'
    },
    {
      title:'Real favicon',
      href:'https://realfavicongenerator.net/',
      text:'Crie seus ícones plataforma por plataforma e faça com que eles tenham uma ótima aparência em qualquer lugar.',
      img:'realfavicon'
    },
    {
      title:'Framer motion',
      href:'https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=TW-WW-All-GS-UA-Traffic-20190326-Brand.Bmm_&gad=1&gclid=Cj0KCQjwuNemBhCBARIsADp74QTQe_J90kgkCeGiAoEcbMBN8rx3PZImjcpqCF7BZrcZz2oDdBJoXgQaAtg0EALw_wcB',
      text:'Uma dependência React para criar animações.',
      img:'framermotion',
    }
]

  return (
    <main>
        <Shortcut shortcuts={shortcuts} /> 
    </main>
  )
}

export default index