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
  },
  {
    title:'Voice IA',
    href:'https://elevenlabs.io/',
    text:'Uma I.A que gera voz baseado em prompts.',
    img:'voiceia'
  },
  {
    title:'Capcut',
    href:'https://www.capcut.com/',
    text:'Uma ferramenta para criar e editar vídeos.',
    img:'capcut'
  },
  {
    title:'Runwayml',
    href:'https://app.runwayml.com/',
    text:'Uma I.A que anima imagens ou gera imagens animadas.',
    img:'runwayml'
  },
  {
    title:'Crayon',
    href:'https://www.craiyon.com/',
    text:'Uma I.A que gera imagens atraves de prompts 100% gratuida',
    img:'crayon'
  },
  {
    title:'Leonardo.AI',
    href:'https://leonardo.ai/',
    text:'Uma I.A que gera imagens atraves de prompts complexas, porém, limitado.',
    img:'leonardoai'
  },
];
  return (
    <main>
      <Shortcut shortcuts={shortcuts} />
    </main>
  )
}

export default index