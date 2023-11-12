class Blog {
    constructor(titleBlog, paragraphBlog) {
        this.titleBlog = titleBlog;
        this.paragraphBlog = paragraphBlog;
    }

    render() {
        const blogElement = document.createElement('main');
        blogElement.innerHTML = `
            <h2>${this.titleBlog}</h2>
            <div>
                <p>${this.paragraphBlog}</p>
                <img src='' alt='soy una img de pruba'>
            </div>
        `;
        return blogElement;
    }
}

export const article1 = new Blog (
    'Soy un blog de prueba',
    'Este contenido trata de un blogero',
);