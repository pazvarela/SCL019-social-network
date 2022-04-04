import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";
import { createPost, readDataPost } from "../../firebase/firebaseConfig.js";
//import { collection, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

//import db from '../../firebase/firebaseConfig.js'

export const Post = async () => {
    //window.location.hash = '#/post';
    //const user = getUser();
    const headerPost = document.createElement("header");
    const divPublication = document.createElement("div");
    divPublication.classList.add("post-container");
    const view = `
    <main>
        <div id='addElement'>
            <form id="formPost" class="formPost">
                <label for="textTitle" class="textTitle">Title of the book </label>
                <input type="text" class="textTitle" id="textTitle" required>
                <br>
                <label for="DescrpTitle" class="descrpTitle"> Descripción: </label>
                <textarea name="textarea" id="textArea" required class="textarea" cols="30" rows="10">"Write a comment..."</textarea>
                <div class="btn-addPost">
                    <button type="submint" id="addPost" class="btn-add"><i class="fa-solid fa-circle-plus"></i>Add</button>
                </div>
            </form>
        </div>
        <div class="containerPostAdd" id="containerPostAdd">
        
        </div>
       
    </main>`;
    
    
    headerPost.appendChild(header());
    headerPost.appendChild(nav());
    divPublication.appendChild(headerPost);
    divPublication.innerHTML += view; //concatenar header, nav con view
    //let id = '';
    //btn addPost
    const btnAddPost = divPublication.querySelector("#formPost");
    btnAddPost.addEventListener("submit", async(event) => {
        event.preventDefault();
        //almacena el comentario
        //Generando vista de wallPage
        const inputTitle = formPost.querySelector("#textTitle").value;
        const textArea = formPost.querySelector("#textArea").value;
       //readDataPost(inputTitle, textArea);
       await createPost(inputTitle, textArea);
        
    });
    const containerPost = divPublication.querySelector("#containerPostAdd");
    containerPost.innerHTML = ""
    await readDataPost()
    //vaciar textarea
    const emptyText = divPublication.querySelector("textArea");
    emptyText.addEventListener("focus", () => {
        emptyText.value = "";
    })
    return divPublication;
};