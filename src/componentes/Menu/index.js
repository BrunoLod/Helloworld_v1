import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

/*
Aqui estou utilizando o Link ao invés do <a>, para
trocar de páginas. Ele permite que a troca de páginas
não implique num reload de toda a página da aplicação,
além de estar atrelado ao conceito de one single page,
uma vez que ao não recarregar toda a página, ele está
a mantendo, substituindo apenas os componentes necessários
para a sua renderização.
*/

export default function Menu() {

    const localizacao = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>

                <Link className={`
                ${styles.link}
                ${localizacao.pathname === '/' ? styles.linkDestacado : "" }`} to='/'>
                    Início
                </Link>

                <Link className={`${styles.link}
                ${localizacao.pathname === '/sobremim' ? styles.linkDestacado : "" }`} to='/sobremim'>
                    Sobre Mim
                </Link>

            </nav>
        </header>
    )
}
