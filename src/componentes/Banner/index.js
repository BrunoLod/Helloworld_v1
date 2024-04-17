import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>

            <div className={styles.images}>
                <img src='/images/profileImage.png' alt='Imagem de perfil'/>
            </div>

            <div className={styles.apresentacao}>

                <h1 className={styles.titulo}>
                    Hello, <span className={styles.textoGrifado}>World!</span>
                </h1>

                <h2 className={styles.tituloAutor}>
                    Estudante de <span className={styles.textoGrifado}>UX Designer</span> , <span className={styles.textoGrifado}>IA </span>
                    e <span className={styles.textoGrifado}>Desenvolvimento de Software</span>.
                </h2>

                <p className={styles.paragrafo}>
                    Sejam bem vindas e bem vindos  ao meu espaço pessoal!
                    Eu sou <span className={styles.textoGrifado}>Tsuky</span>, auterego do <span className={styles.textoGrifado}>Bruno Loducca</span>, e aqui compartilharei
                    meus projetos pessoais, bem como outros artigos referentes ao
                    que estudo, hobbys e coisas de que gosto...
                </p>

                <ul className={styles.icones}>

                    <li>
                        <a href='https://www.linkedin.com/in/bruno-loducca-14ab3a1a2/' target="_blank" rel="noopener noreferrer">
                            <img src='/images/linkedinIcon.png' alt='linkedinIcon'/>
                        </a>
                    </li>

                    <li>
                        <a href='https://github.com/BrunoLod/' target="_blank" rel="noopener noreferrer">
                            <img src='/images/githubIcon.png' alt='githubIcon'/>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/bruno_giustii/' target="_blank" rel="noopener noreferrer">
                            <img src='/images/instagramIcon.png' alt='instagramIcon'/>
                        </a>
                    </li>

                </ul>

            </div>
        </div>
    )
}