import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";
import { createPost } from "../../firebase/firebaseConfig.js";
import { collection, getDocs, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';


//import db from '../../firebase/firebaseConfig.js'

export const Post = async() => {
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
        headerPost.innerHTML = nav();
        headerPost.innerHTML = header();
        divPublication.innerHTML = view;

        //let id = '';
        //btn addPost
        /* const btnAddPost = divPublication.querySelector("#addPost");
           btnAddPost.addEventListener("click", async(event) => {
               event.preventDefault();
               //almacena el comentario
               const publication = divPublication.querySelector("#textarea").value;
               console.log(publication);
               //llamar a createpost
               await createPost(publication);
        });*/

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

        const getAllPost = async() => {

                const allpost = await getDocs(collection(db, "post"));
                allpost.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());

                    const containerPost = divPublication.querySelector('#containerPostAdd')
                    const timer = query(collection(db, "post"), orderBy("date", "desc"))

                    onSnapshot(timer, (querySnapshot) => {
                        let html = ''

                        querySnapshot.forEach(doc => {
                                    const commentPost = doc.data();
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
                                }
                            },

                    });


                    //await getAllPost()
                    //window.location.hash = '#/post';
                    return divPublication;
                });