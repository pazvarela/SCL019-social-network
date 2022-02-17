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
    apiKey: 'AIzaSyCiGtmDy7pXtGBhp7DQ-P7kNTGPLcYCT1w',
    authDomain: 'scl019-social-network.firebaseapp.com',
    projectId: 'scl019-social-network',
    storageBucket: 'scl019-social-network.appspot.com',
    messagingSenderId: '688901907009',
    appId: '1:688901907009:web:17e9dc19d24585836f9cc0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);