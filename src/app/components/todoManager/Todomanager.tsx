"use client";
import React, { useState, ChangeEvent } from 'react';
import styles from './Todomanager.module.css';
import  UseStore  from '../../Store';

function Todomanager() {

    const { addTodo, value, setValue, category, setCategory, isCompleted } = UseStore();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    function handleClick() {
        if (value.length === 0) {
            return;
        } else {
            const newTodo = {
                text: value,
                icon: category,
                isCompleted:isCompleted,
            };
            addTodo(newTodo);
            setValue('');
        }
    }

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
      };
      
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Gerenciador de tarefas</h1>
            </header>
            <main className={styles.mainContainer}>
                <input placeholder='O que pretende fazer hoje?' value={value} onChange={handleChange} className={styles.input} />
                <select className={styles.select} value={category} onChange={handleCategoryChange}>
                    <option value='Trabalho'>Trabalho</option>
                    <option value='Estudo'>Estudo</option>
                    <option value='Lazer'>Lazer</option>
                </select>
                <button onClick={handleClick} className={styles.btn}>Enviar</button>
            </main>
        </div>
    )
}

export default Todomanager