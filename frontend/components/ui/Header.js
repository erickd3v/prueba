class Header {
    constructor(title, paragraph, aHref) {
        this.title = title;
        this.paragraph = paragraph;
        this.aHref = aHref;
    }

    render() {
        const headerElement = document.createElement('header');
        headerElement.innerHTML = `
            <h1>${this.title}</h1>
            <a href="${this.aHref}">
                <p>${this.paragraph}</p>
            </a>
        `;
        return headerElement;
    }
}

export const title = new Header(
    'Soy un titulo de prueba',
    'Soy el parrrafo que verifica que el header se renderizo sin ningun error',
    '/beta'
);