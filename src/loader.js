
const loadHeader = () => {

    const header = document.createElement('div'); 
    header.setAttribute('id', 'header'); 

    const logoContainer = document.createElement('div'); 

    const logo = document.createElement('img'); 
    logo.setAttribute('id', 'logo'); 

    const title = document.createElement('h1'); 
    title.textContent = "Ouroboros Bistro";

    logoContainer.append(logo, title);

    const nav = document.createElement('nav'); 
    const brunch = document.createElement('button');
    brunch.textContent = "Brunch"; 

    const starters = document.createElement('button');
    starters.textContent = "Starters"; 

    const mains = document.createElement('button'); 
    mains.textContent = "Mains"; 

    const drinks = document.createElement('button'); 
    drinks.textContent = "Drinks"; 

    nav.append(brunch, starters, mains, drinks); 

    header.append(logoContainer, nav); 
    return header; 

}

const loadMain = () => {

    const container = document.createElement('div');

    const header = document.createElement('div'); 

    const mainHeader = document.createElement('h1'); 
    mainHeader.textContent = "Ouroboros"; 

    const caption = document.createElement('h4'); 
    caption.textContent = "Extraordinary food since 2017";

    header.append(mainHeader, caption);

    const contact = document.createElement('div'); 
    const instagram = document.createElement('img'); 
    instagram.setAttribute('id', 'instagram'); 
    
    const facebook = document.createElement('img');
    facebook.setAttribute('id', 'facebook');

    const number = document.createElement('p'); 
    number.textContent = "+9647712345678"; 
    contact.append(instagram, facebook, number);

    container.append(header, contact);

    return container; 
}

const loadMenu = () => {

}

export {
    loadHeader, 
    loadMain, 
    loadMenu
};