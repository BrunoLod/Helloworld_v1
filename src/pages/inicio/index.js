import Banner from "../../componentes/Banner";
import styles from "./inicio.module.css";

import PostCard from "../../componentes/PostCard";
import posts from "../../json/posts.json";

export default function Inicio() {
    return (
        <main>
            <Banner />
            
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}
            </ul>

        </main>
    )
}