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
            <label for="textarea">Title of the book </label>
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
    await getAllPost()
    let id = '';
    const containerPost = divPublication.querySelector('#containerPostAdd')
    let html = ''
    const dataPost = doc.data();
    html += `    <div class="postComent">
    <h3 class="titlePost">${dataPost.titlePost}</h3>
    <i>aca va un icono</i>
    <textarea name="coment" id="coment" cols="30" rows="10" class="coment" readonly></textarea>
    <div class="btnPost">
        <input class="counter" id="counter" type="number" value="0" name="" readonly />
        <button class="heart" id="heart"><i class="fa-regular fa-heart"></i></button>
        <button class="btnDelete" data-id="${doc.id}">Borrar</button>
        <button class="btnEdit" data-id="${doc.id}">Editar</button>
    </div>
</div>`
    containerPost.innerHTML = html;
    //window.location.hash = '#/post';
    return divPublication;
};