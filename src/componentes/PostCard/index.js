import { Link } from 'react-router-dom';
import styles from './Post.module.css';


export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <div className={styles.wrapper}>
                    <img
                        className={styles.capa}
                        src={`/Assets/posts/${post.id}/capa.png`} alt='' />

                    <div className={styles.content}>
                        <h2 className={styles.titulo}>{post.titulo}</h2>

                        <button className={styles.botaoLer}>Ler</button>
                    </div>
                </div>
            </div >
        </Link>


    )
}