"use client";
import React, { useState } from 'react';
import styles from './ShortCut.module.css';
import { ShortcutTypes } from '../../propsTypes';

interface Props {
  shortcuts: ShortcutTypes[];
}

function Shortcut({ shortcuts }: Props) {
  const [hoverStates, setHoverStates] = useState<boolean[]>(Array(shortcuts.length).fill(false));

  function handleHover(index: number) {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  }

  function handleOut(index: number) {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  }

  return (
    <nav className={styles.nav__container}>
      <div className={styles.links__nav_container}>
        {shortcuts && shortcuts.length > 0 && (
          <>
            {shortcuts.map((shortcut, i) => (
              <div
                className={`${styles.shortcut__img_container} ${styles[shortcut.img]}`}
                key={i}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => handleOut(i)}
              >
                <a href={shortcut.href} target="_blank" className={`${styles.shortcut__container}`}>
                  <h1 className={hoverStates[i] ? styles.invisible : styles.shortcut_title}>{shortcut.title}</h1>
                  <p className={hoverStates[i] ? styles.shortcut_textTitle : styles.invisible}>{shortcut.title}</p>
                  <p className={hoverStates[i] ? styles.shortcut_text : styles.invisible}>{shortcut.text}</p>
                </a>
              </div>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Shortcut;
