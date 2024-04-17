import { useNavigate } from 'react-router-dom';
import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada() {

    const navegar = useNavigate();

    return (
        <div className={styles.conteudoContainer} >
            <span className={styles.texto404} >404</span>

            <h1 className={styles.titulo}>
                Ops! Página não encontrada.
            </h1>

            <p className={styles.paragrafo}>
                Tem certeza de que era isso que você estava procurando?
            </p>

            <p className={styles.paragrafo}>
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div
                className={styles.botaoContainer}>
                <button className={styles.botao}
                    onClick={() => navegar("/")}>
                    Voltar
                </button>
            </div>

        </div>
    )
}
