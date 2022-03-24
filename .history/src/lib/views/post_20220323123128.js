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
    const dataPost = doc.data();

    //window.location.hash = '#/post';
    return divPublication;
};