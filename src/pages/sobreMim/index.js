import PostModelo from "../../componentes/PostModelo";
import styles from './SobreMim.module.css';

export default function SobreMim() {
    return (

        <PostModelo
            titulo={"Sobre mim"}>

            <h3 className={styles.subtitulo}>
                Olá, eu sou o Tsuky!
            </h3>

            <img
                src="/images/sobreMim_1.png"
                alt="Foto da persona Tsuky"
                className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de <span className={styles.destaqueTexto}>desenvolvimento de software, UX Design,
                Machine Learning</span> e <span className={styles.destaqueTexto}>I. Artificial</span>, e fico feliz por te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Minha história com desenvolvimento de software começa em 2017, quando conheci
                os cursos gratuitos oferecidos pela plataforma <span className={styles.destaqueTexto}>Udacity</span>. Nela havia de tudo,
                perpassando em especial às áreas de desenvolvimento mobile, robótica e machine learning,
                por meio das quais eu fui introduzido a esse universo.
            </p>

            <p className={styles.paragrafo}>
                Inicialmente foquei em aprender a lógica de programação em <spa className={styles.destaqueTexto}>Python</spa> e
                logo, pelo aspecto da criação, me interessei pela parte <span className={styles.destaqueTexto}>mobile</span>, aprendendo
                <span className={styles.destaqueTexto}> XML</span> e <span className={styles.destaqueTexto}>Java</span>, realizando
                criações de alguns aplicativos, tais como um tradutor do inglês para um idioma nativo norte-americano, notificador
                de terremotos mundiais e um aplicativo de músicas por exemplo.
            </p>

            <p className={styles.paragrafo}>
                Porém, por questões de más experiências com o processo da criação das aplicações, <span className={styles.destaqueTexto}> 
                estresse</span>, <span className={styles.destaqueTexto}>frustração</span> e <span className={styles.destaqueTexto}> falta de apoio</span>, fui me desligando da área e, no contexto de vestibulares, levado a buscar outras áreas
                com as quais eu pudesse atuar, pensando em economia <span className={styles.perigo}>(quem tiver espírito criativo jamais entrem!)</span>, relações internacionais e psicologia.
            </p>

            <p className={styles.paragrafo}>
                O meu desejo pela psicologia de fato se consumou e, quando passei no vestibular, ingressei na faculdade
                com o sonho, na época, inspirado pelo <a href="https://pt.wikipedia.org/wiki/Contardo_Calligaris" target="blank" className={styles.linkTexto}>Contardo Calligaris</a>, 
                de me tornar um terapeuta tão bom quanto ele. Poder entender a subjetividade humana em “n” matizes apreciadas 
                por esse universo e ajudar as pessoas era o que me motivava e conversava com o meu lado protetor e, ao mesmo tempo, 
                de certo modo, intelectual.
            </p>

            <img
                src="/images/sobreMim_2.png"
                alt="Foto da persona Tsuky"
                className={styles.fotoSobreMim_2} />

            <p className={styles.paragrafo}>
                Ao mesmo tempo via nela uma fonte de inspiração impar que me permitiria servir de catálise às minhas
                criações literárias, tanto poemas quanto romances, semelhante aos livros de I. Yalom, Contardo Calligaris,
                Fiodor D e etc.
            </p>

            <p className={styles.paragrafo}>
                Sim, além das áreas de meu estudo que gosto bastante, sou um aficionado em arte, encontrando minha melhor
                expressão na criação de <span className={styles.destaqueTexto}>desenhos</span> e, principalmente, na <span className={styles.destaqueTexto}>escrita</span>, 
                tendo inclusive lançado um livro de poemas que podem verificar a opinião do perfil
                <a  href="https://www.instagram.com/p/CWBq_7EvKvj/" target="_blank" className={styles.linkTexto}> @horadaresenha</a> no Instagram.
            </p>

            <p className={styles.paragrafo}>
                O meu amor pela arte começou em 2019, ano em que eu conheci o meu primeiro amor. Adorava a sua gradação, simbolizada na figura 
                de uma <span className={styles.destaqueTexto} >flor de Sakura</span>, que contrastava fofura, delicadeza em seu jeito, 
                traço e caligrafia, acompanhada pela sua inteligência, humor particular e beleza singular, iluminada pelo seu sorriso e olhar, 
                ainda que, ao mesmo tempo, possuía vulnerabilidades, por meio das quais pude me identificar e começar a amar.
            </p>

            <p className={styles.paragrafo}>
                Entretanto, em resposta à sua rejeição, que se misturou com traumas de infância e de juventude, comecei
                a escrever como forma de amenizar, numa linguagem freudiana, a <span className={styles.perigo} >pulsão de morte</span> que do meu coração não se
                cansava de rondar, fazendo-me descobrir um <span className={styles.destaqueTexto}>artista</span> e amante da arte.
            </p>

            <p className={styles.paragrafo}>
                Nesse contexto em que me descobria como um artista, de certo modo os meus interesses de 2017 voltaram,
                inicialmente se materializando na vontade de fazer projetos e desenvolver trabalhos semelhantes aos
                desempenhados pelo professor <a href="https://pt.wikipedia.org/wiki/Miguel_Nicolelis" target="blank" className={styles.linkTexto}>Miguel Nicolelis</a>.
            </p>

            <p className={styles.paragrafo}>
                Assim, ingressei no curso de <span className={styles.destaqueTexto}>engenharia biomédica</span>, 
                que infelizmente, por conta da ausência de campo de trabalho para o que gostaria de trabalhar e 
                declínio da faculdade na qual me encontrava, tive de trancar, buscando um outro caminho que, 
                durante uma das imersões da Alura, pude novamente me encontrar.
            </p>

            <img
                src="/images/sobreMim_3.png"
                alt="Foto da persona Tsuky"
                className={styles.fotoSobreMim_3} />

            <p className={styles.paragrafo}>
                Atualmente estudo <span className={styles.destaqueTexto}>Engenharia da Computação</span>, com desejo de trabalhar  
                com inteligência artificial, desenvolvimento de software, robótica e de interfaces, por meio das quais possam 
                trazer impactos positivos à sociedade.
            </p>

            <p className={styles.paragrafo}>
                Inicialmente, que se relaciona com o meu trabalho de <span className={styles.destaqueTexto}>iniciação científica</span>, 
                penso em criar uma IA que sirva de companheiro digital às pessoas e, em especial, possa proteger aquelas que apresentem alguma 
                <span className={styles.destaqueTexto}> vulnerabilidade psicológica</span> ou <span className={styles.destaqueTexto}>transtorno</span>, 
                como o transtorno de personalidade borderline e/ou depressão por exemplo, que podem impactar negativamente a vida de alguém, 
                fazendo-o incorrer em atos que podem implicar em riscos a própria vida e/ou autodestrutivos.
            </p>

            <p className={styles.paragrafo}>
                Além disso, para me conhecerem um poquinho mais, considero-me uma pessoa <span className={styles.destaqueTexto}> dark indie</span>, 
                gostando de ir em rolês softs, como parques, museus que tenham muita arte e cultura, mas também gosto de coisas mais divertidas, 
                como ir em uma balada gótica, madame satã, ou, quem sabe, saltar de paraquedas?
            </p>

            <p className={styles.paragrafo}>
                Gosto de animes, séries ou filmes que envolvam drama, aventura e humor, sempre com boas fotografias e 
                paletas de cores, e meus gêneros  musicais favoritos são rock, punkrock, indie, rap, j-pop/rock, pop 
                eletrônico e twenty one pilots. Bom, é isso, pessoal, arriverdeci!. 
            </p>

        </PostModelo>

    )
}