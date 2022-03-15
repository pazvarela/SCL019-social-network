import { header } from './components/header.js'

header()

export const post = () => {
    //const user = getUser();
    const divPublication = document.createElement('div');
    divPublication.classList.add('post-container');
    const view = `
    <main>
        <div id='addElement'>
            <label for="textarea">Title of the book </label>
            <textarea name="textarea" id="textarea" cols="30" rows="10">Write a comment...</textarea>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="rgba(245, 245, 245, 0.9607843137254902)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h4m4 0h-4m0 0V8m0 4v4m0 6c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"/></svg>
            <button type="button" id="addPost">Add</button>
        </div>
        <div>
            <p id="email"></p>
        </div>
        <div id="add-post">
            <button type="button" id="showPost">addpost</button>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="rgba(245, 245, 245, 0.9607843137254902)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h4m4 0h-4m0 0V8m0 4v4m0 6c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="rgba(245, 245, 245, 0.9607843137254902)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11v9.4a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V11m5 6v-6m4 6v-6m7-4h-5M3 7h5m0 0V3.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6V7M8 7h8"/></svg>
        </div>
        <div>
            <button type="button" id="showText">addtext</button>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="rgba(245, 245, 245, 0.9607843137254902)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21h18M12.222 5.828L15.05 3L20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="rgba(245, 245, 245, 0.9607843137254902)" stroke-linejoin="round" stroke-width="1.5" d="M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608c-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274l.265-.274A5.612 5.612 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z"/></svg>
        </div>
    </main>`;

    /*const divPublication = document.createElement('div');
    divPublication.classList.add('post-container');*/
    divPublication.innerHTML = view;
    divPublication.appendChild(header());
    console.log(view);

    const btnAddPost = divPublication.getElementById('#addPost');
    btnAddPost.addEventListener('click', (event) => {
        event.preventDefault();
        onNavigate('#/post');

    });
    console.log(divPublication);
    return divPublication;


};