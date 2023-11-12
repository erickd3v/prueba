import { title } from "./components/ui/Header.js";
import { article1 } from "./components/Blog.js";
// import { routeBeta } from "../backend/routes/beta.js";

const header = title.render();


let change = [
    header
];

const blog1 = change.toSpliced(1, 0, article1.render())

let endpoints = [
    '/',
    '/beta',
]

export function joinRender() {
    const currentURL = new URL(window.location.href);

    urlVerification(currentURL)

    // change.forEach(e => {
    //     document.body.appendChild(e)
    // });
}

function urlVerification(currentURL) {
    switch(true) {
        case currentURL.pathname === endpoints[1]:
            blog1.forEach(e => { document.body.appendChild(e) });
            break;
        default:
            change.forEach(e => { document.body.appendChild(e) });
            break;
    }
}