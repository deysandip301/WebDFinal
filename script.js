let postarea = document.querySelector('.post-top');
let postBtn = document.querySelector('.post-button');
let alldatas = document.querySelector('.all-datas');
let countCurr = 0;
let count = document.querySelector('.count');
let lastText = "";

postarea.addEventListener('keyup',(e)=>{
    count.innerText  = `${postarea.value.length}/100`;
});

postBtn.addEventListener('click',(e)=>{
    if(postarea.value == "") {
        alert("please enter something to post");
        return;
    }
    else {
        generateThought(postarea.value);
        postarea.value = "";
    }
});

function generateThought(thought){
    let thoughtDiv = document.createElement('div');
    thoughtDiv.className = "thought";
    thoughtDiv.innerHTML = `<img class="person" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt = "person">
                            <div class="thought-container">
                                <div class="names-buttons">
                                    <div class="name">Joanne Graham <span>@johannegraham123</span></div>
                                    <img class="edit" src ="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt ="edit">
                                    <img class="delete" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete">
                                </div>
                                <div class="thought-area">${thought}</div>
                                <div class="heart-comment">
                                    <img class="comment-Btn" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt = "comment">
                                    <img class="react" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt = heart>
                                </div>
                            </div>`
    alldatas.appendChild(thoughtDiv);
}

// let react = document.querySelector('.react');
//     console.log(react);
//     react.addEventListener('click',(e)=>{
//         if(e.target.src == "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"){
//             e.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
//         }
//         else {
//             e.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
//         }
//     });


alldatas.addEventListener('click',(e)=>{

    if(e.target.className == "delete"){
        console.log(e.target.parentElement.parentElement.parentElement)
        e.target.parentElement.parentElement.parentElement.remove();
    }
    else if(e.target.className == "edit"){
        lastText = e.target.parentElement.parentElement.querySelector('.thought-area').innerText;
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
            lastText = e.target.parentElement.parentElement.querySelector('.thought-area').innerText;
            e.target.parentElement.parentElement.querySelector('.thought-area').contentEditable = false;
            console.log(e.target.parentElement.parentElement.querySelector('.cancel-post'));
            e.target.parentElement.parentElement.querySelector('.cancel-post').remove();
        }
        else{
        e.target.classList.add("active");
        e.target.parentElement.parentElement.querySelector('.thought-area').contentEditable = true;
        let cancelOrPost = document.createElement('div');
        cancelOrPost.className = "cancel-post";
        cancelOrPost.innerHTML = `<button class="cancel">Cancel</button>
                                <button class="post">Post</button>`;
        e.target.parentElement.parentElement.appendChild(cancelOrPost);
        }
    }

    else if (e.target.className == "react"){
        console.log(e.target);
        if(e.target.src == "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"){
            e.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
        }
        else {
            e.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
        }
    }

    else if(e.target.className == "comment-Btn"){
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
            e.target.parentElement.parentElement.parentElement.querySelector('.input-modal').remove();
        }else{
        e.target.classList.add("active");
        let inputModal = document.createElement('form');
        inputModal.className = "input-modal";
        inputModal.innerHTML = `<input type="text" class="comment-input" placeholder="Enter your comment">
                                <button class="comment-post">Post</button>`;
        e.target.parentElement.parentElement.parentElement.appendChild(inputModal);
        }

    // generateComment(e.target.parentElement.parentElement,comment);
    }


    else if(e.target.className == "post"){
        console.log(e.target.parentElement.parentElement.querySelector('.thought-area').innerText);
        e.target.parentElement.parentElement.querySelector('.thought-area').contentEditable = false;
        e.target.parentElement.parentElement.querySelector('.edit').classList.remove("active");
        e.target.parentElement.remove();
    }
    else if(e.target.className == "cancel"){
        e.target.parentElement.parentElement.querySelector('.thought-area').contentEditable = false;
        e.target.parentElement.parentElement.querySelector('.thought-area').innerText = lastText;
        e.target.parentElement.parentElement.querySelector('.edit').classList.remove("active");
        e.target.parentElement.remove();
    }

    else if (e.target.className == "comment-post"){
        e.preventDefault();
        let comment = e.target.parentElement.querySelector('.comment-input').value;
        if(comment != ''){
            console.log(e.target.parentElement.parentElement.parentElement);
            generateComment(e.target.parentElement.parentElement.parentElement,comment);
            e.target.parentElement.querySelector('.comment-input').value = "";
            e.target.parentElement.remove();
        }
    }
});



function generateComment(event,comment){
    let commentDiv = document.createElement('div');
    commentDiv.className = "comment";
    commentDiv.innerHTML = `<img class="person" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt = "person">
                            <div class="thought-container">
                                <div class="names-buttons">
                                    <div class="name">Joanne Graham <span>@johannegraham123</span></div>
                                    <img class="edit" src ="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt ="edit">
                                    <img class="delete" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete">
                                </div>
                                <div class="thought-area">${comment}</div>
                                <div class="heart-comment">
                                    <img class="comment-Btn" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt = "comment">
                                    <img class="react" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt = heart>
                                </div>
                            </div>`
    event.appendChild(commentDiv);
}
