import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { getDatabase, get } from 'firebase/database';
import { ref as sRef } from 'firebase/storage';
import {v4} from 'uuid'
import axios from 'axios';


const firebaseConfig = {
  apiKey: "AIzaSyAH1fF39c50NQ1vtXw2SrbP1vCblnxWIiA",
  authDomain: "plantoday-636e2.firebaseapp.com",
  projectId: "plantoday-636e2",
  storageBucket: "plantoday-636e2.appspot.com",
  messagingSenderId: "622318643789",
  appId: "1:622318643789:web:7235f878cb4c7d2b5c4a04",
  measurementId: "G-DCHG87VHNT"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

// var nombre = sessionStorage.getItem("nombre");
// const usuarioId = sessionStorage.getItem("id");

// nombre += "/perfil/avatar"

export async function UploadFile(file) {
    const storageRef = sRef(storage, v4());
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    console.log(url);
  
    try {
      const lastIdResponse = await axios.get("http://localhost:8080/planes/ultimoId");
      const lastId = parseInt(lastIdResponse.data.id);
      console.log("loqquiero", lastId);
  
      //const response = await axios.post(`http://localhost:8080/planes/imagen/${lastId}`, { url });
      //console.log(response.data);
      return url;
    } catch (error) {
      console.error(error);
      // Manejar el error adecuadamente
    }
  }

  export async function UploadPerfil(file) {
    const usuarioId = sessionStorage.getItem("id");
    const storageRef = sRef(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    console.log("url desde config" + url)
  
    try {
      const response = await axios.post(`http://localhost:8080/usuarios/avatar/'${usuarioId}'`,  {url});
      console.log(response.data);
      return url;
    } catch (error) {
      console.error(error);
      // Manejar el error adecuadamente
    }
  }
  


// export function DownloadPlanes(){

//   const app = initializeApp(firebaseConfig);

//   const storage = getStorage(app)
//   const starsRef = ref(storage, "1.jpg");

//   const [PlanUrl, setPlanUrl] = useState();
//   getDownloadURL(starsRef)
//     .then((url) => {
//       setPlanUrl(url)
//     })
//  return PlanUrl;
// }

// const starsRef = ref(storage, 'manuel');

// getDownloadURL(starsRef)
//   .then((url) => {
//     console.log(url)
//   })
//   ;

