const homePage = (() => {
    const body = document.querySelector("body");
    const parentDiv = document.querySelector("#content");
    const homeButton = document.querySelector("#home-btn");
    
    const createContent = () => {
        const container = document.createElement("div");
        container.setAttribute("class","home");

        const heading1 = document.createElement("h2");
        const heading2 = document.createElement("h2");
        
        heading1.innerText = "Indulge your senses at our culinary oasis, where every dish tells a story and every bite is an adventure.";
        heading2.innerText = "Welcome to Green-Kitchen, where flavors dance on your palate and memories are made with every meal!";

        const button = document.createElement("button");
        button.innerText = "Order Now";

        return {container, heading1,heading2,button};
    }

    const load = () =>{
        homeButton.style.color = "#16a34a"
        parentDiv.style.backgroundColor = "";
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1546195643-70f48f9c5b87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        homeButton.style.textDecoration = "underline";
        const {container,heading1,heading2,button} = createContent();
        
        container.appendChild(heading1);
        container.appendChild(heading2);
        container.appendChild(button);
        parentDiv.appendChild(container);
    }

    return {load};

})();

export default homePage;