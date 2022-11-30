const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogInSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY , username);
    loginForm.classList.add("hidden");
    paintingGreetings(username);
    
            }
function hendleLinkClick(event){
    event.preventDefault();
    
}               

 function paintingGreetings(username) {
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 



 }      
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogInSubmit);

} else {
    // show the greetings
   paintingGreetings(savedUsername);

}
            


    


