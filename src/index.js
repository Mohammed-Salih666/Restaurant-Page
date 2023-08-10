import { loadHeader, loadMain, loadMenu } from "./loader";
import './header.css';
import './main.css';
import './menu.css';


const container = document.querySelector('#content'); 
container.appendChild(loadHeader()); 
container.appendChild(loadMain());

const btns = document.querySelectorAll('button'); 

btns.forEach((btn => {
    btn.addEventListener('click', () => {
        // btn.style = "box-shadow: none;";
        container.removeChild(container.lastChild); 
        container.appendChild(loadMenu(btn.textContent.toLowerCase()));
        btns.forEach(button => button.style ="background-color: #e5ffde;");
        btn.style.background = "white";
    });
}));

const homeBtn = document.querySelector('#home'); 
homeBtn.addEventListener('click', ()=>{
    container.removeChild(container.lastChild); 
    container.appendChild(loadMain());
})
window.onload = () => {
    homeBtn.style = "background-color: white;";
}