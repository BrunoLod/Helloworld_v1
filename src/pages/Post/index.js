import './Post.css';
import styles from './Post.module.css';

import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import PostCard from '../../componentes/PostCard';
import PostModelo from "../../componentes/PostModelo";
import posts from "../../json/posts.json";
import NaoEncontrada from '../NaoEncontrada';


export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    if(!post){
        return <NaoEncontrada/>
    }

    
    return (
        <PostModelo titulo={post.titulo}>

            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>

            <h2 className={styles.tituloOutrosPosts}>
                Outros posts que podem te interessar : 
            </h2>

            <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}

            </ul>

        </PostModelo>
    )
}