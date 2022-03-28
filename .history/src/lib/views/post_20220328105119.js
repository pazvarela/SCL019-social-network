import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";
import { createPost, getAllPost } from "../../firebase/firebaseConfig.js";
//import { collection, getDocs, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';


//import db from '../../firebase/firebaseConfig.js'

export const Post = () => {
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
            <input type="text" class="textTitle" id="textTitle">
            <br>
            <label for="DescrpTitle" class="descrpTitle"> Descripción: </label>
            <textarea name="textarea" id="textarea" class="textarea" cols="30" rows="10">Write a comment...</textarea>
             <div class="btn-addPost">
               <button type="button" id="addPost" class="btn-add"><i class="fa-solid fa-circle-plus"></i>Add</button>
              </div>
            </div>
        <div class="containerPostAdd" id="containerPostAdd"></div>
        <div>
        <h3></h3>
        <p></p>
     </div>
    </main>`;
    headerPost.appendChild(header());
    headerPost.appendChild(nav());
    divPublication.appendChild(headerPost)
    divPublication.innerHTML += view; //concatenar header, nav con view

    //let id = '';
    //btn addPost
    const btnAddPost = divPublication.querySelector("#addPost");
    btnAddPost.addEventListener("click", async(event) => {
        event.preventDefault();
        //almacena el comentario
        const publication = divPublication.querySelector("#textarea").value;
        console.log(publication);
        //llamar a createpost
        await createPost(publication);

    });
    const containerPost = divPublication.querySelector('#containerPostAdd')
    let html = ''


    html += `
        <div> 
          <h3 class="titlePost">${commentPost.title}</h3>
          <textarea class="commentDone" readonly>${commentPost.description}</textarea>
       
          <div class="btns"> 
            <input class="counter" id="counter" type="number"  value="0" name="" readonly  />
            
            <button class="like" id="like"><i class="fa-solid fa-heart"></i></button> 
            <button class="btnDelete" data-id="${doc.id}"><i class="fa-solid fa-trash"></i>
                Delete</button>
            <button class="btnEdit" data-id="${doc.id}"><i class="fa-solid fa-pen-to-square"></i>
                Edit</button>
          </div> 
        </div>`

    //window.location.hash = '#/post';
    await getAllPost(publication);
    return divPublication;
};