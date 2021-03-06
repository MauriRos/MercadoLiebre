const express = require ('express')
const path = require ('path')              //El objetivo de este paquete llamado path es poder unificar las rutas
                                           // dentro de los distintos sistemas operativos


const app = express();                                          
const publicPth = path.resolve(__dirname, './public');

app.use(express.static(publicPth) );

app.listen(3000, () => {
    console.log('Servidor Corriendo en el Puerto 3000');
});

 app.get ('/', (req,res) => {
     res.sendFile(path.join(__dirname, "./views/index.html"))
 });