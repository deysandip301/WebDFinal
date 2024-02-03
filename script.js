let postarea = document.querySelector('.post-top');
let postBtn = document.querySelector('.post-button');
let alldatas = document.querySelector('.all-datas');



console.log(postarea);

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
                                    <img class="comment" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt = "comment">
                                    <img class="react" src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt = heart>
                                </div>
                            </div>`

    alldatas.appendChild(thoughtDiv);
}

