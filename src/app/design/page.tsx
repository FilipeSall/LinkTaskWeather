import React from 'react';
import Shortcut from '../components/shortcuts/Shortcut';

function index() {

  const shortcuts = [
    {
      title: 'Coolors',
      href: 'https://coolors.co/',
      text: 'Cria paletas de cores atraentes',
      img: 'coolors',
      type:'creative',
    },
    {
      title: 'Repositório SVG',
      href: 'https://www.svgrepo.com/',
      text: 'Vários icones SVG',
      img: 'svgrepo',
      type:'image'
    },
    {
      title: 'RemoveBg',
      href: 'https://www.remove.bg/pt-br/',
      text: 'Deixa a imagem transparente',
      img: 'removebg',
      type:'image'
    },
    {
      title: 'Squoosh',
      href: 'https://squoosh.app/',
      text: 'Altera peso e formato de uma imagem.',
      img: 'squoosh',
      type:'image',
    },
    {
      title: 'Lexica',
      href: 'https://lexica.art/?q=photos+aside',
      text: 'Uma I.A. que gera imagens através de prompts',
      img: 'lexica',
      type:'ia',
    },
    {
      title: 'Looka',
      href: 'https://looka.com/',
      text: 'Uma I.A que cria logos.',
      img: 'looka',
      type:'ia',
    },
    {
      title: 'Voice IA',
      href: 'https://elevenlabs.io/',
      text: 'Uma I.A que gera voz baseado em prompts.',
      img: 'voiceia',
      type:'ia',
    },
    {
      title: 'Capcut',
      href: 'https://www.capcut.com/',
      text: 'Uma ferramenta para criar e editar vídeos.',
      img: 'capcut',
      type:'image',
    },
    {
      title: 'Runwayml',
      href: 'https://app.runwayml.com/',
      text: 'Uma I.A que anima imagens ou gera imagens animadas.',
      img: 'runwayml',
      type:'ia',
    },
    {
      title: 'Crayon',
      href: 'https://www.craiyon.com/',
      text: 'Uma I.A que gera imagens atraves de prompts 100% gratuida',
      img: 'crayon',
      type:'ia',
    },
    {
      title: 'Leonardo.AI',
      href: 'https://leonardo.ai/',
      text: 'Uma I.A que gera imagens atraves de prompts complexas, porém, limitada com créditos.',
      img: 'leonardoai',
      type:'ia',
    },
  ];

  const btns = [
    {
      name:'I.As sites',
      type:'ia',
      img:''
    },
    {
      name:'Manipulação de imagens',
      type:'image',
      img:''
    },
    {
      name:'Assistente criativo',
      type:'creative',
      img:''
    }
  ]


  return (
    <main>
      <Shortcut shortcuts={shortcuts} btns={btns} />
    </main>
  )
}

export default index