/*Importamos La librerias axios, que utilizamos para hcer peticiones http
Esta basada en las promesas por eso utilizamos async await*/ 

import axios from "axios"

export const api=axios.create({
    //Todas las peticiones iran a la url raiz localhost:5000
    baseURL: "http://localhost:5000"
})

export const buscar= async (url,setPosts)=>{
    //Juntamos la url raiz'baseURL'  con la ruta que quermos obtener 'URl'
    const respuesta= await api.get(url);
    setPosts(respuesta.data)
}