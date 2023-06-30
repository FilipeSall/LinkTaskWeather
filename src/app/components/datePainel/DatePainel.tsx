"use client";

import React, { useEffect, useState } from 'react';
import styles from './Datepainel.module.css';
import { AiOutlineCalendar, AiOutlineCheck } from 'react-icons/ai';
import specialDates from './specialDates';
import UseStore from '../../Store'
import { FcTodoList } from "react-icons/fc";
import { BsFillTrashFill } from "react-icons/bs";
import { FaBriefcase, FaBook } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { ImCheckboxUnchecked } from "react-icons/im";


function DatePainel() {

    const [day, setDay] = useState(new Date().getDay());
    const [date, setDate] = useState(new Date().toLocaleDateString('pt-BR'));
    const monthNum = new Date().getMonth() + 1;
    const dayNum = new Date().getDate();
    const { todos, removeTodo, isCompleted, toggleCompleted } = UseStore();

    const daysOfWeek = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setDay(new Date().getDay())
            setDate(new Date().toLocaleDateString('pt-BR').replace(/\//g, '.'))
        }, 100)

        return () => {
            clearInterval(interval);
        }
    }, [])

    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    function formatDate(date: string) {
        const parts = date.split('.');
        const elements = parts.map((part, index) => (
            <React.Fragment key={index}>
                {index === 1 ? monthNames[parseInt(part) - 1] : part}
                {index !== parts.length - 1 && <span className={styles.dot}>.</span>}
            </React.Fragment>
        ));
        return elements;
    }

    return (
        <div className={styles.container}>
            <div className={styles.dateWrapper}>
                <p className={styles.date}>{formatDate(date)}</p>
                <p className={styles.day}>{daysOfWeek[day]}</p>
                <hr className={styles.dateSeparator} />
                <div className={styles.specDateContainer}>
                    {specialDates.some((specDay) => specDay.day === dayNum && specDay.month === monthNum) ? (
                        specialDates.map((specDay, i) => (
                            <React.Fragment key={i}>
                                {specDay.day === dayNum && specDay.month === monthNum &&
                                    <>
                                        <p className={styles.icon}>{specDay.icon}</p>
                                        <h1>{specDay.name}</h1>
                                    </>
                                }
                            </React.Fragment>
                        ))
                    ) : (
                        <>
                            <p className={styles.icon}>
                                <AiOutlineCalendar />
                            </p>
                            <h1>Hoje não tem data comemorativa.</h1>
                        </>
                    )}
                </div>
                {todos.length === 0 ? (
                    <div className={styles.noTodo}>
                        {<FcTodoList className={styles.todoicon} />} Sem atividades
                    </div>
                ) : (
                    todos.map((todo: any, i: any) => (
                        <div key={i} className={`${styles.todo} ${todo.isCompleted ? styles.todoCompleted : ''}`}>
                            <div className={styles.todoIconTxt}>
                                {todo.isCompleted === false ? (
                                    <>
                                        {todo.icon === 'Trabalho' && <FaBriefcase fill='#974249' size={32} />}
                                        {todo.icon === 'Estudo' && <FaBook fill='#2F6690' size={32} />}
                                        {todo.icon === 'Lazer' && <GrGamepad fill='#39393A' size={32} />}
                                    </>
                                ) : (
                                    <>
                                        {todo.icon === 'Trabalho' && <FaBriefcase fill='grey' size={32} />}
                                        {todo.icon === 'Estudo' && <FaBook fill='grey' size={32} />}
                                        {todo.icon === 'Lazer' && <GrGamepad fill='grey' size={32} />}
                                    </>
                                )}
                                {todo.text}
                            </div>
                            <div className={styles.btnWrapper}>
                                {todo.isCompleted === false ? <button className={styles.checkBtn} onClick={() => toggleCompleted(i)}>
                                    <ImCheckboxUnchecked size={24} />
                                </button> : <button className={styles.unCheckBtn} onClick={() => toggleCompleted(i)}>
                                    <AiOutlineCheck size={32} />
                                </button>}
                                <button className={styles.trashBtn} onClick={() => removeTodo(i)}>
                                    <BsFillTrashFill size={24} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>

    )
}

export default DatePainel