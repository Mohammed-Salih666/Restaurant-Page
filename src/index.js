import { loadHeader, loadMain, loadMenu } from "./loader";
import './header.css';
import './main.css';
import './menu.css';

window.onload = () => {
    let home = document.getElementById('home'); 
    home.style = "background-color: white;";
}
const container = document.querySelector('#content'); 
container.appendChild(loadHeader()); 
const main = loadMain();
container.appendChild(main);

const btns = document.querySelectorAll('button'); 

btns.forEach((btn => {
    btn.addEventListener('click', () => {
        // btn.style = "box-shadow: none;";
        container.removeChild(container.lastChild); 
        container.appendChild(loadMenu(btn.textContent.toLowerCase()));
    });
}));

const homeBtn = document.querySelector('#home'); 
homeBtn.addEventListener('click', ()=>{
    container.removeChild(container.lastChild); 
    container.appendChild(loadMain());
})
homeBtn.autofocus = true;