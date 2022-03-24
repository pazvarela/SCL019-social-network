import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";
import { createPost, getAllPost } from "../../firebase/firebaseConfig.js";
//import db from '../../firebase/firebaseConfig.js'

export const Post = async() => {
    //const user = getUser();
    const divPublication = document.createElement("div");
    divPublication.classList.add("post-container");
    const view = `
    <main>
        <div id='addElement'>
        <form id="formPost" class="formPost">
            <label for="textarea">Title of the book </label>
            <input type="text" class="textTitle" id="textTitle">
            <br>
            <label for="DescrpTitle"> Descripción: </label>
            <textarea name="textarea" id="textarea" cols="30" rows="10">Write a comment...</textarea>
             <div class="btn-add">
               <button type="button" id="addPost" >Add</button>
              </div>
            </div>
        <div class="containerPostAdd" id="containerPostAdd"></div>
        <div >
        <h3></h3>
        <p></p>
     </div>
    </main>`;

    divPublication.innerHTML = view;
    divPublication.appendChild(header());
    divPublication.appendChild(nav());
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

    //fUNCION PARA MOSTRAR POST EN TIEMPO REAL
    const containerPost = divPublication.querySelector("#containerPostAdd")
        //containerPost.classList("postComment")
    let html = ''
    html += `    <div class="postComment">
    <h3 class="titlePost">${task.titlePost}</h3>
    <i>aca va un icono</i>
    <textarea name="coment" id="comment" cols="30" rows="10" class="coment" readonly></textarea>
    <div class="btnPost">
        <input class="counter" id="counter" type="number" value="0" name="" readonly />
        <button class="heart" id="heart"><i class="fa-regular fa-heart"></i></button>
        <button class="btnDelete" data-id="${doc.id}">Borrar</button>
        <button class="btnEdit" data-id="${doc.id}">Editar</button>
    </div>
</div>`
    containerPost.innerHTML = html;
    const allPublication = divPublication.querySelector("#comment").value;
    console.log(allPublication);
    await getAllPost(allPublication);
    //window.location.hash = '#/post';
    return divPublication, containerPost;
};