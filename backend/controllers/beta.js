export const getData = (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="/css/estilo.css">
        </head>
        <body>
            <script type="module" src="./main.js"></script>
        </body>
    </html>
    `);
}