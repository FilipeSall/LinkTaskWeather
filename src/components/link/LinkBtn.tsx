"use client"

import React from 'react';
import Link from 'next/link';
import { LinkBtnPropsTypes } from '../../propsTypes';
import styles from './LinkBtn.module.css';
import { usePathname } from 'next/navigation'

function LinkBtn({ text, href, icon, className, ...rest }: LinkBtnPropsTypes) {

  const pathname = usePathname();

  const isCurrentPath = pathname === href;

  return (
    <Link href={href} className={`${styles[className]} ${isCurrentPath === true ? [styles.active] : ''}`}>
      {icon}
      <div className={styles.textContainer}>
        {text}
      </div>
    </Link>
  )
}

export default LinkBtn