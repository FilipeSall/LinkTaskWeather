import React from 'react';
import styles from './Header.module.css';
import { Headerbuttons } from './buttonList';
import LinkBtn from '../link/LinkBtn';
import Clock from '../clock/Clock';

function Header() {
  
  return (
    <header className={styles.container}>
      <div>
        <Clock />
      </div>
      <div className={styles.btnWrapper}>
        {Headerbuttons.map((btn,i) => (
          <LinkBtn 
          key={i}
          className={btn.className}
          text={btn.text}
          icon={btn.icon}
          href={btn.href}
          />
        ))}
      </div>
    </header>
  )
}

export default Header