import messageIcon from './icons/message.svg';
import addressIcon from './icons/address.svg';
import contactIcon from './icons/contact.svg';
import locationIcon from './icons/location.svg';
import timeIcon from './icons/time.svg';
import mapImg from './images/map.png';

const contactPage = (() => {
    const body = document.querySelector("body");
    const parentDiv = document.querySelector("#content");
    const container = document.createElement("div");
    container.setAttribute("class","contact");
    const contactButton = document.querySelector("#contact-btn");

    const createContactInfo = () => {
        const contactInfo = document.createElement("div");

        const number = document.createElement("p");
        const numberImg = document.createElement("img");
        numberImg.src = contactIcon;
        number.appendChild(numberImg);
        number.append("+91-1234567890");

        const address = document.createElement("p");
        const addressImg = document.createElement("img");
        addressImg.src = locationIcon;
        address.appendChild(addressImg);
        address.append("10, N Block, Connaught Place");
        const lineBreak = document.createElement("br");
        address.append(lineBreak);
        address.append("New Delhi-110001, India.");

        const time = document.createElement("p");
        const timeImg = document.createElement("img");
        timeImg.src = timeIcon;
        time.appendChild(timeImg);
        time.append("Mon-Fri: 9am-9pm")
        time.append(document.createElement("br"));
        time.append("Sat-Sun 9am-11:30pm");

        const location = document.createElement("img");
        location.src = mapImg;

        contactInfo.appendChild(number);
        contactInfo.appendChild(address);
        contactInfo.appendChild(time);
        contactInfo.appendChild(location);

        return contactInfo;
    };
    
    const createForm = () => {
        const form = document.createElement("form");
        form.setAttribute("id","form");
        
        const nameDiv = document.createElement("div");
        const nameLabel = document.createElement("label");
        nameLabel.innerText = "Name:"
        nameLabel.setAttribute("for","name");
        const name = document.createElement("input");
        name.setAttribute("id","name");
        name.type = "text";
        nameDiv.appendChild(nameLabel);
        nameDiv.appendChild(name);

        const mailDiv = document.createElement("div");
        const mailLabel = document.createElement("label");
        mailLabel.innerText = "Email:"
        mailLabel.setAttribute("for","email");
        const mail = document.createElement("input");
        mail.setAttribute("id","email");
        mail.type = "email";
        mailDiv.appendChild(mailLabel);
        mailDiv.appendChild(mail);

        const phoneDiv = document.createElement("div");
        const phoneLabel = document.createElement("label");
        phoneLabel.innerText = "Phone:"
        phoneLabel.setAttribute("for","phone");
        const phone = document.createElement("input");
        phone.setAttribute("id","phone");
        phone.type = "text";
        phoneDiv.appendChild(phoneLabel);
        phoneDiv.appendChild(phone);

        const messageDiv = document.createElement("div");
        const messageLabel = document.createElement("label");
        messageLabel.innerText = "Message:";
        messageLabel.setAttribute("for","message");
        const messageBox = document.createElement("textarea");
        messageBox.setAttribute("id","message");
        messageBox.rows = "6";
        messageBox.cols = "40";
        messageDiv.appendChild(messageLabel);
        messageDiv.appendChild(messageBox);

        form.appendChild(nameDiv);
        form.appendChild(mailDiv);
        form.appendChild(phoneDiv);
        form.appendChild(messageDiv);

        return form;
    };

    const createContent = () => {
        const heading = document.createElement("h2");
        heading.innerText = "Contact Us";

        const contactDiv = document.createElement("div");
        const infoContainer = document.createElement("div");
        infoContainer.setAttribute("id","info-container");

        const infoHeading = document.createElement("h2");
        const infoHeadingIcon = document.createElement("img");
        infoHeadingIcon.src = addressIcon;
        infoHeading.appendChild(infoHeadingIcon);
        infoHeading.append("Reach Us");
        infoContainer.appendChild(infoHeading);

        const contactInfo = createContactInfo();
        infoContainer.appendChild(contactInfo);
        
        const formContainer = document.createElement("div");
        formContainer.setAttribute("id","form-container");
        
        const formHeading = document.createElement("h2");
        const enquiriesIcon = document.createElement("img");
        enquiriesIcon.src = messageIcon;
        formHeading.appendChild(enquiriesIcon);
        formHeading.append("For Enquiries");
        formContainer.appendChild(formHeading);
        
        const form = createForm();
        formContainer.appendChild(form);

        const formButton = document.createElement("button");
        formButton.setAttribute("form","form");
        formButton.innerText = "Send";
        formContainer.appendChild(formButton);

        contactDiv.appendChild(infoContainer);
        contactDiv.appendChild(formContainer);

        return {heading,contactDiv,form};
    };

    const load = () => {
        contactButton.style.color = "#16a34a"
        contactButton.style.textDecoration = "underline";
        body.style.backgroundImage = "none";
        parentDiv.style.backgroundColor = "#A1CCD1";

        const {heading,contactDiv,form} = createContent();
        
        container.appendChild(heading);
        container.appendChild(contactDiv);
        parentDiv.appendChild(container);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.reset();
        });
    };

    return {load};

})();

export default contactPage;