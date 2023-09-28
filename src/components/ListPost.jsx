//IMmportamos los hooks useState que es de estado y el hook useEffect
import { useState,useEffect } from "react"
import "../assets/css/componentes/card.css"
//importamos la funcion buscar
import { buscar } from "../api/api"
//Importamos la Etiqueta Link que nos da react-router DOM
import { Link } from "react-router-dom"


const ListPosts = ({ url }) => {

    // Creamos un hook de estado para el arreglo de los posts
    const[posts,setPosts]=useState([])
    
    //Cada vez que cambie la url se ejecutara el useEfecct, que encierra la funcion buscar
    useEffect(()=>{
      //Se le pasa la url y el setPost para agregar los datos al arreglo de objeto posts  
      buscar(url,setPosts)
    },[url])

    return (
        <section className="posts container">
              {
                posts.map(post => {
                    const { id, title, metadescription, categoria } = post;
                    return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                        <article >
                            <h3 className="post-card__title">
                                {title}
                            </h3>
                            <p className="post-card__meta">{metadescription}</p>
                        </article>
                    </Link>
                })
            }
             
        </section>
    )
}

export default ListPosts