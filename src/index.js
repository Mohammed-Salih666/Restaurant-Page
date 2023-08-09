import { loadHeader, loadMain, loadMenu } from "./loader";

const container = document.querySelector('#content'); 
container.appendChild(loadHeader()); 