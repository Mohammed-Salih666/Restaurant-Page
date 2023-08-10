
const loadHeader = () => {

    const header = document.createElement('div'); 
    header.setAttribute('id', 'header'); 

    const logoContainer = document.createElement('div'); 

    const logo = document.createElement('img'); 
    logo.setAttribute('id', 'logo'); 
    logo.setAttribute('src', '../src/ouroboros.png');

    const title = document.createElement('h1'); 
    title.textContent = "uroboros Bistro";

    logoContainer.append(logo, title);

    const nav = document.createElement('nav'); 

    const home = document.createElement('button');
    home.textContent = "Home";
    home.setAttribute('id', 'home'); 

    const brunch = document.createElement('button');
    brunch.textContent = "Brunch"; 

    const starters = document.createElement('button');
    starters.textContent = "Starters"; 

    const mains = document.createElement('button'); 
    mains.textContent = "Mains"; 

    const drinks = document.createElement('button'); 
    drinks.textContent = "Drinks"; 

    nav.append(home, brunch, starters, mains, drinks); 

    header.append(logoContainer, nav); 
    return header; 

}

const loadMain = () => {

    const container = document.createElement('div');
    container.setAttribute('id', 'main'); 

    const header = document.createElement('div'); 

    const mainHeader = document.createElement('h1'); 
    mainHeader.textContent = "Ouroboros"; 

    const caption = document.createElement('h3'); 
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

    const brunchHtml = `
        <h1>Brunch Menu</h1>
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

    const startersHtml = `
    <h1>Starters Menu</h1>
        <div>
            <div class="section">
                <div class="menu-item">
                    <p>Hummus</p>
                    <p>$4.00</p>
                </div>
                <div class="menu-item">
                    <p>French Cheese and Crackers</p>
                    <p>$6.00</p>
                </div>
                <div class="menu-item">
                    <p>Ourabora Toast</p>
                    <p>$8.00</p>
                </div>
                <div class="menu-item">
                    <p>Fruity Frozen Yogurt</p>
                    <p>$5.00</p>
                </div>
                <div class="menu-item">
                    <p>Berries Salad</p>
                    <p>$7.00</p>
                </div>

                <div class="menu-item">
                    <p>Cheese and Veggies Salad</p>
                    <p>$7.00</p>
                </div>

                <div class="menu-item">
                    <p>Lizzard Tails</p>
                    <p>$20.00</p>
                </div>

            </div>
           
        </div>
    `;


    const mainsHtml = `
    <h1>Mains</h1>
    <div>
        <div class="section">
            <div class="menu-item">
                <p>Steak</p>
                <p>$25.00</p>
            </div>
            <div class="menu-item">
                <p>Smoked Salmon</p>
                <p>$30.00</p>
            </div>
            <div class="menu-item">
                <p>Serpent Heart</p>
                <p>$50.00</p>
            </div>
            <div class="menu-item">
                <p>Medieval Burger</p>
                <p>$12.00</p>
            </div>
            <div class="menu-item">
                <p>Eastren Collection</p>
                <p>$45.00</p>
            </div>
        </div>

        <div class="section">
            <div class="menu-item">
                <p>Veggies Collection</p>
                <p>$8.50</p>
            </div>
            <div class="menu-item">
                <p>Mixed Meats Philadelphia Sandwich</p>
                <p>$13.50</p>
            </div>
            <div class="menu-item">
                <p>Stone Age Chicken</p>
                <p>$13.00</p>
            </div>
        </div>
    </div>`;

   const drinksHtml = `
    <h1>Drinks</h1>
        <div>
            <div class="section">
                <div class="menu-item">
                    <p>Soda</p>
                    <p>$2.75</p>
                </div>
                <div class="menu-item">
                    <p>Amazon River Water</p>
                    <p>$5.00</p>
                </div>
                <div class="menu-item">
                    <p>Eternal Life Elixir Cocktail</p>
                    <p>$10.00</p>
                </div>
                <div class="menu-item">
                    <p>The Devil's Macchiato</p>
                    <p>$7.50</p>
                </div>
                <div class="menu-item">
                    <p>Dark Matter Extract</p>
                    <p>$7.00</p>
                </div>

                <div class="menu-item">
                    <p>Heaven and Hell</p>
                    <p>$12.00</p>
                </div>

                <div class="menu-item">
                    <p>"Orange" Juice</p>
                    <p>$20.00</p>
                </div>

            </div>
           
        </div>
    `;

    if(type === "brunch") {
        container.insertAdjacentHTML('afterbegin', brunchHtml);
    }
    else if (type==="starters") {
        container.insertAdjacentHTML('afterbegin', startersHtml);
    }
    else if (type==="mains") {
        container.insertAdjacentHTML('afterbegin', mainsHtml);
    }
    else if (type==="drinks") {
        container.insertAdjacentHTML('afterbegin', drinksHtml);
    }

    return container; 
}

export {
    loadHeader, 
    loadMain, 
    loadMenu
};