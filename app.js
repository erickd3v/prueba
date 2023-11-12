import express from "express";
import { routeBeta } from "./backend/routes/beta.js";


const app = express();
const PORT = process.env.PORT ?? 1245

app.use(express.static('frontend'));
// app.use('/frontend',static(__dirname + '/frontend'))

// app.use(userRouters)

app.get('/', (req, res) => {
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
});

app.use(routeBeta)

// app.get('/beta', (req, res) => {
//     res.send(`
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="/css/estilo.css">
// </head>
// <body>
//     <script type="module" src="./main.js"></script>
// </body>
// </html>
//     `);
// });

app.listen(PORT, ()=> {
    console.log(`Servidor Express corriendo en el puerto http://localhost:${PORT}`)
});