/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// se importa función para obtener los servicios de firestore y conectar a la BD
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, orderBy, updateDoc, deleteDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { printComments } from "../lib/views/post.js"



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLqoVYFxNM6BbBzyMf-z5MpzTVvAbvQf4",
    authDomain: "scl019-social-network-bbook.firebaseapp.com",
    projectId: "scl019-social-network-bbook",
    storageBucket: "scl019-social-network-bbook.appspot.com",
    messagingSenderId: "37391909652",
    appId: "1:37391909652:web:5663ff958408d523d57801"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//guarda la info del proyecto
// Initialize Firebase

// se rea una const db (data base) y se llama a getFirestore y dentro se pasa la app (aplication)
// dentro de db se accede a firestore
// para poder acceder a la variable se exporta
//dentro de const db se tiene acceso a firestore
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Firebasegit
//export const user = auth.currentUser; // autentifica el usuario


//------------------- GUARDAR DATOS POST ---------------------------

export const createPost = async(inputTitle, textArea) => { // Add a new document with a generated id.

    const date = Timestamp.fromDate(new Date());
    //const userId = auth.currentUser.uid;
    /*const name = auth.currentUser.displayName;
    const likes = [];
    const likesCounter = 0;*/
    await addDoc(collection(db, "post"), {
        inputTitle,
        textArea,
        date,
    }); //guardamos la coleccion post 

    
};
// --------------------LEER DATOS POST----------------------


export const readDataPost = async() => {

 //const querySnapshot = await getTask()
 //console.log(querySnapshot)

 const q = query(collection(db, "post"), orderBy("date", "desc"));
    onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach(doc =>{
            const docPost = doc.data()
            printComments(docPost);


        })
        return printComments

    });
    /* const q = query(collection(db, "post"), orderBy("date", "desc"));
    onSnapshot(q, (querySnapshot) => { //onSnapshot escucha los elementos del documento
       
        querySnapshot.forEach((doc) => {
            const docPost = doc.data();
            
            printComments(docPost);
            console.log(docPost)
        })
       

        return printComments
    }); */
   
};