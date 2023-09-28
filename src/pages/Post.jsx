import { useState,useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useParams,useNavigate } from "react-router-dom"
import { buscar } from "../api/api"

const Post = ({url}) => {

 const[post,setPost]=useState({})

  const {id}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    //Colocamos un catch para trabajar el error cuanod el usuario 
    //coloque un id que no exixte con la funcion navigate lo redijiremos 
    //a la pagina error 404
    buscar(`/posts/${id}`,setPost).catch(()=>{
       navigate('/not-found')
    });
  },[id])
 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post
