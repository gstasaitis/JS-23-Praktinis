/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti 
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių 
-------------------------------------------------------------------------- */

const API_URL = 'https://api.github.com/users' 

const btn = document.getElementById("btn") 
const display = document.getElementById("output") 

const loadData = () => {
    return fetch(API_URL).then(resp => resp.json()) 
} 

const printData = (users) => {
    display.innerHTML = '' 
    users.forEach(user => {
        const userInfo = document.createElement('div') 
        userInfo.innerHTML = `
        <div class="users">
        <div class="user-info">
                    <img src="${user.avatar_url}" alt="avatar" class="avatar">
                <h2>Login: ${user.login}</h2>
            </div></div>
        ` 
        display.appendChild(userInfo) 
    }) 
} 

btn.addEventListener("click", () => {
    const message = document.getElementById("message") 
    message.classList.add("hidden") 

    loadData().then(printData) 
}) 




