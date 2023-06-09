var cardsDiv = document.querySelector("#cards");
var currentUsername = "";

function getUsername(element){
    console.log(element.value);
    currentUsername = element.value;
}

function makeCoderCard(data){
    var res = `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div>
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                        <a href = https://github.com/${data.login} target="_blank">Link to profile</a>
                    </div>           
                </div>`
    return res;
}

async function search(){
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    console.log(coderData);
    cardsDiv.innerHTML += makeCoderCard(coderData);
}
