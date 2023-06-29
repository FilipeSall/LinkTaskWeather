import React from 'react';
import Shortcut from '../components/shortcuts/Shortcut';

function index() {

  const shortcuts = [
    {
        title: 'Robo3t',
        href: 'https://robomongo.org/',
        text: 'Cria uma interface para o MongoDb',
        img:'robo3t'
    },
]


  return (
    <main>
      <Shortcut shortcuts={shortcuts} />
    </main>
  )
}

export default index