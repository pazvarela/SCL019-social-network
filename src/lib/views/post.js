import { deleteComment } from "../../firebase/firebaseConfig.js"

export const printComments = (docPost, docId) => {
  const containerPostvoid = document.querySelector("#containerPostAdd");

  //containerPostvoid.innerHTML = "";
  const html = `<div id="containerPost">
      
      <h3 class="titlePost">${docPost.inputTitle}</h3>
      <textarea class="commentDone" readonly>${docPost.textArea}</textarea>
      <div class="btns">
          <input class="counter" id="counter" type="number" value="0" name="" readonly />
          <button class="like" id="like">
        <i class="fa-solid fa-heart"></i>
      </button>
      </div>
  </div>
  `;
  let userEdit = " ";
  //if (docPost.data.userId === auth.currentUser.uid) {
  userEdit = `
  <div id="btnsEdit">
  <button class="btnDelete" id="btnDelete" data-id="${docId}">
      <i class="fa-solid fa-trash"></i> Delete 
    </button>
  <button class="btnEdit" data-id="${docId}">
      <i class="fa-solid fa-pen-to-square"></i> Edit
    </button>
  <button class="saveBtn" id="saveBtn" data-id="${docId}">
      <i class="fa-thin fa-floppy-disk"></i> Save</button>
</div>
      
  `;
  //console.log(html)
  
  containerPostvoid.innerHTML += html + userEdit;

  //Evento para borrar post
  const btnDelete = containerPostvoid.querySelectorAll(".btnDelete");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", async () => {
      // eslint-disable-next-line no-restricted-globals
      const deleteConfirm = confirm("Are you sure of delete your comment?");
      if (deleteConfirm === true) {
        await deleteComment(btn.dataset.id)
        //(e.value);
      }
    });
  });
  

  return printComments
};
