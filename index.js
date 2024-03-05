// Confim Password
var password = document.getElementById('password');
var confirm_password = document.getElementById('confirm-password');

function validatePassword(){
    if(password.value!=confirm_password.value){
        confirm_password.setCustomValidity("passwords don't match!");
    } else {
        confirm_password.setCustomValidity("");
    }
};

password.addEventListener("change", validatePassword);
confirm_password.addEventListener("keyup", validatePassword);

const link = document.getElementById('link');

// var username = document.getElementById('username').value;
// var text = document.getElementById('new-text');

// text.textContent = username

// text.innerHTML = username.value + 'profile'
// var text = document.getElementById('new-text').innerHTML


const input = document.getElementById('input-text');

function autoExpand(){
    // this.style.width = 'auto'
    // this.style.width = input.scrollWidth + 'px'
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px'
}
input.addEventListener('input', autoExpand);

// let input = document.getElementById("inputTag");
// let fileInput = document.querySelector(".file-input");
// let imageName = document.getElementById("imageName");

// fileInput.addEventListener("click", function(){
//     input.click();
// });

// input.addEventListener("change", function(){
//     let fileName = input.files[0].name;
//     fileInput.textContent = fileName;    
// });

// let inputText = document.querySelector("#inputText");
// let list = document.getElementById("list");

// inputText.addEventListener("keyup", function(event){
//     if(event.key == "Enter"){
//         addItem(this.value);
//         this.value = "";
//     }
// });

// let addItem = (inputText) => {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = inputText;

//     list.appendChild(listItem);
// };