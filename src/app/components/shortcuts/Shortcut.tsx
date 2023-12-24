"use client";
import React, { useState } from 'react';
import styles from './ShortCut.module.css';

interface FilterButton {
  type?: string;
  name: string;
  img: string;
}

interface ShortcutObject {
  title: string;
  text: string;
  img: string;
  href: string;
  type?: string;
}

interface Props {
  shortcuts: ShortcutObject[];
  btns?: FilterButton[];
}

function Shortcut({ shortcuts, btns }: Props) {
  const [hoverStates, setHoverStates] = useState<boolean[]>(Array(shortcuts.length).fill(false));
  const [selectedType, setSelectedType] = useState<string | null | undefined>(null);

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
      <div className={styles.filter__buttons}>
        {btns && (
          <button
            className={selectedType === null ? styles.active : ''}
            onClick={() => setSelectedType(null)}
          >
            Todos
          </button>
        )}
        {btns &&
          btns.map((btn, i) => (
            <button
              key={i}
              className={selectedType === btn.type ? styles.active : ''}
              onClick={() => setSelectedType(btn.type)}
            >
              {btn.name}
            </button>
          ))}
      </div>
      <div className={styles.links__nav_container}>
        {shortcuts
          .map((shortcut, i) => ({
            ...shortcut,
            type: shortcut.type || ''
          }))
          .filter(shortcut => selectedType === null || shortcut.type === selectedType)
          .map((shortcut, i) => (
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
      </div>
    </nav>
  );
}

export default Shortcut;
