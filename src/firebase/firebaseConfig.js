/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// funcion que inicaliza la aplicación
import { initializeApp } from 'firebase/app';
// se importa función para obtener los servicios de firestore y conectar a la BdD
import { getFirestore } from 'firebase/firestore';
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
const db = getFirestore(app);

export default db;