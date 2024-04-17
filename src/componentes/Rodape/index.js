import styles from './Footer.module.css'

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            Desenvolvido por <span className={styles.nome}>Bruno Loducca</span>
        </footer>
    )
}