
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

    // const section1 = document.createElement('div'); 
    // const section2 = document.createElement('div'); 

    // const header1 = document.createElement('h1'); 
    // header1.textContent = "Section 1"; 
    // section1.appendChild(header1);

    // for(let i=1; i<=5; i++){
    //     let item = document.createElement('p');
    //     let price = document.createElement('p'); 
    //     item.textContent = `item${i}       $00.00`;
    //     // price.textContent = "00.00$";

    //     section1.append(item, price); 
    // }

    // const header2 = document.createElement('h1'); 
    // header2.textContent = "Section 2";
    // section2.appendChild(header2);
    // for(let i=1; i<=5; i++){
    //     let item = document.createElement('p');
    //     let price = document.createElement('p'); 
    //     item.textContent = `item${i}       $00.00`;
    //     // price.textContent = "00.00$";

    //     section2.append(item, price); 
    // }

    // container.append(section1, section2);
    let html = `
        <h2>Brunch Menu</h2>
        <div>
            <div class="section">
                <div class="menu-item">
                    <p>American Breakfast</p>
                    <p>$8.00</p>
                </div>
                <div class="menu-item">
                    <p>Britich Breakfast</p>
                    <p>$8.00</p>
                </div>
                <div class="menu-item">
                    <p>Swedish Breakfast</p>
                    <p>$10.00</p>
                </div>
                <div class="menu-item">
                    <p>Omlette(pick the filling)</p>
                    <p>$7.00</p>
                </div>
                <div class="menu-item">
                    <p>Iraqi Traditional Breakfast</p>
                    <p>$9.00</p>
                </div>
            </div>
            <div class="section">
                <div class="menu-item">
                    <p>Egg Salad</p>
                    <p>$6.50</p>
                </div>
                <div class="menu-item">
                    <p>Club Sandwich</p>
                    <p>$7.50</p>
                </div>
                <div class="menu-item">
                    <p>Turkey and Eggs burger</p>
                    <p>$12.00</p>
                </div>
                <div class="menu-item">
                    <p>Cheese Collection</p>
                    <p>$7.00</p>
                </div>
                <div class="menu-item">
                    <p>Mini Margaritta</p>
                    <p>$7.00</p>
                </div>
            </div>
        </div>`
;

    if(type === 1) {
        container.insertAdjacentHTML('afterbegin', html);
    }

    return container; 
}

export {
    loadHeader, 
    loadMain, 
    loadMenu
};