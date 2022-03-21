/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// funcion que inicaliza la aplicación
//import { initializeApp } from 'firebase/app';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// se importa función para obtener los servicios de firestore y conectar a la BdD
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.PROYECT_APP_FIREBASE_APIKEY,
    authDomain: process.env.PROYECT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.PROYECT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.PROYECT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.PROYECT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.PROYECT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// se rea una const db (data base) y se llama a getFirestore y dentro se pasa la app (aplication)
// dentro de db se accede a firestore
// para poder acceder a la variable se exporta
//dentro de const db se tiene acceso a firestore
const db = getFirestore(app);


export default db;

// implementacion de firebase en archivo post

//CREAR PUBLICACION  "createPost" variable se crea para ejecutar en el muro
// no resulto XD!

export const createPost = () => {
        const docRef = await addDoc(collection(db, "post"), {
            comment:
        });
        console.log("Document written with ID: ", docRef.id);
    }
    // Add a new document with a generated id.


//