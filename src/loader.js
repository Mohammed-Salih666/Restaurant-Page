
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
    container.setAttribute('id', 'main'); 

    const header = document.createElement('div'); 

    const mainHeader = document.createElement('h1'); 
    mainHeader.textContent = "Ouroboros"; 

    const caption = document.createElement('h4'); 
    caption.textContent = "Extraordinary food since 2017";

    header.append(mainHeader, caption);

    const contact = document.createElement('div'); 
    contact.setAttribute('id', 'contact');
    const instagram = document.createElement('img'); 
    instagram.setAttribute('src', '../src/icons8-instagram-48.png');
    
    const facebook = document.createElement('img');
    facebook.setAttribute('src', '../src/icons8-facebook-48.png');
    const number = document.createElement('p'); 
    number.textContent = "+9647712345678"; 
    contact.append(instagram, facebook, number);

    container.append(header, contact);

    return container; 
}

const loadMenu = (type) => {

    const container = document.createElement('div'); 
    container.setAttribute('id', 'menu'); 

    const section1 = document.createElement('div'); 
    const section2 = document.createElement('div'); 

    const header1 = document.createElement('h3'); 
    header1.textContent = "Section 1"; 
    // const item1 = document.createElement('p'); 
    // item1.textContent("item1"); 
    // price1 = document.createElement('p');
    // price1.textContent("$00.00");


    for(let i=1; i<=5; i++){
        let item = document.createElement('p');
        let price = document.createElement('p'); 
        item.textContent = `item ${i}`;
        price.textContent = "00.00$";

        section1.append(item, price); 
    }

    const header2 = document.createElement('h3'); 
    header2.textContent = "Section 2";
    
    for(let i=1; i<=5; i++){
        let item = document.createElement('p');
        let price = document.createElement('p'); 
        item.textContent = `item ${i}`;
        price.textContent = "00.00$";

        section2.append(item, price); 
    }

    container.append(section1, section2);

    return container; 
}

export {
    loadHeader, 
    loadMain, 
    loadMenu
};