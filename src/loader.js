
const loadHeader = () => {

    const header = document.createElement('div'); 
    
    const logo = document.createElement('img'); 
    logo.setAttribute('id', 'logo'); 

    const nav = document.createElement('nav'); 
    const brunch = document.createElement('a');
    brunch.textContent = "Brunch"; 

    const starters = document.createElement('a');
    starters.textContent = "Starters"; 

    const mains = document.createElement('a'); 
    mains.textContent = "Mains"; 

    nav.append(brunch, starters, mains); 

    header.append(logo, nav); 
    return header; 

}

const loadMain = () => {

}

const loadMenu = () => {

}