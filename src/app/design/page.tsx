import React from 'react';
import Shortcut from '../components/shortcuts/Shortcut';

function index() {

  const shortcuts = [
    {
        title: 'Coolors',
        href: 'https://coolors.co/',
        text: 'Cria paletas de cores atraentes',
        img:'coolors'
    },
    {
        title:'Repositório SVG',
        href:'https://www.svgrepo.com/',
        text:'Vários icones SVG',
        img:'svgrepo'
    },
    {
        title:'RemoveBg',
        href:'https://www.remove.bg/pt-br/',
        text:'Deixa a imagem transparente',
        img:'removebg'
    },
    {
        title:'Squoosh',
        href:'https://squoosh.app/',
        text:'Altera peso e formato de uma imagem.',
        img:'squoosh',
    },
    {
      title:'Lexica',
      href:'https://lexica.art/?q=photos+aside',
      text:'Uma I.A. que gera imagens através de prompts',
      img:'lexica',
  },
  {
    title:'Looka',
    href:'https://looka.com/',
    text:'Uma I.A que cria logos.',
    img:'looka',
  }
]

  return (
    <main>
      <Shortcut shortcuts={shortcuts} />
    </main>
  )
}

export default index