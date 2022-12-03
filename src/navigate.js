import messages from "./data/messages.json";

// const e = messages.map((message) => message.folder)
// const s = [...new Set(e)]
// const email = s.sort();
const email = ['inbox', 'sent', 'reminder', 'spam', 'favorite', 'junks', 'drafts'];


const navbar = {
    nav_home: "home",
    nav_email: "email",
    nav_contact: "contact",
}

const navigate ={
    home: "Construction",
    email: email,
    contact: "Construction"
}

const getContentEmail = (id) => messages.find(mes => mes.id === id) 

export {
    navbar,
    navigate,
    getContentEmail
}