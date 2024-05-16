const menuPage = (() => {
    const body = document.querySelector("body");
    const parentDiv = document.querySelector("#content");
    const menuButton = document.querySelector("#menu-btn");

    const names = ["Sandwich","Burger","Noodles","Pasta","Pizza","Tacos","Chicken Nuggets","Chicken Wings","Fruit Mix","Milkshake"];
    const prices = ["125/-","150/-","100/-","110/-","250/-","175/-","150/-","275/-","60/-","80/-"];
    const images = [
        "https://images.unsplash.com/photo-1533920606431-81cd9c3bce0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1645371958635-88dd6c8e1be7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1553787499-6f9133860278?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const createContent = () => {
        const container = document.createElement("div");
        container.setAttribute("class","menu");

        const heading = document.createElement("h2");
        heading.innerText = "Menu";

        const menuDiv = document.createElement("div");
        
        const cards = [];
        for(let i=0;i<10;i++){
            const card = document.createElement("div");

            const image = document.createElement("img");
            image.src = images[i];

            const cardContent = document.createElement("div");
            cardContent.classList.add("card-content");

            const name = document.createElement("h4");
            name.innerText = names[i];
            const price = document.createElement("span");
            price.innerText = "\u20B9" + prices[i];
            name.appendChild(price);
            const description = document.createElement("p");
            description.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
            const addButton = document.createElement("button");
            addButton.innerText = "Add";

            cardContent.appendChild(name);
            cardContent.appendChild(description);
            cardContent.appendChild(addButton);

            card.appendChild(image);
            card.appendChild(cardContent);
            card.classList.add("card");
            cards.push(card);
        }

        return {container,heading,menuDiv,cards};
    };

    const load = () =>{
        menuButton.style.color = "#16a34a"
        menuButton.style.textDecoration = "underline";
        body.style.backgroundImage = "none";
        parentDiv.style.backgroundColor = "#A1CCD1";
        const {container,heading,menuDiv,cards} = createContent();

        container.appendChild(heading);
        for(let card of cards) menuDiv.appendChild(card);
        container.appendChild(menuDiv);
        parentDiv.appendChild(container);

    };

    return {load};
})();

export default menuPage;